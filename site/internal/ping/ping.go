// Package ping implements the Minecraft Server List Ping (status) protocol
// used by the multiplayer server list. It lets the site show live "is the
// server up, who's on" info without any plugin or mod on the server — every
// vanilla/NeoForge server answers this handshake on its normal game port.
//
// Reference: https://minecraft.wiki/w/Java_Edition_protocol/Server_List_Ping
package ping

import (
	"bytes"
	"encoding/binary"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net"
	"strconv"
	"strings"
	"time"
)

// Status is the flattened result of a ping, shaped for templating.
type Status struct {
	Online      bool      `json:"online"`
	PlayersOn   int       `json:"players_online"`
	PlayersMax  int       `json:"players_max"`
	Sample      []string  `json:"sample"` // names from the (often truncated) sample list
	VersionName string    `json:"version"`
	MOTD        string    `json:"motd"`
	LatencyMS   int64     `json:"latency_ms"`
	Err         string    `json:"error,omitempty"` // populated when Online is false
	CheckedAt   time.Time `json:"checked_at"`
}

// Ping queries a Minecraft server's status. addr is "host:port"; if no port is
// given, 25565 is assumed. A failed ping is returned as a Status with
// Online=false and Err set, never as an error — the caller always gets a
// renderable result.
func Ping(addr string, timeout time.Duration) Status {
	st := Status{CheckedAt: time.Now()}

	host, port, err := splitHostPort(addr)
	if err != nil {
		st.Err = err.Error()
		return st
	}

	start := time.Now()
	conn, err := net.DialTimeout("tcp", net.JoinHostPort(host, strconv.Itoa(int(port))), timeout)
	if err != nil {
		st.Err = "server unreachable"
		return st
	}
	defer conn.Close()
	_ = conn.SetDeadline(time.Now().Add(timeout))

	if err := writeHandshake(conn, host, port); err != nil {
		st.Err = "handshake failed"
		return st
	}
	if err := writeStatusRequest(conn); err != nil {
		st.Err = "status request failed"
		return st
	}

	raw, err := readStatusResponse(conn)
	if err != nil {
		st.Err = "no status response"
		return st
	}
	st.LatencyMS = time.Since(start).Milliseconds()

	var resp statusJSON
	if err := json.Unmarshal(raw, &resp); err != nil {
		st.Err = "bad status payload"
		return st
	}

	st.Online = true
	st.PlayersOn = resp.Players.Online
	st.PlayersMax = resp.Players.Max
	st.VersionName = resp.Version.Name
	st.MOTD = flattenChat(resp.Description)
	for _, p := range resp.Players.Sample {
		if p.Name != "" {
			st.Sample = append(st.Sample, p.Name)
		}
	}
	return st
}

type statusJSON struct {
	Version struct {
		Name string `json:"name"`
	} `json:"version"`
	Players struct {
		Online int `json:"online"`
		Max    int `json:"max"`
		Sample []struct {
			Name string `json:"name"`
		} `json:"sample"`
	} `json:"players"`
	Description json.RawMessage `json:"description"`
}

// flattenChat turns a MOTD — which may be a plain string or a nested chat
// component object — into readable text, dropping formatting.
func flattenChat(raw json.RawMessage) string {
	if len(raw) == 0 {
		return ""
	}
	var s string
	if json.Unmarshal(raw, &s) == nil {
		return strings.TrimSpace(s)
	}
	var c chatComponent
	if json.Unmarshal(raw, &c) == nil {
		var b strings.Builder
		c.write(&b)
		return strings.TrimSpace(b.String())
	}
	return ""
}

type chatComponent struct {
	Text  string          `json:"text"`
	Extra []chatComponent `json:"extra"`
}

func (c chatComponent) write(b *strings.Builder) {
	b.WriteString(c.Text)
	for _, e := range c.Extra {
		e.write(b)
	}
}

// --- wire protocol helpers ---

func writeHandshake(w io.Writer, host string, port uint16) error {
	var p bytes.Buffer
	writeVarInt(&p, 0x00) // packet id: handshake
	writeVarInt(&p, -1)   // protocol version: -1 = "just asking status"
	writeString(&p, host)
	_ = binary.Write(&p, binary.BigEndian, port)
	writeVarInt(&p, 1) // next state: 1 = status
	return writeFramed(w, p.Bytes())
}

func writeStatusRequest(w io.Writer) error {
	var p bytes.Buffer
	writeVarInt(&p, 0x00) // packet id: status request (no fields)
	return writeFramed(w, p.Bytes())
}

// readStatusResponse reads one framed packet and returns the JSON string body.
func readStatusResponse(r io.Reader) ([]byte, error) {
	if _, err := readVarInt(r); err != nil { // total packet length (unused)
		return nil, err
	}
	if _, err := readVarInt(r); err != nil { // packet id (expect 0x00)
		return nil, err
	}
	strLen, err := readVarInt(r)
	if err != nil {
		return nil, err
	}
	if strLen < 0 || strLen > 1<<20 {
		return nil, errors.New("implausible status length")
	}
	buf := make([]byte, strLen)
	if _, err := io.ReadFull(r, buf); err != nil {
		return nil, err
	}
	return buf, nil
}

// writeFramed prefixes a packet body with its VarInt length.
func writeFramed(w io.Writer, body []byte) error {
	var frame bytes.Buffer
	writeVarInt(&frame, int32(len(body)))
	frame.Write(body)
	_, err := w.Write(frame.Bytes())
	return err
}

func writeString(buf *bytes.Buffer, s string) {
	writeVarInt(buf, int32(len(s)))
	buf.WriteString(s)
}

func writeVarInt(buf *bytes.Buffer, value int32) {
	uv := uint32(value)
	for {
		if uv&^uint32(0x7F) == 0 {
			buf.WriteByte(byte(uv))
			return
		}
		buf.WriteByte(byte(uv&0x7F | 0x80))
		uv >>= 7
	}
}

func readVarInt(r io.Reader) (int32, error) {
	var result int32
	var pos uint
	var b [1]byte
	for {
		if _, err := io.ReadFull(r, b[:]); err != nil {
			return 0, err
		}
		result |= int32(b[0]&0x7F) << pos
		if b[0]&0x80 == 0 {
			break
		}
		pos += 7
		if pos >= 35 {
			return 0, errors.New("varint too big")
		}
	}
	return result, nil
}

func splitHostPort(addr string) (string, uint16, error) {
	addr = strings.TrimSpace(addr)
	if addr == "" {
		return "", 0, errors.New("empty server address")
	}
	host, portStr, err := net.SplitHostPort(addr)
	if err != nil {
		// No port present — assume the default game port.
		return addr, 25565, nil
	}
	port, err := strconv.ParseUint(portStr, 10, 16)
	if err != nil {
		return "", 0, fmt.Errorf("bad port %q", portStr)
	}
	return host, uint16(port), nil
}

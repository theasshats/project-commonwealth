package curseforge

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

const (
	baseURL   = "https://api.curseforge.com"
	userAgent = "derpack-edit/1.0 (modpack editor)"
)

// File is a single CurseForge file (their term for what Modrinth calls a
// version), simplified to the fields our UI needs.
type File struct {
	ID           int64    `json:"id"`           // file ID — used for [update.curseforge].file-id
	DisplayName  string   `json:"displayName"`  // human title, e.g. "Create Aeronautics Compat 0.2.1"
	FileName     string   `json:"fileName"`     // jar name
	ReleaseType  int      `json:"releaseType"`  // 1=release, 2=beta, 3=alpha
	FileDate     string   `json:"fileDate"`     // ISO 8601
	FileLength   int64    `json:"fileLength"`   // bytes
	DownloadURL  string   `json:"downloadUrl"`  // direct CDN URL — may be null in some cases
	GameVersions []string `json:"gameVersions"` // includes loader entries like "NeoForge" alongside MC versions
}

// listFilesResp is the API envelope around the file list.
type listFilesResp struct {
	Data []File `json:"data"`
}

// Client wraps the CurseForge REST API. Requires an API key from
// https://console.curseforge.com/.
type Client struct {
	APIKey string
	http   *http.Client
}

// New returns a client. An empty APIKey makes ListFiles fail with a clear
// error instead of an obscure 401.
func New(apiKey string) *Client {
	return &Client{
		APIKey: strings.TrimSpace(apiKey),
		http:   &http.Client{Timeout: 20 * time.Second},
	}
}

// ListFiles returns all files for a CurseForge mod, optionally filtered to
// the given Minecraft game version. The loader is filtered client-side
// because CF's gameVersions field mixes loader names and MC versions in one
// list.
func (c *Client) ListFiles(modID int64, mcVersion, loaderName string) ([]File, error) {
	if c.APIKey == "" {
		return nil, fmt.Errorf("no CurseForge API key configured (add one in Settings)")
	}
	if modID == 0 {
		return nil, fmt.Errorf("modID is zero; this mod's manifest has no project-id")
	}

	url := fmt.Sprintf("%s/v1/mods/%d/files?pageSize=50", baseURL, modID)
	if mcVersion != "" {
		// CF supports a gameVersion query param that does an exact match on
		// MC version. Loader is filtered client-side below.
		url = fmt.Sprintf("%s&gameVersion=%s", url, mcVersion)
	}

	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("User-Agent", userAgent)
	req.Header.Set("Accept", "application/json")
	req.Header.Set("x-api-key", c.APIKey)

	resp, err := c.http.Do(req)
	if err != nil {
		return nil, fmt.Errorf("fetch %s: %w", url, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusUnauthorized || resp.StatusCode == http.StatusForbidden {
		return nil, fmt.Errorf("CurseForge API rejected request (HTTP %d). Check that your API key is valid", resp.StatusCode)
	}
	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("curseforge %s: %s: %s", url, resp.Status, string(body))
	}

	var envelope listFilesResp
	if err := json.NewDecoder(resp.Body).Decode(&envelope); err != nil {
		return nil, fmt.Errorf("decode CF response: %w", err)
	}

	if loaderName == "" {
		return envelope.Data, nil
	}

	// Filter to files that list this loader. CF's gameVersions field is a
	// flat string array mixing MC versions and loader names ("1.21.1",
	// "NeoForge", "Server", etc.) — case-insensitive match on the loader.
	want := strings.ToLower(loaderName)
	out := envelope.Data[:0]
	for _, f := range envelope.Data {
		for _, gv := range f.GameVersions {
			if strings.ToLower(gv) == want {
				out = append(out, f)
				break
			}
		}
	}
	return out, nil
}

// ReleaseTypeName turns the integer into a human label.
func ReleaseTypeName(rt int) string {
	switch rt {
	case 1:
		return "release"
	case 2:
		return "beta"
	case 3:
		return "alpha"
	default:
		return "unknown"
	}
}

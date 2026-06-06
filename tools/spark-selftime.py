#!/usr/bin/env python3
"""spark-selftime — per-mod self-time from a spark profiler share link.

The spark web viewer renders the call tree client-side, so the share link only
exposes metadata to tooling. This decodes the raw sampler proto (from bytebin)
and sums each StackTraceNode's self-time, grouped by the mod that owns the class
(spark's class->source table). Self-time is the honest metric: a mod's class
appearing in a stack usually means it *triggered* vanilla work below it, not that
it burned cycles — substring frequency over the proto misleads.

Usage:
    tools/spark-selftime.py <id-or-url>
    # e.g. tools/spark-selftime.py 0vDM3WuZYK
    #      tools/spark-selftime.py https://spark.lucko.me/0vDM3WuZYK

See docs/PERFORMANCE.md (issue #147).
"""
import sys
import struct
import collections
import urllib.request


def read_varint(b, i):
    shift = r = 0
    while True:
        x = b[i]; i += 1
        r |= (x & 0x7F) << shift
        if not (x & 0x80):
            return r, i
        shift += 7


def parse(b):
    """Decode one protobuf message into {field_number: [(wire_type, value), ...]}."""
    i, n = 0, len(b)
    out = collections.defaultdict(list)
    while i < n:
        key, i = read_varint(b, i)
        fn, wt = key >> 3, key & 7
        if wt == 0:
            v, i = read_varint(b, i)
        elif wt == 1:
            v = b[i:i + 8]; i += 8
        elif wt == 2:
            ln, i = read_varint(b, i); v = b[i:i + ln]; i += ln
        elif wt == 5:
            v = b[i:i + 4]; i += 4
        else:
            raise ValueError(f"bad wire type {wt}")
        out[fn].append((wt, v))
    return out


def s(d, fn):
    for wt, v in d.get(fn, []):
        if wt == 2:
            try:
                return v.decode("utf8")
            except Exception:
                return None


def self_time(d):
    # field 8 = packed doubles [self, total]; self is element 0.
    for wt, v in d.get(8, []):
        if wt == 2 and len(v) >= 8 and len(v) % 8 == 0:
            return struct.unpack("<d", v[:8])[0]
    return 0.0


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    ident = sys.argv[1].rstrip("/").split("/")[-1].split("?")[0]
    data = urllib.request.urlopen(f"https://bytebin.lucko.me/{ident}", timeout=30).read()
    root = parse(data)

    # root field 3 = class -> source-mod table.
    cls2mod = {}
    for wt, v in root.get(3, []):
        if wt == 2:
            try:
                e = parse(v); c = s(e, 1)
                if c:
                    cls2mod[c] = s(e, 2) or "?"
            except Exception:
                pass

    self_by_class = collections.Counter()

    def walk(node_bytes):
        try:
            d = parse(node_bytes)
        except Exception:
            return
        if 3 not in d and 8 not in d:   # not a StackTraceNode
            return
        cls = s(d, 3)
        if cls is not None:
            self_by_class[cls] += self_time(d)
        for fn, vs in d.items():
            if fn in (3, 4, 7):         # string fields, never children
                continue
            for wt, v in vs:
                if wt == 2:
                    walk(v)

    for wt, v in root.get(2, []):       # field 2 = thread(s)
        if wt != 2:
            continue
        td = parse(v)
        for fn, vs in td.items():
            if fn == 1:                 # thread name
                continue
            for w2, child in vs:
                if w2 == 2:
                    walk(child)

    def mod_of(c):
        m = cls2mod.get(c)
        if m:
            return m
        if c.startswith(("net.minecraft", "com.mojang")):
            return "minecraft"
        if c.startswith(("java.", "jdk.", "sun.")):
            return "jvm"
        return "?"

    by_mod = collections.Counter()
    for c, t in self_by_class.items():
        by_mod[mod_of(c)] += t
    total = sum(by_mod.values()) or 1.0

    print(f"total self-time units: {total:.0f}\n=== SELF-TIME BY MOD ===")
    for m, t in by_mod.most_common(25):
        print(f"{100*t/total:6.2f}%  {t:9.0f}  {m}")
    print("=== TOP CLASSES BY SELF-TIME ===")
    for c, t in self_by_class.most_common(20):
        print(f"{100*t/total:6.2f}%  {c}  [{mod_of(c)}]")


if __name__ == "__main__":
    main()

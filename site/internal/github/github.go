// Package github fetches release info from the public GitHub Releases API so
// the site can link to the *actual* latest installer asset instead of a
// hard-coded filename. This keeps download links working across releases even
// when the asset name carries a version (derpack-x-prism-installer-X.Y.Z.zip).
//
// Unauthenticated calls are fine here (60/hour/IP); the server caches results,
// so it makes only a handful of calls an hour. A GITHUB_TOKEN env, if present,
// is used to raise that ceiling.
package github

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
	"time"
)

// Release mirrors the subset of the GitHub release object we use.
type Release struct {
	TagName     string    `json:"tag_name"`
	Name        string    `json:"name"`
	HTMLURL     string    `json:"html_url"`
	PublishedAt time.Time `json:"published_at"`
	Prerelease  bool      `json:"prerelease"`
	Draft       bool      `json:"draft"`
	Assets      []Asset   `json:"assets"`
}

// Asset is a single uploaded release artifact.
type Asset struct {
	Name        string `json:"name"`
	Size        int64  `json:"size"`
	ContentType string `json:"content_type"`
	DownloadURL string `json:"browser_download_url"`
}

// Version returns the tag with any leading "v" stripped (v0.4.6 -> 0.4.6).
func (r Release) Version() string { return strings.TrimPrefix(r.TagName, "v") }

// AssetMatching returns the first asset whose lower-cased name contains all of
// the given substrings, or nil. Used to find the installer / mrpack by pattern
// rather than exact filename.
func (r Release) AssetMatching(parts ...string) *Asset {
	for i := range r.Assets {
		name := strings.ToLower(r.Assets[i].Name)
		ok := true
		for _, p := range parts {
			if !strings.Contains(name, strings.ToLower(p)) {
				ok = false
				break
			}
		}
		if ok {
			return &r.Assets[i]
		}
	}
	return nil
}

// FetchReleases returns up to n most-recent releases for "owner/repo".
func FetchReleases(ctx context.Context, repo string, n int) ([]Release, error) {
	url := fmt.Sprintf("https://api.github.com/repos/%s/releases?per_page=%d", repo, n)
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Accept", "application/vnd.github+json")
	req.Header.Set("User-Agent", "derpack-site")
	if tok := strings.TrimSpace(os.Getenv("GITHUB_TOKEN")); tok != "" {
		req.Header.Set("Authorization", "Bearer "+tok)
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("github releases: status %d", resp.StatusCode)
	}

	var releases []Release
	if err := json.NewDecoder(resp.Body).Decode(&releases); err != nil {
		return nil, err
	}
	return releases, nil
}

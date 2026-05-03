// Derpack Editor frontend
// Vanilla JS, no framework. Single page with a mod list and modals.

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ----- API ---------------------------------------------------------------

async function apiGet(path) {
  const res = await fetch(path);
  if (!res.ok) {
    let detail = '';
    try { detail = (await res.json()).error || ''; } catch {}
    throw new Error(`${res.status}: ${detail || res.statusText}`);
  }
  return res.json();
}

async function apiPost(path, body) {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {}),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `${res.status}: ${res.statusText}`);
  }
  return data;
}

// ----- State -------------------------------------------------------------

let allMods = [];
let filterText = '';

// ----- Status log --------------------------------------------------------

function logStatus(level, message) {
  const log = $('#status-log');
  const li = document.createElement('li');
  const ts = new Date().toLocaleTimeString();
  li.innerHTML = `<span class="ts">${ts}</span><span class="${level}">${escapeHtml(message)}</span>`;
  log.prepend(li);
  // Keep at most 50 entries.
  while (log.children.length > 50) {
    log.removeChild(log.lastChild);
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// ----- Pack info + mod list rendering ------------------------------------

async function loadPack() {
  try {
    const pack = await apiGet('/api/pack');
    $('#pack-name').textContent = pack.name || 'Unknown pack';
    $('#pack-version').textContent = pack.version ? `v${pack.version}` : '';
  } catch (err) {
    logStatus('err', `Failed to load pack info: ${err.message}`);
  }
}

async function loadMods() {
  try {
    allMods = await apiGet('/api/mods');
    renderMods();
  } catch (err) {
    logStatus('err', `Failed to load mods: ${err.message}`);
    $('#mod-list-body').innerHTML = `<tr><td colspan="6" class="empty">Error: ${escapeHtml(err.message)}</td></tr>`;
  }
}

function renderMods() {
  const body = $('#mod-list-body');
  const filtered = filterText
    ? allMods.filter(m =>
        m.slug.toLowerCase().includes(filterText) ||
        (m.name || '').toLowerCase().includes(filterText))
    : allMods;

  $('#mod-count').textContent = `${allMods.length} mods${filterText ? ` (${filtered.length} shown)` : ''}`;

  if (filtered.length === 0) {
    body.innerHTML = `<tr><td colspan="6" class="empty">${
      allMods.length === 0 ? 'No mods yet. Click "+ Add mod" to start.' : 'No mods match the filter.'
    }</td></tr>`;
    return;
  }

  body.innerHTML = filtered.map(modRow).join('');
  // Wire up per-row buttons.
  $$('button[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      const slug = btn.dataset.slug;
      handleRowAction(action, slug);
    });
  });
}

function modRow(m) {
  const sourceTag = m.source
    ? `<span class="source-tag ${m.source}">${m.source}</span>`
    : '';
  const pinIcon = m.pinned
    ? '<span class="pin-icon pinned" title="Pinned">📌</span>'
    : '<span class="pin-icon unpinned" title="Not pinned">📌</span>';

  // "Set version" only makes sense for sourced mods.
  const setVersionBtn = m.source
    ? `<button data-action="set-version" data-slug="${escapeHtml(m.slug)}">Set version</button>`
    : '';
  // Update is disabled for pinned mods (packwiz skips them anyway).
  const updateBtn = m.pinned
    ? `<button disabled title="Pinned mods are not auto-updated">Update</button>`
    : `<button data-action="update" data-slug="${escapeHtml(m.slug)}">Update</button>`;

  return `
    <tr>
      <td><code>${escapeHtml(m.slug)}</code></td>
      <td>${escapeHtml(m.name || '')}</td>
      <td>${escapeHtml(m.side || 'both')}</td>
      <td>${sourceTag}</td>
      <td class="col-pinned">${pinIcon}</td>
      <td class="col-actions">
        <div class="row-actions">
          <button data-action="${m.pinned ? 'unpin' : 'pin'}" data-slug="${escapeHtml(m.slug)}">
            ${m.pinned ? 'Unpin' : 'Pin'}
          </button>
          ${setVersionBtn}
          ${updateBtn}
          <button data-action="compute-hash" data-slug="${escapeHtml(m.slug)}" title="Recompute hash from current URL">⟳ Hash</button>
          <button data-action="remove" data-slug="${escapeHtml(m.slug)}">Remove</button>
        </div>
      </td>
    </tr>
  `;
}

// ----- Row actions -------------------------------------------------------

async function handleRowAction(action, slug) {
  switch (action) {
    case 'pin':
      await doPin(slug, true);
      break;
    case 'unpin':
      await doPin(slug, false);
      break;
    case 'remove':
      askConfirm(
        `Remove ${slug}?`,
        `This will delete mods/${slug}.pw.toml and re-index.`,
        () => doRemove(slug),
      );
      break;
    case 'set-version':
      openSetVersionModal(slug);
      break;
    case 'update':
      await doUpdate(slug);
      break;
    case 'compute-hash':
      await doComputeHash(slug);
      break;
  }
}

async function doPin(slug, pinned) {
  try {
    const r = await apiPost('/api/mods/pin', { slug, pinned });
    if (r.ok) {
      logStatus('ok', `${pinned ? 'Pinned' : 'Unpinned'} ${slug}`);
      await loadMods();
    } else {
      logStatus('err', `${pinned ? 'Pin' : 'Unpin'} failed for ${slug}: ${r.error || 'unknown error'}`);
    }
  } catch (err) {
    logStatus('err', err.message);
  }
}

async function doRemove(slug) {
  try {
    const r = await apiPost('/api/mods/remove', { slug });
    if (r.ok) {
      logStatus('ok', `Removed ${slug}`);
      await loadMods();
    } else {
      logStatus('err', `Remove failed for ${slug}: ${r.error || 'unknown error'}`);
    }
  } catch (err) {
    logStatus('err', err.message);
  }
}

async function doUpdate(slug) {
  logStatus('ok', `Updating ${slug}...`);
  try {
    const r = await apiPost('/api/mods/update', { slug });
    if (r.ok) {
      logStatus('ok', `Updated ${slug}`);
      // Show a snippet of packwiz's output if it's interesting
      if (r.output && /update|already|latest/i.test(r.output)) {
        const snippet = r.output.split('\n').filter(l => l.trim()).slice(0, 3).join(' / ');
        if (snippet) logStatus('ok', `  ${snippet}`);
      }
      await loadMods();
    } else {
      logStatus('err', `Update failed for ${slug}: ${r.error || 'unknown error'}`);
    }
  } catch (err) {
    logStatus('err', err.message);
  }
}

async function doUpdateAll() {
  logStatus('ok', 'Updating all mods (this may take a minute)...');
  try {
    const r = await apiPost('/api/mods/update', { slug: '' });
    if (r.ok) {
      logStatus('ok', 'Update all completed');
      // Try to surface counts from packwiz output
      if (r.output) {
        const updated = (r.output.match(/^Updated /gm) || []).length;
        const skipped = (r.output.match(/^Skipped pinned mod/gm) || []).length;
        if (updated || skipped) {
          logStatus('ok', `  ${updated} updated, ${skipped} skipped (pinned)`);
        }
      }
      await loadMods();
    } else {
      logStatus('err', `Update all failed: ${r.error || 'unknown error'}`);
    }
  } catch (err) {
    logStatus('err', err.message);
  }
}

async function doComputeHash(slug) {
  logStatus('ok', `Computing hash for ${slug}...`);
  try {
    const r = await apiPost('/api/mods/compute-hash', { slug });
    if (r.ok) {
      logStatus('ok', `Hash computed: ${r.output || slug}`);
      await loadMods();
    } else {
      logStatus('err', `Compute hash failed for ${slug}: ${r.error || 'unknown error'}`);
    }
  } catch (err) {
    logStatus('err', err.message);
  }
}

// ----- Add mod modal -----------------------------------------------------

function openAddModal() {
  $('#add-source').value = 'mr';
  $('#add-slug').value = '';
  $('#add-side').value = 'both';
  $('#add-modal').classList.remove('hidden');
  $('#add-slug').focus();
}

function closeAddModal() {
  $('#add-modal').classList.add('hidden');
}

async function submitAddMod() {
  const source = $('#add-source').value;
  const slug = $('#add-slug').value.trim();
  const side = $('#add-side').value;
  if (!slug) {
    return;
  }

  $('#add-confirm').disabled = true;
  $('#add-confirm').textContent = 'Adding...';
  try {
    const r = await apiPost('/api/mods/add', { source, slug, side });
    if (r.ok) {
      logStatus('ok', `Added ${slug} (${source})`);
      closeAddModal();
      await loadMods();
    } else {
      logStatus('err', `Add failed for ${slug}: ${r.error || 'unknown error'}`);
    }
  } catch (err) {
    logStatus('err', err.message);
  } finally {
    $('#add-confirm').disabled = false;
    $('#add-confirm').textContent = 'Add';
  }
}

// ----- Set version modal -------------------------------------------------

let setVersionSlug = null;
let setVersionMode = 'mr'; // 'mr' (picker) or 'url' (paste)

function openSetVersionModal(slug) {
  setVersionSlug = slug;
  setVersionMode = 'mr';
  $('#sv-title').textContent = `Set version: ${slug}`;
  $('#sv-versions-list').innerHTML = '<div class="sv-loading">Loading versions...</div>';
  $('#sv-url').value = '';
  $('#sv-filename').value = '';
  setSvTab('mr');
  $('#sv-modal').classList.remove('hidden');

  // Fire off the version fetch.
  fetchVersions(slug);
}

function closeSetVersionModal() {
  $('#sv-modal').classList.add('hidden');
  setVersionSlug = null;
}

function setSvTab(mode) {
  setVersionMode = mode;
  if (mode === 'mr') {
    $('#sv-tab-mr').classList.add('active');
    $('#sv-tab-url').classList.remove('active');
    $('#sv-pane-mr').classList.remove('hidden');
    $('#sv-pane-url').classList.add('hidden');
  } else {
    $('#sv-tab-mr').classList.remove('active');
    $('#sv-tab-url').classList.add('active');
    $('#sv-pane-mr').classList.add('hidden');
    $('#sv-pane-url').classList.remove('hidden');
  }
}

async function fetchVersions(slug) {
  const list = $('#sv-versions-list');
  try {
    const versions = await apiGet(`/api/mods/${encodeURIComponent(slug)}/versions`);
    if (!versions || versions.length === 0) {
      list.innerHTML = '<div class="sv-empty">No matching versions found for this loader/MC version.</div>';
      return;
    }
    list.innerHTML = versions.map(versionRow).join('');
    list.querySelectorAll('button[data-version-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const versionId = btn.dataset.versionId;
        confirmSetVersion(slug, { version_id: versionId, label: btn.dataset.label });
      });
    });
  } catch (err) {
    list.innerHTML = `<div class="sv-error">Could not load versions: ${escapeHtml(err.message)}</div>`;
  }
}

function versionRow(v) {
  const date = v.date_published ? v.date_published.slice(0, 10) : '';
  const typeBadge = v.type !== 'release'
    ? `<span class="sv-type sv-type-${v.type}">${v.type}</span>`
    : '';
  const size = v.size ? formatSize(v.size) : '';
  const label = `${v.version_number} (${v.type})`;
  return `
    <div class="sv-version">
      <div class="sv-v-main">
        <strong>${escapeHtml(v.version_number)}</strong>
        ${typeBadge}
        <span class="sv-v-date">${escapeHtml(date)}</span>
      </div>
      <div class="sv-v-meta">
        <span>MC ${escapeHtml((v.game_versions || []).join(', '))}</span>
        <span class="sv-sep">·</span>
        <span>${escapeHtml((v.loaders || []).join(', '))}</span>
        ${size ? `<span class="sv-sep">·</span><span>${size}</span>` : ''}
      </div>
      <button data-version-id="${escapeHtml(v.id)}" data-label="${escapeHtml(label)}">Use this version</button>
    </div>
  `;
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function confirmSetVersion(slug, payload) {
  askConfirm(
    `Set ${slug} to ${payload.label || 'this version'}?`,
    `The manifest will be rewritten and the hash recomputed.`,
    () => doSetVersion(slug, payload),
  );
}

async function doSetVersion(slug, payload) {
  closeSetVersionModal();
  logStatus('ok', `Setting version for ${slug}...`);
  try {
    const r = await apiPost('/api/mods/set-version', {
      slug,
      ...(payload.version_id ? { version_id: payload.version_id } : {}),
      ...(payload.url ? { url: payload.url, filename: payload.filename || '' } : {}),
    });
    if (r.ok) {
      logStatus('ok', `Set version for ${slug}: ${r.output || ''}`);
      await loadMods();
    } else {
      logStatus('err', `Set version failed for ${slug}: ${r.error || 'unknown error'}`);
    }
  } catch (err) {
    logStatus('err', err.message);
  }
}

function submitSvUrl() {
  if (!setVersionSlug) return;
  const url = $('#sv-url').value.trim();
  const filename = $('#sv-filename').value.trim();
  if (!url) {
    logStatus('err', 'URL is required');
    return;
  }
  confirmSetVersion(setVersionSlug, { url, filename, label: filename || url });
}

// ----- Confirm modal -----------------------------------------------------

let confirmCallback = null;

function askConfirm(title, message, onConfirm) {
  $('#confirm-title').textContent = title;
  $('#confirm-message').textContent = message;
  $('#confirm-modal').classList.remove('hidden');
  confirmCallback = onConfirm;
}

function closeConfirm() {
  $('#confirm-modal').classList.add('hidden');
  confirmCallback = null;
}

// ----- Wire up -----------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // Top bar
  $('#refresh-btn').addEventListener('click', () => {
    loadPack();
    loadMods();
    logStatus('ok', 'Refreshed');
  });

  // Update all
  $('#update-all-btn').addEventListener('click', () => {
    askConfirm(
      'Update all mods?',
      'Updates every non-pinned mod to its latest version. This may take a minute.',
      () => doUpdateAll(),
    );
  });

  // Search
  $('#search').addEventListener('input', (e) => {
    filterText = e.target.value.toLowerCase();
    renderMods();
  });

  // Add modal
  $('#add-mod-btn').addEventListener('click', openAddModal);
  $('#add-cancel').addEventListener('click', closeAddModal);
  $('#add-confirm').addEventListener('click', submitAddMod);
  $('#add-slug').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitAddMod();
  });

  // Set version modal
  $('#sv-cancel').addEventListener('click', closeSetVersionModal);
  $('#sv-tab-mr').addEventListener('click', () => setSvTab('mr'));
  $('#sv-tab-url').addEventListener('click', () => setSvTab('url'));
  $('#sv-url-submit').addEventListener('click', submitSvUrl);

  // Confirm modal
  $('#confirm-cancel').addEventListener('click', closeConfirm);
  $('#confirm-ok').addEventListener('click', () => {
    const cb = confirmCallback;
    closeConfirm();
    if (cb) cb();
  });

  // Close modals when clicking outside
  $$('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  // Initial load
  loadPack();
  loadMods();
});

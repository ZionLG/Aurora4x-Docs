(function () {
  'use strict';

  const DOCS_BASE = './docs/';
  const navEl = document.getElementById('nav');
  const contentInner = document.getElementById('contentInner');
  const searchInput = document.getElementById('search');
  const sectionCountEl = document.getElementById('sectionCount');
  const welcomeStats = document.getElementById('welcomeStats');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');

  let activeItem = null;
  let allNavItems = [];
  let totalSections = 0;

  // ===== BUILD NAVIGATION =====

  function buildNav() {
    navEl.innerHTML = '';
    allNavItems = [];
    totalSections = 0;

    DOCS_MANIFEST.versions.forEach(ver => {
      const group = document.createElement('div');
      group.className = 'nav-version' + (ver.collapsed ? ' collapsed' : '');

      // Version header
      const header = document.createElement('div');
      header.className = 'nav-version-header';
      header.innerHTML = `
        <svg class="nav-version-chevron" viewBox="0 0 12 12" fill="none">
          <path d="M4 2L8 6L4 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="nav-version-label">${ver.label}</span>
        <span class="nav-version-count">${ver.sections.length}</span>
      `;
      header.addEventListener('click', () => {
        group.classList.toggle('collapsed');
      });
      group.appendChild(header);

      // Section items
      const itemsWrap = document.createElement('div');
      itemsWrap.className = 'nav-version-items';

      ver.sections.forEach(sec => {
        totalSections++;
        const item = document.createElement('div');
        item.className = 'nav-item';
        item.dataset.file = sec.file;
        item.dataset.version = ver.version;
        item.dataset.title = sec.title;
        item.dataset.search = sec.title.toLowerCase();

        let badgeHtml = '';
        if (sec.status) {
          badgeHtml = `<span class="nav-badge ${sec.status}">${sec.status}</span>`;
        }

        item.innerHTML = `
          <span class="nav-item-num">${sec.num}</span>
          <span class="nav-item-name">${sec.title}</span>
          ${badgeHtml}
        `;

        item.addEventListener('click', () => loadSection(sec, ver, item));
        itemsWrap.appendChild(item);
        allNavItems.push({ el: item, sec, ver });
      });

      // Set max-height for animation
      group.appendChild(itemsWrap);
      navEl.appendChild(group);

      requestAnimationFrame(() => {
        if (!group.classList.contains('collapsed')) {
          itemsWrap.style.maxHeight = itemsWrap.scrollHeight + 'px';
        }
      });

      // Re-calc on toggle
      header.addEventListener('click', () => {
        if (group.classList.contains('collapsed')) {
          itemsWrap.style.maxHeight = '0px';
        } else {
          itemsWrap.style.maxHeight = itemsWrap.scrollHeight + 'px';
        }
      });
    });

    sectionCountEl.textContent = `${totalSections} sections loaded`;

    // Welcome stats
    welcomeStats.innerHTML = `
      <div class="welcome-stat">
        <span class="welcome-stat-value">${DOCS_MANIFEST.versions.length}</span>
        <span class="welcome-stat-label">Versions</span>
      </div>
      <div class="welcome-stat">
        <span class="welcome-stat-value">${totalSections}</span>
        <span class="welcome-stat-label">Sections</span>
      </div>
      <div class="welcome-stat">
        <span class="welcome-stat-value">${DOCS_MANIFEST.versions[0]?.date?.split('-')[0] || '—'}</span>
        <span class="welcome-stat-label">Latest</span>
      </div>
    `;
  }

  // ===== LOAD SECTION =====

  async function loadSection(sec, ver, navItem) {
    // Update active nav
    if (activeItem) activeItem.classList.remove('active');
    navItem.classList.add('active');
    activeItem = navItem;

    // Close mobile sidebar
    sidebar.classList.remove('open');
    sidebarToggle.classList.remove('active');

    // Show loading
    contentInner.innerHTML = `
      <div class="article">
        <div class="article-header">
          <div class="article-version-tag">v${ver.version}</div>
          <h1 class="article-title">${sec.title}</h1>
        </div>
        <div class="article-body"><p style="color:var(--text-muted)">Loading...</p></div>
      </div>
    `;

    // Scroll content to top
    document.getElementById('content').scrollTop = 0;

    try {
      const resp = await fetch(DOCS_BASE + sec.file);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const md = await resp.text();

      // Render markdown
      const html = marked.parse(md);

      // Build header
      let metaHtml = '';
      if (sec.status) {
        metaHtml += `<div class="article-meta"><span class="article-badge ${sec.status}">${sec.status}</span></div>`;
      }

      let noteHtml = '';
      if (sec.statusNote) {
        noteHtml = `<div class="article-deprecation-note ${sec.status || ''}">${sec.statusNote}</div>`;
      }

      contentInner.innerHTML = `
        <article class="article">
          <div class="article-header">
            <div class="article-version-tag">v${ver.version} — ${ver.date}</div>
            <h1 class="article-title">${sec.title}</h1>
            ${metaHtml}
            ${noteHtml}
          </div>
          <div class="article-body">${html}</div>
        </article>
      `;

    } catch (err) {
      contentInner.innerHTML = `
        <div class="article">
          <div class="article-header">
            <h1 class="article-title">Error Loading Section</h1>
          </div>
          <div class="article-body">
            <p>Could not load <code>${sec.file}</code>: ${err.message}</p>
            <p style="color:var(--text-dim); margin-top:1em;">
              Make sure you're serving the site via a local server (e.g. <code>npx serve .</code> from the project root)
              since fetch doesn't work with <code>file://</code> protocol.
            </p>
          </div>
        </div>
      `;
    }
  }

  // ===== SEARCH =====

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    allNavItems.forEach(({ el, sec }) => {
      const match = !q || sec.title.toLowerCase().includes(q);
      el.classList.toggle('hidden', !match);
    });
  });

  // Keyboard shortcut: / to focus search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.blur();
    }
  });

  // ===== MOBILE SIDEBAR TOGGLE =====

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarToggle.classList.toggle('active');
  });

  // ===== HASH ROUTING =====

  function loadFromHash() {
    const hash = location.hash.slice(1);
    if (!hash) return;

    for (const { el, sec, ver } of allNavItems) {
      if (sec.file === hash || sec.file.replace('.md', '') === hash) {
        loadSection(sec, ver, el);
        return;
      }
    }
  }

  window.addEventListener('hashchange', loadFromHash);

  // ===== INIT =====

  buildNav();
  loadFromHash();
})();

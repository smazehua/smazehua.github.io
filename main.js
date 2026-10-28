(() => {
  'use strict';
  const data = window.SITE_DATA;
  let language = 'en';
  let currentFilter = 'all';
  let activePaper = null;
  let focusBeforeDialog = null;
  try { if (localStorage.getItem('zehua-language') === 'zh') language = 'zh'; } catch (_) {}
  const $ = (selector) => document.querySelector(selector);
  const escapeHTML = (text) => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icons = [
    '<rect x="3" y="4" width="22" height="20" rx="3"/><path d="m12 10 7 4-7 4z"/><path d="M7 28h14"/>',
    '<path d="m16 2 12 7v14l-12 7L4 23V9zM4 9l12 7 12-7M16 16v14M10 5l12 7v7"/>',
    '<path d="m7 24 15-15 3 3-15 15zM18 4v-3M26 6l3-3M28 14h3M8 5v6M5 8h6M4 17v5M1.5 19.5h5"/>'
  ];
  function renderTimeline(entries) {
    return entries.map(([date, name, role, summary]) => `<article class="timeline-item"><p class="timeline-date">${escapeHTML(date)}</p><h4>${escapeHTML(name)}</h4><p class="timeline-role">${escapeHTML(role)}</p><p class="timeline-summary">${summary}</p></article>`).join('');
  }
  function renderPapers() {
    $('#publications-list').innerHTML = data.papers.map(p => {
      const first = p.first ? `<span class="author-badge">${language === 'zh' ? '共同第一作者' : 'Co-first author'}</span>` : '';
      return `<article class="paper"${currentFilter === 'first' && !p.first ? ' hidden' : ''}>
        <a class="paper-image" href="https://arxiv.org/abs/${p.arxiv}" target="_blank" rel="noopener" aria-label="${escapeHTML(p.title)}"><img src="assets/papers/${p.id}.webp" alt="${p.id === 'bee' ? 'Beyond the Eye' : p.id === 'vrjepa' ? 'VR-JEPA' : p.id === 'ergo' ? 'ERGO' : p.id === 'dreamvton' ? 'DreamVTON' : 'AnyCrowd'} research overview" loading="lazy" width="1100" height="620"></a>
        <div class="paper-copy"><div class="paper-meta"><span class="venue-badge${p.published || p.accepted ? ' published' : ''}">${escapeHTML(language === 'zh' && p.venueZh ? p.venueZh : p.venue)}</span>${first}</div><h3><a href="https://arxiv.org/abs/${p.arxiv}" target="_blank" rel="noopener">${escapeHTML(p.title)}</a></h3><p class="paper-authors">${escapeHTML(p.authors).replace(/Zehua Ma\*?/g, '<strong>$&</strong>')}</p><p class="paper-summary">${escapeHTML(p.summary[language])}</p><div class="paper-links"><a href="https://arxiv.org/abs/${p.arxiv}" target="_blank" rel="noopener">${language === 'zh' ? '论文' : 'Paper'} ↗</a>${p.code ? `<a href="${p.code}" target="_blank" rel="noopener">${language === 'zh' ? '代码' : 'Code'} ↗</a>` : ''}${p.project ? `<a href="${p.project}" target="_blank" rel="noopener">${language === 'zh' ? '项目' : 'Project'} ↗</a>` : ''}<button class="bibtex-button" type="button" data-cite="${p.id}">BibTeX</button></div></div></article>`;
    }).join('');
  }
  function render() {
    const t = data.translations[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
    $('#language-toggle').textContent = language === 'en' ? '中文' : 'EN';
    $('#language-toggle').setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : 'Switch to English');
    $('#bio').innerHTML = t.bio.map(p => `<p>${p}</p>`).join('');
    $('#research-grid').innerHTML = t.research.map(([title, text, tags],i) => `<article class="research-item"><svg class="research-icon" viewBox="0 0 32 32" aria-hidden="true">${icons[i]}</svg><h3>${escapeHTML(title)}</h3><p>${escapeHTML(text)}</p><span class="topic-label">${escapeHTML(tags)}</span></article>`).join('');
    $('#news-list').innerHTML = t.news.map(([date, text]) => `<div class="news-item"><time class="news-date">${escapeHTML(date)}</time><p>${text}</p></div>`).join('');
    $('#industry-list').innerHTML = renderTimeline(t.industry);
    $('#education-list').innerHTML = renderTimeline(t.education);
    renderPapers();
  }
  $('#language-toggle').addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    try { localStorage.setItem('zehua-language', language); } catch (_) {}
    render();
  });
  $('#menu-toggle').addEventListener('click', () => {
    const open = $('#menu-toggle').getAttribute('aria-expanded') !== 'true';
    $('#menu-toggle').setAttribute('aria-expanded', String(open));
    $('#menu-toggle').setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    $('#navigation').classList.toggle('open', open);
  });
  $('#navigation').addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      $('#navigation').classList.remove('open');
      $('#menu-toggle').setAttribute('aria-expanded','false');
      $('#menu-toggle').setAttribute('aria-label','Open navigation');
    }
  });
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(b => {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });
    renderPapers();
  }));
  function bibtex(p) {
    const authors = p.authors.replace(/\*/g, '').split(', ').join(' and ');
    if (p.journal) return `@article{chen2026beyond,\n  title = {${p.title}},\n  author = {${authors}},\n  journal = {${p.journal}},\n  year = {${p.year}},\n  note = {Accepted in October 2026},\n  eprint = {${p.arxiv}},\n  archivePrefix = {arXiv},\n  url = {https://arxiv.org/abs/${p.arxiv}}\n}`;
    if (p.published) return `@inproceedings{xie2024dreamvton,\n  title = {${p.title}},\n  author = {${authors}},\n  booktitle = {Proceedings of the 32nd ACM International Conference on Multimedia},\n  year = {2024},\n  pages = {10784--10793},\n  doi = {${p.doi}}\n}`;
    return `@misc{${p.id}2026,\n  title = {${p.title}},\n  author = {${authors}},\n  year = {${p.year}},\n  eprint = {${p.arxiv}},\n  archivePrefix = {arXiv},\n  primaryClass = {cs.CV},\n  url = {https://arxiv.org/abs/${p.arxiv}}\n}`;
  }
  $('#publications-list').addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-cite]');
    if (!trigger) return;
    activePaper = data.papers.find(p => p.id === trigger.dataset.cite);
    focusBeforeDialog = trigger;
    $('#citation-text').textContent = bibtex(activePaper);
    $('#copy-citation').textContent = language === 'zh' ? '复制 BibTeX' : 'Copy BibTeX';
    $('#copy-status').textContent = '';
    $('#citation-dialog').showModal();
  });
  $('#close-citation').addEventListener('click', () => $('#citation-dialog').close());
  $('#citation-dialog').addEventListener('click', event => {
    if (event.target === $('#citation-dialog')) {
      const rect = event.target.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();
    }
  });
  $('#citation-dialog').addEventListener('close', () => { if (focusBeforeDialog?.isConnected) focusBeforeDialog.focus(); });
  $('#copy-citation').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(bibtex(activePaper));
      $('#copy-status').textContent = language === 'zh' ? '已复制' : 'Copied';
    } catch (_) {
      const range = document.createRange(); range.selectNodeContents($('#citation-text'));
      const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      $('#copy-status').textContent = language === 'zh' ? '请按 Ctrl / ⌘ + C 复制' : 'Press Ctrl / ⌘ + C to copy';
    }
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) document.querySelectorAll('#navigation a').forEach(a => a.classList.toggle('active', a.hash === `#${entry.target.id}`));
      });
    }, { rootMargin:'-10% 0px -65% 0px', threshold:0 });
    document.querySelectorAll('#about, #research, #publications, #experience').forEach(section => observer.observe(section));
  }
  render();
})();

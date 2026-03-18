/**
 * lang.js — Sabedoria do Carioca
 * Language switcher: Português ↔ Latim
 * Uses localStorage to persist preference across pages.
 * Uses Anthropic API to translate content on-the-fly.
 */

(function () {
  const STORAGE_KEY = 'sdc_lang';
  const LANGS = {
    pt: { label: 'PT', full: 'Português' },
    la: { label: 'LA', full: 'Latine' },
  };

  /* ── State ── */
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'pt';
  let translationCache = {};   // { 'la': { selector: translatedHTML } }
  let originalTexts = {};      // { selector: originalHTML }
  let isTranslating = false;

  /* ── Inject CSS ── */
  const style = document.createElement('style');
  style.textContent = `
    #lang-switcher {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 8000;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
    }

    #lang-btn {
      width: 52px;
      height: 52px;
      background: #0d0d0d;
      border: 1px solid #7b0000;
      color: #c9b08c;
      font-family: inherit;
      font-size: 0.7rem;
      letter-spacing: 2px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 20px rgba(139,0,0,0.35);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      border-radius: 2px;
    }

    #lang-btn:hover {
      border-color: #b02a2a;
      color: #e8d9c0;
      box-shadow: 0 0 30px rgba(176,42,42,0.5);
    }

    #lang-btn .lang-spinner {
      position: absolute;
      inset: 0;
      display: none;
      align-items: center;
      justify-content: center;
      background: #0d0d0d;
    }

    #lang-btn.loading .lang-spinner {
      display: flex;
    }

    #lang-btn.loading .lang-label {
      opacity: 0;
    }

    .lang-spinner svg {
      animation: spin 1s linear infinite;
      width: 20px;
      height: 20px;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    #lang-dropdown {
      background: #0d0d0d;
      border: 1px solid #7b0000;
      box-shadow: 0 0 30px rgba(139,0,0,0.4);
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.35s ease, opacity 0.3s ease;
      opacity: 0;
      border-radius: 2px;
    }

    #lang-dropdown.open {
      max-height: 200px;
      opacity: 1;
    }

    .lang-option {
      display: block;
      padding: 12px 20px;
      color: #9a8a76;
      font-size: 0.7rem;
      letter-spacing: 3px;
      cursor: pointer;
      transition: all 0.2s ease;
      text-transform: uppercase;
      white-space: nowrap;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
      font-family: inherit;
    }

    .lang-option:hover {
      color: #e8d9c0;
      background: rgba(123,0,0,0.2);
    }

    .lang-option.active {
      color: #c9b08c;
      border-left: 2px solid #b02a2a;
    }

    #lang-toast {
      position: fixed;
      bottom: 90px;
      right: 28px;
      background: #0d0d0d;
      border: 1px solid #7b0000;
      color: #c9b08c;
      font-family: 'Cinzel', Georgia, serif;
      font-size: 0.65rem;
      letter-spacing: 2px;
      padding: 10px 16px;
      z-index: 7999;
      opacity: 0;
      transform: translateY(8px);
      transition: all 0.4s ease;
      pointer-events: none;
      border-radius: 2px;
      max-width: 220px;
      text-align: center;
    }

    #lang-toast.show {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  /* ── Build UI ── */
  const switcher = document.createElement('div');
  switcher.id = 'lang-switcher';

  const dropdown = document.createElement('div');
  dropdown.id = 'lang-dropdown';
  Object.entries(LANGS).forEach(([code, info]) => {
    const btn = document.createElement('button');
    btn.className = 'lang-option' + (code === currentLang ? ' active' : '');
    btn.dataset.lang = code;
    btn.textContent = `${info.label} — ${info.full}`;
    btn.addEventListener('click', () => selectLang(code));
    dropdown.appendChild(btn);
  });

  const mainBtn = document.createElement('button');
  mainBtn.id = 'lang-btn';
  mainBtn.innerHTML = `
    <span class="lang-label">${LANGS[currentLang].label}</span>
    <span class="lang-spinner">
      <svg viewBox="0 0 24 24" fill="none" stroke="#b02a2a" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
        <path d="M12 2 a10 10 0 0 1 10 10" stroke="#c9b08c"/>
      </svg>
    </span>
  `;
  mainBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => dropdown.classList.remove('open'));

  switcher.appendChild(dropdown);
  switcher.appendChild(mainBtn);
  document.body.appendChild(switcher);

  /* ── Toast ── */
  const toast = document.createElement('div');
  toast.id = 'lang-toast';
  document.body.appendChild(toast);

  function showToast(msg, duration = 2800) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }

  /* ── Selectors of translatable content ── */
  const TRANSLATABLE_SELECTORS = [
    '.book-text',
    'h1',
    'h2',
    'h3',
    '.summary',
    '.warning-headline',
    '.warning-body',
    '.warning-note',
    '.warning-btn',
    '.hero-content h1',
    '.hero-content h2',
    '.hero-tagline',
  ];

  function getTranslatableNodes() {
    const nodes = [];
    TRANSLATABLE_SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        // Skip nested: if a parent is already selected, skip
        if (!nodes.some(n => n.contains(el))) nodes.push(el);
      });
    });
    return nodes;
  }

  function saveOriginals(nodes) {
    nodes.forEach((node, i) => {
      const key = sel(node, i);
      if (!originalTexts[key]) originalTexts[key] = node.innerHTML;
    });
  }

  function sel(node, i) {
    return (node.id || node.tagName + '_' + i);
  }

  /* ── Translation via Anthropic API ── */
  async function translatePage(targetLang) {
    const nodes = getTranslatableNodes();
    saveOriginals(nodes);

    if (targetLang === 'pt') {
      // Restore originals
      nodes.forEach((node, i) => {
        const key = sel(node, i);
        if (originalTexts[key]) node.innerHTML = originalTexts[key];
      });
      return;
    }

    // Check cache for this page
    const pageKey = location.pathname;
    if (!translationCache[pageKey]) translationCache[pageKey] = {};

    // Build list of nodes that need translation
    const toTranslate = nodes.map((node, i) => ({
      key: sel(node, i),
      node,
      html: originalTexts[sel(node, i)] || node.innerHTML,
    }));

    // Translate in a single API call
    const prompt = `You are a scholarly Latin translator. Translate the following Portuguese HTML content into classical Latin.

RULES:
- Preserve ALL HTML tags exactly as-is (e.g. <p>, <strong>, <em>, <blockquote>, <ul>, <li>, <br>, <a href="...">, etc.)
- Only translate the visible text content between tags
- Keep names like "Carioca", "Grande Homem", "Morto", "HOI4", "hoi4", "GDU", "dollynho", "dollynhos" untranslated
- Keep game terms like "micro", "build", "macro", "supply", "frontline", "encirclement", "blitz", "lobby", "timing", "wipe", "lag", "RNG", "call", "CAS", "meta", "frontline", "minor", "major", "patch", "late game" untranslated
- Use elegant, archaic Latin prose fitting a mock-medieval grimoire style
- Respond ONLY with a JSON array in this exact format, no preamble, no markdown fences:
[{"key":"KEY","html":"TRANSLATED_HTML"}, ...]

Content to translate (JSON):
${JSON.stringify(toTranslate.map(t => ({ key: t.key, html: t.html })))}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();
    const rawText = data.content?.find(b => b.type === 'text')?.text || '[]';

    let translations;
    try {
      const clean = rawText.replace(/^```json\s*/,'').replace(/```\s*$/,'').trim();
      translations = JSON.parse(clean);
    } catch {
      console.error('Translation parse error', rawText);
      throw new Error('Parse error');
    }

    // Apply translations
    translations.forEach(({ key, html }) => {
      translationCache[pageKey][key] = html;
      const node = toTranslate.find(t => t.key === key)?.node;
      if (node) node.innerHTML = html;
    });
  }

  /* ── Select language ── */
  async function selectLang(code) {
    dropdown.classList.remove('open');
    if (code === currentLang) return;
    if (isTranslating) return;

    currentLang = code;
    localStorage.setItem(STORAGE_KEY, code);

    // Update dropdown UI
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === code);
    });

    // Update button label
    mainBtn.querySelector('.lang-label').textContent = LANGS[code].label;

    if (code === 'pt') {
      translatePage('pt');
      showToast('✠ Português restaurado ✠');
      return;
    }

    // Show loading
    isTranslating = true;
    mainBtn.classList.add('loading');
    showToast('Traducens in Latinum…', 8000);

    try {
      await translatePage(code);
      showToast('✠ In Latinum versum ✠');
    } catch (err) {
      console.error(err);
      showToast('Erro na tradução. Tente novamente.');
      currentLang = 'pt';
      localStorage.setItem(STORAGE_KEY, 'pt');
      mainBtn.querySelector('.lang-label').textContent = 'PT';
    } finally {
      isTranslating = false;
      mainBtn.classList.remove('loading');
    }
  }

  /* ── On page load: apply saved language ── */
  window.addEventListener('DOMContentLoaded', () => {
    if (currentLang !== 'pt') {
      // Small delay so page renders first
      setTimeout(() => selectLang(currentLang), 300);
    }
  });

})();

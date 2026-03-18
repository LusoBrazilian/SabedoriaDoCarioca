/**
 * lang.js — Sabedoria do Carioca
 * Seletor de língua: Português ↔ Latim
 * Traduções pré-escritas — funciona no GitHub Pages sem backend.
 * Preferência guardada em localStorage.
 */

(function () {
  const STORAGE_KEY = 'sdc_lang';
  const LANGS = {
    pt: { label: 'PT', full: 'Português' },
    la: { label: 'LA', full: 'Latine'    },
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'pt';
  let savedOriginals = {};
  let originsSaved   = false;

  /* ═══════════════════════════════════════════════
     TRADUÇÕES PRÉ-ESCRITAS
     Adiciona mais páginas aqui à medida que forem
     traduzidas — o resto do código não muda.
  ═══════════════════════════════════════════════ */
  const TRANSLATIONS = {

    /* ── Capítulo 1 ── */
    capitulo1: {
      h1: 'Caput I — De Bello, de Fastu et de Micro',
      bookText: `
        <p>Prima lectio Cariocae incipit in media nocte, in aulis silentibus ubi lusores
        ingrediuntur sine cognitione regularum, ubi quodque ictum victoriam aut cladem
        significare potest. Sapientia Cariocae non solum experientia accumulata est;
        nascitur ex micro acuto, ex observatione perpetua, et ex patientia amara eius
        qui nimis saepe erravit.</p>

        <p>Carioca non vincit in prima partita — non propter defectum artis, sed propter
        strategiam: terram studet, corda observat, intentiones iudicat. Quaeque prima
        clades non est defectus, sed doctrina; et cum serio ludere statuit, nulla excusatio
        hostem servabit.</p>

        <p>Essentia, natura et meta a Carioca modo fere genetico intelleguntur. Scit
        discernere eos qui multum loquuntur ab eis qui revera ludunt; vanas promissiones
        celeris discendi agnoscit; nec verbis, sed eventibus solum decipitur. In proelium
        ingredi sine intelligentia supply, frontline aut timing non solum ignorantia est
        — onus quod Carioca numquam fert.</p>

        <p>Patientia eius limitata est, tolerantia adhuc brevior. Bonos a malis lusoribus
        separare actus naturalis est, tam inevitabilis quam transitus temporis. Fastus
        Cariocae ardet ut industria in bello, et verba dura eius non placere quaerunt,
        sed docere: humiliatio saepe magister est quem tutoriales esse non possunt.</p>

        <p>Micro bene executum telum eius certissimum est. Oppugnationes et motus eius
        praecisi, celeres et inevitabiles sunt. Sine timore superioritatem suam in micro
        declarat — non ut vanitas, sed ut constatatio rerum evidentium. Multi franguntur
        eius franquitudine; pauci eventus eius refutare possunt. Dum alii disputant,
        Carioca iam aliud locum hostis ceperat.</p>

        <p>Fiducia et arrogantia distinctae sunt: prima cum competentia ambulat; altera
        inanis est. Carioca non iucunditatem promittit — efficientiam praestat. Oratio
        proelia non vincit; micro bene executum sic vincit. Cum serio ludere statuit,
        victoria iam in manibus eius est, et adversarius — etiam si non sentit — iam
        victus est.</p>
      `,
    },

    /* ── Adiciona outros capítulos abaixo, no mesmo formato ──
    capitulo2: {
      h1: '...',
      bookText: `...`,
    },
    ── */

  };

  /* ═══════════════════════════════════════════════
     DETECTAR PÁGINA ACTUAL
  ═══════════════════════════════════════════════ */
  function getPageKey() {
    const p = location.pathname.toLowerCase();
    // Extrai o nome do ficheiro sem extensão
    const match = p.match(/([^\/]+?)(?:\.html)?$/);
    return match ? match[1] : 'index';
  }

  /* ═══════════════════════════════════════════════
     GUARDAR / RESTAURAR ORIGINAIS
  ═══════════════════════════════════════════════ */
  function saveOriginals() {
    if (originsSaved) return;
    const h1 = document.querySelector('h1');
    if (h1) savedOriginals.h1 = h1.innerHTML;

    const bt = document.querySelector('.book-text');
    if (bt) savedOriginals.bookText = bt.innerHTML;

    originsSaved = true;
  }

  function restoreOriginals() {
    if (!originsSaved) return;
    const h1 = document.querySelector('h1');
    if (h1 && savedOriginals.h1 !== undefined) h1.innerHTML = savedOriginals.h1;

    const bt = document.querySelector('.book-text');
    if (bt && savedOriginals.bookText !== undefined) bt.innerHTML = savedOriginals.bookText;
  }

  /* ═══════════════════════════════════════════════
     APLICAR LATIM
  ═══════════════════════════════════════════════ */
  function applyLatin() {
    const key = getPageKey();
    const t   = TRANSLATIONS[key];

    // Página ainda não traduzida — mantém original sem erro
    if (!t) return;

    saveOriginals();

    const h1 = document.querySelector('h1');
    if (h1 && t.h1) h1.innerHTML = t.h1;

    const bt = document.querySelector('.book-text');
    if (bt && t.bookText) bt.innerHTML = t.bookText;
  }

  /* ═══════════════════════════════════════════════
     CSS DO BOTÃO / DROPDOWN / TOAST
  ═══════════════════════════════════════════════ */
  const css = document.createElement('style');
  css.textContent = `
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
      border-radius: 2px;
    }

    #lang-btn:hover {
      border-color: #b02a2a;
      color: #e8d9c0;
      box-shadow: 0 0 30px rgba(176,42,42,0.5);
    }

    #lang-dropdown {
      background: #0d0d0d;
      border: 1px solid #7b0000;
      box-shadow: 0 0 30px rgba(139,0,0,0.4);
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transition: max-height 0.35s ease, opacity 0.3s ease;
      border-radius: 2px;
      min-width: 160px;
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
      max-width: 240px;
      text-align: center;
    }

    #lang-toast.show {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(css);

  /* ═══════════════════════════════════════════════
     CONSTRUIR UI
  ═══════════════════════════════════════════════ */
  const switcher = document.createElement('div');
  switcher.id = 'lang-switcher';

  const dropdown = document.createElement('div');
  dropdown.id = 'lang-dropdown';

  Object.entries(LANGS).forEach(([code, info]) => {
    const btn = document.createElement('button');
    btn.className  = 'lang-option' + (code === currentLang ? ' active' : '');
    btn.dataset.lang = code;
    btn.textContent  = `${info.label} — ${info.full}`;
    btn.addEventListener('click', () => selectLang(code));
    dropdown.appendChild(btn);
  });

  const mainBtn = document.createElement('button');
  mainBtn.id = 'lang-btn';
  mainBtn.textContent = LANGS[currentLang].label;
  mainBtn.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => dropdown.classList.remove('open'));

  switcher.appendChild(dropdown);
  switcher.appendChild(mainBtn);
  document.body.appendChild(switcher);

  const toast = document.createElement('div');
  toast.id = 'lang-toast';
  document.body.appendChild(toast);

  function showToast(msg, ms = 2500) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), ms);
  }

  /* ═══════════════════════════════════════════════
     SELECIONAR LÍNGUA
  ═══════════════════════════════════════════════ */
  function selectLang(code) {
    dropdown.classList.remove('open');
    if (code === currentLang) return;

    currentLang = code;
    localStorage.setItem(STORAGE_KEY, code);

    // Actualiza indicadores visuais
    document.querySelectorAll('.lang-option').forEach(o =>
      o.classList.toggle('active', o.dataset.lang === code)
    );
    mainBtn.textContent = LANGS[code].label;

    if (code === 'la') {
      applyLatin();
      showToast('✠ In Latinum versum ✠');
    } else {
      restoreOriginals();
      showToast('✠ Português restaurado ✠');
    }
  }

  /* ═══════════════════════════════════════════════
     APLICAR PREFERÊNCIA GUARDADA AO CARREGAR
  ═══════════════════════════════════════════════ */
  function onReady() {
    if (currentLang === 'la') applyLatin();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})();

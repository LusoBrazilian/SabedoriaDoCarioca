/**
 * lang.js — Sabedoria do Carioca
 * Traduções pré-geradas — sem API, funciona no GitHub Pages.
 */
(function () {
  const STORAGE_KEY = 'sdc_lang';
  const LANGS = { pt: { label: 'PT', full: 'Português' }, la: { label: 'LA', full: 'Latine' } };

  const T = {
    _index: {
      heroH1: 'Domina Artem<br>Micro',
      heroH2: 'Et Exalta Genus Tuum',
      tagline: 'Domina micro.<br>Fac te meliorem ludentem.',
      warning_title: 'Monitum Lectori',
      warning_headline: 'Hic liber opus comicum<br>ad usum internum est',
      warning_body: '<strong>Sapientia Cariocae</strong> scripta est tamquam <strong>iocus satiricus</strong> intra coetum clausum amicorum, in contextu ludi <em>Hearts of Iron IV</em>.<br><br>Philosophia eius <strong>egocentrica et hyperbolica</strong> est de industria, et quaedam loca legi possunt \u2014 extra contextum \u2014 tamquam <strong>suprematistica vel discriminatoria</strong>. Hic est effectus comicus intentionalis operis, non sententia vera auctorum eius.<br><br>Procedens, lector confirmat se naturam humoris et materiae internae intellegere.',
      warning_note: '"Quid facere poteram? Instrumenta mihi deerant." \u2014 Carioca, post partitam HOI4 amissum',
      warning_btn: '\u2720 &nbsp; Non militabo in Twitter &nbsp; \u2720',
      footer: '\u00a9 MMXXVI \u2014 Carioca / Proiectum Last Stand',
      nav: ['INITIUM', 'INDEX CAPITUM', 'PROOEMIUM'],
    },
    _introducao: {
      h1: 'PROOEMIUM \u2014 PRINCIPIUM SAPIENTIAE CARIOCAE',
      content: '<p class="capitular">In principio neque meta, neque micro, neque ratio belli erat. Erant solum optimates HOI4, lobbiae cum dollynhis et minoribus auxiliariis qui multum loquebantur nec umquam vincebant.</p><p>Et tunc surrexit Carioca \u2014 non ut qui oblectationem quaerit, sed ut qui ordinem chao imponit. Non venit leniter docere, nec fractos verbis pulchris excitare. Venit nudam realitatem ludi aperire.</p><p>Bellum errorem non ignoscit. Micro egoni non parcit. Build mala sententia damnationis ante annum MCMXXXIX est.</p><p>Sapientia Cariocae ex observatione, ex exercitatione et ex strage strategica nascitur. Quodque encirclement lectio est. Quodque wipe sermo est. Quodque furor in chat confirmatio est veritatem dolere.</p><p>Hic liber non est ad infirmos consolandos. Non est pro eis qui aequilibrium culpant. Non est pro eis qui de meta loquuntur sine historia.</p><p>Est pro eis qui confitentur talentum existere, genus computare, et non omnes natos esse ad micro dominandum.</p><blockquote>"Ego sum genetice superior in micro."</blockquote><p class="center-text">Hic tres veritates immutabiles revelantur:</p><ul class="center-list"><li>Alii nati sunt ad sub pressione clinandum.</li><li>Alii nati sunt ad sub stressu errare.</li><li>Loqui sine victoria haeresis strategica est.</li></ul><p class="center-text" style="margin-top:28px">Per haec volumina lector videbit:</p><ul class="center-list"><li>Separationem inter micro-ludentes et spectatores propriae ruinae.</li><li>Damnationem theoricorum sine historia.</li><li>Fatum eorum qui genetice ad bad micro destinati sunt.</li><li>Gloriam eorum qui mappam dominantur.</li></ul><p>Sed nemo hunc librum consolationem quaerens intret.</p><p>Nam ut ipse Carioca declaravit, sine misericordia et sine metaphora:</p><blockquote>"GDU depressivis mors est."</blockquote><p>Non quia ludus destruit \u2014 sed quia exponit eum qui numquam ad certamen paratus fuit.</p><p>Hic ego cadit. Illusio moritur. Et solum manet qui vincere discit.</p><p>Infirmus hunc librum nunc claudat. Fortis progrediatur.</p><p>Sapientia Cariocae non omnes in bonos ludentes transformat. Solum revelat quis semper fuit.</p>',
    },
    _sumario: {
      h1: 'Index Capitum',
      chapters: ['Caput I \u2014 De Bello, Ego et Micro','Caput II \u2014 De Fato Genetico Micro','Caput III \u2014 De Eis Qui Loquuntur Sine Scientia','Caput IV \u2014 De Logica et Efficientia','Caput V \u2014 De Merito Proprio','Caput VI \u2014 De Iudicio et Efficientia','Caput VII \u2014 Cur Nos Perdidimus?','Caput VIII \u2014 De Coniuratoribus Contra Ludum','Caput IX \u2014 De Eis Qui Lobbiam Detinent','Caput X \u2014 De Superbia','Caput XI \u2014 De Dollynhis in Maioribus','Caput XII \u2014 De Eis Qui Novas Modos in Build Inveniunt','Caput XIII \u2014 De Eis Qui in Telephono Ludunt','Caput XIV \u2014 De Aequilibrio','Caput XV \u2014 De Inaequilibrio','Caput XVI \u2014 De Mechanizatis','Caput XVII \u2014 De Toxicitate','Caput XVIII \u2014 De Optimatibus HOI4','Caput XIX \u2014 De Tabula','Caput XX \u2014 De Emojis Ingentibus','Caput XXI \u2014 De Corruptione in Administratione','Caput XXII \u2014 De Eis Qui Erroneamente Irronizant','Caput XXIII \u2014 De Eis Qui Carros Pretiosos Fabricant','Caput XXIV \u2014 De Eis Qui Carros Miserabiles Fabricant','Caput XXV \u2014 De Eis Qui Autonomiam Augent','Caput XXVI \u2014 De Pertinacibus Superior Firepower','Caput XXVII \u2014 De Eis Qui Builds Inf Only Faciunt','Caput XXVIII \u2014 De CAS','Caput XXIX \u2014 De Paratroopers','Caput XXX \u2014 De Eis Qui Africam Non Transcendunt','Caput XXXII \u2014 De Eis Qui Romaniam Invadunt','Caput XXXIII \u2014 De Eis Qui Ludum Detinent','Caput XXXIV \u2014 De Eis Qui Albert Speer et Total War Dant','Caput XXXV \u2014 De Inimicis Call','Caput XXXVI \u2014 De Sabotatoribus Proprii Gregis','Caput XXXVII \u2014 De Eis Qui Ludum Victum Amittunt'],
    },
    _cap1: {
      h1: 'Caput I \u2014 De Bello, Ego et Micro',
      content: '<p>Prima lectio Cariocae incipit media nocte, in auleis silentibus ubi ludentes sine regulis ineunt, ubi quodque clinamen victoriam aut cladem significare potest. Sapientia Cariocae non est mera experientia accumulata; ex micro acuto, ex observatione constanti, et ex patientia amara eius qui nimis erravit nascitur.</p><p>Carioca non vincit in prima partita, non propter defectum peritiae, sed propter strategiam: terrain scrutatur, corda observat, intentiones iudicat. Quaeque initialis clades non est ruina, sed doctrina; et cum serio ludere decernit, nulla excusatio inimicum servat.</p><p>Essentia, natura et meta a Carioca modo paene genetico intelleguntur. Scit eos qui multum loquuntur ab eis qui vere ludunt distinguere; promissiones vacuas celeris discendi agnoscit; et verbis non fallitur, solum eventibus. Proelium ingredi sine intellectu supply, frontline aut timing non est solum ingenuitas \u2014 onus est quod Carioca non portat.</p><p>Patientia eius limitata est, tolerantia etiam brevior. Bonos a malis ludentibus separare actus naturalis est, tam inevitabilis quam transitus temporis. Ego Cariocae tamquam industria in bello inflammatur, et verba eius dura non ad placendum, sed ad docendum tendunt: humiliatio saepe magister est quem praelectiones praebere non possunt.</p><p>Micro bene executum est telum eius certissimum. Offensivae eius et motus praecisi, celeres et inevitabiles sunt. Sine timore superioritatem suam in micro declarat \u2014 non ut vanitas, sed ut constatatio rerum evidentium. Multi eius libera locutione offenduntur, pauci eventus eius impugnare possunt. Dum alii disceptant, Carioca iam aliud sinum inimicum occupavit.</p><p>Fiducia et arrogantia distinctae sunt: prima cum competentia ambulat; altera vacua est. Carioca oblectationem non promittit, efficientiam tradit. Oratio proelia non vincit; micro bene executum sic. Cum serio ludere decernit, victoria iam in manibus eius est, et adversarius, etiam insciens, iam victus est.</p>',
    },
    _cap2: {
      h1: 'Caput II \u2014 De Fato Genetico Micro',
      content: '<p>Secundum volumen docet non omnes errores ex defectu exercitationis venire. Sunt ludentes quorum manus iam veloces nascuntur, et oculi qui mappam cum praecisione veterum voluminum legunt. Sicut alii ad stadium nati sunt et alii ad peditatum, alii micro benedictione donati nascuntur; alii, ad tarditatem reactionis destinati.</p><p>Micro Cariocae non est sola peritia discenda; est reflexus naturalis, decisio instantanea, sanguis frigidus coram chao. Aliqui clinant sperantes miracula; alii clinant quasi victoria iam certa sit. Hi pauci genetice benedicti campum belli dominantur, encirclements sine consultatione supply faciunt et vincunt etiam in inferioritate numerica.</p><p>Qui hoc donum non habent in cyclo erroris vivunt: in pugna pausant, divisiones obliviscentur et in chat plorant. Non est odium, solum contemptus: non omnis miles natus est ad carros in blitz ducendum. Exercitatio mediocrem meliorare potest, sed sola genetica monstrum micro creat.</p><p>In momento quo bellum accelerat et tempus comprimitur, soli naturaliter celeres in late game supersunt. Multi credunt laborem talentum aequare, sed pauci eo perveniunt ubi micro iam cum vantaggio incepit. Alii nati sunt ad sinus inimicos claudendos; alii, ad claudendum. Est lex invisibilis lobbiae: natura, non iniustitia, superstitem definit.</p><p>Carioca concludit cum sapientia crudelis et silenti: talentum non eligitur, fatum accipitur, et secundum id luditur.</p>',
    },
    _cap3: {
      h1: 'Caput III \u2014 De Eis Qui Loquuntur Sine Scientia',
      content: '<p>Tertium volumen cum crudelitate perspicua monet: non copia verborum magistrum definit, sed pondus actionum.</p><p>Nihilominus, lobbiae semper fauna praedicabilis inhabitant \u2014 periti chat, strategici vacuae theoriae, duces qui numquam ne suam quidem incompetentiam vicerunt.</p><p>Carioca eos statim agnoscit.</p><p>Primum archetypum Mortuus est. Nomen aptum. Ludens sine historia, sine expeditionibus memorabilibus, sine ulla cicatrice digna annotationis in HOI4. Curriculum factum ex nihilo.</p><p>Et tamen, Mortuus palpitat.</p><p>De builds sentit. Decisiones interrogat. De meta disserit, quasi experientia improvisari posset et auctoritas ex mero impulsu loquendi nasci posset.</p><p>Sed Mortuus eventus non portat. Bella victa non habet. Numeros non sustinet.</p><p>Commentator est eius rei quam numquam domuit.</p><p>Carioca auscultitat \u2014 non cum irritatione, sed cum contemptu technico. Nam nihil est miserius quam fiducia eius qui nihil penitus intra ludum aedificavit.</p><p>Secundum archetypum etiam strepentius est: Magnus Homo.</p><p>Dollynhus structuralis. Micro miserandum. Limitationes evidentes.</p><p>Sed palpitator ad industriam usque.</p><p>Magnus Homo quamque situationem in occasionem opinionis transformat. Corrigit, suadet, criticat, theoriam tradit \u2014 saepe cum persuasione inversim proportionali propriae facultati exsequendi.</p><p>Est strategicus cuius praxis historica rhetoricam inflatam non sustinet.</p><p>Carioca schema inevitabile observat: verba celeria, decisiones malae; fiducia alta, eventus fragiles.</p><p>Ambo \u2014 Mortuus et Magnus Homo \u2014 idem peccatum epistemologicum communicant: in numeris errare et in voce superbos esse.</p><p>Chaoton cum creativitate confundunt. Errorem cum innovatione. Sensum cum logica.</p><p>De Germania forti loquuntur et decisiones faciunt quae proprium timing sabotant. De potentia industriali disceptant dum officinas sine synergia aedificant. Micro alienum iudicant dum proprium sub minima pressione collapsatur.</p><p>Aedificant quasi tesseris ludentes. Destinant quasi fortunam improvisantes.</p><p>Carioca sine lenitate pronuntiat: Alte loqui in chat errorem in rectum non transformat. Opinio competentiam non substituit.</p><p>Strategia mala non est solum inefficiens \u2014 mortua nascitur.</p><p>Et qui logicam, numeros et systemata complexa non intelligit, nullum ius habet eum iudicare qui ludum dominat.</p>',
    },
    _cap4: {
      h1: 'Caput IV \u2014 De Logica et Efficientia',
      content: '<p>Sequens lectionem tertii voluminis, Carioca nos admonet bellum non esse poesim, sed calculum. Ubi bonus ludens timing et synergiam videt, imperitus fortuita et confusionem videt. Ubi decisio strategica exigitur, illi sensum et spem applicant.</p><p>Logica est fundamentum victoriae, et sine ea quaevis constructio corruit. Qui supply, oeconomiam et timing ignorant rerum proprii erroris structuralis fiunt. Non est honor in clade praedicabili, neque gloria in chao autoimpositio.</p><p>Carioca talentum natum a mediocritate distinguit: alii machinas belli aedificant, alii clades industriales aedificant. Quidam errore cum sophisticatione; alii modo fundamentali errant, sine doctrina. Lex crudelis est: efficientia ex combinatione ratiocinii, micro et visus complexi nascitur.</p><p>Micro velox sine consilio inutile est; consilium sine praecisa exsecutione sterile est. Solum qui utrumque intelligit campum belli dominat. Carioca hanc lectionem sententia simplici sed definitiva signat: "Quae est tua historia in HOI4?" \u2014 victoria non verbis, sed eventibus mensuratur.</p>',
    },
    _cap5: {
      h1: 'Caput V \u2014 De Merito Proprio',
      content: '<p>Carioca geneticam non negat. Eam ut fundamentum agnoscit. Sed est quid supra eam quod reveretur: meritum proprium.</p><p>Quia talentum brutum, cum deseritur, putrescit. Et limitatio naturalis, cum disciplina absoluta opposita est, eventus improbabiles producere potest.</p><p>Omnis ludens cum finibus nascitur. Facultates a Deo definitae \u2014 limites ratiocinii, reflexus, lectionis strategicae, celeritatis decisionis. Sunt naturaliter praeclari. Sunt structuraliter mediocres.</p><p>Et sunt qui ab primo clinamine damnati videntur.</p><p>Magnus Homo semper ad hanc ultimam categoriam pertinuit. Ludens malus. Intellectu limitatus. Micro miserandum.</p><p>Natura, dollynhus.</p><p>Sed meritum proprium est variabilis quae fatum statisticum provocat.</p><p>Dum multi ludentes "genetice superiores" in propria facilitate quiescunt, Magnus Homo contrarium fecit: exercuit. Repetivit. Studuit. Erravit et perrexit. Milia horarum investita non in vanitatem, sed in insistentiam paene pertinacis contra proprias limitationes.</p><p>In deum micro non se transformavit. Numquam transformaret.</p><p>Eius micro horrendum mansit \u2014 tardum, impraecis, dolorosum ad videndum.</p><p>Sed quid inopinatum accidit.</p><p>Per exercitationem et dedicationem brutas, Magnus Homo illud adsecutus est quod multi ei impossibile putabant: Unionem Sovieticam mediam aedificare. Maiorem. Unum ex gravitatis centris partitae.</p><p>Macro intra medium. Oeconomia minime functa. Structura strategica solum acceptabilis.</p><p>Non geniale. Non praeclarum. Sed medium \u2014 et hoc, ab dollynho structurali, paene phaenomenon fit.</p><p>Hic residet lectio quam Carioca agnoscit, etiam sine romantismo: Magnus Homo limites proprii intellectus exploravit. Naturam suam non transcendit. Monstrum micro non factus est.</p><p>Sed ex suis facultatibus quidquid offerre poterant extraxit.</p><p>Dum alii, genetica favorabili dotati, vantaggio in inertia et arrogantia dissipant, ille probavit meritum talentum neglectum superare posse.</p><p>Carioca manet superior \u2014 nam ubi genetica favorabilis cum exercitatione obsessiva occurrit, dominium paene insuperabile nascitur.</p><p>Sed Magnus Homo fit probatio viva veritatis inconvenientis talentibus ignavis: Etiam dollynhus macro respectabile attingere potest. Etiam ludens naturaliter malus aliquid functionale aedificare potest.</p><p>Satis dedicationis ut ex propria mente quamque gutam facultatis disponibilis exprimat.</p><p>Meritum proprium limites non abolet. Sed eos impellere potest eo ubi multi numquam perveniunt \u2014 etiam illi qui plus nati sunt et minus fecerunt.</p>',
    },
    _cap6: {
      h1: 'Caput VI \u2014 De Iudicio et Efficientia',
      content: '<p>Carioca mundum oculis praecisis observat: iudicat non ex eo quod dicitur, sed ex eo quod exsequitur. Verba alta et builds chaotici irrelevantes sunt; eventus sola mensura valoris sunt.</p><p>Qui loquuntur sine scientia, sine logica aedificant et timing, supply vel oeconomiam ignorant \u2014 hi non ius habent se magistros proclamandi. Victimae suae ipsius ignorantiae sunt, ab primo clinamine ad clades repetendas damnati.</p><p>Carioca bonos a malis ludentibus sine misericordia separat. Non est arrogantia, est efficientia. Intelligit veram fiduciam cum competentia ambulare; falsam esse vacuam. Micro bene executum, strategia clara et visus complexus determinant quis supersit et quis solum ut spectator propriae calamitatis recordetur.</p><p>Iudicium Cariocae directum est: pauci cum talento nascuntur, multi cum erroribus nati erunt. Proprium fatum agnoscere, proprias limitationes intelligere et secundum eas ludere ultima lectio est. Efficientia non negotiabilis est; victoria inevitabilis eventus est eius qui ludum in sua totalitate intelligit.</p>',
    },
    _cap7: {
      h1: 'Caput VII \u2014 Cur Nos Perdidimus?',
      content: '<p>Et interrogaverunt Cariocam post cladem amaram:</p><p>"Cur cecidimus, si nostrae calls rectae erant, consilium nostrum perfectum erat et micro nostrum divinum?"</p><p>Et Carioca, cum serenitate strategica, respondit:</p><p>Non propter defectum geneticae superioris. Nam quod innatum est non deficit.</p><p>Non propter defectum peritiae. Nam verum talentum non dediscit.</p><p>Non propter defectum scientiae. Nam qui meta intelligit numquam confunditur.</p><p>Non propter defectum exercitationis. Nam manus exercitatae non tremunt.</p><p>Clades ergo non in Carioca nascitur. In grege nascitur.</p><p>Nam semper est qui frontline non tenuit. Semper est qui supply oblitus est. Semper est qui male aedificavit et "strategiam alternativam" vocavit.</p><p>Et dum Carioca sinus claudebat et proelia impossibilia vincebat, socii eius iam proelia facilia amiserant.</p><p>Socius qui scorie cedit non est socius, sed sabotator.</p><p>Sunt etiam vires malignae invisibiles:</p><p>Lag in momento critico. RNG crudelis pugnorum. Error inexplicabilis socii. Patch iniustum. Aequilibrium suspectum. Focus retardatum per alienam distractionem.</p><p>Iudaei.</p><p>Omnia contra perfectionem conspirant. Nam universus lobbiae timet ludentem efficientem.</p><p>Et ita veritas immutabilis constituitur:</p><p>Quando Carioca vincit \u2014 est meritum absolutum.</p><p>Quando Carioca perdit \u2014 est sabotatio structuralis.</p><p>Quia bonus micro exsecutus est. Decisiones rectae fuerunt. Clinamina praecisa fuerunt.</p><p>Sed grex\u2026 Ah, grex.</p><p>Hoc ens chaoticum, imprevisibile et frequenter incapax, pondus cladis collectivae in se portat.</p><p>Nam sufficit unus error alienus ut consilium geniale corrumpat.</p><p>Et Carioca declarat, sine ira, solum constatione:</p><p>"Non perdidi. Culpa Iudaeorum fuit qui microre nesciunt."</p><p>Quia verus ludens superior performantiam suam non eventibus finalibus metitur, sed distantia inter suam excellentiam et incompetentiam circa eum.</p><p>Et si mappa cecidit, si frons fregit, si bellum amissum est, scito:</p><p>Micro rectus erat. Logica recta erat. Carioca rectus erat.</p><p>Erratum erat mundus.</p>',
    },
  };

  // ── Page detection ──
  function getKey() {
    const p = location.pathname.toLowerCase();
    if (p.includes('introducao'))  return '_introducao';
    if (p.includes('sumario'))     return '_sumario';
    if (p.match(/capitulo[_-]?1([^0-9]|$)/)) return '_cap1';
    if (p.match(/capitulo[_-]?2([^0-9]|$)/)) return '_cap2';
    if (p.match(/capitulo[_-]?3([^0-9]|$)/)) return '_cap3';
    if (p.match(/capitulo[_-]?4([^0-9]|$)/)) return '_cap4';
    if (p.match(/capitulo[_-]?5([^0-9]|$)/)) return '_cap5';
    if (p.match(/capitulo[_-]?6([^0-9]|$)/)) return '_cap6';
    if (p.match(/capitulo[_-]?7([^0-9]|$)/)) return '_cap7';
    return '_index';
  }

  // ── DOM helpers ──
  let orig = {};
  function backup() {
    const g = s => { const e = document.querySelector(s); return e ? e.innerHTML : undefined; };
    orig.h1 = g('h1');
    orig.bt = (() => { const e = document.querySelector('.book-text, section.book-text'); return e ? e.innerHTML : undefined; })();
    orig.summary = g('.summary');
    orig.heroH1 = g('.hero-content h1');
    orig.heroH2 = g('.hero-content h2');
    orig.tagline = g('.hero-tagline');
    orig.wt = g('.warning-title');
    orig.wh = g('.warning-headline');
    orig.wb = g('.warning-body');
    orig.wn = g('.warning-note');
    orig.wbtn = g('.warning-btn');
    orig.ft = g('.hero-footer');
    orig.nav = Array.from(document.querySelectorAll('.site-nav a, .hero-nav a')).map(a => a.textContent.trim());
  }
  function set(s, h) { if (h === undefined) return; const e = document.querySelector(s); if (e) e.innerHTML = h; }
  function navSet(arr) { document.querySelectorAll('.site-nav a, .hero-nav a').forEach((a,i) => { if (arr && arr[i]) a.textContent = arr[i]; }); }
  const NAV_LA = ['INITIUM', 'INDEX CAPITUM', 'PROOEMIUM'];

  function applyLatin(key) {
    const t = T[key]; if (!t) return false;
    if (key === '_index') {
      set('.hero-content h1', t.heroH1); set('.hero-content h2', t.heroH2);
      set('.hero-tagline', t.tagline); set('.warning-title', t.warning_title);
      set('.warning-headline', t.warning_headline); set('.warning-body', t.warning_body);
      set('.warning-note', t.warning_note); set('.warning-btn', t.warning_btn);
      set('.hero-footer', t.footer); navSet(t.nav || NAV_LA);
    } else if (key === '_sumario') {
      set('h1', t.h1);
      document.querySelectorAll('.summary a').forEach((a,i) => { if (t.chapters[i]) a.textContent = t.chapters[i]; });
      navSet(NAV_LA);
    } else {
      set('h1', t.h1);
      const bt = document.querySelector('.book-text, section.book-text');
      if (bt && t.content) bt.innerHTML = t.content;
      navSet(NAV_LA);
    }
    return true;
  }

  function restorePt(key) {
    if (key === '_index') {
      set('.hero-content h1', orig.heroH1); set('.hero-content h2', orig.heroH2);
      set('.hero-tagline', orig.tagline); set('.warning-title', orig.wt);
      set('.warning-headline', orig.wh); set('.warning-body', orig.wb);
      set('.warning-note', orig.wn); set('.warning-btn', orig.wbtn);
      set('.hero-footer', orig.ft);
    } else if (key === '_sumario') {
      set('h1', orig.h1); set('.summary', orig.summary);
    } else {
      set('h1', orig.h1);
      const bt = document.querySelector('.book-text, section.book-text');
      if (bt && orig.bt) bt.innerHTML = orig.bt;
    }
    document.querySelectorAll('.site-nav a, .hero-nav a').forEach((a,i) => { if (orig.nav && orig.nav[i]) a.textContent = orig.nav[i]; });
  }

  // ── UI ──
  let lang = localStorage.getItem(STORAGE_KEY) || 'pt';
  const css = document.createElement('style');
  css.textContent = '#lang-switcher{position:fixed;bottom:28px;right:28px;z-index:8000;display:flex;flex-direction:column;align-items:flex-end;gap:8px;font-family:"Cinzel","Playfair Display",Georgia,serif}#lang-btn{width:52px;height:52px;background:#0d0d0d;border:1px solid #7b0000;color:#c9b08c;font-family:inherit;font-size:.7rem;letter-spacing:2px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(139,0,0,.35);transition:all .3s;border-radius:2px}#lang-btn:hover{border-color:#b02a2a;color:#e8d9c0;box-shadow:0 0 30px rgba(176,42,42,.5)}#lang-dropdown{background:#0d0d0d;border:1px solid #7b0000;box-shadow:0 0 30px rgba(139,0,0,.4);overflow:hidden;max-height:0;transition:max-height .35s,opacity .3s;opacity:0;border-radius:2px;min-width:160px}#lang-dropdown.open{max-height:200px;opacity:1}.lang-option{display:block;padding:12px 20px;color:#9a8a76;font-size:.7rem;letter-spacing:3px;cursor:pointer;transition:all .2s;text-transform:uppercase;white-space:nowrap;border:none;background:none;width:100%;text-align:left;font-family:inherit}.lang-option:hover{color:#e8d9c0;background:rgba(123,0,0,.2)}.lang-option.active{color:#c9b08c;border-left:2px solid #b02a2a}#lang-toast{position:fixed;bottom:90px;right:28px;background:#0d0d0d;border:1px solid #7b0000;color:#c9b08c;font-family:"Cinzel",Georgia,serif;font-size:.65rem;letter-spacing:2px;padding:10px 16px;z-index:7999;opacity:0;transform:translateY(8px);transition:all .4s;pointer-events:none;border-radius:2px;max-width:240px;text-align:center}#lang-toast.show{opacity:1;transform:translateY(0)}';
  document.head.appendChild(css);

  const sw = document.createElement('div'); sw.id = 'lang-switcher';
  const dd = document.createElement('div'); dd.id = 'lang-dropdown';
  const mb = document.createElement('button'); mb.id = 'lang-btn'; mb.textContent = LANGS[lang].label;
  const ts = document.createElement('div'); ts.id = 'lang-toast';

  Object.entries(LANGS).forEach(([code, info]) => {
    const b = document.createElement('button');
    b.className = 'lang-option' + (code === lang ? ' active' : '');
    b.dataset.lang = code;
    b.textContent = info.label + ' \u2014 ' + info.full;
    b.addEventListener('click', () => pick(code));
    dd.appendChild(b);
  });

  mb.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('open'); });
  document.addEventListener('click', () => dd.classList.remove('open'));
  sw.appendChild(dd); sw.appendChild(mb);
  document.body.appendChild(sw); document.body.appendChild(ts);

  function toast(msg, ms) { ts.textContent = msg; ts.classList.add('show'); setTimeout(() => ts.classList.remove('show'), ms || 2500); }

  function pick(code) {
    dd.classList.remove('open');
    if (code === lang) return;
    lang = code; localStorage.setItem(STORAGE_KEY, code);
    mb.textContent = LANGS[code].label;
    document.querySelectorAll('.lang-option').forEach(o => o.classList.toggle('active', o.dataset.lang === code));
    const key = getKey();
    if (code === 'la') { toast(applyLatin(key) ? '\u2720 In Latinum versum \u2720' : 'Caput nondum translatum est.'); }
    else { restorePt(key); toast('\u2720 Portugu\u00eas restaurado \u2720'); }
  }

  window.addEventListener('DOMContentLoaded', () => { backup(); if (lang === 'la') applyLatin(getKey()); });
})();

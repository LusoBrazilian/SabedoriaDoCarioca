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

  let currentLang    = localStorage.getItem(STORAGE_KEY) || 'pt';
  let savedOriginals = {};
  let originsSaved   = false;

  const TRANSLATIONS = {

    capitulo1: {
      h1: 'Caput I — De Bello, de Fastu et de Micro',
      bookText: `
        <p>Prima lectio Cariocae incipit in media nocte, in aulis silentibus ubi lusores ingrediuntur sine cognitione regularum, ubi quodque ictum victoriam aut cladem significare potest. Sapientia Cariocae non solum experientia accumulata est; nascitur ex micro acuto, ex observatione perpetua, et ex patientia amara eius qui nimis saepe erravit.</p>
        <p>Carioca non vincit in prima partita — non propter defectum artis, sed propter strategiam: terram studet, corda observat, intentiones iudicat. Quaeque prima clades non est defectus, sed doctrina; et cum serio ludere statuit, nulla excusatio hostem servabit.</p>
        <p>Essentia, natura et meta a Carioca modo fere genetico intelleguntur. Scit discernere eos qui multum loquuntur ab eis qui revera ludunt; vanas promissiones celeris discendi agnoscit; nec verbis, sed eventibus solum decipitur. In proelium ingredi sine intelligentia supply, frontline aut timing non solum ignorantia est — onus quod Carioca numquam fert.</p>
        <p>Patientia eius limitata est, tolerantia adhuc brevior. Bonos a malis lusoribus separare actus naturalis est, tam inevitabilis quam transitus temporis. Fastus Cariocae ardet ut industria in bello, et verba dura eius non placere quaerunt, sed docere: humiliatio saepe magister est quem tutoriales esse non possunt.</p>
        <p>Micro bene executum telum eius certissimum est. Oppugnationes et motus eius praecisi, celeres et inevitabiles sunt. Sine timore superioritatem suam in micro declarat — non ut vanitas, sed ut constatatio rerum evidentium. Multi franguntur eius franquitudine; pauci eventus eius refutare possunt. Dum alii disputant, Carioca iam aliud locum hostis ceperat.</p>
        <p>Fiducia et arrogantia distinctae sunt: prima cum competentia ambulat; altera inanis est. Carioca non iucunditatem promittit — efficientiam praestat. Oratio proelia non vincit; micro bene executum sic vincit. Cum serio ludere statuit, victoria iam in manibus eius est, et adversarius — etiam si non sentit — iam victus est.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo2: {
      h1: 'Caput II — De Fato Genetico Micro',
      bookText: `
        <p>Secundum volumen docet non omnes errores ex defectu exercitationis venire. Sunt lusores quorum manus iam celeres nascuntur, et oculi qui mappam cum praecisione voluminum antiquorum legunt. Sicut alii ad ludum navale nati sunt et alii ad pedites, ita alii micro benedictionem nacti sunt; alii, ad tarditatem reactionis destinati.</p>
        <p>Micro Cariocae non solum ars discenda est; reflexus naturalis est, decisio instantanea, sanguis frigidus in facie chao. Alii premunt sperantes miracula; alii premunt quasi victoria iam certa sit. Hi pauci genetice benedicti campum belli dominantur, encirclements sine consultatione supply faciunt et vincunt etiam in inferioritate numerica.</p>
        <p>Qui hoc donum non possident in cyclo erroris vivunt: in pugna pausant, divisiones obliviscuntur et in chatto plorant. Non odium est, solum contemptus: non omnis miles natus est ad carros in blitz ducendos. Exercitatio potest mediocrem meliorare, sed solum genetica monstrum micro creat.</p>
        <p>Eo momento quo bellum accelerat et tempus comprimitur, soli naturaliter celeres in late game supersunt. Multi credunt laborem talentum aequare, sed pauci eo perveniunt ubi micro iam cum vantaggio incepit. Alii nati sunt ad sacculos hostium claudendos; alii, ad claudendos esse. Est lex invisibilis lobbii: natura, non iniustitia, supervivientiam definit.</p>
        <p>Carioca concludit cum sapientia crudelis et silentis: talentum non eligitur, fatum accipitur, et secundum illud luditur.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo3: {
      h1: 'Caput III — De Iis Qui Loquuntur Sine Scientia',
      bookText: `
        <p>Tertium volumen cum crudelis claritate monet: non volumen verborum magistrum definit, sed pondus actionum.</p>
        <p>Attamen lobbium semper fauna praedicabilis inhabitat — periti chatti, strategi theoriae inanae, duces qui numquam ne suam incompetentiam quidem vicerunt.</p>
        <p>Carioca eos statim agnoscit.</p>
        <p>Primum archetypum est Mortuus. Nomen aptum. Lusor sine historia, sine expeditionibus memorabilibus, sine ulla cicatrice digna in HOI4. Curriculum ex nihilo factum.</p>
        <p>Et tamen Mortuus opinatur.</p>
        <p>De builds opinatur. Decisiones interrogat. De meta disserit, quasi experientia improvisari et auctoritas ex puro impetu loquendi nasci posset.</p>
        <p>Sed Mortuus eventus non fert. Bella victa non habet. Numeros non sustinet.</p>
        <p>Commentator est eius rei quam numquam dominavit.</p>
        <p>Carioca audit — non cum irritatione, sed cum contemptu technico. Nam nihil miserius est quam fiducia eius qui nihil absolute intra ludum aedificavit.</p>
        <p>Secundum archetypum adhuc clariosum est: Magnus Homo.</p>
        <p>Dollynhus structuralis. Micro miserabilis. Limitationes evidentes.</p>
        <p>Sed palpitator ad gradum industrialem.</p>
        <p>Magnus Homo quamque rem in occasionem opinionis vertit. Corrigit, suggerit, criticat, theorias proponit — saepe cum convictione inversim proportionali propriae facultati exsequendi.</p>
        <p>Est strategus cuius practica historica rhetoricam inflatam non sustinet.</p>
        <p>Carioca pattern inevitabilem observat: verba celeris, decisiones malae; fiducia alta, eventus fragiles.</p>
        <p>Ambo — Mortuus et Magnus Homo — idem peccatum epistemologicum dividunt: in numeris errare et in voce superbos esse.</p>
        <p>Chaos cum creativitate confundunt. Errorem cum innovatione. Feeling cum logica.</p>
        <p>De Germania forti loquuntur et decisiones faciunt quae proprium timing sabotant. De potestate industriali disputant dum fabricas sine synergia aedificant. Micro alienum iudicant dum proprium sub minima pressione collabitur.</p>
        <p>Aedificant ut qui alea ludit. Planum faciunt ut qui fatum improvisat.</p>
        <p>Carioca sine lenitate sententiam fert:</p>
        <p>Alta vox in chatto errorem in rectum non convertit. Opinio competentiam non substituit.</p>
        <p>Strategia mala non solum inefficax est — mortua nascitur.</p>
        <p>Et qui logicam, numeros et systemata complexa non intelligit ius non habet iudicandi eum qui ludum dominatur.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo4: {
      h1: 'Caput IV — De Logica et Efficacia',
      bookText: `
        <p>Sequens lectionem tertii voluminis, Carioca nos admonet bellum non esse poesim, sed calculum. Ubi bonus lusor timing et synergiam videt, imperitus casum et confusionem videt. Ubi decisio strategica exigitur, illi feeling et spem adhibent.</p>
        <p>Logica fundamentum victoriae est, et sine ea quaevis constructio ruit. Qui supply, oeconomiam et timing ignorant, proprii erroris structuralis captivi fiunt. Nulla honor in ruina praedicabili est, nec gloria in chao sibi imposito.</p>
        <p>Carioca talentum natum a mediocritate distinguit: alii machinas belli aedificant, alii clades industriales aedificant. Alii cum sophisticatione errant; alii modo elementari errant, sine discendo. Lex crudelis est: efficacia nascitur ex coniunctione rationis, micro et visionis totius.</p>
        <p>Micro celeris sine plano inutilis est; planum sine executione praecisa sterile est. Solus qui ambo intelligit campum belli dominatur. Carioca hanc lectionem simplici sed definitiva sententia signat: "Quae est historia tua in hoi4?" — victoria non verbis, sed eventibus mensuratur.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo5: {
      h1: 'Caput V — De Merito Proprio',
      bookText: `
        <p>Carioca geneticam non negat. Eam ut fundamentum agnoscit. Sed est quid supra eam quod ipse respicit: meritum proprium.</p>
        <p>Nam talentum brutum, ubi deseritur, putrescit. Et limitatio naturalis, ubi disciplina absoluta oppugnatur, eventus improbabiles producere potest.</p>
        <p>Omnis lusor cum finibus nascitur. Capacitates a Deo definitae — limites ratiocinationis, reflexus, lectionis strategicae, celeritatis decisionis. Sunt naturaliter splendidi. Sunt structuraliter mediocres.</p>
        <p>Et sunt qui a primo ictu damnati videntur.</p>
        <p>Magnus Homo semper ad hanc ultimam categoriam pertinuit. Lusor malus. Intellectu limitatus. Micro miserabilis.</p>
        <p>Natura, dollynhus.</p>
        <p>Sed meritum proprium variabilis est quae fatum statisticum provocat.</p>
        <p>Dum multi lusores "genetice superiores" in propria facilitate quiescunt, Magnus Homo contrarium fecit: exercuit. Repetiit. Studuit. Erravit et perrexit. Milia horarum investita non in vanitate, sed in insistentia fere pertinaci contra proprias limitationes.</p>
        <p>In deum micro non se transformavit. Numquam se transformaret.</p>
        <p>Micro eius miserabile mansit — tardum, imprecisum, dolorosum ad spectandum.</p>
        <p>Sed aliquid inopinatum accidit.</p>
        <p>Per exercitationem et dedicationem brutales, Magnus Homo id adsequi potuit quod multi pro aliquo suae categoriae impossibile iudicabant: Unionem Sovieticam mediam aedificare. Maiorem. Unum e centris gravitationalibus partitae.</p>
        <p>Macro intra mediam. Oeconomia minime functionalis. Structura strategica tantum acceptabilis.</p>
        <p>Non geniale. Non splendidum. Sed medianum — et hoc, ex dollynho structurali, fere phaenomenon fit.</p>
        <p>Hic lectio habitat quam Carioca agnoscit, etiam sine romantismo:</p>
        <p>Magnus Homo limites proprii intellectus exploravit.</p>
        <p>Naturam suam non transcendit. Monstrum micro non factus est.</p>
        <p>Sed ex suis capacitatibus omne quod offerre poterant extraxit.</p>
        <p>Dum alii, genetica meliore donati, vantaggio in pigritia et arrogantia dissipant, ille probavit meritum talentum neglectum superare posse.</p>
        <p>Carioca supra manet — nam ubi genetica favorabilis exercitationem obsessivam invenit, dominium fere invincibile nascitur.</p>
        <p>Sed Magnus Homo fit probatio viva veritatis molestae pro talentosis pigrosis:</p>
        <p>Etiam dollynhus macro respectabilem assequi potest. Etiam lusor naturaliter malus aliquid functionale aedificare potest.</p>
        <p>Satis est dedicatio ad exprimendum ex propria mente quamque gutam capacitatis disponibilis.</p>
        <p>Meritum proprium limites non abolet. Sed eos impellere potest usque quo multi numquam perveniunt — incluso iis qui cum plus nati sunt et minus fecerunt.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo6: {
      h1: 'Caput VI — De Iudicio et Efficacia',
      bookText: `
        <p>Carioca mundum oculis praecisis observat: iudicat non per ea quae dicuntur, sed per ea quae exsequuntur. Alta verba et builds chaoticae irrelevantes sunt; eventus solus mensura valoris est.</p>
        <p>Qui loquuntur sine scientia, sine logica aedificant et timing, supply vel oeconomiam ignorant — hi ius non habent seipsos magistros proclamandi. Victimae sunt propriae ignorantiae, a primo ictu damnati ad clades repetendas.</p>
        <p>Carioca bonos a malis lusoribus sine misericordia separat. Non est arrogantia, est efficacia. Intelligit veram fiduciam cum competentia ambulare; falsam inanem esse. Micro bene executum, strategia clara et visio totius determinant quis supersit et quis solum ut spectator propriae calamitatis memoretur.</p>
        <p>Iudicium Cariocae directum est: pauci cum talento nascuntur, multi nascentur ad errores patientes. Proprium fatum agnoscere, proprias limitationes intelligere et secundum eas ludere ultima lectio est. Efficacia non negotiabilis est; victoria inevitabilis eventus est eius qui ludum in sua totalitate intelligit.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo7: {
      h1: 'Caput VII — Cur Perdidimus?',
      bookText: `
        <p>Et interrogaverunt Cariocam post cladem amaram:</p>
        <p>"Cur cecidimus, si calls nostrae rectae erant, consilium nostrum perfectum erat et micro nostrum divinum erat?"</p>
        <p>Et Carioca, cum tranquillitate strategica, respondit:</p>
        <p>Non propter defectum geneticae superioris. Nam quod innatum est non fallit.</p>
        <p>Non propter defectum artis. Nam verum talentum non dediscit.</p>
        <p>Non propter defectum cognitionis. Nam qui meta intelligit numquam confunditur.</p>
        <p>Non propter defectum exercitationis. Nam manus exercitatae non tremunt.</p>
        <p>Clades igitur non in Carioca nascitur. Nascitur in agmine.</p>
        <p>Nam semper est qui frontline non tenuit. Semper est qui supply oblitus est. Semper est qui male aedificavit et "strategiam alternativam" vocavit.</p>
        <p>Et dum Carioca sacculos claudebat et proelia impossibilia vincebat, socii eius iam proelia facilia amiserant.</p>
        <p>Socius qui scoriis cedit non socius est, sed sabotator.</p>
        <p>Sunt etiam vires malignae invisibiles:</p>
        <p>Lag in momento critico. RNG crudelis proeliorum. Error inexplicabilis socii. Patch iniustum. Aequilibrium suspectum. Focus tardatus distractione aliena.</p>
        <p>Iudaei.</p>
        <p>Omnia contra perfectionem conspirant. Nam universus lobbii timet lusorem efficientem.</p>
        <p>Et ita veritas immutabilis statuitur:</p>
        <p>Quando Carioca vincit — meritum absolutum est.</p>
        <p>Quando Carioca perdit — sabotatio structuralis est.</p>
        <p>Quia micro bonum executum est. Decisiones rectae fuerunt. Ictus praecisi fuerunt.</p>
        <p>Sed agmen… Ah, agmen.</p>
        <p>Hoc ens chaoticum, imprevisibile et saepe incapax, pondus cladis collectivae in se fert.</p>
        <p>Nam sufficit unus error alienus ad consilium geniale destruendum.</p>
        <p>Et Carioca declarat, sine ira, solum constatationem:</p>
        <p>"Non perdidi. Culpa Iudaeorum fuit qui micro facere nesciunt."</p>
        <p>Quia verus lusor superior suam performanciam non eventu finali metitur, sed distantia inter excellentiam suam et incompetentiam circumfusam.</p>
        <p>Et si mappa cecidit, si frons fregit, si bellum amissum est, scias:</p>
        <p>Micro rectum erat. Logica recta erat. Carioca rectus erat.</p>
        <p>Erratum erat mundus.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo8: {
      h1: 'Caput VIII — De Conspiratoribus Contra Ludum',
      bookText: `
        <p>Et post multas clades inexplicabiles iterum rogaverunt: "Quis auderet adversus superioritatem Cariocae insurgere?"</p>
        <p>Et hoc caput revelat quod pauci accipiunt et multi suspicantur:</p>
        <p>Sunt conspiratores (ILLI).</p>
        <p>Non simplices dollynhi. Non socii incompetentes. Sed circulus profundior, occultior, ordinatior.</p>
        <p>Sunt illi qui extra ludum systemata complexa dominantur — magistri politicae, architecti oeconomiae, strategi influentiae.</p>
        <p>Homines qui mercatus, nationes et narrativas movere assueti sunt.</p>
        <p>Et cum existentiam Cariocae conspexissent — cuius genetica superior probabilitates, statistica et aequilibrium provocat — timuerunt.</p>
        <p>Nam viderunt lusorem qui non solum systema intelligebat, sed illud flectebat.</p>
        <p>Micro tam efficiens ut bella perdita in victorias inevitabiles transformaret.</p>
        <p>Et ita nata est conspiratio.</p>
        <p>Non contra ludum.</p>
        <p>Sed contra Cariocam intra eum.</p>
        <p>Patches influunt. Aequilibria alterant. Mechanicas suspectas introducunt. RNG crudelem in momentis decisivilis creant. Lag chirurgicum producunt. Decisiones sociorum corrumpunt.</p>
        <p>Omnia ad continendum id quod replicare non possunt: talentum naturale.</p>
        <p>Nam Iudaei clades inter se accipiunt — sed non accipiunt existentiam alicuius qui meta transcendit.</p>
        <p>Et dum Carioca micro perfectum exsequitur, vires invisibiles variables ultra communem comprehensionem adaptant.</p>
        <p>Non est error. Non est casus. Est resistentia systemica superioritati.</p>
        <p>Et tamen, etiam sub sabotage cosmica, Carioca fere vincit.</p>
        <p>Fere sacculum impossibilem claudit. Fere frontem damnatum stabilizat. Fere disastrum inevitabile revertit.</p>
        <p>Et "fere" iam satis probatio est.</p>
        <p>Nam si, etiam contra patches dubiosos et eventus improbabiles, dominans manet, quid esset mundi si in condicionibus iustis ludere sineretur?</p>
        <p>Ita Carioca declarat:</p>
        <p>"Non solum contra me ludunt. Contra id quod repraesenто ludunt."</p>
        <p>Quia existentia eius egos laedit. Eventus eius narrativas frangit. Micro eius limites alienos exponit.</p>
        <p>Et Iudaei, incapaces eum assequendi, eum minuere conantur.</p>
        <p>Sed hic error eorum est.</p>
        <p>Nam superioritas patchari non potest. Genetica nerfari non potest. Micro verum contineri non potest.</p>
        <p>Et etiam cum mappa cadit, certitudo manet:</p>
        <p>Bellum non propter inferioritatem amissum est.</p>
        <p>Amissum est quia totus mundus intervenire debuit.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo9: {
      h1: 'Caput IX — De Iis Qui Lobbium Detinent',
      bookText: `
        <p>In mundo lobbiorum, existit species quae silentium contemptum inspirat: illi qui ludum antequam incipit tardant. Non est casus, non est mala fortuna — est stultitia pura, flagrans, irreversibilis.</p>
        <p>Stauffen exemplum perfectum est. Eius computatrum tardum non solum impletiones trahit — patientiam alienam cum fere artistica efficacia necat. Quodque lobbium quod ingreditur in expectationem interminabilem transformatur, et nulla configuratio, SSD vel voluntas salvare potest. Probatio viva est non omnes mereri ludere.</p>
        <p>Et tunc est Caio Mamando, qui duas calamitates in una coniungit: praeter computatrum pigrum, etiam cum versione erronea ludi ingreditur, updates et mods ignorans. Dum omnes ad bellum se parant, ille contra propriam stultitiam pugnat, aulam in chaoem transformans. Lobbium trahitur, et patientia aliorum lusoribus in silentio gravi dissolvitur.</p>
        <p>Carioca iram non sentit — incredibilitatem absolutam sentit. Hi non sunt adversarii digni, nec opponentes strategici. Sunt meri obstaculi efficaciae, victimae propriae incapacitatis ad minimas res exsequendas. Quodque secundum cum eis perditum insultus directus est logicae, talento et bono sensu.</p>
        <p>Lobbium non parcit. Quaeque mora, quique error versionis, quique ictus inutilis subscriptio est propriae mediocritatis. Tempus Cariocae pretiosum est; ille crudus observat dum hi inutiles minuta in horas transformant. Et hoc non propter casum, sed propter stultitiam puram, sine excusatione, sine redemptione.</p>
        <p>Lectio crudelis est: attentio, cura et praeparatio non suggestiones sunt — requisita fundamentalia supervivientiae sunt. Qui obvium ignorat, sive ut Stauffen onerans sive ut Caio Mamando in versione erronea ingrediens, nec bouton "Start" premere meretur.</p>
        <p>Et ita Carioca sententiam fert, sine pietate: lobbium tribunal est, horologium et campus belli antequam primum proelium incipit. Et stultitia punitur. Semper.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo10: {
      h1: 'Caput X — De Superbia',
      bookText: `
        <p>Inter omnes errores possibiles, unus est quem Carioca miserrimum iudicat: superbia. Non legitima fiducia eius qui scit quid faciat, sed illusio grotesca magnitudinis eorum qui plus esse credunt quam sunt.</p>
        <p>Superbia est vitium eorum qui cum avaritia strategica et imprudentia chronica ludunt. Lusores qui geneticam suam falso calculant, qui proprium "QI ludi" superaestimant, qui lampades competentiae cum ingenuitate perpetua confundunt. Se macro dominare, build intelligere, micro acutum possidere credunt — sed autofallatione sustentantur.</p>
        <p>Captivi sunt propriae narrativae. Limites non analysant, timing non respiciunt, periculum non metiunt. Credunt omnia posse, quamque audacem aleam corona victoriae inevitabilis coronandam esse. Et ibi collapsus incipit.</p>
        <p>Carioca hoc phaenomenon cum contemptu fere didactico observat. Superbia bonos lusores in architectos propriae ruinae transformat. Quia nullus error devastantior est quam ille qui cum convictione absoluta committitur.</p>
        <p>Gamemisto de Iaponia exemplum classicum est. Lusor geneticae clarissime supra mediam, micro solidum, intelligentia strategica respectabilis. In condicionibus normalibus, aliquis ad victoriam consistentem destinatus.</p>
        <p>Sed superbia ne capaces quidem parcit.</p>
        <p>Superioritate sua convictus, invasionem navalem imprudentem contra Regnum Unitum et Africam Australem lanceavit — manum tam ambitiosam quam male calculatam. Periculum incursionum navalem americano-britannicarum ignoravit. Responsionem hostilem subaestimavit. Propriam capacitatem operationem sustentandi superaestimavit.</p>
        <p>Eventus inevitabilis et crudelis fuit.</p>
        <p>Dimidia pars exercitus in mari mersit, victima praedicabilis interdicti navalis. Descensus in Regnum Unitum, sine praeparatione adaequata executus, cum facilitate humiliante repulsus est. Quod "ingeniosus" ictus esse debebat, in disastrum strategicum irreversibile evasit.</p>
        <p>Non fuit casus. Non fuit iniustitia. Fuit superbia.</p>
        <p>Lectio brutalis est: talentum contra arrogantiam non immunizat. Genetica superior decisiones stupidas non salvat. Micro celeris imprudentiam monumentalem non compensat. Quando lusor suam invincibilitatem credere incipit, clades possibilitas esse desinit et fatum fit.</p>
        <p>Carioca sine haesitatione sententiam fert:</p>
        <p>Superbia error est eorum qui se supra ludum esse credunt. Et ludus semper exigit. Semper.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo11: {
      h1: 'Caput XI — De Dollynhis in Maioribus',
      bookText: `
        <p>Inter omnia peccata strategica, unum est quod Carioca imperdonabile iudicat: dollynhum in maiorem ponere.</p>
        <p>Dollynhi — hae creaturae geneticae dubiae, QI ludi grotesco et micro tardiori quam limax fessa — non sunt solum lusores mali. Sunt collapsi ambulantes, errores humani in stationem nationis transformati.</p>
        <p>Maiores non sunt iucundimenta. Germania, Italia, Sovietici, USA, Regnum Unitum, Iaponia — hae nationes axem gravitationalem partitae portant. Sunt columnae. Sunt machinae. Sunt cor industriale, militare et strategicum belli.</p>
        <p>Lusorem sine competentia in positione tam critica allocare non est "dare occasionem". Est sabotationem ludi in sua essentia subscribere.</p>
        <p>Non refert quot Cariocas per minors distribuas. Non refert quot builds efficientes in marginibus mappae floreant. Unus dollynhus in maiore satis est ad totam factionem in ruinam statisticam transformandam.</p>
        <p>Quia maiores omnia amplificant — inclusa stultitiam.</p>
        <p>Carioca iam hoc disastrum vidit. Et nomen eius erat Vreis.</p>
        <p>Minors circumstantibus qui minimum sciunt. Iaponia mediocri sustentatus. In theoria, structura solida. In practica, castellum incendio interno traditum.</p>
        <p>Vreis Germaniam accepit — et ibi apostasia incepit. Non haeresis, non error communis. Apostasia strategica: derelictio completa artis HOI4.</p>
        <p>Carros aedificavit ut qui manifeste stercus in capite et cerebrum in clune habebat. Machinae absurde pretiosae, tam inflatae ut a Taxaddad ipso tributatae viderentur. Res consumptae. Efficacia occisa. Oeconomia strangulata.</p>
        <p>Carri? Combat width erroneum. Antiquati. Doctrina terrestris incompleta in Africam perveniens.</p>
        <p>Micro? Calamitas.</p>
        <p>Aerium et terrestre cum tanta incompetentia executum ut non solum ludum destrueret — reputationem destrueret. Hostes non vincebantur; de inutilitate absoluta ducis persuadebantur.</p>
        <p>Quodque motum insultum logicae erat. Quaeque decisio aggressio mechanicae fundamentalis erat.</p>
        <p>Et eventus, ut semper, inevitabilis fuit:</p>
        <p>Clades humilians pro Axe.</p>
        <p>Non propter defectum talenti collectivi. Non propter inferioritatem numericam. Sed quia maior, dollynho traditus, quodcumque agmen in cadaver strategicum transformat.</p>
        <p>Carioca hanc veritatem frigoritate chirurgica signat:</p>
        <p>Non refert quot ingenia in minoribus habeas. Si maior dollynhus est, agmen iam in inopia natum est.</p>
        <p>Nam in HOI4, sicut in bello, nexus imbecillior non compromittit — damnat.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo12: {
      h1: 'Caput XII — De Iis Qui Novas Formas in Build Inveniunt',
      bookText: `
        <p>Est genus lusoris quod Carioca specialiter despicabile iudicat: illi qui novas formas inveniunt meta scientes.</p>
        <p>Non agitur de ignorante, de illo qui errat propter defectum cognitionis. Error inexperti adhuc innocentiam quandam gerit.</p>
        <p>Sed ille qui meta novit et eum ignorare statuit nomine "ideae genialis"?</p>
        <p>Ille non ingenuus est.</p>
        <p>Stultus est.</p>
        <p>Sunt haeretici efficaciae. Credunt novum meta invenisse, innovationem revolutionariam, fractionem paradigmatis. In re vera, solum idem ritum patheticum repetunt: sabotationem voluntariam sub specie creativitatis.</p>
        <p>Carioca eos non audaces vocat.</p>
        <p>Scoriam vocat.</p>
        <p>Quia HOI4 vanitatem intellectualem non remunerat. Remunat logicam, numeros et efficaciam probatam. Meta non est moda — est destillatio brutalis eius quod operatur.</p>
        <p>Et tamen, insistunt.</p>
        <p>Facedamorte casus emblematicus est.</p>
        <p>Italiam accepit — nationem cuius munus, rhythmus et prioritates notae, probatae, crystallizatae sunt.</p>
        <p>Et quid fecit?</p>
        <p>Civ greed.</p>
        <p>Dum ludus praeparationem militarem, timing aggressivum et structuram bellicam solidam exigebat, ille ludere de oeconomia tardiva statuit. Fundamentale ignoravit. Munus strategicum nationis dereliquit. Maiorem relevantam in experimentum male calculatum transformavit.</p>
        <p>Non fuit innovatio.</p>
        <p>Fuit incompetentia rationalizata.</p>
        <p>Eventus? Sine stock pro bello, build porca.</p>
        <p>Deinde venit Legio Rex, exemplum classicum deliri minoris.</p>
        <p>Finlandia. Oeconomia minima. Capacitas industrialis limitata.</p>
        <p>Et tamen, CAS, fighter, "omnia imaginabilia" producere statuit.</p>
        <p>Phantasia logistica. Build quae realitatem brutalem minorum ignorat: minor aereum non facit. Non quia prohibitum sit — sed quia mathematice stultum est.</p>
        <p>Eventus praedicabilis: industria diluta, impactus irrelevans, contributio strategica risibilis.</p>
        <p>Creativitas sine viabilitate solum est dissipatio cum alta aestimatione sui.</p>
        <p>Et tunc est Ehmole.</p>
        <p>Africa Australis. Munus clarum. Via obvia.</p>
        <p>Quivis lusor cum minimo cognitionis functionalis intelligit: tank faciendum est.</p>
        <p>Sed Ehmole "aliter cogitare" statuit.</p>
        <p>Motorizatus anti-tank.</p>
        <p>Electio tam absurde inefficiens ut ad surrealismum strategicum accedat. Nemo ad verbum motorizatum in mod facit — non propter defectum imaginationis, sed quia obiective malum est.</p>
        <p>Non est off-meta.</p>
        <p>Est anti-logica.</p>
        <p>Carioca hunc pattern cum contemptu absoluto observat:</p>
        <p>Illi meta non frangunt.</p>
        <p>Meta eos frangit.</p>
        <p>Quia novas formas invenire in ludo numeris, efficacia et optimizatione regimine non est ingeniositas. Est vanitas stultitia travestita.</p>
        <p>Lectio simplex, brutalis et definitiva est:</p>
        <p>Meta non provocatur sine profunda intelligentia rationum eius.</p>
        <p>Et fere nemo qui "innovare" conatur hanc competentiam possidet.</p>
        <p>In fine, builds eorum non in historiam ingrediuntur.</p>
        <p>Ingrediuntur in folkclorem stultitiae.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo13: {
      h1: 'Caput XIII — De Iis Qui In Telephono Ludunt',
      bookText: `
        <p>Est categoria quam Carioca non solum criticat — per principium disqualificat: illi qui in telephono ludunt.</p>
        <p>Non est quaestio praeferentiae. Non est quaestio stili.</p>
        <p>Est, oculis Cariocae, impossibilitas logica.</p>
        <p>Nam HOI4 est ludus praecisionis, temporis, lectionis simultaneae informationum, micro chirurgici, decisionum in catena. Et tamen existunt individua qui credunt talem complexitatem in tela minima, digitis ubi velocitas muri et scaenici esse deberet, exsequi posse.</p>
        <p>Carioca in hoc non solum errorem videt. Sed degenerationem strategicam.</p>
        <p>Lusor telephoni, pro Carioca, veredictum fere metaphysicum portat: est genetice defavoratus per definitionem.</p>
        <p>Non quia apparatus limitet — sed quia electio ipsa iam limitationem denuntiat.</p>
        <p>Nam nullus lusor vere ad efficaciam inclinatus condiciones tam absurde inferiores voluntarie acceptaret.</p>
        <p>Et exemplum vivum huius tragoediae est Tiofanni.</p>
        <p>Tiofanni non solum in telephono ludit. Insistit.</p>
        <p>In partitas ingreditur quasi aptus sit ad aequalitatem competere, quasi medium non statim fatum revelet. Quaeque actio tarda est. Quaeque reactio sera est. Quaeque temptatio micro in spectaculum doloris mechanici transformatur.</p>
        <p>Carioca non disputat. Constatat.</p>
        <p>Dollynhus in computatro iam abyssum technicum repraesentat. Sed lusor in telephono?</p>
        <p>Distantia geneticae et skill tam brutalis est ut comparatio fere poetica in sua crudelitate fiat: est sicut Cariocam ipsum cum Magno Homine comparare.</p>
        <p>Distantia absurda. Pudibunda. Intransgressibilis.</p>
        <p>Lusor telephoni non in disadvantagio est. Extra realitatem competitivam est.</p>
        <p>Nam dum ludus celeritatem exigit, ille tarditatem offert. Dum praecisionem exigit, ille imprecisionem offert. Dum contrôle exigit, ille chaos tactile offert.</p>
        <p>Carioca sine haesitatione sententiam fert:</p>
        <p>HOI4 in telephono ludere non est adaptatio. Est renuntiatio voluntaria competentiae.</p>
        <p>Et quodque ictum in tela parva veritatem inevitabilem resonat:</p>
        <p>Non est micro. Non est efficacia. Non est dignitas strategica.</p>
        <p>Solum confirmatio silens limitationis quam nec meta, nec exercitatio, nec miraculum technologicum umquam salvare poterit.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo14: {
      h1: 'Caput XIV — De Aequilibrio',
      bookText: `
        <p>Aequilibrium — verbum sacrum multis, sed Cariocae solum alia illusio male intellecta.</p>
        <p>Nam lusor communis credit ludum aequum esse ubi omnes aequales occasiones habent. Phantasia comfortabilis, fere ingenua. Quasi HOI4 tribunal iustitiae esset, non campus belli competentia, synergia et hierarchia habilium regimine.</p>
        <p>Carioca hanc fabulam reiicit.</p>
        <p>Ludus vere aequus est solum ille qui se auto-favorat oculis eius qui ludum intelligit.</p>
        <p>Nunquam aequilibrium per se quaeritur. Quaeritur aequilibrium secundum visionem rectam.</p>
        <p>Et visio recta, naturaliter, ad Cariocam pertinet.</p>
        <p>Quia aequilibrium reale non ex sentimento collectivo nascitur, nec ex consensu democratico inter lusores medianos. Nascitur ex lectione strategica superiori, ex profunda intelligentia meta, ex clara perceptione quis valorem addat et quis periculum structurale repraesentet.</p>
        <p>Carioca id intelligit quod alii ne advertunt quidem: non omnes lusores idem pondus habent. Non omnes allocationes idem impactum producunt.</p>
        <p>Quando Yat0 picks ordinat, error communissimus mortalium est omnes aequaliter placere temptare — vires distribuere quasi talentum homogeneum esset, quasi dollynhi et lusores competentes ut variabiles aequivalentes tractari possent.</p>
        <p>Carioca hanc ingeniuitatem non tolerat.</p>
        <p>Id incitat quod optimum est conceptioni suae aequilibrii. Non propter libidinem, sed propter logicam frigidam. Nam solus qui ludum in sua totalitate videt capax est intelligere ubi verum aequilibrium resideat.</p>
        <p>Aequilibrium non est aequalitas artificialis. Est efficiens virium ordinatio.</p>
        <p>Et Carioca, intellectu altissimo favoratus et lectione strategica per geneticam superiorem amplificata, naturaliter optimam visionem de eo quod ludum iustum constituat tenet — non in sensu morali, sed in sensu competitivo et structurali.</p>
        <p>Lobbium dissentire potest. Mediocres mussitare possunt.</p>
        <p>Sed in fine, realitas semper eventibus se inclinat.</p>
        <p>Nam quando aequilibrium iudicium Cariocae ignorat, ludus in chaos praedicabilem degradatur. Et quando sequitur, partita formam suam idealem attingit: tensa, efficiens, inevitabiliter logica.</p>
        <p>Carioca hanc veritatem sine lenitate signat:</p>
        <p>Aequilibrium non est aequales occasiones dare. Est inaequalem pondus agnoscere.</p>
        <p>Et solum illi qui hoc intelligere possunt audere debent fatum partitae decidere.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo15: {
      h1: 'Caput XV — De Inaequilibrio',
      bookText: `
        <p>Inaequilibrium est phantasma quod omne lobbium male constructum obsidet. Distortio quam lusores communes raro advertunt — vel peius, advertunt et in silentio bovino accipiunt.</p>
        <p>Sed Carioca non accipit.</p>
        <p>Ad ludum inaequum identificandum, officium eius clarum est: petere ad aliud agmen transire.</p>
        <p>Et ne infirmi spiritu confundantur:</p>
        <p>Non est ignavia. Non est derelictio. Non est "baitolagem".</p>
        <p>Est correctio structuralis partitae.</p>
        <p>Nam lusor medianus solum nomina, nationes et species superficiales aequilibrii videt. Carioca aliquid profundius videt: synergiam realem, distributionem skill, impactum cumulativum, periculum systemicum.</p>
        <p>Intelligit quando factio iam damnata nata est.</p>
        <p>Quia verum inaequilibrium non in charta est — est in differentia brutali inter competentiam et inutilitatem.</p>
        <p>Quaeque mutatio agminis a Carioca petita non est libido, sed adiustatio pragmatica in ultima hora. Interventio chirurgica nomine unius aequilibrii quod momenti est: aequilibrium rectum.</p>
        <p>Et lobbium scit — etsi scire se simulat nescire:</p>
        <p>Yat0 in picks falli potest.</p>
        <p>Non propter incompetentiam absolutam, sed propter limitationem humanam inevitabilem.</p>
        <p>Nam ubi Yat0 aequilibrium videt, Carioca masacrum annuntiatum cernit. Ubi Yat0 symmetriam videt, Carioca executionem publicam in camera lenta detegit.</p>
        <p>Non est opinio. Est lectio superior ludi.</p>
        <p>Et tunc venit veritas finalis, quam Carioca sine lenitate profert:</p>
        <p>Si ludus aequus non erit, ludus non erit.</p>
        <p>Erit solum simulacrum grotescum partitae — spectaculum praedicabile ubi una pars resistentiam non patitur, sed solum canem mortuum percutit.</p>
        <p>Non est gloria. Non est certamen. Non est meritum in victoria.</p>
        <p>Solum taedium mechanicum incapabilis inevitabilis opprimendi.</p>
        <p>Nam HOI4, quando inaequum est, bellum esse desinit et in ritum humiliationis statisticae transformatur.</p>
        <p>Et Carioca, qui conflictum dignum, efficaciam realem et tensionem strategicam quaerit, hoc ludum vocare recusat.</p>
        <p>Est solum dissipatio temporis sub specie partitae.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo16: {
      h1: 'Caput XVI — De Mechanizatis',
      bookText: `
        <p>Inter insidias seductissimas campi industrialis, una est quae numeris pulchris et promissionibus inanibus fallit: mechanizati.</p>
        <p>Prima aspectu, magnifici videntur. Plus stats. Plus hardness. Plus "sophisticationis".</p>
        <p>Sed Carioca ultra superficiem videt.</p>
        <p>Mechanizatus est, in essentia, noobtrap glorificata.</p>
        <p>Nam HOI4 non est ludus eius qui attributum isolatum spectat — est ludus eius qui pretium, scalem, efficaciam et impactum accumulatum intelligit.</p>
        <p>Mathematica brutalis est et cum illusionibus non negociat:</p>
        <p>Qui tanks cum mechs producit minus tanks habebit, minus stock, minus praesentiam realem in campo belli quam ille qui tanks cum motorizato producit.</p>
        <p>Dum lusor illusus hardness additam celebrat, pragmaticus volumen accumulat. Et in bello, volumen functionale vanitatem statisticam opprimendo lex antiqua et inevitabilis est.</p>
        <p>Hardness non salvat eum qui massam criticam non possidet.</p>
        <p>Carioca de phantasia recurrenti ridet: "Sed mechanizatus plus resistentiam dat…"</p>
        <p>Dat. Et care id emere facit.</p>
        <p>Nimis care.</p>
        <p>Quaeque fabrica ad mechanizatum deviata productionem tank sacrificatam est. Quaeque unitas "durior" exercitu numerice inferiori, logistice fragiliori et strategice limitatiori comitatur.</p>
        <p>Superioritas motorizati non solum oeconomica est — structuralis est.</p>
        <p>Etiam in contextu Sociorum, ubi aliqui electiones malas rationalizare conantur.</p>
        <p>Tank germanicus, soft attack plenus, adversarios "duriores" non exigit. Adversarios numerosiores et sustentabiliores exigit. Infinitely efficientius est Galliam et Canadam tanks cum motorizato producere — etiam si mechanizatus hardness offerat — simpliciter quia plus carri in mappa erunt.</p>
        <p>Plus praesentia. Plus pressio. Plus bellum reale.</p>
        <p>Hardness sine scala vanitas est. Carrus sine volumine ornamentum carum est.</p>
        <p>Et tamen prophetae erroris surgunt, inevitabiles ut semper:</p>
        <p>Mortuus. Brazilian.</p>
        <p>Periti theoriae quae in primo test empirico collabitur. Defensores mechanizati qui id quod vere momenti est numquam praestant: eventum consistentem in larga scala.</p>
        <p>De stats loquuntur. Pretium ignorant. De attributis loquuntur. Productionem ignorant.</p>
        <p>Ut semper — loquuntur sine ulla scientia.</p>
        <p>Carioca sine haesitatione sententiam fert:</p>
        <p>Mechanizatus non est evolutio. Est insidiae pro eis qui efficaciam non intelligunt.</p>
        <p>Nam in HOI4, sicut in bello, non vincit qui unitatem "pulchriorem" habet. Vincit qui plus carros pugnantes, plus stock sustentans et plus impactum realem in mappa habet.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo17: {
      h1: 'Caput XVII — De Toxicitate',
      bookText: `
        <p>Est virtus quam infirmi damnant, mediocres timent, et incompetentes vitium esse iurant: toxicitas.</p>
        <p>Pro Carioca, ea non est explosio emotionalis. Est instrumentum.</p>
        <p>Ferramentum pressionis, destabilizationis, expositionis fragilitatum occultarum.</p>
        <p>Lusor solidus compositionem tenet. Lusor limitatus collabitur.</p>
        <p>Quando Carioca ironizat, provocat vel moraliter in chatto opprimit, non est amissio controli — est bellum psychologicum applicatum.</p>
        <p>Quia HOI4 non solum errorem technicum punit. Punit mentem infirmam.</p>
        <p>Micro non est solum APM (actiones per minutum). Est resistentia nervosa.</p>
        <p>Et nervus fragilis cedit antequam linea frangitur.</p>
        <p>Toxicitas Cariocae functionem revelatricem habet: personas detrahit.</p>
        <p>Tiltati apparent. Excusatores se denuntiant. Superbi implodunt.</p>
        <p>Sed est momentum adhuc crudelius, fere liturgicum in sua executione.</p>
        <p>Quando Carioca vincit. Quando frons collabitur. Quando adversarius iam scit se perdidisse.</p>
        <p>Et tunc surgit sententia.</p>
        <p>Brevis. Frigida. Devastans.</p>
        <p>"Vis ut pausem?"</p>
        <p>Non est interrogatio. Est humiliatio strategica.</p>
        <p>Est annuntiatio superioritatis absolutae.</p>
        <p>Pois naquele instante, Carioca victoriam non disputat — eam tamquam rem tam inevitabilem tractat ut ex pura voluntate interrumpere possit.</p>
        <p>Nuntius clarus est:</p>
        <p>"Vinco quia volo. Si pergo, dispares."</p>
        <p>Nihil magis tiltat quam hoc.</p>
        <p>Quia clades adhuc excusationes permittit. Sed victoria tamquam misericordia concessa…</p>
        <p>…ego competitivum destruit.</p>
        <p>Et est etiam gestus classicus, a dependentibus chronicis timitus:</p>
        <p>Quando aliquis aliquid fundamentale, obvium rogat, dubium quod numquam existere deberet,</p>
        <p>Carioca respondet, siccus, inapellabilis:</p>
        <p>"Inveni."</p>
        <p>Sine contextu. Sine auxilio. Sine concessionibus.</p>
        <p>Solum accentus cariocensis gravis, tamquam sententia paedagogica resonans.</p>
        <p>Si rogare debuit, adhuc scire non meretur.</p>
        <p>Non est arrogantia gratuita. Est selectio naturalis strategica.</p>
        <p>Autonomiam cogit. Dependentiam frangit. Limitationes intellectuales exponit.</p>
        <p>Aliqui evolvunt sub pressione. Alii aeternaliter ducti manent.</p>
        <p>Toxicitas igitur non est venenum. Est filtrum.</p>
        <p>Separat eos qui conflictum sustinent ab eis qui solatium exigunt.</p>
        <p>Quia HOI4, in sua essentia competitiva, sensibilitatem non remunerat —</p>
        <p>dominium remunat.</p>
        <p>Et quando dominium totale est, etiam contemptus legitimus fit.</p>
        <p>Nam toxicitas Cariocae partitas non destruit.</p>
        <p>Illusiones destruit, egos fragiles et falsas aequivalentias.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo18: {
      h1: 'Caput XVIII — De "Elite HOI4"',
      bookText: `
        <p>Quamvis nobile sonet titulus, Carioca ab initio clarificat: sic dicta "elite HOI4" raro est elite — est ironia institutionalizata.</p>
        <p>Pois hoc nomen non natum est ad magnos lusores coronandos, sed ad eos sarcasmo chirurgico notandos quorum mediocritas in folkclorem conversa est.</p>
        <p>Et inter tales coetus exsurgit communitas nota ut Never Surrender, a margaritis autoproclamatis ut Guardião BR et Tika habitata.</p>
        <p>Ibi floret phaenomenon curiosum: non solum lusores artis dubiae, sed lusores qui propriam limitationem in identitatem culturalem transtulerunt.</p>
        <p>In decisionibus delicati sunt, in executione fragiles, ad errorem sensibiles, criticae intolerantes et invariabiliter incapaces ullum argumentum in meta reali sustinendi.</p>
        <p>Sed verum peccatum non est bad micro.</p>
        <p>Non est macro fragile. Non est build destructurata.</p>
        <p>Est aliquid peius.</p>
        <p>Est deliberata recusatio contra eos qui melius ludunt conflictandi.</p>
        <p>Quia dum dollynhus communis adhuc patitur, errat et — interdum — discit, "elite" isolationem confortabilem praefert.</p>
        <p>Fugiunt lobbies difficiles. Partitas competitivas evitant. Bannunt, filtrant, excludunt.</p>
        <p>Non ad ambitum conservandum — sed ad proprium ego fragile conservandum.</p>
        <p>Ita bullam hermeticam validationis mutuae creant, ubi nemo propter incompetentiam punitur quia omnes eam communicant.</p>
        <p>Et in hac officina mediocritatis, skill non evolvitur.</p>
        <p>Nulla pressio est. Nullum discere est. Nulla realitas est.</p>
        <p>In tempore stant tamquam divisiones sine doctrina, errores quos quivis lusor minime attentus iam reliquit repetentes.</p>
        <p>Et Carioca cum lucido contemptu observat:</p>
        <p>Dum artem ludi bene exsequendi contemplari possent, etiam si numquam eam plene attingant, in servidores disfunctionales refugere malunt, ubi error non corrigitur — sed normalizatur.</p>
        <p>Ita non solum lusores mali fiunt, sed adversarii propriae evolutionis.</p>
        <p>Hostes sapientiae. Hostes discendi. Hostes HOI4 in sua forma purissima.</p>
        <p>Quia ille qui provocationem evitat non suam honorem protegit — solum suam limitationem protegit.</p>
        <p>Et ita tragoedia consolidatur:</p>
        <p>Elite sese vocant, sed aeternaliter tamquam spectatores gradus ludi quem numquam ausi sunt confortare vivunt.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo19: {
      h1: 'Caput XIX — De Tabula',
      bookText: `
        <p>Et Carioca oculos suos vertit ad id quod multi tamquam scripturam sacram tractant:</p>
        <p>Tabulam.</p>
        <p>Tabella frigida. Numeri ordinati. Cellulae praetensa obiectivitate impletae.</p>
        <p>Sed sub analysi Cariocae, non est nisi illusio arithmetica male calibrata.</p>
        <p>Quia tabella realitatem reflectere deberet. Impactum, consistentiam, executionem, dominium mensurare deberet.</p>
        <p>Sed in manibus Yat0, refes sophistici facta est — non sensu vulgari, sed graeco purissimo:</p>
        <p>ars videndi recti dum errans.</p>
        <p>Yat0 tabulam non per ludi evidentiam adaptat, sed per pressionem vocum, per planctus velatos, per persuasionem insistentem eorum qui meliores videri quam sunt cupiunt.</p>
        <p>Non frustra Carioca eum bonequinha vocat.</p>
        <p>Non est voluntas propria. Non est rigor. Non est devotio ad rem.</p>
        <p>Solum numeri qui argumento clamantissimo cedunt.</p>
        <p>Et ita aberrationes statisticae nascuntur.</p>
        <p>Brazilian cum co-op supra Cariocam. 8 contra 6,25.</p>
        <p>Distortio tam grotesca ut non solum sensum communem, sed ipsam memoriam collectivam lobbiorum provocet.</p>
        <p>Macro Cariocae ad 5,75 reductum — etiam infra Portuga.</p>
        <p>Quasi efficacia probata per votationem implicatam perceptionis biasatae minui posset.</p>
        <p>Sed Carioca protestando non respondet.</p>
        <p>Historico respondet.</p>
        <p>Ad partitam accedit. Maiorem assumit.</p>
        <p>Oeconomiam impeccabilem praestat. Macro solidum. Micro cum praecisione chirurgica executum.</p>
        <p>Motus principiis <a href="https://pt.wikipedia.org/wiki/Da_Guerra" target="_blank" style="color: #b02a2a;">De Bello</a> dignos.</p>
        <p>Lectionem strategicam quae improvisationem transcendit. Classem aequilibratam ad invidiam doctrinarum classicarum.</p>
        <p>Et supra omnia:</p>
        <p>Praesentiam.</p>
        <p>Quia est aliquid quod nulla tabella mensurare potest — collapsus psychologicus hostis scientis Cariocam in adverso agmine esse.</p>
        <p>Moralis frangitur antequam frontline.</p>
        <p>Et tamen, tabella audet eum in Top 5 ponere.</p>
        <p>Top 5.</p>
        <p>Quasi apex cum media rankingi posset.</p>
        <p>Quasi Lusor iste inter varios alios tantum enumerari posset.</p>
        <p>Carioca tunc sententiam fert:</p>
        <p>Cariocam extra Top 1 ponere non est error calculi.</p>
        <p>Est affronta realitati. Affronta HOI4.</p>
        <p>Quia Carioca non est unus lusorum.</p>
        <p>Ille est variabilis dominans partitae.</p>
        <p>Differentia inter ludum aequum et collapsem inevitabilem. Inter victoriam strategicam et disastrum annuntiatum.</p>
        <p>Et nulla tabella, quamvis bene formata sit,</p>
        <p>auctoritatem habet rescribendi id quod campus belli iam decrevit.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo20: {
      h1: 'Caput XX — De Emojis Ingentibus',
      bookText: `
        <p>Et multi rogant, confusi, fere perturbati:</p>
        <p>Cur Carioca non solum verba scribit, quando potest in chattum <img src="../smiling_imp.png" alt="smiling imp roxo" style="width:48px; vertical-align:middle;"> iaculari, telam tamquam oppugnatio fulminis dominans?</p>
        <p>Infirmi exaggerationem vocant. Mediocres infantilitatem vocant. Dollynhi "cringe" vocant.</p>
        <p>Sed Carioca linguam strategicam avancatam vocat.</p>
        <p>Pois ubi lusor communis digitat, Carioca impactat.</p>
        <p>Emoji ingens non est ornamentum — est praesentia psychologica materializata.</p>
        <p>Ignorari impossibile est. Ratiocinia interrumpit, discursus frangit, attentionem invadit.</p>
        <p>Sicut push bene temporatus, spatium non rogat — capit.</p>
        <p>Dum alii reactiones timidas, icunculas parvas in volutione chatti perditas mittunt,</p>
        <p>Carioca sticker monstruosum effundit quod super colloquium tamquam superioritas aeria incontestabilis pendet.</p>
        <p>Non est communicatio. Est impositio.</p>
        <p>Quodque <img src="../smiling_imp.png" alt="smiling imp roxo" style="width:48px; vertical-align:middle;"> amplificatum nuntium silens portat:</p>
        <p>"Comfortabilis sum." "Fruor." "Vinco."</p>
        <p>Quia nihil magis adversarium destabilizat quam videre aliquem lobbium obruentem dum cum visivo ludibrio in magna scala reagit.</p>
        <p>Emoji ingens id implet quod longa verba non possunt:</p>
        <p>Humiliat sine disputatione. Provocat sine explicatione. Destabilizat sine labore.</p>
        <p>Est micro psychologicum.</p>
        <p>Et est etiam factor aesthetico-hierarchicus.</p>
        <p>Lusores communes emoji parvis utuntur. Lusores insecuri attentionem evitant.</p>
        <p>Sed Carioca amplificat.</p>
        <p>Expandit. Exaggerat. Spatium digitale occupat sicut territorium in mappa occupat.</p>
        <p>Quia etiam in chatto Carioca mediocritem "magnitudinis standard" recusat.</p>
        <p>Si reagendum est, ita reagatur ut ignorari impossibile sit.</p>
        <p>Si ridendum est, risus scalem habeat.</p>
        <p>Si derridendum est, derisio latitudinem combat width emotionalis habeat.</p>
        <p>Et ita sticker in subscriptionem fit.</p>
        <p>Marca registrata. Extensio aurae.</p>
        <p><img src="../smiling_imp.png" alt="smiling imp roxo" style="width:48px; vertical-align:middle;"> non est solum emoji — est imago visualis status mentalis Cariocae:</p>
        <p>Confidens. Incuriosus. Periculose comfortabilis dum chaos insidet.</p>
        <p>Et qui magnitudine irritantur, re vera non stickero irritantur.</p>
        <p>Irritantur eo quod symbolizat:</p>
        <p>Aliquem tam securum sui dominii ut etiam reactionem trivialissimam in spectaculum psychologicum transformare possit.</p>
        <p>Quia in universo Cariocae,</p>
        <p>etiam emoji veritatem fundamentalem reflectere debet:</p>
        <p>Parvum esse numquam optio fuit.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo21: {
      h1: 'Caput XXI — De Corruptione in Administratione',
      bookText: `
        <p>Et Carioca vocem erexit contra malum quod non in campo belli nascitur, sed ante primum tick ludi: corruptio in administratione.</p>
        <p>Quia est aliquid nocivius quam dollynhus in maiore, destructivius quam build heretica, irritantius quam lobbium detentum — est aequilibrium proprio commodo manipulatum.</p>
        <p>Quando ii qui ludum administrant non solum in mappa, sed etiam in rotis invisibilibus lobbii ludere incipiunt, partita bellum esse desinit et theatrum vanitatum fit.</p>
        <p>Carioca phaenomenon cum lucido contemptu observat:</p>
        <p>Yat0 et Derp, auctoritate informali investiti, ab organizatoribus ad systematicos beneficiarios transierunt.</p>
        <p>Aequilibria manu invisibili formata. Distributiones biasatae. Adiustamenta "technica" quae curiose semper eos favent.</p>
        <p>Et tamquam coronatio huius distortionis:</p>
        <p>Notae inflatae. Ranking indulgentes. Top 1 et Top 2 tamquam throni autoattributi occupati.</p>
        <p>Non propter consistentiam historicam. Non propter dominium probatum. Sed propter contrôle narrativum.</p>
        <p>Quia quando aestimator se ipsum iudicat, tabella mensurare desinit — legitimare incipit.</p>
        <p>Hoc organizationem vocant. Criterium vocant. Consensum vocant.</p>
        <p>Carioca nomine recto vocat: auto-beneficium sub specie impartialitatis.</p>
        <p>Et est etiam peccatum subtilius:</p>
        <p>Praetensio monopolizandi sapientiam HOI4.</p>
        <p>Quasi auctoritas administrativa auctoritatem strategicam generaret. Quasi lobbium gerere micro produceret. Quasi tabellam edere macro crearet.</p>
        <p>Sed Carioca veritatem incommodam recordat:</p>
        <p>Sapientia non declaratur. Sapientia demonstratur.</p>
        <p>Non ex munere nascitur. Ex executione nascitur.</p>
        <p>Dum aliqui se in summum per editionem et influentiam ponunt, Carioca per unicum criterium quod fraudem non admittit exsurgit: performanciam in ludo reali.</p>
        <p>Quia nulla manipulatio picks, nulla inflatio notae, nulla architectura ranking test brutale partitae competitivae superat.</p>
        <p>In mappa, sophisma non est.</p>
        <p>Tank male microgeritus moritur. Oeconomia male structurata collabitur. Strategia fragilis implodit.</p>
        <p>Et ibi, ubi numeri in consequentias fiunt, vera hierarchia se revelat.</p>
        <p>Carioca tunc sententiam fert:</p>
        <p>Administrare non est dominare. Aequilibrare non est intelligere. Auto-rankingare non est probare.</p>
        <p>Quia coram Arte Belli in sua forma purissima practica, ii qui per structuram se coronant minores manent quam ille qui per realitatem se imponit.</p>
        <p>Et ita monitio Cariocae registratur:</p>
        <p>Quando administratio propter ego corrumpitur, ludus non solum aequilibrium amittit — legitimitate amittit.</p>
        <p>Quia HOI4 builds malas, dollynhos, lobbies chaoticos superare potest — sed vix superat quando arbitri in causam propriam ludere incipiunt.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo22: {
      h1: 'Caput XXII — De Iis Qui Erronee Ironizant',
      bookText: `
        <p>Et Carioca docuit de arte rara, a mediocribus male intellecta et in manibus malis letaliter periculosa: Ironia.</p>
        <p>Quia ironizare non est solum deridere. Non est sarcasmus vilis. Non est iocus in ventum chatti iactus.</p>
        <p>Vera ironia — illa digna doctrinis Socratis — est instrumentum superioritatis intellectualis. Est lamina tenuis, non malleus.</p>
        <p>Timing, praecisionem et conscientiam absolutam propriae positionis exigit. Qui ironizat sine dominio situationis humorem non producit — verecundiam producit.</p>
        <p>Quia ironia male exsequuta effectum inversum habet: pro elevando, exponit. Pro intimidando, debilitat. Pro laedendo alterum, se laedit.</p>
        <p>Carioca hanc legem invisibilem intelligit: Solum potest ironizare qui contextum iam vicit.</p>
        <p>Ironia est privilegium securi, non refugium insecuri.</p>
        <p>Quando Carioca ironizat, substantia adest. Historia adest. Auctoritas implicita adest.</p>
        <p>Chattus sentit. Lobbium intelligit. Scopus se contrahit.</p>
        <p>Sed quando lusor sine tali statura eum imitari tentat, eventus disastrosus est.</p>
        <p>Et hic Carioca exemplum classicum indicat: Yat0.</p>
        <p>Qui, temptans personam ironiae induere, solum fragilitatem post posam revelavit.</p>
        <p>Quia ironia eius dominium non portabat — laborem portabat. Non cum naturalitate emergébat — coactam sonabat. Non secabat — lapsabat.</p>
        <p>Et nihil devastantius est pro aura lusoris quam ironia quae in suo ipso nasci fallit.</p>
        <p>Quia error mechanicus corrigi potest. Build mala adaptari potest.</p>
        <p>Sed ironia malsucessa cicatricem socialem relinquit. Deiicit. Reducit. Insecuritatem denuntiat. Lobbium non parcit.</p>
        <p>Quia omnes agnoscunt, etiam in silentio: Ille qui spirituosus videri conatur sine praesentia solum suam irrelevantiam annuntiat.</p>
        <p>Et ita paradoxon crudele impletur: Ironizare male lusorem non facit iocundum — facit eum semantice dollynhum.</p>
        <p>Quia ironia est amplificator hierarchiae. In manibus Cariocae, in spectaculum intelligentiae et contemptu eleganti fit. In manibus malis, in strepitum incommodum transformatur.</p>
        <p>Carioca tunc sententiam fert: Nem toda língua nasceu para a ironia. Non omnis lingua ad ironiam nata est. Non omne ego pondus derisus sustinet.</p>
        <p>Quia ironia non est aliquid quod temptatur. Est aliquid quod sustinetur.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo23: {
      h1: 'Caput XXIII — De Iis Qui Carros Pretiosos Fabricant',
      bookText: `
        <p>Et Carioca de errore locutus est qui in fabricis mundi tamquam liturgia ignorantiae repetitur: carrus pretiosus.</p>
        <p>Quia multi, designer aperientes, enthusiasmo infantili capiuntur. Vident modulos splendentes, turres avancatas, emendationes seductivas — et credunt quemque numerum maiorem sapientiam strategicam repraesentare.</p>
        <p>Et ita nascitur creatura dilecta dollynhi: carrus obsceni pretii.</p>
        <p>Inter tales heresias una praecipue eminet — infamis Turret III.</p>
        <p>Quia pauci moduli tantam confusionem inter vires reales et vanitatem statisticam symbolizant.</p>
        <p>Dollynhus statistica spectat et dicit: "Plus breakthrough melius est."</p>
        <p>Carioca eandem statisticam spectat et rogat: "Breakthrough contra quem?"</p>
        <p>Quia est veritas quae architectis carrorum aureorum latet: Breakthrough ultra necessarium victoriam non producit — dissipationem producit.</p>
        <p>Si blindatus iam aliquid inter 1000 et 1200 breakthrough attingit, munus suum in campis belli lobbii plene implet.</p>
        <p>Sed dollynhus ibi non sistit. Modulos accumulat donec 1400… 1600… 1800 attingat. Et celebrat.</p>
        <p>Interea pretium industriale sicut herba nociva crescit. Quivis carrus pretiosior fit. Quaevis divisio tardius armatur. Quaevis clades in tragoediam logisticam fit.</p>
        <p>Et ita dollynhus exercitum reliquiarum rararum aedificat: Blindati magnifici… in copia microscopica.</p>
        <p>Quia in bello reali, mappa non rogat quam pulcher design in laboratorio erat. Solum rogat: quot divisiones ad frontem pervenerunt.</p>
        <p>Carioca tunc legem a cultoribus Turret III oblitam recordat: Efficacia extravagantiam vincit.</p>
        <p>Carrus pretio aequilibrato in decenis existere potest. In massa impugnare potest. Clades sine oeconomia paralysi pati potest.</p>
        <p>Iam carrus pretiosus quamque pugnam in periculum existentiale transformat.</p>
        <p>Ita Carioca sententiam fert: Vera ingeniositas in design blindatorum non est in cumulando breakthrough ad caelum. Est in intelligendo quando sistendum sit.</p>
        <p>Quia strategus sapiens non aedificat carrum fortissimum possibilem. Aedificat carrum satis fortem ut in copia satis exsistere possit.</p>
        <p>Cavete ergo temptationem turrium excessivarum. Quia ille qui carrum pretiosum adorat non arma belli designat. Monumentum propriae incomprehensionis pretii designat.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo24: {
      h1: 'Caput XXIV — De Iis Qui Carros Miseros Fabricant',
      bookText: `
        <p>Et Carioca etiam de extremo opposito hereseos locutus est: non carrus pretiosus, sed carrus miserabilis.</p>
        <p>Quia si aliqui per extravagantiam peccant, alii in peccatum etiam tristius cadunt — avaritiam strategicam.</p>
        <p>Sunt illi qui in designer non tamquam generales, sed tamquam rationales ingrediuntur.</p>
        <p>Et ita nascitur carrus dollynhi oeconomici: Vilis. Celeriter producibilis. Et omnino incapax pugnas vincendi.</p>
        <p>Quia hi lusores mendacio confortabili credunt: "Si vilis est, satis est producere plus."</p>
        <p>Sed oblivisountur aliquid simplex. Producere multum scobis scobem in arma non transformat.</p>
        <p>Et ita blindati miserabiles surgunt: Carri cum breakthrough anoemico, incapaces offensivae realis sustinendae.</p>
        <p>Est etiam heresia technica quam Carioca cum recurrenti stupore observat: Dollynhus qui tormentum Tank II in chassis Tank I instalat.</p>
        <p>Talis praxis ex logica paupere nascitur: puncta industrialia aliqua economizare.</p>
        <p>Sed quod in pretio economizat, in potentia ignis, penetratione et efficacia structurali amittit.</p>
        <p>Quia in mod, chassis Tank II non per libidinem existit. Emendationes profundas statisticae portat. Melior basis breakthrough. Melior integratio modulorum. Melior performance generalis.</p>
        <p>Differentia, pro eis qui systema intelligunt, brutalis est. Sed dollynhus solum numerum pretii videt — et miseriam eligit.</p>
        <p>Et tunc est etiam peccatum finale: Pars maledicta oeconomiae resourcerum.</p>
        <p>"Vide", inquiunt, "carrus meus minus consumit." Sic. Minus aciei consumit. Minus wolframii consumit. Et consumit etiam id quod munus eius principale esse deberet: breakthrough.</p>
        <p>Quia sacrificando capacitatem lineas hostiles frangendi pro aliquot unitatibus resourcerum, dollynhus non economizat. Suam ipsam offensivam sabotat.</p>
        <p>Et ita ironia crudelis revelatur:</p>
        <p>Dum adoratores carri pretiosi machinas nimis raras pro campo belli creant, adoratores carri vilis machinas nimis infirmas pro eo vincendo creant.</p>
        <p>Alii per excessum peccant. Alii per inopiam. Sed ambo in eadem virtute fundamentali strategistae deficiunt: aequilibrio.</p>
        <p>Ita Carioca sententiam fert: Oeconomia quae capacitatem pugnandi destruit non est efficacia. Est solum mediocritas sub specie prudentiae dissimulata.</p>
        <p>Et in campo belli, mediocritas non avanctat. Solum plus scobis producit pro hoste transitu.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo25: {
      h1: 'Caput XXV — De Iis Qui Autonomiam Augent',
      bookText: `
        <p>Inter omnia comportamenta in campis belli servidoris observata, pauca tantam indignationem excitant quantum actus augendi autonomiam dum puppet luditur.</p>
        <p>Pro aliquibus, mecanica ludi tantum agitur. Pro aliis, parvus actus independentiae symbolicus.</p>
        <p>Sed pro certis ducibus — praecipue pro Carioca — hoc nihil minus est quam haeresis strategica.</p>
        <p>In magno tabula belli, puppets munus clarum habent. Non sunt potentia centralis bloci. Non sunt cerebrum aliantiae. Non sunt cor industriale.</p>
        <p>Sunt, supra omnia, resource. Sive manpower, industria, logistica vel positio strategica, puppet existit ad overlord suum roborandum.</p>
        <p>Overlord protegit. Puppet contribuit.</p>
        <p>Quando hoc aequilibrium frangitur, non est solum electio politica — est disastrum militare.</p>
        <p>In certa partita, Carioca de Regno Unito ludebat, exercitum suum et vires circa imperium meticulose ordinans.</p>
        <p>Sicut omnis bonus lusor de UK scit, imperium non est solum territorium — est manpower.</p>
        <p>Et inter omnes dominia imperialia, nullum hac in re pretiosius est quam Raj.</p>
        <p>Exercitus britannicus igitur manpower indicum late adhibebat ad divisiones suas sustinendas. Strategia perfecte legitima et communis.</p>
        <p>Donec aliquid inopinatum accidit.</p>
        <p>Lusor Raj — Pedreiropvp — decisionem cepit. Autonomiam augere statuit.</p>
        <p>Sed consequentiae venerunt. Et statim venerunt.</p>
        <p>Quando puppet autonomiam auget, series relationum internarum mutatur.</p>
        <p>Inter has mutationes est aliquid omnino criticum: fluxus manpower disponibilis pro overlord.</p>
        <p>Et quando hic fluxus interrumpitur… exercitus sentit.</p>
        <p>Divisiones quae ante supplementa constans accipiebant simpliciter supplementis carere coeperunt. Milites qui series implere debebant non pervenerunt. Exercitus totus lente degradari coepit.</p>
        <p>Nulla pugna decisiva fuit. Nullum bombardamentum devastans fuit. Sola mutatio administrativa fuit.</p>
        <p>Et tamen eventus idem erat ac sabotago militaris.</p>
        <p>Lusor qui autonomiam auget plerumque impactum strategicum decisionis non plene intelligit. Dependentiam overlord subaestimat. Propriam independentiam detrimento coordinationis bloci praefert.</p>
        <p>Si est aliquid quod Cariocam profunde irritat, est praecipue hoc genus comportamenti.</p>
        <p>Non quia autonomia mecanica prohibita sit. Sed quia frequentissime pessimo momento adhibetur.</p>
        <p>Dum overlord frontes ordinat, instrumenta producit et oppugnationes planificat, puppet experimentum politicum quod omnem structuram militarem destabilizat efficere statuit.</p>
        <p>Pro Carioca, hoc non est solum error. Est sabotago involuntariae proximum.</p>
        <p>Ita regula non scripta surgit, inter veteranos servidoris silenter repetita:</p>
        <p>Si puppet ludis, bis cogita antequam autonomiam augeas.</p>
        <p>Quia dum pro te parvus passus versus independentiam videtur… pro overlord tuo, collapsem silentum exercitus integri significare potest.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo26: {
      h1: 'Caput XXVI — De Pertinacibus Superior Firepower',
      bookText: `
        <p>Inter diversos errores strategicos per historiam servidoris commissos, pauci tam persistentes sunt quam comportamentum eorum qui <strong>in absolutamente quavis situatione Superior Firepower adhibere insistunt</strong>.</p>
        <p>Non refert natio. Non refert munus. Non refert contextus strategicus.</p>
        <p>Pro hoc genere lusoris, solutio semper eadem videtur esse: <strong>Superior Firepower.</strong></p>
        <p>Et inter celeberrimos representantes huius scholae invenitur <strong>Largatius</strong>, cum nota turba sua ex servidoribus <em>historical</em> oriunda.</p>
        <p><strong>Superior Firepower non est doctrina mala.</strong> Immo contrario.</p>
        <p>In certis situationibus, efficacissima est. Eius bonuses <strong>soft attack, hard attack et buffs pro infanteria et artileria</strong> divisiones in veras machinas damni transformare possunt.</p>
        <p><strong>Romania</strong>, exempli gratia, ea uti potest sine ullo scandalo strategico.</p>
        <p>In hoc contextu, <strong>Superior Firepower sensum habet</strong>.</p>
        <p>Problema incipit quando certi lusores eam tamquam <strong>responsionem universalem ad omnia</strong> tractare incipiunt.</p>
        <p>Quaeque natio intra ludum quodammodo <strong>ut cum certis generibus doctrinae melius operetur formata est</strong>.</p>
        <p>Germania caracteres naturales habet qui <strong>Mobile Warfare</strong> favent. Unio Sovietica saepe multum ex <strong>Mass Assault</strong> proficit.</p>
        <p>Hae synergiae non casu existunt. Oeconomiam nationis, capacitatem industrialem, disponibilitatem manpower et munus strategicum reflectunt.</p>
        <p>Omnia haec ignorare ad doctrinam eligendam solum quia <strong>"plus attack habet"</strong> error est qui solum ut <strong>pigritia intellectualis strategica</strong> describi potest.</p>
        <p>Mobile Warfare non solum ad numeros maiores dandos existit. Existit ad <strong>carros lineas frangendos et breccas cum efficacia explorandas</strong>.</p>
        <p>Hanc logicam pro doctrina ad infanteriam maxime conversa commutare saepe significat <strong>potentiale offensivum integrae nationis omnino destruere</strong>.</p>
        <p>Si exempla priora iam dubia videntur, est casus qui ad absurdum accedit: <strong>Canada.</strong></p>
        <p>Intra meta servidoris, Canada munus perspicuum habet: <strong>tanks facere</strong>. Est simpliciter <strong>munus naturale nationis intra agmen alliatum</strong>.</p>
        <p>Et tamen Largatius unum ex momentis incomprehensibilissimis in servidore visis producere potuit:</p>
        <p>Canadam accepit. Et <strong>Superior Firepower</strong> elegit. Doctrinam in <strong>infanteriam et artileriam intentam</strong>. Pro natione cuius responsabilitas principalis est <strong>tanks producere et operare</strong>.</p>
        <p>Hoc momento specifico, multi vetrani <strong>collapsem intellectualem strategicum completum</strong> testati sunt.</p>
        <p>Curiosissimum est, etiam quando eventa non apparent, hos lusores electiones suas raro reconsiderare.</p>
        <p>Clades accidunt. Offensivae deficiunt. Carri infra expectata performant. Et tamen conclusio numquam est: "Fortasse doctrina erronea est."</p>
        <p>Contra. Responsio plerumque est: "Plus attack defuit." Ita cyclus pergit.</p>
        <p>Pro eis qui artem Micro studunt et praticant, haec mentalitas peculiariter frustrans est.</p>
        <p>Carri a breakthrough, mobilitate, capacitate explorationis et organizatione adaequata dependent.</p>
        <p>Quando lusor hanc synergiam deliberate ignorat, ille <strong>potentiale propria unita deliberate limitat</strong>.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo27: {
      h1: 'Caput XXVII — De Iis Qui Acies Inf Only Aedificant',
      bookText: `
        <p>In <strong>Capite XXVI</strong>, genus quoddam lusoris specificissimum observavimus: ille qui nationes ignorat et doctrinas tamquam superstitionem eligit.</p>
        <p>Sed est error adhuc profundior. Error qui pro Carioca fere <strong>collapsem completum comprehensionis belli intra ludum</strong> repraesentat.</p>
        <p>Est phaenomenon notum ut: <strong>builds inf only.</strong></p>
        <p>Vel, verbis simplicibus: <strong>exercitus integri sine carris.</strong></p>
        <p>Carioca iam multos exercitus vidit. Aliquos bonos. Aliquos terribiles.</p>
        <p>Sed est aliquid peculiariter perturbans in exercitu magnae potentiae aperto… et in eo <strong>nullum carrum relevans in productione</strong> inventum.</p>
        <p>Divisiones infanteriae. Plus infanteriae. Et adhuc plus infanteriae. Quasi bellum modernum in annum MCMXVI magice transportatum esset.</p>
        <p>Infanteria, sane, munus suum habet. Lineam tenet. Territorium occupat. Frontes immensos sustinet.</p>
        <p>Sed quando momentum decisivum belli adest — <strong>lineam hostilem frangere</strong> — est instrumentum quod semper apparet: <strong>Carri.</strong></p>
        <p>Sine eis, exercitus pugnare potest. Sed saepe <strong>vincere non potest</strong>.</p>
        <p>Ratio post build inf only fere semper eadem est: Infanteria vilis est. Infanteria minus industria utitur. Ergo, si satis infanteriae aderit… eventualiter hostis frangitur.</p>
        <p>Et Carioca hanc logicam cum certa curiositate observat. Quia detail valde importante ignorat.</p>
        <p>Quando duo exercitus gigantes infanteriae collidunt, raro rumptura decisiva accidit. Quod accidit multo praedicabilius est: <strong>Frons congelat.</strong></p>
        <p>Basta ut una pars paucas divisiones blindatas bene adhibitas habeat ut tota illa murus infanteriae inveniat, sero nimis, quid significet <strong>breakthrough</strong>.</p>
        <p>Infeliciter, pauci lusores hoc phaenomenon tanta consistentia illustrant quam <strong>Largatius</strong>.</p>
        <p>Largatius <strong>Germaniam</strong> accepit. Nationem cuius ipsa identitas strategica circa <strong>bellum mobile, blitzkrieg et carros</strong> girat.</p>
        <p>Et tunc venit decisio: <strong>Inf only.</strong> Nullus labor realis in blindatis. Nulla vis rupturae. Solum infanteria.</p>
        <p>Et quasi hoc non sufficeret, doctrina electa erat: <strong>Superior Firepower.</strong></p>
        <p>Germania sine carris, cum doctrina in infanteriam intenta. Carioca hoc observavit eodem modo quo medicus aliquem diagnosi obviae insistenter ignorandae observat. Sine stupore. Sed cum certa deceptione.</p>
        <p>Aliquanto post, Largatius <strong>Unionem Sovieticam</strong> accepit. Doctrina electa fuit <strong>Mass Assault</strong>, quod in theoria aliquam logicam habet. Sed erat detail: <strong>Carri adhuc aberant.</strong></p>
        <p>Iterum, strategia clara erat: Oceanus infanteriae. Multa organizatio. Multa gens. Sed nullum aes quod pressionem in avancam realem transformare posset.</p>
        <p>Sed fortasse momentum omnium curiosissimum accidit quando Largatius <strong>Canadam</strong> accepit.</p>
        <p>Canada <strong>tanks facit</strong>. Haec est eius munus naturale intra structuram aliatam. Sed iterum eadem strategia surrexit: <strong>Inf only.</strong></p>
        <p>Hoc momento, Carioca solum caput nutavit.</p>
        <p>In fundo, builds inf only ex confusione valde simplici nascuntur: confusione inter <strong>quantitatem</strong> et <strong>capacitatem</strong>.</p>
        <p>Sed nulla quantitas infanteriae id quod carri in campum belli afferunt complete substituit: breakthrough, concentrationem impetus, mobilitatem et capacitatem breccas explorandas.</p>
        <p>Infanteria bellum sustinere potest. Sed saepe carri sunt qui <strong>vincunt</strong>.</p>
        <p>Et ita, de tempore in tempus, Carioca alium ex his exercitibus invenit. Et eos spectat eodem vultu quo dux equitum exercitum ad proelium euntem spectaret… <strong>sine equis</strong>.</p>
        <p>Quia pugnare possibile est. Sed vincere… alia historia est.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo28: {
      h1: 'Caput XXVIII — De CAS',
      bookText: `
        <p>Inter omnia arma moderna in campo belli disponibilia, pauca tantam admirationem — et tantam confusionem — inspirant quantum <strong>CAS</strong>, famosus <em>Close Air Support</em>.</p>
        <p>Carioca non est hostis CAS. Immo contrario.</p>
        <p>Scit optime quod, intra mod <strong>GDU</strong>, CAS ignorare est fere suam ipsam sententiam mortis subscribere.</p>
        <p>Divisiones sub continuo bombardamento instrumenta amittunt. Organizationem amittunt. Pugnas amittunt quae, in terra pura, sustinere potuissent.</p>
        <p>Verbis simplicibus: <strong>sine CAS, moreris.</strong></p>
        <p>Sed sicut accidit cum omnibus armis potentibus, linea perspicua est inter <strong>CAS cum intelligentia adhibendum</strong> et <strong>CAS in religionem strategicam transformandum</strong>.</p>
        <p>Regula extremo simplex intra mod GDU existit. Numerus maximus <strong>CAS qui in pugna in regione aerea participare potest est 400</strong>.</p>
        <p>Non 600. Non 800. Non 1200. <strong>Quadringenti.</strong></p>
        <p>Hoc significat quod post hunc numerum, CAS additionales simpliciter <strong>in pugnam terrestrem non ingrediuntur</strong>.</p>
        <p>Volantes manent. Combustibilem consumunt. Et <strong>ab hoste deiiciuntur</strong>. Sed nihil ad proelium conferunt.</p>
        <p>Et tamen, de tempore in tempus, aliquis surgit qui hanc realitatem omnino ignorare statuit.</p>
        <p>Exemplum peculiariter famosum est <strong>Mr. Hammer</strong>, qui curium curiosum habet <strong>multo plus quam 400 CAS in unam regionem</strong> effundendi, quasi numeri infiniti damnationem infinitam automatice crearent.</p>
        <p>Et Carioca hoc eodem modo videt quo aliquis lusorem scacci tres turres simul movere temptantem observaret. Cum mixtione confusionis… et quodam taedio.</p>
        <p>Quia eventus semper idem est. <strong>CAS extra moritur.</strong> Sine ullo beneficio additali.</p>
        <p>Sed est error etiam gravior quam nimium CAS ponere. Est credere quod <strong>CAS omnia solvat</strong>.</p>
        <p>CAS pugnas vincere iuvat. Sed CAS <strong>carros non substituit</strong>. Breakthrough non creat. Breccas non explorat. Victorias locales in avancas strategicas non transformat.</p>
        <p>Sine blindatis, CAS saepe pugnam longam… in <strong>pugnam longam cum aeroplanis supra bombardantibus</strong> solum transformat.</p>
        <p>Sed etiam inter errores CAS involutos, est episodium quod Carioca cum peculiari incredulitate meminit.</p>
        <p>In certa partita, <strong>Morto de Germania ludebat</strong> durante <strong>Barbarossa</strong>.</p>
        <p>Initio campaniae, vis aerea germanica difficultates contra fighters hostiles patiebatur.</p>
        <p>Sed tunc Morto ideam habuit: <strong>Morto plus quam 100 fabricas militares ex productione fighters removit. Et eas fabricas in CAS posuit. Durante ipsa Barbarossa.</strong></p>
        <p>Ratio fuisse videtur: "Si CAS divisiones destruit… tunc plus CAS problema solvet."</p>
        <p>Est solum parvum detail quod quivis dux aerius celeriter discit: <strong>CAS superioritate aerea ad bene operandum indiget.</strong></p>
        <p>Quando caelum rubrum est, CAS enormiter patitur. Participa minus in pugnis. Cum facilitate deiicitur. Et: <strong>CAS in caelo rubro in pulverem fit.</strong></p>
        <p>Et sicut Carioca iam expectabat: Sine productione sufficiente fighters, Germania contrôlem aeris perdere coepit. Sine contrôle aeris, CAS in numeris absurdis mori coepit.</p>
        <p>Morto sine fighters mansit. Deinde sine CAS mansit. Et brevi post… <strong>sine ludo mansit.</strong></p>
        <p>CAS una ex armis maxime momenti mod manet. Eam ignorare error est. Sed eam absolutizare error aeque magnus est.</p>
        <p>CAS fighters ad caelum protegendum, carros ad lineas frangendas et exercitus terrestres capaes victos explorandos indiget.</p>
        <p>Sine his, etiam milia aeroplanorum solum modum valde caram belli amittendi fiunt.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo29: {
      h1: 'Caput XXIX — De Paracadistarum Usu',
      bookText: `
        <p>Inter omnes creaturas quae campos belli huius mod habitant, paucae tam peculiares sunt quam sic dicti <strong>paratroopers</strong>.</p>
        <p>Observatori incauto, nomen imagines militum e caelo cadentium suggerere potest. Talis imago, quamvis gloriosa, in hoc contextu omnino erronea est.</p>
        <p>In hoc mod, paratroopers <strong>airdrops non faciunt</strong>. Non e caelo surgunt. Non.</p>
        <p>Illi <strong>lineam tenent.</strong></p>
        <p>Et hoc tam efficaciter faciunt ut unam ex metis dominantissimis et irritantissimis in servidore visis creaverint.</p>
        <p>Secretum paratrooperum in una statistica est: <strong>organizatione</strong>.</p>
        <p>Dum infanteria communis valores organizationis respectabiles habet, paratroopers valores attingunt quos multi simpliciiter absurdos iudicaret. Non rarum est divisiones <strong>100 organizatione</strong> superantes videre.</p>
        <p>Et organizatio, sicut omnis generalis expertus scit, vera moneta belli est.</p>
        <p>Divisio impetum, defensionem et instrumenta sophisticata habere potest — sed sine organizatione celeriter a proelio fugit.</p>
        <p>Paratroopers exacte oppositum faciunt. Illi <strong>aeternitatem ad frangendum tenent</strong>.</p>
        <p>Quando pugna in regionibus strategicis deserti incipit, phaenomenon curiosum se manifestat.</p>
        <p>Carri Axis cum sua massa aerei, breakthrough et soft attack pleni, expectant infanteriam hostilem celeriter opprimi. Sed tunc aliquid mirum accidit.</p>
        <p>Paratroopers <strong>non moriuntur</strong>. Vel potius, moriuntur… sed non satis celeriter.</p>
        <p>Propter suum altum nivelum organizationis, <strong>divisio quae modo recessit frequenter ad lineam redit antequam impetus hostilis rumptura finire possit</strong>.</p>
        <p>Ita cyclus fere infinitus incipit: Paratrooper in pugnam ingreditur. Organizationem lente amittit. Recedit. Organizationem recuperat. Ad pugnam redit. Interea, alius paratrooper locum eius assumit.</p>
        <p>Eventus est <strong>rotatio constans divisionum</strong>, lineam multo diutius quam normaliter possibile esset vivam mantenens.</p>
        <p>Carri ad <strong>lineas celeriter frangendas</strong> projecti sunt. Sed quando paratroopers confortant, haec logica fallit.</p>
        <p>Pugna, quae horas vel dies durare debuit, in aliquid multo longius transformatur. Interdum <strong>hebdomadae continuae proelii</strong>.</p>
        <p>Quando cum bonis positionibus defensivis combinantur, paratroopers id creant quod multi lusores vocaverunt <strong>lineam aeternam</strong>.</p>
        <p>Divisiones in proelium et ex proelio constanter ingrediuntur et egrediuntur. Organizatio sicut aestus surgit et cadit. Sed linea <strong>non frangitur</strong>.</p>
        <p>Multi lusores paratroopers spectant et errorem fatalem committunt: solum impetum vel defensionem eorum analysant.</p>
        <p>Vera vis eorum est in <strong>tempore quod proelium vivum mantenere possunt</strong>.</p>
        <p>Dum impugnans lineam celeriter frangere debet, paratroopers exacte contrarium faciunt: <strong>pugnam quam maxime prolongant</strong>.</p>
        <p>Et in bello prolongato, tempus frequenter defensori favet.</p>
        <p>Ita unum ex maximis paradoxis huius mod nascitur. Unitas appellata <strong>paratrooper</strong> in unam ex <strong>unitatibus defensivis pertinacissimis ludi</strong> facta est.</p>
        <p>Illi ibi simpliciter manent. Firmi. Persistentes. Frangere recusantes.</p>
        <p>Et interdum, in bello, <strong>hoc est omne quod ad totum exercitum sistendum necessarium est</strong>.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo30: {
      h1: 'Caput XXX — De Iis Qui Africam Non Transgrediuntur',
      bookText: `
        <p>Inter multas maledictiones quae campos belli mod obsidunt, paucae tam persistentes — et tam humiliantes — sunt quantum illa quae lusores Axis ab Africa capienda impedit.</p>
        <p>Sic, Africam capere. Non agitur de America invadenda, nec Urales transgrediendo. Agitur de campania colonialem in deserto vincere ubi, in theoria, Axis omnes conditiones triumphandi habet.</p>
        <p>Et tamen, repetitis vicibus, generatione post generationem lusoribus, historia se repetit. Axis… Africam non transgreditur.</p>
        <p>Haec non est defectus isolatus. Est phaenomenon.</p>
        <p>Lusores experti, veterani innumerabilium partitarum, iam huius pestis victimae fuerunt. Inter eos inveniuntur: <strong>Yato</strong>, <strong>Brazilian</strong>, <strong>Gamemisto</strong>, <strong>Derp</strong> et <strong>Morto</strong>. Omnes, aliquando, ab eodem inimico invisibili victi sunt: incapacitate collectiva concludendi id quod fere automatica victoria esse deberet.</p>
        <p>Triumphus Africae Axi <strong>spiritum nationalem essentialem</strong> concedit, cuius bonuses maximi momenti pro reliquo bello sunt. Africam amittere non est solum territorium amittere. Est futurum belli compromittere.</p>
        <p>Omnia mutaverunt quando lusor nominatus <strong>Badech</strong> strategiam introduxit quae aequilibrium regionis omnino alteraret: famosum <strong>meta paratrooperum britannicorum</strong>.</p>
        <p>Paratroopers <strong>airdrops non faciunt</strong>. Hic, essentialiter ut <strong>infanteria cum organizatione superiori</strong> operantur.</p>
        <p>Hae divisiones capacitatem extraordinariam habebant <strong>lineas tenendi</strong>, <strong>proelium rotandi</strong> et <strong>pressionem constantem mantenendi</strong>.</p>
        <p>Lusores ut <strong>Carioca</strong> et <strong>Gamemisto</strong> celeriter potentiale strategiae perspexerunt et eam systematice explorare coeperunt. Eventus devastans fuit.</p>
        <p>In multis sessionibus servidoris, eventus cum alarmatia frequentia repetere coepit: Axis lineas aliatas in deserto rumpere non poterat.</p>
        <p>Si estimatio approximata fieret, in decem partitis fortasse solum <strong>tres victoria Axis</strong> terminarentur.</p>
        <p>Phaenomenon tam evidens factum est ut mutationes in ipso mod provocaret.</p>
        <p>Etiam ante rebalancementum, multi lusores perspicere coeperunt problema fortasse non solum in strategia hostili esse. Fortasse erat… in ipso Axe.</p>
        <p>Incapacitas Africam capiendi aliquid incommodum revelavit: defectum chronicum in tribus rebus fundamentalibus ludi.</p>
        <p><strong>Micro.</strong> Motus malus copiarum, impetus male coordinati, defectus rotationis efficientis divisionum.</p>
        <p><strong>Macro.</strong> Distributio inadequata productionis, defectus investitionis correctae.</p>
        <p><strong>Adaptabilitas.</strong> Fortasse maximum omnium problema. Etiam post diversas partitas exacte eandem metam confrontando, multi lusores eisdem solutionibus quae iam innumeras vices deficerant insistere pergebant.</p>
        <p>Ad positiones defensivas frangendas — praecipue in terris difficilibus ut Africa — <strong>carri Axis breakthrough multo et soft attack alto indigent</strong>. Sine his, in arcas metalli caras, incapaces ullam brecham aperire, convertuntur.</p>
        <p>Ita genus quoddam ioci interni in servidore natum est. Legenda. Maledictio.</p>
        <p>Semper quando nova campania incipit, aliquis inevitabiliter rogat: <em>"Num hac vice Axis Africam transibit?"</em></p>
        <p>Interdum transit. Sed saepe… non transit.</p>
        <p>Et ita desertum victimas suas recipere pergit, omnibus persuasis <strong>hanc vicem diversam fore</strong>. Donec, sero nimis, discant Africam non parcere.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo32: {
      h1: 'Caput XXXII — Qui Romaniam Invadunt',
      bookText: `
        <p>Et Carioca de arte locutus est quam pauci considerare audent: invasionem navalem Romaniae.</p>
        <p>Quia oculis dollynhi communis, talis idea absurda videtur. "Quomodo per mare invadere id quod in terra pugnatur?" rogant, iam spiritu victi antequam mappam aperuerint.</p>
        <p>Sed Carioca non solum frontem observat. Negligentiam observat.</p>
        <p>Quia ubi lusor attentus litus videt, dollynhus solum ornamentum geographicum videt.</p>
        <p>Et ita prima lex invasionis romanae revelatur: Portus sine guarnisone invitatio est.</p>
        <p>Dum strategi tabellae divisiones perfectas pro Bessarabia calculant, aliquid multo simplicius oblivisountur: equus sovieticus silenter in litus Maris Nigri descendens.</p>
        <p>Non vis invasionem potentam facit. Surprisio facit.</p>
        <p>Quia equus non venit ad pugnas gloriosas vincendas. Venit ad vulnera aperienda.</p>
        <p>In portus neglectos descendit, urbes litorales capit et tamquam incendium in horreo derelicto avanctat. Non totam nationem capere debet — solum existere debet.</p>
        <p>Quia instanti quo nuntiatio in angulo telae apparet, dollynhus romanus terrorem logisticum experitur.</p>
        <p>Fabricae interruptae. Lineae supply minatae. Divisiones a fronte principali aversae. Imperium confusum.</p>
        <p>Et tunc bellum naturam mutat. Quod ante frons solida erat in theatrum distractionum fit.</p>
        <p>Romania, quae laborem Axis oleo et industria sustinere debebat, contra phantasmata litoralia pugnare incipit. Bulgaria, complicis suae negligentiae, in idem chaos trahitur.</p>
        <p>Omne hoc provocatum non per carros graves, sed per paucos equos et ducem qui aliquid simplex intellexit: dollynhus raro id defendit quod impossibile iudicat.</p>
        <p>Et hic manobrae ingeniositas residet.</p>
        <p>Non est solum occasio — semper deliciosa — nationem imparatam capitulandi. Est effectus collateralis qui bellum staticum in turbulentiam strategicam transformat.</p>
        <p>Et ita Carioca veritatem quam multi oblivisountur recordat:</p>
        <p>Bellum non solum ubi hostis pugnare expectat vincitur.</p>
        <p>Interdum vincitur ubi recusavit credere aliquem audere apparere.</p>
        <p>Quia ille qui Romaniam mari invadit non solum territorium quaerit. Quaerit aliquid multo pretiosius:</p>
        <p>collapsem fiduciae adversariae.</p>
        <p>Et quando haec fiducia frangitur, nec maximus exercitus errorem fatalem qui eam genuit occultare potest: Portum vacuum ante mare possibilitatum plenum.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo33: {
      h1: 'Caput XXXIII — De Iis Qui Ludum Detinent',
      bookText: `
        <p>Est genus lusoris quod Carioca peculiariter curiosum iudicat.</p>
        <p>Non sunt incompetentes. Non sunt novitii. Saepe sunt lusores experti, perfecte capaces identificandi quando bellum iam decisum est.</p>
        <p>Et tamen… aliquid mirum faciunt. Ludum detinent.</p>
        <p>Non propter necessitatem strategicam. Non propter incapacitatem militarem.</p>
        <p>Sed propter rationem quae, pro eis, profunde nobilis videtur: "Ludum magis excitantem reddere."</p>
        <p>Et semper quando Carioca hanc sententiam audit, iam exacte scit quid secuturum sit.</p>
        <p>Sunt momenta intra partitam in quibus eventus belli iam evidens est. Frons fregit. Hostis carros suos amisit. Oeconomia collabitur. Caelum amissum est.</p>
        <p>Hoc puncto, bellum non iam deciditur. Iam decisum est.</p>
        <p>Quod restat solum est processus inevitabilis opus perficiendi. Avancandi. Circumdandi. Concludendi.</p>
        <p>Sed certi lusores credunt bellum decisum prolongandum esse ut magis excitans fiat.</p>
        <p>Offensivas decelerant. Avancas sistunt. Obsidiones retinent. Tempus hosti dant ad aliquid reorganizandum quod iam omnino destructum erat.</p>
        <p>Et Carioca hoc comportamentum cum quaestione valde simplici observat: excitans pro quibus?</p>
        <p>Quia partita multiplayer non est historia ab uno duce scripta. Decem homines involuit. Homines tempore limitato. Homines qui horas diei sui ad ludum reservaverunt.</p>
        <p>Quando aliquis ludum iam victum detinere statuit, non solum bellum fictum prolongat. Tempus omnium prolongat.</p>
        <p>Et pro Carioca, hoc non est drama. Solum dissipatio temporis est.</p>
        <p>Inter lusores qui interdum in hoc comportamentum cadunt, nomen quoddam cum certa frequentia apparet: Yato. Praecipue quando de Unione Sovietica ludit.</p>
        <p>Germania clarissime imbecilla est. Sine carris relevantibus. Sine vi aerea sufficiente. Germania cathedratica.</p>
        <p>Hoc puncto, Unio Sovietica omnia instrumenta ad simpliciter avancandos et bellum finiendum habet.</p>
        <p>Sed tunc decisio surgit. Paululum detinere. Ludum "respirare" sinere. Plus tensionis creare.</p>
        <p>Et Carioca hoc vultu extremo simplici observat.</p>
        <p>Bellum intra ludum iam satis drama naturaliter habet. Obsidiones inopinae. Frontes quae franguntur. Plana quae deficiunt. Victoriae improbabiles. Omne hoc naturaliter accidit. Non est necesse excitationem artificialiter fabricare.</p>
        <p>Quando una pars manifeste vicit, actio recta non est bellum in scenam theatri transformare. Actio recta est eam finire. Celeriter. Munde. Et ad sequentem ludum procedere.</p>
        <p>Et quando aliquis ludum detinere statuit solum ad artificialem excitationem prolongandam, Carioca in eo non magnam strategiam videt.</p>
        <p>Videt aliquid multo simplicius.</p>
        <p>Ducem qui oblitus est obiectivum belli non esse eam dramaticam reddere. Obiectivum est eam vincere.</p>
        <p>Et quando victoria iam garantita est… Quod restat facere est solum arcam claudere.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo34: {
      h1: 'Caput XXXIV — De Iis Qui Albert Speer et Total War Dant',
      bookText: `
        <p>In capite priori, phaenomenon curiosum observavimus: lusores qui, percipientes bellum iam decisum esse, victoriam decelerare eligunt ut ludum suposito excitantiorem reddant.</p>
        <p>Iam idea mira erat. Sed aliqui lusores hoc comportamentum ad gradum adhuc absurdiorem perducere potuerunt.</p>
        <p>Quia micro sistere adhuc relative passivum est. Nunc aliquid multo peius imaginare. Imaginare hostem directe iuvare.</p>
        <p>In certis circulis servidoris, idea surrexit quam Carioca initio iocum esse credidit.</p>
        <p>Logica simplex erat. Si Germania nimis celeriter perdebat… fortasse bona idea erat Germaniae bonuses dare.</p>
        <p>Non territorium capiendo. Non pugnas amittendo. Sed deliberate eventus et decisiones activando quae hostem roborant.</p>
        <p>Et ita una ex strategiis curiosissimis in servidore visis nata est: invasio equi Berolinum.</p>
        <p>Planum hoc modo operatur. Lusor alliatus unam divisionem — plerumque equitatum — accipit et parvam invasionem in territorio germanico efficit.</p>
        <p>Obiectivum non est nationem capere. Obiectivum est simpliciter certas conditiones internas Germaniae activare quae lusori germanico decisiones ut Albert Speer et Total War accedere permittunt.</p>
        <p>Decisiones quae bonuses industriales extremo fortes concedunt: +30% efficiency cap, incrementum industriale, emendationes significativas in productione belli.</p>
        <p>Bonuses gigantescos. Bonuses qui manifeste pro situationibus desperatis Germaniae cogitati erant. Et nunc ab ipso hoste activabantur.</p>
        <p>Et sicut accidit cum multis ideis peculiaribus intra servidorem, est nomen quod frequenter cum eis associatur: Yato.</p>
        <p>Et ita, in partita specifica, theoria in praxim posita est.</p>
        <p>Germania — a Morto controlata — iam in situatione extremo infirma erat. Germania cathedratica. Hostis qui probabiliter celeriter concludendus fuisset.</p>
        <p>Sed tunc venit planum: ei Speer demus.</p>
        <p>Repente, Germania quae iam in collapsem esse debebat seriem bonuum absurdorum accepit. Efficacia industrialis aucta. Incrementum productionis. Total War. Speer.</p>
        <p>Et omne hoc non quia Morto aliquid extraordinarium ceperat. Sed quia ipse hostis adiuvare statuit.</p>
        <p>Eventus erat exacte quid quivis dux minime pragmaticus praevidisset.</p>
        <p>Bellum quod probabiliter anno 1942 finiret… artificialiter ad annum 1944 prorogatum est.</p>
        <p>Sed est aliquid adhuc curiosius in hac strategia. Assumit omnia perfecte accidere.</p>
        <p>Certo momento eiusdem partitae, Strake, de India ludens, famosam invasionem equi Hamburgi effecit ad bonuses germanicos activandos adiuvandos.</p>
        <p>Sed tunc alia decisio splendida surrexit. Brazilian, de Francia ludens, 40 divisiones carrorum in Daniam movere statuit. Quadraginta carri. In Dania.</p>
        <p>Et sicut frequenter accidit quando plana mirifica executionem dubiam inveniunt… operatio defecit.</p>
        <p>D Day defecit, generans debuff -20% factory output pro Alliatis. Triginta divisiones carrorum in temptamine fracto perditae.</p>
        <p>Et simul, Germania Albert Speer, Total War et bonuses industriales massivos accepit.</p>
        <p>Dum Alliati propriam oeconomiam debilitabant et carros amittebant… Germania buffs gigantescos accipiebat.</p>
        <p>Et hic est ironia quam Carioca peculiariter interesantem iudicat.</p>
        <p>Hae strategiae semper eodem argumento iustificantur: "ludum excitantiorem reddet." Sed frequenter exacte contrarium accidit.</p>
        <p>Ludus desinit esse bellum organicum inter duos latera vincere temptantia… et in experimentum chaoticum transformatur.</p>
        <p>In fine, nemo revera plus excitationis accipit. Solum plus horarum ludi inutilium accipiunt.</p>
        <p>Quando Carioca ducem belli cum theatro confundentem videt, solum observat. Et ad conclusionem inevitabilem pervenit.</p>
        <p>Aliqui homines revera bellum cum theatro confundunt.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo35: {
      h1: 'Caput XXXV — Hostes Vocis',
      bookText: `
        <p>Inter omnia genera lusoribus quae campum belli habitant, sunt aliqui qui simpliciter mali sunt.</p>
        <p>Lusores qui ludum non intelligunt. Lusores qui micro terribile habent. Lusores qui exercitus absurdos aedificant.</p>
        <p>Carioca de eis ante locutus est. Dollynhi. Famosa "elite HOI4".</p>
        <p>Hi lusores limitationes evidentes habent — sed est aliquid quod agnoscendum est. Illi conantur.</p>
        <p>Etiam errando, etiam atrocitates strategicas committendo, illi agmini adiuvare temptant. Et propter hoc, mire, Carioca eos tolerare potest.</p>
        <p>Sed est genus lusoris multo peius. Hic lusor non est simpliciter malus. Est aliquid multo periculosius.</p>
        <p>Ille est hostis vocis.</p>
        <p>Lusor qui deliberate statuit nullam vocem agminis sequi. Non propter defectum comprehensionis. Sed per electionem. Per rancorem. Per ego.</p>
        <p>Hic lusor non solum male ludit. Proprium agmen sabotat.</p>
        <p>Et contemptus quem Carioca pro hoc comportamento sentit aliquid difficile verbis descriptu est.</p>
        <p>Quia saltem dollynhus conatur. Hostis vocis ne id quidem facit.</p>
        <p>Plures formae sunt quibus hoc phaenomenon se manifestat. Aliqui rogata importante simpliciter ignorant. Alii omnino diversum ab eo quod conventum erat facere statuunt.</p>
        <p>Et est etiam tertia categoria: ii qui stant. Simpliciter immobiles manent. Copias non movent. Quasi protestationem silens contra proprium agmen exercentes.</p>
        <p>Eventus semper idem est. Socius qui agmen roborare debebat… in pondus mortuum strategicum transformatur.</p>
        <p>Sed inter omnia exempla quae Carioca iam testatus est, paucos gradum episodii involventes Magnum Hominem de USA ludentem attingere possunt.</p>
        <p>Status Unitae sunt, sine exaggeratione, una ex nationibus maximi momenti totius ludi. Industria. Classis. Capacitas projectionis globalis. Omnia haec USA unum ex pilariis fundamentalibus lateris alliati faciunt.</p>
        <p>Certo momento partitae, Carioca — de UK ludens — rogatum extremo simplex fecit.</p>
        <p>Vox clara fuit: "Magne Homo, classem tuam in mare pone ad invasionem Siciliae adiuvandum."</p>
        <p>Simplex. Directum. Aliquid quod quivis socius minime cooperativus faceret.</p>
        <p>Sed responsio fuit… nihil.</p>
        <p>Et non solum Carioca. Alii etiam socii temptaverunt.</p>
        <p>Leothekiller rogavit: classem americanam in Pacifico ponere ad classem iaponicam destruendam adiuvandum. Eventualiter, quando classis americana vicit pugnam, rogavit: "Iterum pugna. Classem eorum omnino occide."</p>
        <p>Sed iterum… nihil.</p>
        <p>Interea, LegioRex auxilium navale rogavit. Brazilian subsidium rogavit ad invasionem Normanniae praeparandam.</p>
        <p>Diversas voces. Diversas rogationes. Sed Magnus Homo viam silentii strategici eligere videbatur.</p>
        <p>Et sicut semper accidit quando major omnino reliquum agmen ignorare statuit, consequentiae accumulari coeperunt.</p>
        <p>Invasio Siciliae in disastrum versa est. Sine adaequato auxilio navali, Carioca raidatus est et omnes divisiones in operatione involuta amisit.</p>
        <p>Africa Australis a Iaponia capitulata est, partim quia auxilium navale necessarium simpliciter numquam apparuit.</p>
        <p>Brazilian fere omnia quae habebat movere coactus est. 20 carri gallici, qui ad Diem D parandi erant, ad capitalem gallicam in Africa defendendam dislocari debuerunt.</p>
        <p>Planum alliatum iam omnino inordinatum erat. Sed pessimum adhuc non advenerat.</p>
        <p>Magnus Homo ideam habuit. Invasionem navalem Normanniae lanceare statuit. Sine communicatione. Sine coordinatione. Sine mappam etiam spectando.</p>
        <p>Quia si spectavisset, perspexisset Brazilian illam invasionem multo ante rogaverat. Sed nunc tanki gallici moti erant. Normannia iam subsidium non habebat.</p>
        <p>Et tamen… invasio lanceata est.</p>
        <p>Exercitus americanus descendit. Sine adaequato auxilio. Sine coordinatione. Sine cobertura.</p>
        <p>Et omnino destructus est. Disastrum absolutum. Verum crimen contra micro.</p>
        <p>Carioca iam multos lusores malos vidit. Sed hostis vocis aliquid diversum est. Non solum errat. Participationem in bello collectivo quod ipse ludus exigit recusat.</p>
        <p>Et quando major ita agere statuit, eventus raro solum error tacticus est. Est disastrum strategicum completum.</p>
        <p>Quia in ludo agminis… Nihil periculosius est quam socius qui socius esse desinere statuit.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo36: {
      h1: 'Caput XXXVI — Sabotores Proprii Agminis',
      bookText: `
        <p>Sunt lusores mali. Sunt lusores limitati. Sunt etiam dollynhi, pauperes creaturae quae per campum belli sine via vagantur.</p>
        <p>Sed omnes hi, quamlibet limitati, adhuc temptant ludere.</p>
        <p>Et Carioca, quamvis cum contemptu, hoc saltem agnoscit. Quia temptare, etiam sine capacitate, adhuc forma respectus erga ludum est.</p>
        <p>Sed est genus lusoris quod omnibus his infra est. Categoria quam Carioca cum frigoritate fere scientifica observat.</p>
        <p>Sabotores proprii agminis.</p>
        <p>Et quod hanc creaturam peculiariter curiosam facit non est ignorantia. Quia ignorantia curari potest. Non est limitatio. Quia limitatio circumiri potest.</p>
        <p>Quod sabotorem definit aliquid multo mirabilius est. Discere recusat.</p>
        <p>Est genus lusoris qui omnia accipit. Absolute omnia.</p>
        <p>Carioca build explanat. Carioca template mittit. Carioca design tank mittit. Carioca in DM scribit exacte quid faciendum sit.</p>
        <p>Interdum labor tam completus est ut facile in PDF integrum transformari possit, cum quoque passu build explanato. Vel etiam PowerPoint, cum slides in quibus exacte quid producere, quando producere, et cur producere explicatur.</p>
        <p>Cognitio praeparata traditur. Manducata. Ordinata. Fere impossibilis ad fallendum.</p>
        <p>Sed tamen… Lusor ad omnia spectat. Et simpliciter statuit nihil applicare.</p>
        <p>Non quia non intellexit. Non quia non potuit. Sed quia, in propria mente, plus scire credit.</p>
        <p>Credit sapientiam possidere quam numquam demonstravit possidere.</p>
        <p>Et ita, oculis huius creaturae curiosae, Carioca — magister artis micro, aliquis cuius excellentia tam in genetica quam in intellectu se manifestat — lusor quilibet videtur. Lusor irrelevans. Consilium dispensabile.</p>
        <p>Et ita sabotator nascitur. Non ex ignorantia. Sed ex arrogantia inani.</p>
        <p>Intra hanc categoriam plures gradus existunt. Aliqui solum irritantes sunt. Alii periculosi fiunt.</p>
        <p>Sicut LegioRex. Propter rationem quae logicam omnino fugit, etiam sciens in meta mod tank destroyers obsoletos esse, eos producere pergit. Semper. Sine exceptione.</p>
        <p>Eventus sunt builds inferiores. Tanks minus efficientes. Dissipatio constans potentialis.</p>
        <p>Sed tamen… hoc genus erroris raro totam partitam destruit. Est stultitia persistens. Pertinacia fere folklorica.</p>
        <p>Infeliciter, non omnes casus tam innoxii sunt.</p>
        <p>Quia sunt lusores quorum recusatio vocem sapientiae audiendi simplicem pertinaciam superat. Et in territorium auto-sabotationis completae ingreditur.</p>
        <p>Hic duo exempla memorabilia surgunt. Magnus Homo. Et Facedamorte.</p>
        <p>Lusores qui, quando in eodem agmine apparent, plus strages causare possunt quam hostem vere competentem confrontare.</p>
        <p>Quia contra bonum hostem, saltem scimus quid expectare. Scimus eum cum intelligentia pugnaturum. Praedicabilitas existit.</p>
        <p>Etiam dollynhi proprii agminis hanc habent. Sed Magnus Homo et Face sub alia logica operantur. Non solum male ludunt. Contra proprium agmen ludunt.</p>
        <p>Magnus Homo vocem sapientiae audire recusabat simpliciter propter biram contra Cariocam.</p>
        <p>Etiam si hoc significabat cladem acceptare. Etiam si hoc significabat propriam aequam destruere. Omne hoc solum ad proprium ego conservandum.</p>
        <p>Sed tamen… est aliquis qui peior esse potest. Multo peior. Facedamorte.</p>
        <p>Creatura quae de Iaponia ludere statuit. Una ex nationibus maxime momenti axis. Natio cuius desempenho dimidium ludi definit.</p>
        <p>Minimum quod expectatur est impactus. Pressio in Pacifico. Contrôlum navalum. Capacitas bellum sustinendi.</p>
        <p>Sed Face factum efficere potest quod pauci ne imaginari quidem possent.</p>
        <p>Bellum incipit. Perdere incipit. Et tunc decisionem capit quae etiam Cariocam in silentio manere facit.</p>
        <p>Exercitum integrum simpliciter delet. In ludo competitivo. Exercitum delet. Classem. Stock belli. Omnia.</p>
        <p>Capitulatio voluntaria. Donum giganteum alliatis.</p>
        <p>Quia cum hoc alliati accessum immediatum ad centenas fabricarum iaponicarum accipiunt, dominium completum Pacifici, et libertatem totalem ad omnes copias in Europa concentrandas.</p>
        <p>Et quando Carioca talia acta observat, non solum contemptum sentit. Sentit aliquid adhuc profundius.</p>
        <p>Quia errores inevitabiles sunt. Burrice communis est. Limitatio genetica pars conditionis humanae est.</p>
        <p>Sed deliberate proprium agmen laedere statuere… Hoc etiam infra dollynhos est.</p>
        <p>Quia dollynhus limitatus est. Frequenter inutilis. Sed tamen… temptare ludum ludere conatur.</p>
        <p>Sabotator etiam conatur. Sed alio modo. Contra proprium agmen conatur.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo37: {
      h1: 'Caput XXXVII — De Iis Qui Ludum Victum Amittunt',
      bookText: `
        <p>Sunt clades quae honorabiles sunt.</p>
        <p>Clades ubi hostis simpliciter superior fuit. Ubi strategia adversaria splendida fuit. Ubi micro alterius lateris impeccabile erat et nihil faciendum erat.</p>
        <p>Carioca hoc genus cladis respicit. Dignitatem habet. Sensum habet.</p>
        <p>Et deinde est aliud genus cladis. Genus quod dignitatem non habet. Quod sensum non habet.</p>
        <p>Genus quod Carioca cum mixtione incredulitatis, irae et tristitiae philosophicae difficilis ad describendum observat.</p>
        <p>Clades eius qui omnia ad vincendum habebat. Et nihilominus perdidit.</p>
        <p>Pauci ludi in historia servidoris ad id quod illo die accidit proxime accesserunt. Ludus quem Carioca, sine exaggeratione, unum ex episodis maxime epicis — et maxime tragicis — iam testatis iudicat.</p>
        <p>Elenchus erat hic. Derp et Morto de Germania ludentes. Largatius in Sovieticis. Gamemisto in Iaponia. Facedamorte in Statibus Unitatis. Stauffen in Regno Unito. Vox Sapientiae, Carioca, in Italia.</p>
        <p>Ludus qui, compositione, iam memorabilem fore promittebat. Et fuit. Sed non modo quo Alliati expectabant.</p>
        <p>In primis actibus partitae, Axis omnia temptavit. Safari lanceatum est. Sea Lion temptatus est. Motus audaces, strategiae aggressivae, classica quaestio rapidae conversionis quam Axis frequenter ad superviventiam indiget.</p>
        <p>Et Alliati responderunt. Sovietici, in specie, vis naturae fuerunt. Avancaverunt. Berolinum attigerunt. Totum septentrionem Germaniae ceperunt, totam oram orientalem Europae, minores Balcanorum unum post alterum capitularunt. Sea Lion repulsus est. Continens Galliae ab Alliatis occidentalibus invasa et capta est.</p>
        <p>Mappam illo momento spectando, conclusio obvia erat. Ludus victus erat.</p>
        <p>Berolinum occupatum. Septentrion Germaniae sub contrôle sovietico. Oriens europaeus totus in manibus Aliatorum. Gallia in occidente recuperata. Axis circumdatus, compressus, sine spatio respirandi.</p>
        <p>Quivis spectator externus, illam mappam videns, idem diceret: solum quaestio temporis est. Et verum esset. Si aliud agmen esset.</p>
        <p>Quia tunc incepit id quod Carioca simpliciter Magna Stagnatio vocat.</p>
        <p>Avancus sovieticus — qui devastans fuerat, qui Berolinum attigerat — stetit.</p>
        <p>Non propter resistentiam germanicam extraordinariam. Non quia Axis strategiam miraculosam invenerat.</p>
        <p>Sed propter omnia quae iam in hoc libro discussa sunt. Micro tardum. Defectus guarnisonis. Adaptabilitas impedita. Reactio guttatim. Decisiones quae sero nimis veniebant.</p>
        <p>Et insuper, phantasmata capitulorum priorum redierunt ad obsidendum.</p>
        <p>Invasio equi Sovieticorum Berolinum — ille motus in Capite XXXIV detailatus — ad chaos contribuit pro eo solvendo.</p>
        <p>Et historica recusatio Largationis carros aedificandi — tam late in Capite XXVII documentata — nunc pretium suum finale exigebat. Exercitus sovieticus in theoria giganteus, sed sine necessario punch corazzato ad breccas explorandas. Colossus chartaceus infanteriam lineas penetrare temptantem dum momentum effugiebat.</p>
        <p>Avancus non accidit. Collapsus finalis Axis non venit.</p>
        <p>Et interea, in altera parte mundi, Iaponia plana sua habebat.</p>
        <p>Cum Alliatis occidentalibus distractis, cum UK et Francia in Europam intentis, classis et exercitus iaponici id quod omnis praedator quaerit invenerunt: flancum detectum.</p>
        <p>Contra-invasio iaponica lanceata est. Et inopinabile accidit.</p>
        <p>Continens gallica cecidit. Continens britannica cecidit. Stauffen et Facedamorte, qui in ludo fere iam concluso participaverant, nationes suas Iaponiae capitulantes viderunt dum Sovietici paucos passus a Berolino immobiles stabant.</p>
        <p>Sed pessimum adhuc non advenerat.</p>
        <p>Quia Largatius, singulari determinatione qua se distinguit, factum efficere potuerat quod Carioca raro in ullo ludo videt.</p>
        <p>Sovietici propriam manpower ad nihilum redegerant.</p>
        <p>Triginta milia aeroplanorum in aere. Tria milia ex latere germanico. Superioritas aerea tam absoluta ut comica esset nisi tragica esset. Et tamen, in terra, exercitus sovieticus se dissolvi coepit.</p>
        <p>Sine manpower. Sine carris ad explorandum. Sine guarnisone ad territorium captum tenendum. Divisiones quae ante avancabant retrahi coeperunt. Provinciae quae sanguine et tempore ad capiendam constiterant manus mutare coeperunt.</p>
        <p>Colossus qui Berolinum attigerat intus se dismontabat.</p>
        <p>Et Carioca omnia haec observabat cum illa sensatione specifica quam solum hoc genus ludi producere potest.</p>
        <p>Non est ira simplex. Non est solum frustration. Est aliquid propius luctui.</p>
        <p>Quia hic ludus non propter casum amissum est. Non propter splendidissimum ictum Axis amissum est. Amissum est propriis alliatis.</p>
        <p>Micro quod non venit. Carris qui numquam aedificati sunt. Guarnisoni quam nemo posuit. Reactioni quae sero nimis venit.</p>
        <p>Est verbum in sermone lusitanico quod Carioca ad hoc phaenomenon peculiariter aptum iudicat. Apostasia.</p>
        <p>Derelictio. Renuntiatio. Traditio non hosti, sed ipsis principiis quae quemque ducem regere debebant.</p>
        <p>Ars Micro non est conceptus abstractus. Non est theoria librorum. Est differentia inter territorium tenendum et amittendum. Inter brecham explorandum et claudendam sinendum. Inter manpower hostis ad nihilum redigendum et propriam ad nihilum redigendum.</p>
        <p>Et quando ea deseritur — etiam per momentum, etiam per negligentiam, etiam per pigritiam — pretium exacte hoc est.</p>
        <p>Ludus victus. Victoria quae in mappa, in statisticis, in logica belli existebat. In cladem transformata.</p>
        <p>Carioca iam ludos per incompetentiam amissos vidit. Iam ludos per ego amissos vidit.</p>
        <p>Sed est aliquid specialiter crudele in hoc genere cladis.</p>
        <p>Quia in hoc ludo, Alliati victoriam viderunt. Eam tetigerunt. Ad paucos passus ab omnibus concludendis steterunt.</p>
        <p>Et tunc eam labi sinebant. Non in manus hostis. In proprias manus vacuas.</p>
        <p>Et Carioca, mappam finalem illius ludi observans, ad conclusionem pervenit quae fortasse simplicissima totius huius libri est.</p>
        <p>Non existit clades amarior quam illa quam tibi ipse aedificasti.</p>
        <p>Et non existit lectio difficilior ad discendum quam haec:</p>
        <p>Ludum in mappa vincere non sufficit. In micro etiam vincendum est. Semper.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },


    capitulo38: {
      h1: 'Caput XXXVIII — De Iis Qui Magnas Expeditiones et Ludos Non Historicos Faciunt',
      bookText: `
        <p>Carioca cum curiositate spectat eos qui historiam reficere amant. Qui magnas clades magnasque victorias sumunt et cogitant: "melius fieri poterat." Et eunt, scaenas componunt, decisiones mutant, vias recreant.</p>
        <p>Primo solum iocus videtur. Sed non est solum hoc.</p>
        <p>Quia cum aliquis proelium, bellum vel decisionem historicam reficere conatur, res incipit videre quae prius latebant. Errorem calculi hic, nimiam fiduciam illic, electionem in calore momenti factam quae postea omnia mutavit.</p>
        <p>Carioca percipit hanc cupiditatem recreandi tempora suum valorem habere.</p>
        <p>Ducum vitia exponit qui saepe intangibiles habentur. Ostendit etiam magnos imperatores errasse. Victoriam non semper genialitatem fuisse — interdum casum. Et cladem non semper incompetentiam fuisse — interdum defectum optionis.</p>
        <p>Sed etiam periculum absconditum in hoc est.</p>
        <p>Nimis facile est praeteritum ex tranquillitate praesentis iudicare. Qui historiam reficit iam eventum novit. Iam errorem cognoscit. Iam ubi male cessit vidit. Et hoc illusionem superioritatis creat.</p>
        <p>Carioca in hoc non cadit.</p>
        <p>Intellegit praeteritum analysin utilem esse, sed solum cum humilitate venit. Quia decisio vera non cum mappa completa in manu fit. Fit in improviso, in pressione, in incognito.</p>
        <p>Sed est adhuc alius deviatio, subtilior — et fortasse periculosior.</p>
        <p>Apparet in expeditionibus magnis, sicut illae quas Yato, Legio, Brazilian, Morto, Hórman et Noxy ordinant. Expeditiones quae per saecula transcurrunt, ab Imperator: Rome usque ad aetatem Victoriae II, ubi unusquisque lusor imperium suum fictum cum cura colit.</p>
        <p>Illic iam obiectum non est vincere. Est prosperare videre.</p>
        <p>Est propriam creationem quasi rem vivam comitari — imperium quod per aetates transit, quod superat, quod crescit, quod id efficit quod lusor magnificum imaginatur.</p>
        <p>Et hoc in puncto Carioca criticus fit.</p>
        <p>Quia in hoc aliquid antiquum agnoscit — speciem kolakeiae.</p>
        <p>Non sensu vulgari laudis, sed sensu profondiori: praxim quae placet, quae seducit, quae animum satiat… sed quae a vero ludi recedit.</p>
        <p>Sicut certi sermones non veritatem sed plausum quaerunt, hae expeditiones non dominium quaerunt — sed satisfactionem.</p>
        <p>Et hoc, pro Carioca, deviatio ab ipsa natura Hearts of Iron IV est.</p>
        <p>Nam finis ludi non est contemplatio imperiorum imaginatorum, nec libertas electionum infinitarum. Finis alius est: victoria sub restrictione. Impositio voluntatis in ambiente hostili, limitato, imperfecto.</p>
        <p>Est pugna.</p>
        <p>Cum hic finis deseritur, lusor alium genus experientiae assuescere incipit. Experientiam ubi omnia possibilia sunt, ubi omnia permissa sunt, ubi nulla rigiditas est — solum variatio.</p>
        <p>Et hoc habitus format.</p>
        <p>Lusores sicut Legio Rex non historicum, expansivum, apertum praeferre incipiunt. Multiplicibus arboribus, multiplicibus decisionibus, multiplicibus viis gaudent. Sed dum hoc faciunt, a duritate recedunt quam ludus exigit cum ad suum limitem adducitur.</p>
        <p>Nam in ludo competitivo spatium phantasiae non est.</p>
        <p>Sunt limites.</p>
        <p>Finlandia potentia aerea non est. Industriam, scalas, conditiones non possidet. Eam in aliquid quod non est transformare iucundum esse potest — sed nihil docet de eo quod revera efficere potest.</p>
        <p>Et ibi problema est.</p>
        <p>Hae praxes non solum deviant — male exercent.</p>
        <p>Lusorem ad distractionem assuefaciunt, ad libertatem sine pretio, ad electionem sine consequentia vera. Et cum ille lusor in ambiente competitivo ingreditur, ubi unusquisque error punitur et unusquodque consilium pondus habet, imparatum se invenit.</p>
        <p>Non propter defectum intelligentiae. Sed propter habitum malum.</p>
        <p>Carioca ergo has praxes non omnino damnat. Valorem earum ut exercitium imaginationis, ut explorationem, etiam ut requiem intellegit.</p>
        <p>Sed unusquisque res suo loco ponit.</p>
        <p>Expeditiones magnae exercitium non sunt. Ludi non historici probatio non sunt. Et satisfactio victoria non est.</p>
        <p>In fine, principium reafirmat:</p>
        <p>Qui ludum dominari quaerit, ei se submittere debet — regulis eius, limitationibus eius, duritiae eius.</p>
        <p>Nam non in libertate lusor fortis formatur. In restrictione.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    capitulo39: {
      h1: 'Caput XXXIX — Victoria Schrödingeriana',
      bookText: `
        <p>Carioca quondam phaenomenon curiosum in partitis Hearts of Iron IV observavit. Phaenomenon rarum, fere mysticum, difficile explicatu et adhuc difficilius acceptu.</p>
        <p>Hoc phaenomenon Victoria Schrödingeriana appellavit.</p>
        <p>Nam sicut in celebri experimento mentali Erwini Schrödinger, ubi aliquid simul vivum et mortuum esse potest, existit in ludo lusor qui simul vincit et perdit.</p>
        <p>Est ille qui capitulatur. Exercitum amittit. Industriam amittit. Classem amittit. Patriam amittit. Ex mappa evanescit.</p>
        <p>Sed in fine, cum tabella victoriae apparet, agmen eius vicit.</p>
        <p>Et tunc quaestio oritur:</p>
        <p>Vicitne an perdidit?</p>
        <p>Carioca sine haesitatione respondet: Perdidit. Et bis perdidit.</p>
        <p>Patriam perdidit. Et utilitatem pro agmine perdidit.</p>
        <p>Vincere per convenientiam non est victoria. Est solum in latere recto esse dum omnia male fiunt.</p>
        <p>Hoc phaenomenon apparet quando lusor ludum pro patria cum ludo pro agmine confundit.</p>
        <p>Qui pro agmine ludit intelligit patriam suam solum partem esse. Qui pro patria propria ludit obliviscitur se, si cadit, totum reliquum trahere posse.</p>
        <p>Capitulari ludens de minore tragoedia parva est. Capitulari ludens de maiore disastrum strategicum est.</p>
        <p>Quia maior non est solum lusor. Maior est structura. Est oeconomia. Est logistica. Est stock. Est tempus.</p>
        <p>Quando maior cadit, non cadit solum patria. Cadit consilium integrum factionis.</p>
        <p>Carioca tunc meminit casus qui fere legendarius factus est: diei quo Vreis de Italia lusit.</p>
        <p>Et casus perfectus erat ad Victoriam Schrödingerianam studiendam.</p>
        <p>Nam omnia quae pro Italia bene cedere poterant, cesserunt.</p>
        <p>Axis in Africa Septentrionali vicit. Axis Gibraltarium cepit — res in illo mod rarissima. Classis Regni Uniti destructa est. Mare Mediterraneum fere clausum erat. Regnum Unitum in periculo reali erat.</p>
        <p>Ludus perfectus erat pro quavis Italia. Somnium lucidum strategicum.</p>
        <p>Sed bellum non cum occasionibus vincitur. Cum attentione vincitur.</p>
        <p>Vreis tunc aliquid extraordinarium efficere potuit: positionem victoriae in disastrum transformavit.</p>
        <p>Gibraltarium munire oblitus est. Alliati recuperaverunt.</p>
        <p>Territorium principale non protexit. Invasum est.</p>
        <p>Capitulatus est.</p>
        <p>Et capitulatus, aliquid etiam peius fecit: stock Germaniae exhausit et exercitum germanicum cogere debuit frontem mutare ad Italiam servandam.</p>
        <p>Id est, non solum cecidit — eis qui adhuc stabant obstitit.</p>
        <p>Hoc, pro Carioca, nomen habet:</p>
        <p>Non est clades. Non est infortunium. Non est error parvus.</p>
        <p>Est sabotatio per incompetentiam.</p>
        <p>Non intentionalis. Sed strategica.</p>
        <p>Nihilominus, Axis partitam vicit.</p>
        <p>Et tunc paradoxon nascitur.</p>
        <p>Vreis vicit. Vreis perdidit. Vreis inutilis fuit. Vreis in agmine victore erat.</p>
        <p>Ergo:</p>
        <p>Vreis simul vicit et perdidit.</p>
        <p>Victoria Schrödingeriana.</p>
        <p>Sed Carioca paradoxon regula simplici solvit:</p>
        <p>Victoria non est in tabella finali esse. Victoria est adhuc existere quando ea apparet.</p>
        <p>Qui capitulatus est et agmen vicit non vicit. Portatus est.</p>
        <p>Et portari in ludo strategiae non est honor. Est debitum.</p>
        <p>Quia aliquis expendere debuit: instrumenta, attentionem, copias, consilium et tempus ad errorem corrigendum qui numquam esse debuerat.</p>
        <p>Illo die, dum Italia cadebat, Axis non vicit propter Italiam. Vicit quamquam Italia erat.</p>
        <p>Et hoc omnia mutat.</p>
        <p>Carioca tunc lectionem finalem capitis relinquit:</p>
        <p>In ludo factionum, non sufficit cum agmine vincere. Necesse est non esse causam propter quam agmen fere perdidit.</p>
        <p>Nam pessima clades non est ab hoste vinci.</p>
        <p>Est vincere dum maximum problema proprii agminis eras.</p>`,
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
    },

    introducao: {
      h1: 'INTRODUCTIO — PRINCIPIUM SAPIENTIAE CARIOCAE',
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
      bookText: `
        <p class="capitular">In principio non erat meta, nec micro, nec logica belli. Erant solum elites hoi4, lobbiae cum dollynhis et minores auxiliatores qui multum loquebantur sine umquam vincendo.</p>
        <p>Et tunc surrexit Carioca — non ut qui iucunditatem quaerit, sed ut qui ordinem chao imponit. Non venit dulciter docere, nec fracasatos phrasibus pulchris hortari. Venit crudam realitatem ludi exponere.</p>
        <p>Bellum errorem non ignoscit. Micro ego non respicit. Build mala ante 1939 damnatio est.</p>
        <p>Sapientia Cariocae ex observatione, praxi et strage strategica nascitur. Quodque encirclement lectio est. Quodque wipe sermo est. Quodque rabies in chatto confirmatio est veritatem dolere.</p>
        <p>Hic liber non est ad debiles consolandos. Non est pro eis qui aequilibrium culpant. Non est pro eis qui de meta sine historia loquuntur.</p>
        <p>Est pro eis qui accipiunt talentum existere, geneticam momenti esse, et non omnes ad micro dominandum natos esse.</p>
        <blockquote>"Ego genetice superior sum in micro."</blockquote>
        <p class="center-text">Hic tres veritates immutabiles revelantur:</p>
        <ul class="center-list">
          <li>Aliqui nati sunt ad premendum sub pressione.</li>
          <li>Alii nati sunt ad errandum sub stress.</li>
          <li>Loqui sine victoria haeresis strategica est.</li>
        </ul>
        <p class="center-text" style="margin-top: 28px;">Per hos pergamenos lector videbit:</p>
        <ul class="center-list">
          <li>Separationem inter micro lusores et spectatores propriae cladis.</li>
          <li>Damnationem theoreticorum sine historia.</li>
          <li>Fatum eorum genetice ad bad micro destinatorum.</li>
          <li>Gloriam eorum qui mappam dominantur.</li>
        </ul>
        <p>Sed nemo hunc librum solatio quaerens ingrediatur.</p>
        <p>Nam sicut ipse Carioca declaravit, sine pietate et sine metaphora:</p>
        <blockquote>"GDU pro depressivis mors est."</blockquote>
        <p>Non quia ludus destruit — sed quia exponit eum qui numquam paratus fuit competere.</p>
        <p>Hic ego cadit. Illusio moritur. Et solum manet qui vincere discit.</p>
        <p>Debilis hunc librum nunc claudat. Fortis progrediatur.</p>
        <p>Sapientia Cariocae non omnes in bonos lusores transformat. Solum revelat quis semper fuerit.</p>`,
    },

    sumario: {
      h1: 'Index Capitulorum',
      navInicio:      'INITIUM',
      navSumario:     'INDEX',
      navIntroductio: 'INTRODUCTIO',
      summaryLinks: {
        'capitulo1':  'Caput I — De Bello, de Fastu et de Micro',
        'capitulo2':  'Caput II — De Fato Genetico Micro',
        'capitulo3':  'Caput III — De Iis Qui Loquuntur Sine Scientia',
        'capitulo4':  'Caput IV — De Logica et Efficacia',
        'capitulo5':  'Caput V — De Merito Proprio',
        'capitulo6':  'Caput VI — De Iudicio et Efficacia',
        'capitulo7':  'Caput VII — Cur Perdidimus?',
        'capitulo8':  'Caput VIII — De Conspiratoribus Contra Ludum',
        'capitulo9':  'Caput IX — De Iis Qui Lobbium Detinent',
        'capitulo10': 'Caput X — De Superbia',
        'capitulo11': 'Caput XI — De Dollynhis in Maioribus',
        'capitulo12': 'Caput XII — De Iis Qui Novas Formas in Build Inveniunt',
        'capitulo13': 'Caput XIII — De Iis Qui In Telephono Ludunt',
        'capitulo14': 'Caput XIV — De Aequilibrio',
        'capitulo15': 'Caput XV — De Inaequilibrio',
        'capitulo16': 'Caput XVI — De Mechanizatis',
        'capitulo17': 'Caput XVII — De Toxicitate',
        'capitulo18': 'Caput XVIII — De "Elite HOI4"',
        'capitulo19': 'Caput XIX — De Tabula',
        'capitulo20': 'Caput XX — De Emojis Ingentibus',
        'capitulo21': 'Caput XXI — De Corruptione in Administratione',
        'capitulo22': 'Caput XXII — De Iis Qui Erronee Ironizant',
        'capitulo23': 'Caput XXIII — De Iis Qui Carros Pretiosos Fabricant',
        'capitulo24': 'Caput XXIV — De Iis Qui Carros Miseros Fabricant',
        'capitulo25': 'Caput XXV — De Iis Qui Autonomiam Augent',
        'capitulo26': 'Caput XXVI — De Pertinacibus Superior Firepower',
        'capitulo27': 'Caput XXVII — De Iis Qui Acies Inf Only Aedificant',
        'capitulo28': 'Caput XXVIII — De CAS',
        'capitulo29': 'Caput XXIX — De Paracadistarum Usu',
        'capitulo30': 'Caput XXX — De Iis Qui Africam Non Transgrediuntur',
        'capitulo32': 'Caput XXXII — Qui Romaniam Invadunt',
        'capitulo33': 'Caput XXXIII — De Iis Qui Ludum Detinent',
        'capitulo34': 'Caput XXXIV — De Iis Qui Albert Speer et Total War Dant',
        'capitulo35': 'Caput XXXV — Hostes Vocis',
        'capitulo36': 'Caput XXXVI — Sabotores Proprii Agminis',
        'capitulo37': 'Caput XXXVII — De Iis Qui Ludum Victum Amittunt',
        'capitulo38': 'Caput XXXVIII — De Iis Qui Magnas Expeditiones et Ludos Non Historicos Faciunt',
        'capitulo39': 'Caput XXXIX — Victoria Schrödingeriana',
      },
    },

    index: {
      warningTitle:    'Monitio Lectori',
      warningHeadline: 'Hic liber opus comicum est<br>naturae internae',
      warningBody:     `Sapientia <strong>Cariocae</strong> scripta est ut <strong>iocus satiricus</strong> intra coetum clausum amicorum, in contextu ludi <em>Hearts of Iron IV</em>.<br><br>Philosophia eius deliberate <strong>egocentrica et hyperbolica</strong> est, et quaedam loca legi possunt — extra contextum — tamquam <strong>suprematica vel discriminatoria</strong>. Hic est effectus comicus intentionalis operis, non positio realis auctorum eius.<br><br>Pergendo, lector confirmat se naturam humoristicam et internam huius materiae intelligere.`,
      warningNote:     '"Quid facere? Apparatus non erat." — Carioca, post partitam hoi4 amissam',
      warningBtn:      '✠ &nbsp; In twitter non militabo &nbsp; ✠',
      heroH1:          'Ars Micro<br>Dominanda Est',
      heroH2:          'Et Genetica Tua Elevanda',
      heroTagline:     'Micro domina.<br>Lusor melior fias.',
      navSumario:      'INDEX',
      navIntroductio:  'INTRODUCTIO',
      navInicio:       'INITIUM',
    },

  }; /* end TRANSLATIONS */

  /* ── Detect page ── */
  function getPageKey() {
    const p     = location.pathname.toLowerCase();
    const match = p.match(/([^\/]+?)(?:\.html)?$/);
    return match ? match[1] : 'index';
  }

  /* ── Save / restore ── */
  function saveOriginals() {
    if (originsSaved) return;
    const h1 = document.querySelector('h1');
    if (h1) savedOriginals.h1 = h1.innerHTML;
    const bt = document.querySelector('.book-text') || document.querySelector('.medieval');
    if (bt) savedOriginals.bookText = bt.innerHTML;
    // sumario: save link texts
    document.querySelectorAll('.summary a').forEach(a => {
      const m = (a.getAttribute('href') || '').match(/(capitulo\d+)\.html/i);
      const key = m ? m[1].toLowerCase() : '';
      if (key) savedOriginals['link_' + key] = a.textContent;
    });
    // index: save warning + hero fields
    const wt = document.querySelector('.warning-title');        if (wt) savedOriginals.warningTitle    = wt.innerHTML;
    const wh = document.querySelector('.warning-headline');     if (wh) savedOriginals.warningHeadline = wh.innerHTML;
    const wb = document.querySelector('.warning-body');         if (wb) savedOriginals.warningBody     = wb.innerHTML;
    const wn = document.querySelector('.warning-note');         if (wn) savedOriginals.warningNote     = wn.innerHTML;
    const wbtn = document.querySelector('.warning-btn');        if (wbtn) savedOriginals.warningBtn    = wbtn.innerHTML;
    const hh1 = document.querySelector('.hero-content h1');     if (hh1) savedOriginals.heroH1         = hh1.innerHTML;
    const hh2 = document.querySelector('.hero-content h2');     if (hh2) savedOriginals.heroH2         = hh2.innerHTML;
    const ht  = document.querySelector('.hero-tagline');        if (ht)  savedOriginals.heroTagline    = ht.innerHTML;
    const nc_  = document.querySelector('a[href="index.html"], a[href="../index.html"]');           if (nc_)  savedOriginals.navInicio      = nc_.textContent;
    const ns_  = document.querySelector('a[href="sumario.html"], a[href="../sumario.html"]');       if (ns_)  savedOriginals.navSumario    = ns_.textContent;
    const ni_  = document.querySelector('a[href="introducao.html"], a[href="../introducao.html"]'); if (ni_)  savedOriginals.navIntroductio= ni_.textContent;
    originsSaved = true;
  }

  function restoreOriginals() {
    if (!originsSaved) return;
    const h1 = document.querySelector('h1');
    if (h1 && savedOriginals.h1 !== undefined) h1.innerHTML = savedOriginals.h1;
    const bt = document.querySelector('.book-text') || document.querySelector('.medieval');
    if (bt && savedOriginals.bookText !== undefined) bt.innerHTML = savedOriginals.bookText;
    // sumario links
    document.querySelectorAll('.summary a').forEach(a => {
      const m = (a.getAttribute('href') || '').match(/(capitulo\d+)\.html/i);
      const key = m ? m[1].toLowerCase() : '';
      if (key && savedOriginals['link_' + key] !== undefined) a.textContent = savedOriginals['link_' + key];
    });
    // index fields
    const wt   = document.querySelector('.warning-title');        if (wt   && savedOriginals.warningTitle    !== undefined) wt.innerHTML   = savedOriginals.warningTitle;
    const wh   = document.querySelector('.warning-headline');     if (wh   && savedOriginals.warningHeadline !== undefined) wh.innerHTML   = savedOriginals.warningHeadline;
    const wb   = document.querySelector('.warning-body');         if (wb   && savedOriginals.warningBody     !== undefined) wb.innerHTML   = savedOriginals.warningBody;
    const wn   = document.querySelector('.warning-note');         if (wn   && savedOriginals.warningNote     !== undefined) wn.innerHTML   = savedOriginals.warningNote;
    const wbtn = document.querySelector('.warning-btn');          if (wbtn && savedOriginals.warningBtn      !== undefined) wbtn.innerHTML = savedOriginals.warningBtn;
    const hh1  = document.querySelector('.hero-content h1');      if (hh1  && savedOriginals.heroH1          !== undefined) hh1.innerHTML  = savedOriginals.heroH1;
    const hh2  = document.querySelector('.hero-content h2');      if (hh2  && savedOriginals.heroH2          !== undefined) hh2.innerHTML  = savedOriginals.heroH2;
    const ht   = document.querySelector('.hero-tagline');         if (ht   && savedOriginals.heroTagline     !== undefined) ht.innerHTML   = savedOriginals.heroTagline;
    const nc   = document.querySelector('a[href="index.html"], a[href="../index.html"]');           if (nc   && savedOriginals.navInicio      !== undefined) nc.textContent = savedOriginals.navInicio;
    const ns   = document.querySelector('a[href="sumario.html"], a[href="../sumario.html"]');       if (ns   && savedOriginals.navSumario    !== undefined) ns.textContent = savedOriginals.navSumario;
    const ni   = document.querySelector('a[href="introducao.html"], a[href="../introducao.html"]'); if (ni   && savedOriginals.navIntroductio!== undefined) ni.textContent = savedOriginals.navIntroductio;
  }

  /* ── Apply Latin ── */
  function applyLatin() {
    const t = TRANSLATIONS[getPageKey()];
    if (!t) return;
    saveOriginals();
    // h1
    const h1 = document.querySelector('h1');
    if (h1 && t.h1) h1.innerHTML = t.h1;
    // body text (.book-text or .medieval)
    const bt = document.querySelector('.book-text') || document.querySelector('.medieval');
    if (bt && t.bookText) bt.innerHTML = t.bookText;
    // sumario: translate chapter links
    if (t.summaryLinks) {
      document.querySelectorAll('.summary a').forEach(a => {
        const m = (a.getAttribute('href') || '').match(/(capitulo\d+)\.html/i);
        const key = m ? m[1].toLowerCase() : '';
        if (key && t.summaryLinks[key]) a.textContent = t.summaryLinks[key];
      });
    }
    // index: translate warning overlay + hero
    if (t.warningTitle)    { const el = document.querySelector('.warning-title');    if (el) el.innerHTML   = t.warningTitle; }
    if (t.warningHeadline) { const el = document.querySelector('.warning-headline'); if (el) el.innerHTML   = t.warningHeadline; }
    if (t.warningBody)     { const el = document.querySelector('.warning-body');     if (el) el.innerHTML   = t.warningBody; }
    if (t.warningNote)     { const el = document.querySelector('.warning-note');     if (el) el.innerHTML   = t.warningNote; }
    if (t.warningBtn)      { const el = document.querySelector('.warning-btn');      if (el) el.innerHTML   = t.warningBtn; }
    if (t.heroH1)          { const el = document.querySelector('.hero-content h1');  if (el) el.innerHTML   = t.heroH1; }
    if (t.heroH2)          { const el = document.querySelector('.hero-content h2');  if (el) el.innerHTML   = t.heroH2; }
    if (t.heroTagline)     { const el = document.querySelector('.hero-tagline');     if (el) el.innerHTML   = t.heroTagline; }
    if (t.navInicio)       { const el = document.querySelector('a[href="index.html"], a[href="../index.html"]');       if (el) el.textContent = t.navInicio; }
    if (t.navSumario)      { const el = document.querySelector('a[href="sumario.html"], a[href="../sumario.html"]');    if (el) el.textContent = t.navSumario; }
    if (t.navIntroductio)  { const el = document.querySelector('a[href="introducao.html"], a[href="../introducao.html"]'); if (el) el.textContent = t.navIntroductio; }
  }

  /* ── CSS ── */
  const css = document.createElement('style');
  css.textContent = `
    #lang-switcher {
      position:fixed;bottom:28px;right:28px;z-index:8000;
      display:flex;flex-direction:column;align-items:flex-end;gap:8px;
      font-family:'Cinzel','Playfair Display',Georgia,serif;
    }
    #lang-btn {
      width:52px;height:52px;background:#0d0d0d;border:1px solid #7b0000;
      color:#c9b08c;font-family:inherit;font-size:0.7rem;letter-spacing:2px;
      cursor:pointer;display:flex;align-items:center;justify-content:center;
      box-shadow:0 0 20px rgba(139,0,0,0.35);transition:all 0.3s ease;border-radius:2px;
    }
    #lang-btn:hover{border-color:#b02a2a;color:#e8d9c0;box-shadow:0 0 30px rgba(176,42,42,0.5);}
    #lang-dropdown {
      background:#0d0d0d;border:1px solid #7b0000;box-shadow:0 0 30px rgba(139,0,0,0.4);
      overflow:hidden;max-height:0;opacity:0;
      transition:max-height 0.35s ease,opacity 0.3s ease;
      border-radius:2px;min-width:160px;
    }
    #lang-dropdown.open{max-height:200px;opacity:1;}
    .lang-option {
      display:block;padding:12px 20px;color:#9a8a76;font-size:0.7rem;letter-spacing:3px;
      cursor:pointer;transition:all 0.2s ease;text-transform:uppercase;white-space:nowrap;
      border:none;background:none;width:100%;text-align:left;font-family:inherit;
    }
    .lang-option:hover{color:#e8d9c0;background:rgba(123,0,0,0.2);}
    .lang-option.active{color:#c9b08c;border-left:2px solid #b02a2a;}
    #lang-toast {
      position:fixed;bottom:90px;right:28px;background:#0d0d0d;border:1px solid #7b0000;
      color:#c9b08c;font-family:'Cinzel',Georgia,serif;font-size:0.65rem;letter-spacing:2px;
      padding:10px 16px;z-index:7999;opacity:0;transform:translateY(8px);
      transition:all 0.4s ease;pointer-events:none;border-radius:2px;
      max-width:240px;text-align:center;
    }
    #lang-toast.show{opacity:1;transform:translateY(0);}
  `;
  document.head.appendChild(css);

  /* ── UI ── */
  const switcher = document.createElement('div');
  switcher.id = 'lang-switcher';

  const dropdown = document.createElement('div');
  dropdown.id = 'lang-dropdown';
  Object.entries(LANGS).forEach(([code, info]) => {
    const btn = document.createElement('button');
    btn.className    = 'lang-option' + (code === currentLang ? ' active' : '');
    btn.dataset.lang = code;
    btn.textContent  = `${info.label} — ${info.full}`;
    btn.addEventListener('click', () => selectLang(code));
    dropdown.appendChild(btn);
  });

  const mainBtn = document.createElement('button');
  mainBtn.id          = 'lang-btn';
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

  /* ── Select language ── */
  function selectLang(code) {
    dropdown.classList.remove('open');
    if (code === currentLang) return;
    currentLang = code;
    localStorage.setItem(STORAGE_KEY, code);
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

  /* ── On load ── */
  function onReady() { if (currentLang === 'la') applyLatin(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})();

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
    },

    capitulo2: {
      h1: 'Caput II — De Fato Genetico Micro',
      bookText: `
        <p>Secundum volumen docet non omnes errores ex defectu exercitationis venire. Sunt lusores quorum manus iam celeres nascuntur, et oculi qui mappam cum praecisione voluminum antiquorum legunt. Sicut alii ad ludum navale nati sunt et alii ad pedites, ita alii micro benedictionem nacti sunt; alii, ad tarditatem reactionis destinati.</p>
        <p>Micro Cariocae non solum ars discenda est; reflexus naturalis est, decisio instantanea, sanguis frigidus in facie chao. Alii premunt sperantes miracula; alii premunt quasi victoria iam certa sit. Hi pauci genetice benedicti campum belli dominantur, encirclements sine consultatione supply faciunt et vincunt etiam in inferioritate numerica.</p>
        <p>Qui hoc donum non possident in cyclo erroris vivunt: in pugna pausant, divisiones obliviscuntur et in chatto plorant. Non odium est, solum contemptus: non omnis miles natus est ad carros in blitz ducendos. Exercitatio potest mediocrem meliorare, sed solum genetica monstrum micro creat.</p>
        <p>Eo momento quo bellum accelerat et tempus comprimitur, soli naturaliter celeres in late game supersunt. Multi credunt laborem talentum aequare, sed pauci eo perveniunt ubi micro iam cum vantaggio incepit. Alii nati sunt ad sacculos hostium claudendos; alii, ad claudendos esse. Est lex invisibilis lobbii: natura, non iniustitia, supervivientiam definit.</p>
        <p>Carioca concludit cum sapientia crudelis et silentis: talentum non eligitur, fatum accipitur, et secundum illud luditur.</p>`,
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
    },

    capitulo4: {
      h1: 'Caput IV — De Logica et Efficacia',
      bookText: `
        <p>Sequens lectionem tertii voluminis, Carioca nos admonet bellum non esse poesim, sed calculum. Ubi bonus lusor timing et synergiam videt, imperitus casum et confusionem videt. Ubi decisio strategica exigitur, illi feeling et spem adhibent.</p>
        <p>Logica fundamentum victoriae est, et sine ea quaevis constructio ruit. Qui supply, oeconomiam et timing ignorant, proprii erroris structuralis captivi fiunt. Nulla honor in ruina praedicabili est, nec gloria in chao sibi imposito.</p>
        <p>Carioca talentum natum a mediocritate distinguit: alii machinas belli aedificant, alii clades industriales aedificant. Alii cum sophisticatione errant; alii modo elementari errant, sine discendo. Lex crudelis est: efficacia nascitur ex coniunctione rationis, micro et visionis totius.</p>
        <p>Micro celeris sine plano inutilis est; planum sine executione praecisa sterile est. Solus qui ambo intelligit campum belli dominatur. Carioca hanc lectionem simplici sed definitiva sententia signat: "Quae est historia tua in hoi4?" — victoria non verbis, sed eventibus mensuratur.</p>`,
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
    },

    capitulo6: {
      h1: 'Caput VI — De Iudicio et Efficacia',
      bookText: `
        <p>Carioca mundum oculis praecisis observat: iudicat non per ea quae dicuntur, sed per ea quae exsequuntur. Alta verba et builds chaoticae irrelevantes sunt; eventus solus mensura valoris est.</p>
        <p>Qui loquuntur sine scientia, sine logica aedificant et timing, supply vel oeconomiam ignorant — hi ius non habent seipsos magistros proclamandi. Victimae sunt propriae ignorantiae, a primo ictu damnati ad clades repetendas.</p>
        <p>Carioca bonos a malis lusoribus sine misericordia separat. Non est arrogantia, est efficacia. Intelligit veram fiduciam cum competentia ambulare; falsam inanem esse. Micro bene executum, strategia clara et visio totius determinant quis supersit et quis solum ut spectator propriae calamitatis memoretur.</p>
        <p>Iudicium Cariocae directum est: pauci cum talento nascuntur, multi nascentur ad errores patientes. Proprium fatum agnoscere, proprias limitationes intelligere et secundum eas ludere ultima lectio est. Efficacia non negotiabilis est; victoria inevitabilis eventus est eius qui ludum in sua totalitate intelligit.</p>`,
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
    },

  };

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

  /* ── Apply Latin ── */
  function applyLatin() {
    const t = TRANSLATIONS[getPageKey()];
    if (!t) return;
    saveOriginals();
    const h1 = document.querySelector('h1');
    if (h1 && t.h1) h1.innerHTML = t.h1;
    const bt = document.querySelector('.book-text');
    if (bt && t.bookText) bt.innerHTML = t.bookText;
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

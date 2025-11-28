const DEFAULT_LANG = 'en';
const LANG_STORAGE_KEY = 'saobot-lang';
const translations = {
	en: {
		'meta.title.home': 'SAOBOT - Educational Tool',
		'meta.description.home': 'SAOBOT is an educational tool for learning programming, image analysis, and software automation. Any use for cheating in games is prohibited and the sole responsibility of the user.',
		'nav.features': 'Features',
		'nav.pricing': 'Pricing',
		'nav.faq': 'FAQ',
		'lang.switch': 'Switch language',
		'meta.title.failure': 'Payment failed - SAOBOT',
		'meta.description.failure': 'Payment failed. Please retry your SAOBOT license purchase.',
		'meta.title.success': 'Payment confirmed - SAOBOT',
		'meta.description.success': 'Payment confirmed. Your SAOBOT license has been created. Check your email for details.',
		'header.buy': 'Buy',
		'header.download': 'Download',
		'header.download.title': 'Download the SAOBOT installer',
		'hero.eyebrow': 'Educational assistance suite',
		'hero.heading': 'Master techniques with <span class="accent">SAOBOT</span>',
		'hero.lead': 'Designed for educational and learning environments, SAOBOT combines aim assist, auto aim, recoil control, and hardware spoofing for ultra-stable, discreet sessions. Educational tool only.',
		'hero.planButton': '€9.99/month plan',
		'hero.discord': 'Join Discord',
		'hero.modules': 'Browse modules',
		'hero.badges.aria': 'Live SAOBOT status',
		'hero.badge1.title': 'Live tracking',
		'hero.badge1.subtitle': 'Smoothed vector path',
		'hero.badge2.title': 'HID spoof',
		'hero.badge2.subtitle': 'Disguised Leonardo',
		'hero.badge3.title': 'Anti-detection watch',
		'hero.badge3.subtitle': 'Advanced security',
		'trial.blurb': 'Test SAOBOT free for 1 hour with the discovery license <strong>SAO-TRIAL</strong>.',
		'trial.metadata': 'License:&nbsp;SAO-TRIAL',
		'trial.note': 'Instant activation · Full modules · No card required',
		'hero.card.label': 'Active profile',
		'hero.card.list1': 'Dynamic tracking based on screenshot capture',
		'hero.card.list2': 'Arduino drives every mouse movement',
		'hero.card.list3': 'Masked HID injection',
		'hero.card.button': 'Activate license',
		'hero.stats.precision': 'Average precision',
		'hero.stats.reaction': 'Reaction time',
		'hero.stats.security': 'Last 12 months',
		'partners.eyebrow': 'Ecosystem',
		'partners.heading': 'SAOBOT systems squad',
		'partners.copy': 'Each aimbot, triggerbot, and hardware spoofing module maintains a human signature while exceeding educational standards.',
		'partners.aria': 'SAOBOT flagship modules',
		'partners.chip1.title': 'Saobot Function',
		'partners.chip1.desc': 'Colorbot + snap 4&nbsp;ms',
		'partners.chip2.title': 'Saobot Cheat',
		'partners.chip2.desc': 'Triggerbot jitter 2-5&nbsp;ms',
		'partners.chip3.title': 'Saobot Suite',
		'partners.chip3.desc': 'Multi-profile recoil macros',
		'partners.chip4.title': 'Saobot spoofing',
		'partners.chip4.desc': 'Invisible PID/HID spoof',
		'partners.chip5.title': 'Image detection',
		'partners.chip5.desc': 'Chrono prediction of sight',
		'features.eyebrow': 'Key modules',
		'features.heading': 'Complete arsenal for learning',
		'features.copy': 'Each function is tuned for a <span class="gold-text">premium</span> feel and stable educational performance.',
		'features.card1.title': 'Aim Assist / Aimbot',
		'features.card1.desc': 'Centralized colorbot management (capture, processing, auto-click) with stealthy settings.',
		'features.card1.tag': 'Arduino Aimbot',
		'features.card2.title': 'Triggerbot',
		'features.card2.desc': 'Optimized triggerbot offering record reactions on angle or sniper.',
		'features.card2.tag': 'Image tracker',
		'features.card3.title': 'Anti-recoil management',
		'features.card3.desc': 'Synchronized compensation to keep the sight aligned with natural behavior.',
		'features.card3.tag': 'Recoil suite',
		'features.card4.title': 'PID/HID spoofing',
		'features.card4.desc': 'Advanced Arduino/mouse emulation that masks injection and bypasses detections.',
		'features.card4.tag': 'Spoofer',
		'split.eyebrow': 'Showcase',
		'split.heading': 'SAOBOT demo video',
		'split.copy': 'An immersive preview of the interface and modules before adding your own video.',
		'split.left.eyebrow': 'Why SAOBOT?',
		'split.left.heading': 'Designed for technical learning',
		'split.left.copy': 'Dark interface, bright overlays, and instant controls optimize user experience while our security stack accelerates workflow.',
		'split.list1': 'Contextual shortcuts with discreet and complete HUD.',
		'split.list2': '95% current undetectability.',
		'split.list3': 'Aimbot, Triggerbot, Anti-recoil, HID/PID spoofer.',
		'split.list4': 'Frequent updates.',
		'split.list5': '24/7 dedicated Discord support.',
		'split.video.aria': 'SAOBOT demonstration video',
		'split.video.fallback': 'Your browser does not support HTML5 video tag.',
		'split.video.caption': 'Demo video – replace URL with your SAOBOT showcase.',
		'community.eyebrow': 'Community',
		'community.heading': 'Active and moderated base',
		'community.copy': 'Support, ready-to-use profiles, and hardware prerequisites gathered in a secure hub.',
		'community.card1.label': 'Active Discord members with dedicated ticket system',
		'community.card1.note': 'Instant support and private channels',
		'community.card2.label': 'Ready-to-use preconfigured profiles',
		'community.card2.note': 'Quick switch Aimbot / Triggerbot / Autoshoot / Anti-recoil',
		'community.card3.label': 'Required to activate secure HID injection and SAOBOT functions',
		'community.card3.note': 'Invisible and reliable hardware spoofing',
		'community.card4.label': 'Ready Aimbot / Triggerbot / Anti-recoil modules',
		'community.card4.note': 'Included legit and rage profiles',
		'pricing.eyebrow': 'Launch offer',
		'pricing.heading': 'Simple licenses, instant results',
		'pricing.badge': 'Best seller',
		'pricing.title': 'ULTIMATE Pack',
		'pricing.price': '€9.99/month',
		'pricing.copy': 'Full access to <span class="gold-text">SAOBOT</span> modules, updates, and <span class="gold-text">premium</span> support for only €9.99 per month.',
		'pricing.trial': 'Doubt? Use the <strong>SAO-TRIAL</strong> license for 1 hour with all modules, no commitment.',
		'pricing.list1': 'Aim assist + auto aim + aimbot + autoshoot.',
		'pricing.list2': 'Optimized triggerbot with 4&nbsp;ms reactions.',
		'pricing.list3': 'Multi-profile recoil management for each weapon.',
		'pricing.list4': 'PID/HID/Arduino spoofing to bypass detections.',
		'pricing.list5': '24/7 premium Discord support.',
		'pricing.list6': 'Regular updates included.',
		'pricing.buy': 'Buy now',
		'pricing.download': 'Download',
		'cta.eyebrow': 'Quick activation',
		'cta.heading': 'Ready to activate SAOBOT?',
		'cta.copy': 'Unlock the ULTIMATE pack, enjoy optimized performance, and start your 1-hour discovery session with SAO-TRIAL license before aiming for excellence.',
		'cta.buy': 'Buy',
		'cta.discord': 'Discord',
		'cta.download': 'Download',
		'failure.eyebrow': 'Payment error',
		'failure.heading': 'Payment failed',
		'failure.copy': 'Unable to process the transaction. Retry or contact support for help.',
		'failure.cta': 'Retry',
		'success.eyebrow': 'Payment confirmed',
		'success.heading': 'Thank you for your purchase',
		'success.copy': 'Your SAOBOT license has been generated. Check your email for activation details and next steps.',
		'success.cta': 'Back to home',
		'faq.eyebrow': 'FAQ',
		'faq.heading': 'Your questions, our answers',
		'faq.q1': 'How does aim assist stay discreet?',
		'faq.a1': 'Vector smoothing reproduces human movement with micro-variations while staying within accepted input ranges in competition.',
		'faq.q2': 'Is the aimbot configurable?',
		'faq.a2': 'Yes. Adjust speed, head/body focus, offsets, and snap force. Legit presets limit acceleration to maintain a human signature.',
		'faq.q3': 'Can I turn off auto aim on the fly?',
		'faq.a3': 'Each module has a configurable shortcut plus a panic mode that instantly cuts all assistance.',
		'faq.q4': 'How is the triggerbot calibrated?',
		'faq.a4': 'The triggerbot reads color or enemy box via screenshot capture. You set the firing delay (up to 4&nbsp;ms) and concerned weapons.',
		'faq.q5': 'How to manage assistance FOV?',
		'faq.a5': 'The dashboard offers a circular or square FOV slider with preview. Assign different values per weapon or role.',
		'faq.q6': 'Is PID/HID spoofing compatible with all mice?',
		'faq.a6': 'We emulate a standard USB bus with dynamic HID profiles covering 99% of mice, including wireless models via dongle.',
		'faq.q7': 'Does the spoofer leave visible traces?',
		'faq.a7': 'The spoofer rewrites PID/HID/VID in volatile memory then restores values on closure. No persistent drivers, a purge button clears USB logs.',
		'faq.q8': 'What detection rate have you observed?',
		'faq.a8': 'Over 12 months we stay under 1% confirmed reports. Keep legit presets, avoid extreme FOVs, and update SAOBOT after each software update.',
		'faq.q9': 'How does autoshoot work?',
		'faq.a9': 'Autoshoot relies on triggers and adds 2-6&nbsp;ms jitter to stay human. Limit it to short bursts or single-shot weapons.',
		'faq.q10': 'Does anti-recoil adapt to each weapon?',
		'faq.a10': 'Yes. Each profile embeds a specific X/Y pattern. SAOBOT analyzes cadence and applies micro-corrections to follow variations.',
		'faq.q11': 'Will the price change after beta?',
		'faq.a11': 'Existing accounts keep the €9.99 monthly rate. New licenses may evolve after the 2026 roadmap, your price remains fixed.',
		'faq.q12': 'What payment methods do you accept?',
		'faq.a12': 'Credit cards (Visa, Mastercard), PayPal, and crypto (BTC, ETH, USDT). Monthly automatic renewal with pause or manual reload.',
		'faq.q13': 'How does license activation work?',
		'faq.a13': 'Each license binds to a PC via hardware fingerprint. Payments are monthly without commitment and access pauses if you stop renewing.',
		'faq.q14': 'Can I use SAOBOT without Arduino?',
		'faq.a14': 'No. The Arduino Leonardo handles secure HID injection and spoofing to keep inputs stealthy. Without it, critical modules refuse to start for security reasons.',
		'faq.q15': 'I didn\'t receive my license, what to do?',
		'faq.a15': 'Start by checking your spam or promotions folders: 90% of missing emails are there within minutes. Contact support only after this check to avoid duplicates.',
		'footer.terms': 'Terms of use',
		'footer.license': 'License agreement',
		'footer.discord': 'Official Discord',
		'footer.copy': '© <span id="year"></span> SAOBOT. All rights reserved.',
		'footer.disclaimer': 'Educational product not affiliated with game publishers. Use at your own risk. Any use for cheating is prohibited and your sole responsibility.',
		'meta.title.terms': 'SAOBOT – Terms of Use',
		'meta.description.terms': 'Review the official SAOBOT terms of use, payment policies, and compliance requirements.',
		'terms.cta': 'Legal notices',
		'terms.hero.eyebrow': 'Terms of Use',
		'terms.hero.heading': 'SAOBOT Legal Framework',
		'terms.hero.lead': 'These terms govern every interaction with the SAOBOT software, services, and support channels. By purchasing or downloading SAOBOT you accept the clauses below.',
		'terms.section1.eyebrow': '1. Access and eligibility',
		'terms.section1.heading': 'Account ownership',
		'terms.section1.copy': 'Licenses are personal, tied to a unique hardware fingerprint, and cannot be resold, shared, or transferred. SAOBOT reserves the right to revoke access in case of suspected sharing, modified loaders, or leaks.',
		'terms.section2.eyebrow': '2. Compliance',
		'terms.section2.heading': 'Anti-detection and jurisdiction',
		'terms.section2.copy': 'Each user must respect local laws and policies of targeted platforms. SAOBOT is not affiliated with any publisher and you assume sole consequences of any unauthorized automation. SAOBOT is an educational tool; any use for cheating in games is prohibited.',
		'terms.section3.eyebrow': '3. Payments and refunds',
		'terms.section3.heading': 'Billing policy',
		'terms.section3.copy': 'Payments are processed via Stripe. Renewal is monthly until cancellation. Digital access being immediate, sales are final; refunds are considered only in absence of activation. SAOBOT is an educational tool; check local laws on automation software.',
		'terms.section4.eyebrow': '4. Hardware requirements',
		'terms.section4.heading': 'Arduino respect',
		'terms.section4.copy': 'An Arduino Leonardo (or approved card by SAOBOT team) is mandatory for secure injection and spoofing. Any bypass attempt leads to permanent license deactivation. SAOBOT is intended for education; use for games is at your own risk.',
		'terms.section5.eyebrow': '5. Support and contact',
		'terms.section5.heading': 'Legal questions',
		'terms.section5.copy': 'Legal or license-related requests must go through the official Discord (<a href="https://discord.gg/aQMcEPgUUa" target="_blank" rel="noopener">discord.gg/aQMcEPgUUa</a>). Provide purchase proof and hardware fingerprint for verification.',
		'meta.title.license': 'SAOBOT – License Agreement',
		'meta.description.license': 'Review the SAOBOT end-user license agreement and usage restrictions.',
		'license.cta': 'Agreement',
		'license.hero.eyebrow': 'License Agreement',
		'license.hero.heading': 'SAOBOT End-User License',
		'license.hero.lead': 'This document specifies the scope of the license granted to each SAOBOT customer: limitations, update policy, and termination reasons.',
		'license.section1.eyebrow': '1. License grant',
		'license.section1.heading': 'Single-user restriction',
		'license.section1.copy': 'You obtain a non-transferable and non-exclusive license to run SAOBOT on one Windows PC at a time. Each additional machine requires a dedicated license. VMs, cloud PCs, and streaming setups are prohibited without written validation.',
		'license.section2.eyebrow': '2. Reverse engineering',
		'license.section2.heading': 'No alteration',
		'license.section2.copy': 'Decompilation, traffic capture, binary modification, or sharing loaders/cracks are prohibited. Any violation leads to immediate termination without refund and permanent support ban.',
		'license.section3.eyebrow': '3. Updates and support',
		'license.section3.heading': 'Continuous delivery',
		'license.section3.copy': 'Active licenses include minor updates and bypass maintenance. Beta function access may be suspended if stability or compliance is threatened. SAOBOT is an educational tool; updates are for learning.',
		'license.section4.eyebrow': '4. Termination',
		'license.section4.heading': 'Suspension reasons',
		'license.section4.copy': 'Licenses may be terminated in case of fraudulent payment, banking dispute, harassment, private build leaks, or non-compliance with Arduino requirement. Any non-educational use may lead to termination. Terminated accounts lose access immediately.',
		'license.section5.eyebrow': '5. Contact',
		'license.section5.heading': 'Support channel',
		'license.section5.copy': 'Any contract-related question must go through the official Discord (<a href="https://discord.gg/aQMcEPgUUa" target="_blank" rel="noopener">discord.gg/aQMcEPgUUa</a>) with purchase proof.',
	},
	fr: {
		'meta.title.home': 'SAOBOT',
		'meta.description.home': 'SAOBOT affine votre précision avec l\'aim assist, l\'auto aim, le contrôle du recul et le spoofing matériel.',
		'nav.features': 'Fonctionnalités',
		'nav.pricing': 'Tarifs',
		'nav.faq': 'FAQ',
		'lang.switch': 'Changer de langue',
		'meta.title.failure': 'Paiement échoué - SAOBOT',
		'meta.description.failure': 'Paiement échoué. Veuillez réessayer votre achat de licence SAOBOT.',
		'meta.title.success': 'Paiement confirmé - SAOBOT',
		'meta.description.success': 'Paiement confirmé. Votre licence SAOBOT a été créée. Vérifiez votre boîte mail pour les détails.',
		'header.buy': 'Acheter',
		'header.download': 'Télécharger',
		'header.download.title': 'Télécharger l\'installateur SAOBOT',
		'hero.eyebrow': 'Suite d\'assistance éducative',
		'hero.heading': 'Maîtrisez les techniques avec <span class="accent">SAOBOT</span>',
		'hero.lead': 'Conçu pour les environnements éducatifs et d\'apprentissage, SAOBOT combine aim assist, auto aim, contrôle du recul et spoofing matériel pour des sessions ultra stables et discrètes. Outil pédagogique uniquement.',
		'hero.planButton': 'Formule 9,99&nbsp;€ / mois',
		'hero.discord': 'Rejoindre Discord',
		'hero.modules': 'Explorer les modules',
		'hero.badges.aria': 'Statut en direct de SAOBOT',
		'hero.badge1.title': 'Suivi en direct',
		'hero.badge1.subtitle': 'Trajectoire vectorielle lissée',
		'hero.badge2.title': 'Spoof HID',
		'hero.badge2.subtitle': 'Leonardo camouflé',
		'hero.badge3.title': 'Veille anti-détection',
		'hero.badge3.subtitle': 'Sécurité avancée',
		'trial.blurb': 'Testez SAOBOT gratuitement pendant 1 heure avec la licence découverte <strong>SAO-TRIAL</strong>.',
		'trial.metadata': 'Licence&nbsp;: SAO-TRIAL',
		'trial.note': 'Activation instantanée · Modules complets · Sans carte',
		'hero.card.label': 'Profil actif',
		'hero.card.list1': 'Suivi dynamique basé sur une capture d\'écran',
		'hero.card.list2': 'Arduino pilote chaque mouvement de souris',
		'hero.card.list3': 'Injection HID masquée',
		'hero.card.button': 'Activer la licence',
		'hero.stats.precision': 'Précision moyenne',
		'hero.stats.reaction': 'Temps de réaction',
		'hero.stats.security': '12 derniers mois',
		'partners.eyebrow': 'Écosystème',
		'partners.heading': 'Escouade SAOBOT systems',
		'partners.copy': 'Chaque module d\'aimbot, triggerbot et spoofing matériel garde une signature humaine tout en dépassant les standards éducatifs.',
		'partners.aria': 'Modules phares de SAOBOT',
		'partners.chip1.title': 'Saobot Function',
		'partners.chip1.desc': 'Colorbot + snap 4&nbsp;ms',
		'partners.chip2.title': 'Saobot Cheat',
		'partners.chip2.desc': 'Triggerbot jitter 2-5&nbsp;ms',
		'partners.chip3.title': 'Saobot Suite',
		'partners.chip3.desc': 'Macros de recul multi-profils',
		'partners.chip4.title': 'Saobot spoofing',
		'partners.chip4.desc': 'Spoof PID/HID invisible',
		'partners.chip5.title': 'Détection d\'image',
		'partners.chip5.desc': 'Prédiction chrono du viseur',
		'features.eyebrow': 'Modules clés',
		'features.heading': 'Un arsenal complet pour l\'apprentissage',
		'features.copy': 'Chaque fonction est réglée pour un ressenti <span class="gold-text">premium</span> et des performances éducatives stables.',
		'features.card1.title': 'Aim Assist / Aimbot',
		'features.card1.desc': 'Gestion centralisée du colorbot (capture, traitement, clic auto) avec réglages furtifs.',
		'features.card1.tag': 'Aimbot Arduino',
		'features.card2.title': 'Triggerbot',
		'features.card2.desc': 'Triggerbot optimisé offrant des réactions record sur angle ou sniper.',
		'features.card2.tag': 'Tracker d\'image',
		'features.card3.title': 'Gestion anti-recul',
		'features.card3.desc': 'Compensation synchronisée pour garder le viseur aligné avec un comportement naturel.',
		'features.card3.tag': 'Suite recul',
		'features.card4.title': 'Spoofing PID/HID',
		'features.card4.desc': 'Émulation avancée Arduino/souris qui masque l\'injection et contourne Vanguard.',
		'features.card4.tag': 'Spoofer',
		'split.eyebrow': 'Showcase',
		'split.heading': 'Vidéo démo SAOBOT',
		'split.copy': 'Un aperçu immersif de l\'interface et des modules avant d\'ajouter votre propre vidéo.',
		'split.left.eyebrow': 'Pourquoi SAOBOT ?',
		'split.left.heading': 'Conçu pour l\'apprentissage technique',
		'split.left.copy': 'Interface sombre, overlays lumineux et contrôles instantanés optimisent l\'expérience utilisateur tandis que notre pile sécurité accélère le workflow.',
		'split.list1': 'Raccourcis contextuels avec HUD discret et complet.',
		'split.list2': '95&nbsp;% d\'indétectabilité actuellement.',
		'split.list3': 'Aimbot, Triggerbot, Anti-recul, spoofer HID/PID.',
		'split.list4': 'Mises à jour fréquentes.',
		'split.list5': 'Support Discord dédié 24/7.',
		'split.video.aria': 'Vidéo de démonstration SAOBOT',
		'split.video.fallback': 'Votre navigateur ne prend pas en charge la balise vidéo HTML5.',
		'split.video.caption': 'Vidéo démo – remplacez l\'URL par votre showcase SAOBOT.',
		'community.eyebrow': 'Communauté',
		'community.heading': 'Une base active et modérée',
		'community.copy': 'Support, profils prêts à l\'emploi et prérequis hardware réunis dans un hub sécurisé.',
		'community.card1.label': 'Membres Discord actifs avec système de tickets dédié',
		'community.card1.note': 'Support instantané et salons privés',
		'community.card2.label': 'Profils préconfigurés prêts à l\'emploi',
		'community.card2.note': 'Switch rapide Aimbot / Triggerbot / Autoshoot / Anti-recul',
		'community.card3.label': 'Nécessaire pour activer l\'injection HID sécurisée et les fonctions SAOBOT',
		'community.card3.note': 'Spoofing matériel invisible et fiable',
		'community.card4.label': 'Modules Aimbot / Triggerbot / Anti-recul prêts',
		'community.card4.note': 'Profils legit et rage inclus',
		'pricing.eyebrow': 'Offre de lancement',
		'pricing.heading': 'Licences simples, résultats instantanés',
		'pricing.badge': 'Meilleure vente',
		'pricing.title': 'Pack ULTIMATE',
		'pricing.price': '9,99&nbsp;€ / mois',
		'pricing.copy': 'Accès complet aux modules <span class="gold-text">SAOBOT</span>, aux mises à jour et au support <span class="gold-text">premium</span> pour seulement 9,99&nbsp;€ par mois.',
		'pricing.trial': 'Un doute ? Utilisez la licence <strong>SAO-TRIAL</strong> pendant 1 heure avec tous les modules, sans engagement.',
		'pricing.list1': 'Aim assist + auto aim + aimbot + autoshoot.',
		'pricing.list2': 'Triggerbot optimisé avec réactions de 4&nbsp;ms.',
		'pricing.list3': 'Gestion du recul multi-profils pour chaque arme.',
		'pricing.list4': 'Spoofing PID/HID/Arduino pour contourner Vanguard.',
		'pricing.list5': 'Support Discord premium 24/7.',
		'pricing.list6': 'Mises à jour régulières incluses.',
		'pricing.buy': 'Acheter maintenant',
		'pricing.download': 'Télécharger',
		'cta.eyebrow': 'Activation rapide',
		'cta.heading': 'Prêt à activer SAOBOT ?',
		'cta.copy': 'Débloquez le pack ULTIMATE, profitez de performances optimisées pour le classé et lancez votre session découverte d\'une heure avec la licence SAO-TRIAL avant de viser RADIANT.',
		'cta.buy': 'Acheter',
		'cta.discord': 'Discord',
		'cta.download': 'Télécharger',
		'failure.eyebrow': 'Erreur de paiement',
		'failure.heading': 'Paiement échoué',
		'failure.copy': 'Impossible de traiter la transaction. Réessayez ou contactez le support pour obtenir de l\'aide.',
		'failure.cta': 'Réessayer',
		'success.eyebrow': 'Paiement confirmé',
		'success.heading': 'Merci pour votre achat',
		'success.copy': 'Votre licence SAOBOT a été générée. Vérifiez votre boîte mail pour les détails d\'activation et les étapes suivantes.',
		'success.cta': 'Retour à l\'accueil',
		'faq.eyebrow': 'FAQ',
		'faq.heading': 'Vos questions, nos réponses',
		'faq.q1': 'Comment l\'aim assist reste-t-il discret ?',
		'faq.a1': 'Un lissage vectoriel reproduit le mouvement humain avec des micro-variations tout en restant dans les plages d\'entrées acceptées en compétition.',
		'faq.q2': 'L\'aimbot est-il configurable ?',
		'faq.a2': 'Oui. Ajustez vitesse, focus tête/corps, offsets et force de snap. Les presets legit limitent l\'accélération pour garder une signature humaine.',
		'faq.q3': 'Puis-je couper l\'auto aim à la volée ?',
		'faq.a3': 'Chaque module dispose d\'un raccourci configurable plus un mode panique qui coupe instantanément toute assistance.',
		'faq.q4': 'Comment le triggerbot est-il calibré ?',
		'faq.a4': 'Le triggerbot lit la couleur ou la box ennemie via MSS. Vous définissez le délai de tir (jusqu\'à 4&nbsp;ms) et les armes concernées.',
		'faq.q5': 'Comment gérer le FOV de l\'assistance ?',
		'faq.a5': 'Le dashboard propose un curseur FOV circulaire ou carré avec prévisualisation. Affectez différentes valeurs par arme ou rôle.',
		'faq.q6': 'Le spoofing PID/HID est-il compatible avec toutes les souris ?',
		'faq.a6': 'Nous émulons un bus USB standard avec profils HID dynamiques couvrant 99&nbsp;% des souris, y compris les modèles sans-fil via dongle.',
		'faq.q7': 'Le spoofer laisse-t-il des traces visibles ?',
		'faq.a7': 'Le spoofer réécrit PID/HID/VID en mémoire volatile puis restaure les valeurs à la fermeture. Aucun driver persistant, un bouton purge les logs USB.',
		'faq.q8': 'Quel taux de détection avez-vous observé ?',
		'faq.a8': 'Depuis 12 mois nous restons sous 1&nbsp;% de signalements confirmés. Gardez les presets legit, évitez les FOV extrêmes et mettez SAOBOT à jour après chaque mise à jour logicielle.',
		'faq.q9': 'Comment fonctionne l\'autoshoot ?',
		'faq.a9': 'Autoshoot s\'appuie sur les triggers et ajoute un jitter de 2 à 6&nbsp;ms pour rester humain. Limitez-le aux rafales courtes ou aux armes à un coup.',
		'faq.q10': 'L\'anti-recul s\'adapte-t-il à chaque arme ?',
		'faq.a10': 'Oui. Chaque profil embarque un motif X/Y spécifique. SAOBOT analyse la cadence et applique des micro-corrections pour suivre les variations.',
		'faq.q11': 'Le prix changera-t-il après la bêta ?',
		'faq.a11': 'Les comptes existants conservent le tarif mensuel de 9,99&nbsp;€. Les nouvelles licences pourront évoluer après la roadmap 2026, votre prix reste figé.',
		'faq.q12': 'Quels moyens de paiement acceptez-vous ?',
		'faq.a12': 'Cartes bancaires (Visa, Mastercard), PayPal et crypto (BTC, ETH, USDT). Renouvellement mensuel automatique avec pause ou rechargement manuel.',
		'faq.q13': 'Comment se passe l\'activation de la licence ?',
		'faq.a13': 'Chaque licence se lie à un PC via empreinte hardware. Les paiements sont mensuels sans engagement et l\'accès se met en pause si vous arrêtez de renouveler.',
		'faq.q14': 'Puis-je utiliser SAOBOT sans Arduino ?',
		'faq.a14': 'Non. L\'Arduino Leonardo gère l\'injection HID sécurisée et le spoofing afin de garder les entrées furtives. Sans lui, les modules critiques refusent de démarrer pour des raisons de sécurité.',
		'faq.q15': 'Je n\'ai pas reçu ma licence, que faire ?',
		'faq.a15': 'Commencez par vérifier vos dossiers spam ou promotions : 90 % des mails manquants s\'y trouvent en quelques minutes. Contactez le support uniquement après cette vérification pour éviter les doublons.',
		'footer.terms': 'Conditions d\'utilisation',
		'footer.license': 'Contrat de licence',
		'footer.discord': 'Discord officiel',
		'footer.copy': '© <span id="year"></span> SAOBOT. Tous droits réservés.',
		'footer.disclaimer': 'Produit éducatif non affilié à des éditeurs de jeux. Utilisation à vos risques et périls. Toute utilisation pour tricher est interdite et de votre responsabilité exclusive.',
		'meta.title.terms': 'SAOBOT – Conditions d\'utilisation',
		'meta.description.terms': 'Consultez les conditions d\'utilisation officielles de SAOBOT, la politique de paiement et les exigences de conformité.',
		'terms.cta': 'Mentions légales',
		'terms.hero.eyebrow': 'Conditions d\'utilisation',
		'terms.hero.heading': 'Cadre légal SAOBOT',
		'terms.hero.lead': 'Ces conditions couvrent le logiciel, les services et les canaux de support SAOBOT. Tout achat ou téléchargement implique l\'acceptation intégrale des clauses ci-dessous.',
		'terms.section1.eyebrow': '1. Accès et éligibilité',
		'terms.section1.heading': 'Propriété du compte',
		'terms.section1.copy': 'Les licences sont personnelles, liées à une empreinte matérielle unique et ne peuvent pas être revendues, partagées ou transférées. SAOBOT se réserve le droit de révoquer l\'accès en cas de partage suspect, de loaders modifiés ou de fuites.',
		'terms.section2.eyebrow': '2. Conformité',
		'terms.section2.heading': 'Anti-détection et juridiction',
		'terms.section2.copy': 'Chaque utilisateur doit respecter les lois locales ainsi que les politiques des plateformes visées. SAOBOT n\'est affilié à aucun éditeur et vous assumez seul les conséquences de toute automatisation non autorisée. SAOBOT est un outil éducatif ; toute utilisation pour tricher dans des jeux est interdite.',
		'terms.section3.eyebrow': '3. Paiements et remboursements',
		'terms.section3.heading': 'Politique de facturation',
		'terms.section3.copy': 'Les paiements sont traités via Stripe. Le renouvellement est mensuel jusqu\'à annulation. L\'accès numérique étant immédiat, les ventes sont définitives ; les remboursements ne sont étudiés qu\'en l\'absence d\'activation. SAOBOT est un outil éducatif ; vérifiez les lois locales sur les logiciels d\'automatisation.',
		'terms.section4.eyebrow': '4. Exigences matérielles',
		'terms.section4.heading': 'Respect de l\'Arduino',
		'terms.section4.copy': 'Un Arduino Leonardo (ou carte approuvée par l\'équipe SAOBOT) est obligatoire pour l\'injection sécurisée et le spoofing. Toute tentative de contournement entraîne la désactivation définitive de la licence. SAOBOT est destiné à l\'éducation ; l\'utilisation pour des jeux est à vos risques.',
		'terms.section5.eyebrow': '5. Support et contact',
		'terms.section5.heading': 'Questions légales',
		'terms.section5.copy': 'Les demandes légales ou liées aux licences doivent transiter par le Discord officiel (<a href="https://discord.gg/aQMcEPgUUa" target="_blank" rel="noopener">discord.gg/aQMcEPgUUa</a>). Fournissez la preuve d\'achat et l\'empreinte matérielle pour vérification.',
		'meta.title.license': 'SAOBOT – Contrat de licence',
		'meta.description.license': 'Consultez le contrat de licence utilisateur final et les restrictions d\'utilisation de SAOBOT.',
		'license.cta': 'Contrat',
		'license.hero.eyebrow': 'Contrat de licence',
		'license.hero.heading': 'Licence utilisateur SAOBOT',
		'license.hero.lead': 'Ce document précise la portée de la licence accordée à chaque client SAOBOT : limitations, politique de mise à jour et motifs de résiliation.',
		'license.section1.eyebrow': '1. Octroi de licence',
		'license.section1.heading': 'Restriction mono-utilisateur',
		'license.section1.copy': 'Vous obtenez une licence non transférable et non exclusive pour exécuter SAOBOT sur un seul PC Windows à la fois. Chaque machine supplémentaire requiert une licence dédiée. VM, PC cloud et setups de streaming sont interdits sans validation écrite.',
		'license.section2.eyebrow': '2. Ingénierie inverse',
		'license.section2.heading': 'Aucune altération',
		'license.section2.copy': 'Décompilation, capture de trafic, modification des binaires ou partage de loaders/cracks sont proscrits. Toute violation entraîne la résiliation immédiate sans remboursement et un bannissement définitif du support.',
		'license.section3.eyebrow': '3. Mises à jour et support',
		'license.section3.heading': 'Livraison continue',
		'license.section3.copy': 'Les licences actives incluent les mises à jour mineures et la maintenance des contournements. L\'accès aux fonctions bêta peut être suspendu si la stabilité ou la conformité est menacée. SAOBOT est un outil éducatif ; les mises à jour sont pour l\'apprentissage.',
		'license.section4.eyebrow': '4. Résiliation',
		'license.section4.heading': 'Motifs de suspension',
		'license.section4.copy': 'Les licences peuvent être résiliées en cas de paiement frauduleux, litige bancaire, harcèlement, fuite de builds privés ou non-respect de l\'exigence Arduino. Toute utilisation non éducative peut entraîner la résiliation. Les comptes résiliés perdent l\'accès immédiatement.',
		'license.section5.eyebrow': '5. Contact',
		'license.section5.heading': 'Canal de support',
		'license.section5.copy': 'Toute question relative au contrat doit transiter par le Discord officiel (<a href="https://discord.gg/aQMcEPgUUa" target="_blank" rel="noopener">discord.gg/aQMcEPgUUa</a>) avec preuve d\'achat.',
		'disclaimer.text': 'Avertissement : SAOBOT est un outil éducatif pour l\'apprentissage de la programmation, l\'analyse d\'images et l\'automatisation logicielle. Toute utilisation pour tricher dans des jeux est interdite et à la responsabilité exclusive de l\'utilisateur. Nous ne sommes affiliés à aucun éditeur de jeux et déclinons toute responsabilité pour les conséquences légales ou autres.'
	},
};

let translationsCached = false;

const initYear = () => {
	const yearEl = document.getElementById('year');
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}
};

const initSmoothScroll = () => {
	document.addEventListener('click', (event) => {
		const trigger = event.target.closest('[data-scroll], a[href^="#"]');
		if (!trigger) return;

		let selector = trigger.getAttribute('data-scroll');
		if (!selector && trigger.tagName === 'A') {
			const href = trigger.getAttribute('href');
			if (href && href.startsWith('#') && href.length > 1) {
				selector = href;
			}
		}

		const target = selector ? document.querySelector(selector) : null;
		if (target) {
			event.preventDefault();
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
};

const initRevealObserver = () => {
	const elements = document.querySelectorAll('.reveal');
	if (!elements.length) return;

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('revealed');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.2 });

	elements.forEach((el) => observer.observe(el));
};

const initFaq = () => {
	const items = document.querySelectorAll('.faq-item');
	items.forEach((item) => {
		const question = item.querySelector('.faq-question');
		question?.addEventListener('click', () => {
			items.forEach((loopItem) => {
				if (loopItem !== item) loopItem.classList.remove('active');
			});
			item.classList.toggle('active');
		});
	});
};

const initCanvas = () => {
	const canvas = document.getElementById('grid-canvas');
	if (!canvas) return;

	const ctx = canvas.getContext('2d');
	const lines = [];

	const createLines = () => {
		lines.length = 0;
		const count = Math.round((window.innerWidth + window.innerHeight) / 60);
		for (let i = 0; i < count; i += 1) {
			lines.push({
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
				length: 80 + Math.random() * 160,
				speed: 0.2 + Math.random() * 0.6,
				horizontal: Math.random() > 0.5,
				glow: Math.random() > 0.6 ? 'accent' : 'primary',
			});
		}
	};

	const resize = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		createLines();
	};

	const colors = {
		primary: 'rgba(255, 70, 85, 0.35)',
		accent: 'rgba(65, 255, 216, 0.25)',
	};

	const draw = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		lines.forEach((line) => {
			ctx.strokeStyle = colors[line.glow];
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			if (line.horizontal) {
				ctx.moveTo(line.x, line.y);
				ctx.lineTo(line.x + line.length, line.y);
				line.x += line.speed;
				if (line.x > canvas.width) line.x = -line.length;
			} else {
				ctx.moveTo(line.x, line.y);
				ctx.lineTo(line.x, line.y + line.length);
				line.y += line.speed;
				if (line.y > canvas.height) line.y = -line.length;
			}
			ctx.stroke();
		});
		requestAnimationFrame(draw);
	};

	resize();
	window.addEventListener('resize', resize);
	requestAnimationFrame(draw);
};

const initSectionAnimations = () => {
	const sections = document.querySelectorAll('.animate-section');
	if (!sections.length) return;

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('section-visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.2 });

	sections.forEach((section) => observer.observe(section));
};

const initCounters = () => {
	const counters = document.querySelectorAll('.count-up');
	if (!counters.length) return;

	const easeOutCubic = (t) => 1 - (1 - t) ** 3;

	const animateCounter = (el) => {
		const targetValue = Number(el.dataset.count) || 0;
		const suffix = el.dataset.suffix || '';
		const duration = Number(el.dataset.duration) || 2800;
		const start = performance.now();

		const tick = (now) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = easeOutCubic(progress);
			const current = Math.round(eased * targetValue);
			el.textContent = `${current}${suffix}`;
			if (progress < 1) requestAnimationFrame(tick);
		};

		requestAnimationFrame(tick);
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && entry.target.dataset.animated !== 'true') {
				entry.target.dataset.animated = 'true';
				animateCounter(entry.target);
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.6 });

	counters.forEach((counter) => observer.observe(counter));
};

const initCheckoutRedirect = () => {
	const buttons = document.querySelectorAll('[data-checkout-url]');
	if (!buttons.length) return;

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const url = button.getAttribute('data-checkout-url');
			if (!url) return;
			button.disabled = true;
			button.classList.add('is-loading');
			const originalText = button.dataset.originalText || button.textContent;
			button.dataset.originalText = originalText;
			button.textContent = 'Redirection...';
			window.location.href = url;
		});
	});
};

const attrDatasetKey = (attr) => {
	const camel = attr.replace(/-([a-z])/gi, (_, char) => char.toUpperCase());
	return `i18nAttrDefault${camel.charAt(0).toUpperCase()}${camel.slice(1)}`;
};

const parseAttrMappings = (raw) => {
	if (!raw) return [];
	return raw.split(',').map((pair) => {
		const [attr, key] = pair.split(':').map((token) => token.trim());
		if (!attr || !key) return null;
		return { attr, key };
	}).filter(Boolean);
};

const cacheDefaultTranslations = () => {
	if (translationsCached) return;
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		if (el.dataset.i18nDefault === undefined) {
			el.dataset.i18nDefault = el.innerHTML;
		}
	});
	document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
		parseAttrMappings(el.dataset.i18nAttr).forEach(({ attr }) => {
			const dataKey = attrDatasetKey(attr);
			if (el.dataset[dataKey] === undefined) {
				const current = el.getAttribute(attr);
				if (current !== null) {
					el.dataset[dataKey] = current;
				}
			}
		});
	});
	translationsCached = true;
};

const updateLangButtons = (lang) => {
	const buttons = document.querySelectorAll('.lang-btn');
	buttons.forEach((button) => {
		const isActive = button.dataset.lang === lang;
		button.classList.toggle('is-active', isActive);
		button.setAttribute('aria-pressed', String(isActive));
	});
};

const applyLanguage = (lang) => {
	const dictionary = translations[lang] || {};
	document.documentElement.lang = lang;
	document.documentElement.dataset.lang = lang;
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.dataset.i18n;
		if (!key) return;
		const fallback = el.dataset.i18nDefault ?? el.innerHTML;
		if (lang === DEFAULT_LANG) {
			el.innerHTML = fallback;
			return;
		}
		const translated = dictionary[key];
		if (typeof translated === 'string') {
			el.innerHTML = translated;
		} else {
			el.innerHTML = fallback;
		}
	});
	document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
		const mappings = parseAttrMappings(el.dataset.i18nAttr);
		mappings.forEach(({ attr, key }) => {
			const dataKey = attrDatasetKey(attr);
			const fallback = el.dataset[dataKey] ?? el.getAttribute(attr) ?? '';
			if (lang === DEFAULT_LANG) {
				el.setAttribute(attr, fallback);
				return;
			}
			const translated = dictionary[key];
			if (typeof translated === 'string') {
				el.setAttribute(attr, translated);
			} else {
				el.setAttribute(attr, fallback);
			}
		});
	});
	updateLangButtons(lang);
	initYear();
};

const setLanguage = (lang) => {
	const nextLang = translations[lang] ? lang : DEFAULT_LANG;
	cacheDefaultTranslations();
	applyLanguage(nextLang);
	localStorage.setItem(LANG_STORAGE_KEY, nextLang);
};

const initLanguageSwitcher = () => {
	const buttons = document.querySelectorAll('.lang-btn');
	if (!buttons.length) return;
	cacheDefaultTranslations();
	const saved = localStorage.getItem(LANG_STORAGE_KEY);
	const initialLang = translations[saved] ? saved : DEFAULT_LANG;
	applyLanguage(initialLang);
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const requested = button.dataset.lang;
			if (!requested || requested === document.documentElement.dataset.lang) return;
			setLanguage(requested);
		});
	});
};

document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('motion-ready');
	initYear();
	initSmoothScroll();
	initRevealObserver();
	initFaq();
	initCanvas();
	initSectionAnimations();
	initCounters();
	initCheckoutRedirect();
	initLanguageSwitcher();
});

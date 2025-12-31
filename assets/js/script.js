const DEFAULT_LANG = 'en';
const LANG_STORAGE_KEY = 'saobot-lang';
const translations = {
	en: {
		'meta.title.home': 'SAOBOT',
		'meta.description.home': 'SAOBOT is an educational tool for learning programming, image analysis, and software automation. Any use for cheating in games is prohibited and the sole responsibility of the user.',
		'testimonials.card13.name': 'Lambda',
		'testimonials.card13.role': 'Radiant',
		'partners.chip2.title': 'Saobot Logiciel',
		'partners.chip2.desc': 'Triggerbot jitter 2-5&nbsp;ms',
		'partners.chip3.title': 'Saobot Suite',
		'partners.chip3.desc': 'Multi-profile recoil macros',
		'partners.chip4.title': 'Saobot spoofing',
		'partners.chip4.desc': 'Invisible PID/HID spoof',
		'partners.chip5.title': 'Image detection',
		'partners.chip5.desc': 'Chrono prediction of sight',
		'features.eyebrow': 'Key modules',
		'features.heading': 'Complete arsenal to improve your Aim',
		'features.copy': 'Each function is tuned for a <span class="gold-text">premium</span> feel and improved performance across every educational domain SAOBOT explores.',
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
		'features.card4.desc': 'Advanced Arduino/mouse emulation that masks injection and bypasses certain security layers.',
		'features.card4.tag': 'Spoofer',
		'hardware.arduino.eyebrow': 'Need hardware?',
		'hardware.arduino.heading': 'No Arduino yet?',
		'hardware.arduino.copy': 'Grab a Leonardo board approved for SAOBOT workflows and unlock every feature.',
		'hardware.arduino.button': 'Buy Arduino',
		'hardware.arduino.download.text': 'Download the code to upload to the Arduino',
		'hardware.arduino.download.button': 'Download Arduino Code',
		'split.eyebrow': 'Showcase',
		'split.heading': 'Rapid <span class="accent">SAOBOT</span> previews',
		'split.copy': 'Three short clips highlight the core modules so you can sample the experience before diving deeper.',
		'split.left.eyebrow': 'Why SAOBOT?',
		'split.left.heading': 'Built for tactical sessions',
		'split.left.copy': 'Dark interface, bright overlays, and instant controls keep focus on ranked play while our security stack mirrors Riot styling.',
		'split.list1': 'Contextual shortcuts with discreet and complete HUD.',
		'split.list2': '95% current undetectability.',
		'split.list3': 'Aimbot, Triggerbot, Anti-recoil, HID/PID spoofer.',
		'split.list4': 'Frequent updates.',
		'split.list5': '24/7 dedicated Discord support.',
		'split.demo.aimbot.label': 'Aimbot',
		'split.demo.aimbot.title': 'Aim preview',
		'split.demo.aimbot.copy': 'Watch a short capture of the aim assist module staying human while snapping to heads.',
		'split.demo.aimbot.aria': 'Aimbot preview video',
		'split.demo.trigger.label': 'Triggerbot',
		'split.demo.trigger.title': 'Fast triggerbot',
		'split.demo.trigger.copy': 'See how the triggerbot reacts in under 40 ms when a target crosses the scope.',
		'split.demo.trigger.aria': 'Triggerbot preview video',
		'split.demo.recoil.label': 'Anti-recoil',
		'split.demo.recoil.title': 'Spray control demo',
		'split.demo.recoil.copy': 'A condensed clip showing vertical and horizontal recoil management staying legit.',
		'split.demo.recoil.aria': 'Vidéo d\'aperçu de l\'anti-recul',
		'split.demo.expand': 'Agrandir la vidéo',
		'split.demo.close': 'Fermer la vidéo',
		'split.demo.modal.aria': 'Aperçu vidéo SAOBOT',
		'split.demo.expand': 'Expand video',
		'split.demo.close': 'Close video',
		'split.demo.modal.aria': 'SAOBOT video preview',
		'split.video.aria': 'Official SAOBOT presentation video',
		'split.video.fallback': 'Your browser does not support HTML5 video tag.',
		'split.video.caption': 'Demo video – Official SAOBOT presentation.',
		'setup.eyebrow': 'Setup',
		'setup.heading': 'Complete SAOBOT onboarding',
		'setup.copy': 'Need the full 32-minute installation tutorial? Watch the walkthrough covering downloads, Arduino wiring, and dashboard activation.',
		'setup.video.aria': 'SAOBOT setup tutorial video',
		'setup.video.caption': 'Full tutorial – 32 minutes of guided setup.',
		'tutorial.hero.eyebrow': 'Full setup guide',
		'tutorial.hero.heading': '32-minute onboarding tutorial',
		'tutorial.hero.lead': 'Follow the complete workflow from download to HID spoofing, licensing, and dashboard configuration.',
		'tutorial.steps.title': 'What you will cover',
		'tutorial.steps.card1': 'Download & verify',
		'tutorial.steps.card2': 'Wire & spoof',
		'tutorial.steps.card3': 'Profile building',
		'tutorial.steps.card4': 'Safety & fixes',
		'tutorial.steps.item1': 'Download SAOBOT, required drivers, and verify the installer integrity.',
		'tutorial.steps.item2': 'Wire and flash the Arduino Leonardo while cloning HID/PID identifiers.',
		'tutorial.steps.item3': 'Configure dashboard profiles for aim assist, triggerbot, and anti-recoil presets.',
		'tutorial.steps.item4': 'Test safety toggles, panic hotkeys, and solve the most common activation issues.',
		'tutorial.cta.back': 'Back to homepage',
		'tutorial.cta.download': 'Download SAOBOT installer',
		'tutorial.cta.pricing': 'See pricing plan',
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
		'testimonials.eyebrow': 'Trusted feedback',
		'testimonials.heading': 'Players lock their aim with <span class="accent">SAOBOT</span>',
		'testimonials.copy': 'Every license ships with premium support, but the real proof lives inside Discord. Here is what recent buyers report.',
		'testimonials.card1.time': 'Verified 2 days ago',
		'testimonials.card1.quote': 'Two Valorant grind nights and SAOBOT still makes my aim look human even with the aimbot. My Phantom now chains one taps.',
		'testimonials.card1.name': 'LunaSky',
		'testimonials.card1.role': '',
		'testimonials.card2.time': 'Verified last week',
		'testimonials.card2.quote': 'Staff jumped in on Discord, tuned the triggerbot delay, and now my Marshal one taps are insane.',
		'testimonials.card2.name': 'Vexon',
		'testimonials.card2.role': '',
		'testimonials.card3.time': 'Verified this month',
		'testimonials.card3.quote': 'Dashboard nudges me to adjust every profile. I set the aimbot and triggerbot exactly the way I need.',
		'testimonials.card3.name': 'Mythic',
		'testimonials.card3.role': '',
		'testimonials.card4.time': 'Verified 2 weeks ago',
		'testimonials.card4.quote': 'Spoofer plus dashboard let me grind ranked on my main. I moved from Gold 2 to Ascendant 3.',
		'testimonials.card4.name': 'KyraVolt',
		'testimonials.card4.role': '',
		'testimonials.card5.time': 'Verified 3 days ago',
		'testimonials.card5.quote': 'Smoothing keeps my flicks legit. I can cheat even when I’m spectated without stressing in ranked.',
		'testimonials.card5.name': 'OnetapFox',
		'testimonials.card5.role': '',
		'testimonials.card6.time': 'Verified yesterday',
		'testimonials.card6.quote': 'Anti-recoil helped me clean up sprays. Five minutes of tweaks and it feels super natural.',
		'testimonials.card6.name': 'Silex',
		'testimonials.card6.role': '',
		'testimonials.card7.time': 'Verified this week',
		'testimonials.card7.quote': 'Runs perfectly on Win10 for me. Humanization makes high-rank grind so much easier.',
		'testimonials.card7.name': 'RogueBay',
		'testimonials.card7.role': '',
		'testimonials.card8.time': 'Verified 10 days ago',
		'testimonials.card8.quote': 'Team is insanely reactive. I needed config help and they replied almost instantly on Discord.',
		'testimonials.card8.name': 'xNeon',
		'testimonials.card8.role': '',
		'testimonials.card9.time': 'Verified 4 days ago',
		'testimonials.card9.quote': 'Triggerbot still fires under 5 ms even with OBS overlays stacked. Worth the sub on its own.',
		'testimonials.card9.name': 'MiraPulse',
		'testimonials.card9.role': '',
		'testimonials.card10.time': 'Verified this morning',
		'testimonials.card10.quote': 'Spoofer works great so I can play relaxed. Three weeks non-stop with SAOBOT and zero bans so far.',
		'testimonials.card10.name': 'Coach Daro',
		'testimonials.card10.role': '',
		'testimonials.card11.time': 'Verified last month',
		'testimonials.card11.quote': 'Mouse plus Arduino spoofed PID/HID and Vanguard saw nothing. Their stealth layer is legit.',
		'testimonials.card11.name': 'HexNova',
		'testimonials.card11.role': '',
		'testimonials.card12.time': 'Verified 5 hours ago',
		'testimonials.card12.quote': 'Triggerbot is incredible and easy to tune with the dynamic interface. Straight 10/10.',
		'testimonials.card12.name': 'Noxxy',
		'testimonials.card12.role': '',
		'testimonials.card13.time': 'Verified 2 months ago',
		'testimonials.card13.quote': 'Three updates rolled through and it still works the same. I recommend it 100%.',
		'testimonials.card13.name': 'Lambda',
		'testimonials.card13.role': '',
		'testimonials.cta.copy': 'Ready to join the squad with 98% satisfaction?',
		'testimonials.cta.button': 'Activate SAOBOT now',
		'testimonials.scroll.hint': 'Swipe horizontally to explore every verified review.',
		'testimonials.scroll.prev': 'Scroll reviews left',
		'testimonials.scroll.next': 'Scroll reviews right',
		'pricing.heading': 'Simple licenses, instant results',
		'pricing.badge': 'Best seller',
		'pricing.title': 'ULTIMATE Pack',
		'pricing.price': '€9.99/month · was €19.99',
		'pricing.flash.badge': '-50%',
		'pricing.flash.note': 'Lifetime lock while the flash promo runs.',
		'pricing.copy': 'Full access to <span class="gold-text">SAOBOT</span> modules, updates, and <span class="gold-text">premium</span> support for €9.99 while the flash drop lasts (regular price €19.99).',
		'pricing.trial': 'Doubt? Use the <strong>SAO-TRIAL</strong> license for 1 hour with all modules, no commitment.',
		'pricing.list3': 'Multi-profile recoil management for each weapon.',
		'pricing.list4': 'PID/HID/Arduino spoofing to bypass certain security layers.',
		'pricing.list5': '24/7 premium Discord support.',
		'pricing.list6': 'Regular updates included.',
		'faq.q5': 'How to manage assistance FOV?',
		'faq.a5': 'The dashboard offers a circular or square FOV slider with preview. Assign different values per weapon or role.',
		'faq.q6': 'Is PID/HID spoofing compatible with all mice?',
		'faq.a6': 'We emulate a standard USB bus with dynamic HID profiles covering 99% of mice, including wireless models via dongle.',
		'faq.q8': 'What detection rate have you observed?',
		'faq.a8': 'Over 12 months we stay under 1% confirmed reports. Keep legit presets, avoid extreme FOVs, and update SAOBOT after each software update.',
		'faq.q9': 'How does autoshoot work?',
		'faq.a9': 'Autoshoot relies on triggers and adds 2-6&nbsp;ms jitter to stay human. Limit it to short bursts or single-shot weapons.',
		'faq.q11': 'Will the price change after beta?',
		'faq.a11': 'Existing accounts keep the €9.99 monthly rate. New licenses may evolve after the 2026 roadmap, your price remains fixed.',
		'faq.q12': 'What payment methods do you accept?',
		'faq.a12': 'Credit cards (Visa, Mastercard), PayPal, and crypto (BTC, ETH, USDT). Monthly automatic renewal with pause or manual reload.',
		'faq.q14': 'Can I use SAOBOT without Arduino?',
		'faq.a14': 'No. The Arduino Leonardo handles secure HID injection and spoofing to keep inputs stealthy. Without it, critical modules refuse to start for security reasons.',
		'faq.q15': 'I didn\'t receive my license, what to do?',
		'faq.a15': 'Start by checking your spam or promotions folders: 90% of missing emails are there within minutes. Contact support only after this check to avoid duplicates.',
		'footer.discord': 'Official Discord',
		'footer.copy': '© <span id="year"></span> SAOBOT. All rights reserved.',
		'footer.disclaimer': 'Educational product not affiliated with game publishers. Use at your own risk. Any use for cheating is prohibited and your sole responsibility.',
		'meta.title.terms': 'SAOBOT – Terms of Use',
		'terms.hero.eyebrow': 'Terms of Use',
		'terms.hero.heading': '<span class="accent">SAOBOT</span> Legal Framework',
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
		'license.hero.heading': '<span class="accent">SAOBOT</span> End-User License',
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
		'disclaimer.text': 'Warning: SAOBOT is an educational UI-driven colorbot that positions the mouse automatically using MSS captures from the focused window. Its detection engine applies predefined logic before sending coordinates to the HID driver for precise movement. Educational tool only; any cheating use is prohibited and remains your sole responsibility. We are not affiliated with any game publishers and disclaim any legal or other consequences.'
	},
	fr: {
		'meta.title.home': 'SAOBOT',
		'meta.description.home': 'SAOBOT affine votre précision avec l\'aim assist, l\'auto aim, le contrôle du recul et le spoofing matériel.',
		'nav.features': 'Fonctionnalités',
		'nav.pricing': 'Tarifs',
		'nav.faq': 'FAQ',
		'nav.tutorial': 'Tutoriel',
		'tutorial.meta.title': 'SAOBOT – Tutoriel d\'installation',
		'tutorial.meta.description': 'Regardez le tutoriel complet de 32 minutes couvrant téléchargement, câblage Arduino et activation du dashboard.',
		'lang.switch': 'Changer de langue',
		'meta.title.failure': 'Paiement échoué - SAOBOT',
		'meta.description.failure': 'Paiement échoué. Veuillez réessayer votre achat de licence SAOBOT.',
		'meta.title.success': 'Paiement confirmé - SAOBOT',
		'meta.description.success': 'Paiement confirmé. Votre licence SAOBOT a été créée. Vérifiez votre boîte mail pour les détails.',
		'header.buy': 'Acheter',
		'header.download': 'Télécharger',
		'header.download.title': 'Télécharger l\'installateur SAOBOT',
		'header.repo.en': 'Repo GitHub (EN)',
		'header.repo.en.title': 'Ouvrir le dépôt GitHub anglais',
		'header.repo.fr': 'Repo GitHub (FR)',
		'header.repo.fr.title': 'Ouvrir le dépôt GitHub français',
		'hero.eyebrow': 'Suite d\'assistance éducative',
		'hero.heading': 'Maîtrisez votre Aim avec <span class="accent">SAOBOT</span>',
		'hero.lead': 'Conçu pour les environnements éducatifs et d\'apprentissage, SAOBOT combine aim assist, auto aim, contrôle du recul et spoofing matériel pour des sessions ultra stables et discrètes. Outil pédagogique uniquement.',
		'hero.planButton': 'Bloquer l\'offre 9,99&nbsp;€',
		'hero.discord': 'Rejoindre Discord',
		'hero.modules': 'Explorer les modules',
		'hero.flash.ribbon': 'Offre de lancement · -50&nbsp;%',
		'hero.flash.countdownLabel': 'Reset dans',
		'hero.flash.base': 'Prix de base 19,99&nbsp;€',
		'hero.flash.save': 'Remise garantie -50&nbsp;%',
		'hero.flash.current': 'Offre flash',
		'hero.flash.price': '9,99&nbsp;€',
		'hero.flash.lock': 'Bloquez le 9,99&nbsp;€ de l\'offre de lancement avant que le chrono néon s\'éteigne.',
		'hero.flash.fact1.label': 'Batch',
		'hero.flash.fact1.value': '50 accès',
		'hero.flash.fact1.copy': 'Retour à 19,99&nbsp;€ une fois rempli.',
		'hero.flash.fact2.label': 'Remise instantanée',
		'hero.flash.fact2.value': '-50&nbsp;%',
		'hero.flash.fact2.copy': 'Aucun code, le timer décide.',
		'hero.flash.fact3.label': 'Tarif figé',
		'hero.flash.fact3.value': '9,99&nbsp;€',
		'hero.flash.fact3.copy': 'Vous restez à 9,99&nbsp;€ même après reset.',
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
		'hardware.eyebrow': 'Architecture externe',
		'hardware.heading': 'Pourquoi <span class="accent">SAOBOT</span> échappe au radar',
		'hardware.lead': 'La plupart des logiciels mémoire lisent le jeu de l’intérieur. SAOBOT redirige tout via un pont Arduino HID pour rester hors du process protégé.',
		'hardware.memory.badge': 'Logiciels classiques',
		'hardware.memory.title': 'Outils mémoire internes',
		'hardware.memory.copy': 'Des DLL injectées lisent la RAM, patchent des fonctions et simulent des entrées depuis le jeu.',
		'hardware.memory.item1': 'Détectés par les anti-cheats qui traquent hooks et signatures.',
		'hardware.memory.item2': 'Laissent des traces dans les crash dumps et les journaux Windows.',
		'hardware.memory.item3': 'Ban waves massives dès qu’un offset casse ou qu’une détection évolue.',
		'hardware.saobot.badge': 'Méthode SAOBOT',
		'hardware.saobot.title': 'Exécution Arduino externe',
		'hardware.saobot.copy': 'Les calculs restent sur le PC mais l’Arduino Leonardo envoie les mouvements comme une souris standard.',
		'hardware.saobot.item1': 'Aucune écriture mémoire : l’anti-cheat ne voit que du HID légitime.',
		'hardware.saobot.item2': 'Pile externe = aim assist, triggerbot et anti-recul totalement invisibles.',
		'hardware.saobot.item3': 'Seuls des reports répétés par les spectateurs peuvent mener à une vérification.',
		'hardware.highlight': 'Sans injection ni lecture mémoire, l’Arduino rend l’anti-cheat aveugle. Restez “legit” : seuls les reports in-game représentent un risque.',
		'hardware.arduino.eyebrow': 'Pas d’Arduino ?',
		'hardware.arduino.heading': 'Achetez-le ici',
		'hardware.arduino.copy': 'Commandez une carte Leonardo approuvée pour débloquer toutes les fonctions SAOBOT.',
		'hardware.arduino.button': 'Acheter l’Arduino',
		'partners.eyebrow': 'Écosystème',
		'partners.heading': 'SAOBOT System',
		'partners.copy': 'Chaque module d\'aimbot, triggerbot et spoofing matériel garde un fonctionnement humain tout en dépassant les limites humaines de réaction.',
		'partners.aria': 'Modules phares de SAOBOT',
		'partners.chip1.title': 'Saobot Function',
		'partners.chip1.desc': 'Colorbot + snap 4&nbsp;ms',
		'partners.chip2.title': 'Saobot Logiciel',
		'partners.chip2.desc': 'Triggerbot jitter 2-5&nbsp;ms',
		'partners.chip3.title': 'Saobot Suite',
		'partners.chip3.desc': 'Macros de recul multi-profils',
		'partners.chip4.title': 'Saobot spoofing',
		'partners.chip4.desc': 'Spoof PID/HID invisible',
		'partners.chip5.title': 'Détection d\'image',
		'partners.chip5.desc': 'Prédiction chrono du viseur',
		'features.eyebrow': 'Modules clés',
		'features.heading': 'Un arsenal complet pour l\'amélioration de votre Aim',
		'features.copy': 'Chaque fonction est réglée pour un ressenti <span class="gold-text">premium</span> et des performances améliorées dans tous les domaines pédagogiques explorés par SAOBOT.',
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
		'features.card4.desc': 'Émulation avancée Arduino/souris qui masque l\'injection et contourne certaines sécurités.',
		'features.card4.tag': 'Spoofer',
		'split.eyebrow': 'Showcase',
		'split.heading': 'Aperçu express <span class="accent">SAOBOT</span>',
		'split.copy': 'Trois mini-clips présentent les modules clés avant de lancer la session complète.',
		'split.left.eyebrow': 'Pourquoi SAOBOT ?',
		'split.left.heading': 'Pensé pour les sessions tactiques',
		'split.left.copy': 'Interface sombre, overlays lumineux et contrôles instantanés gardent le focus sur le ranked pendant que la pile sécurité respecte le langage Riot.',
		'split.list1': 'Raccourcis contextuels avec HUD discret et complet.',
		'split.list2': '95&nbsp;% d\'indétectabilité actuellement.',
		'split.list3': 'Aimbot, Triggerbot, Anti-recul, spoofer HID/PID.',
		'split.list4': 'Mises à jour fréquentes.',
		'split.list5': 'Support Discord dédié 24/7.',
		'split.demo.aimbot.label': 'Aimbot',
		'split.demo.aimbot.title': 'Prévisualisation Aim',
		'split.demo.aimbot.copy': 'Mini capture montrant l’assist aim garder un comportement humain tout en collant aux têtes.',
		'split.demo.aimbot.aria': 'Vidéo d\'aperçu de l\'aimbot',
		'split.demo.trigger.label': 'Triggerbot',
		'split.demo.trigger.title': 'Fast triggerbot',
		'split.demo.trigger.copy': 'Voyez la réaction en moins de 40&nbsp;ms dès qu’une cible traverse la lunette.',
		'split.demo.trigger.aria': 'Vidéo d\'aperçu du triggerbot',
		'split.demo.recoil.label': 'Anti-recul',
		'split.demo.recoil.title': 'Contrôle du spray',
		'split.demo.recoil.copy': 'Clip condensé montrant la gestion verticale et horizontale qui reste legit.',
		'split.demo.recoil.aria': 'Vidéo d\'aperçu de l\'anti-recul',
		'split.video.aria': 'Vidéo de présentation officielle SAOBOT',
		'split.video.fallback': 'Votre navigateur ne prend pas en charge la balise vidéo HTML5.',
		'split.video.caption': 'Vidéo démo – Présentation officielle SAOBOT.',
		'setup.eyebrow': 'Tutoriel',
		'setup.heading': 'Mise en place complète de SAOBOT',
		'setup.copy': 'Besoin du tutoriel de 32 minutes ? Regardez le guide complet : téléchargement, câblage Arduino et activation du dashboard.',
		'setup.video.aria': 'Vidéo tutoriel d\'installation SAOBOT',
		'setup.video.caption': 'Tutoriel complet – 32 minutes guidées.',
		'tutorial.hero.eyebrow': 'Guide complet',
		'tutorial.hero.heading': 'Tutoriel d’onboarding de 32 minutes',
		'tutorial.hero.lead': 'Suivez tout le workflow, du téléchargement au spoof HID ainsi qu’à la configuration du dashboard.',
		'tutorial.steps.title': 'Ce que vous allez couvrir',
		'tutorial.steps.card1': 'Télécharger & vérifier',
		'tutorial.steps.card2': 'Câbler & spoof',
		'tutorial.steps.card3': 'Créer les profils',
		'tutorial.steps.card4': 'Sécurité & dépannage',
		'tutorial.steps.item1': 'Téléchargement de SAOBOT, des pilotes requis et vérification de l’installateur.',
		'tutorial.steps.item2': 'Câblage et flash de l’Arduino Leonardo avec clonage HID/PID.',
		'tutorial.steps.item3': 'Configuration des profils dashboard (aim assist, triggerbot, anti-recul).',
		'tutorial.steps.item4': 'Tests des toggles de sécurité, touche panic et résolution des blocages courants.',
		'tutorial.cta.back': 'Retour à l’accueil',
		'tutorial.cta.download': 'Télécharger l’installateur SAOBOT',
		'tutorial.cta.pricing': 'Voir l’offre tarifaire',
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
		'testimonials.eyebrow': 'Avis vérifiés',
		'testimonials.heading': 'Ils verrouillent leur aim avec <span class="accent">SAOBOT</span>',
		'testimonials.copy': 'Chaque licence inclut un support premium, mais les preuves sont dans la communauté. Voici les derniers retours.',
		'testimonials.card1.time': 'Vérifié il y a 2 jours',
		'testimonials.card1.quote': "Deux nuits de grind sur Valo et SAOBOT garde mon Aim humaine malgré l'aimbot. Ma Phantom enchaine les one-tap.",
		'testimonials.card1.name': 'LunaSky',
		'testimonials.card1.role': '',
		'testimonials.card2.time': 'Vérifié la semaine dernière',
		'testimonials.card2.quote': 'Le staff est venu sur Discord, a réglé le délai du triggerbot, maintenant mes one-taps au Marshal sont insane.',
		'testimonials.card2.name': 'Vexon',
		'testimonials.card2.role': '',
		'testimonials.card3.time': 'Vérifié ce mois-ci',
		'testimonials.card3.quote': "Le dashboard me d'adapter mon profil. j'ai regler mon aimbot\\triggerbot selon mes besoins.",
		'testimonials.card3.name': 'Mythic',
		'testimonials.card3.role': '',
		'testimonials.card4.time': 'Vérifié il y a 2 semaines',
		'testimonials.card4.quote': 'Spoofer + dashboard m’ont laissé grind full ranked sur mon main. passez de gold-2 a ascendant-3.',
		'testimonials.card4.name': 'KyraVolt',
		'testimonials.card4.role': '',
		'testimonials.card5.time': 'Vérifié il y a 3 jours',
		'testimonials.card5.quote': 'Le smoothing garde mes flicks legit. je peux cheat meme en etant spectate sans pression en ranked.',
		'testimonials.card5.name': 'OnetapFox',
		'testimonials.card5.role': '',
		'testimonials.card6.time': 'Vérifié hier',
		'testimonials.card6.quote': "L’anti-recoil m'a permis d'ameliorer mes spray. Cinq minutes de réglage et c’est ultra naturel.",
		'testimonials.card6.name': 'Silex',
		'testimonials.card6.role': '',
		'testimonials.card7.time': 'Vérifié cette semaine',
		'testimonials.card7.quote': "Fonctionne parfaitemment sous win10 pour moi incroyable surtout l'humanisation pour grind haut rank en ranked.",
		'testimonials.card7.name': 'RogueBay',
		'testimonials.card7.role': '',
		'testimonials.card8.time': 'Vérifié il y a 10 jours',
		'testimonials.card8.quote': "Equipe incroyablement réactive j'ai une besoin d'aide pour la config de saobot l'équipe m'a aider casiment instant sur discord merci bcp !.",
		'testimonials.card8.name': 'xNeon',
		'testimonials.card8.role': '',
		'testimonials.card9.time': 'Vérifié il y a 4 jours',
		'testimonials.card9.quote': 'Triggerbot tire toujours sous 5 ms même avec les overlays OBS empilés. Ça vaut l’abo tout seul.',
		'testimonials.card9.name': 'MiraPulse',
		'testimonials.card9.role': '',
		'testimonials.card10.time': 'Vérifié ce matin',
		'testimonials.card10.quote': "Le spoof fonctionne nickel je peux jouer tranquille 3 semaine que j'utilise saobot non-stop 0 ban jusqu'ici.",
		'testimonials.card10.name': 'Coach Daro',
		'testimonials.card10.role': '',
		'testimonials.card11.time': 'Vérifié le mois dernier',
		'testimonials.card11.quote': 'souris + arduino PID/HID spoofés, Vanguard n’ont rien vu. Leur couche stealth est sérieuse.',
		'testimonials.card11.name': 'HexNova',
		'testimonials.card11.role': '',
		'testimonials.card12.time': 'Vérifié il y a 5 h',
		'testimonials.card12.quote': "le triggerbot incroyable fonctionne nickel tout est réglable facilement grace a l'interface dynamique 10/10.",
		'testimonials.card12.name': 'Noxxy',
		'testimonials.card12.role': '',
		'testimonials.card13.time': 'Vérifié il y a 2 mois',
		'testimonials.card13.quote': '3 mise a jour sont passez fonctionne toujour aussi bien je recommande a 100%.',
		'testimonials.card13.name': 'Lambda',
		'testimonials.card13.role': '',
		'testimonials.cta.copy': 'Prêt à rejoindre l’équipe avec 98 % de satisfaction ?',
		'testimonials.cta.button': 'Activer SAOBOT maintenant',
		'testimonials.scroll.hint': 'Glissez horizontalement pour découvrir tous les avis vérifiés.',
		'testimonials.scroll.prev': 'Faire défiler les avis vers la gauche',
		'testimonials.scroll.next': 'Faire défiler les avis vers la droite',
		'testimonials.carousel.aria': 'Avis vérifiés SAOBOT',
		'pricing.eyebrow': 'Offre de lancement',
		'pricing.heading': 'Licences simples, résultats instantanés',
		'pricing.badge': 'Meilleure vente',
		'pricing.title': 'Pack ULTIMATE',
		'pricing.price': '9,99&nbsp;€ / mois · avant 19,99&nbsp;€',
		'pricing.flash.old': 'Base 19,99&nbsp;€',
		'pricing.flash.new': 'Offre 9,99&nbsp;€',
		'pricing.flash.badge': '-50&nbsp;%',
		'pricing.flash.note': 'Tarif figé tant que la promo flash reste active.',
		'pricing.copy': 'Accès complet aux modules <span class="gold-text">SAOBOT</span>, aux mises à jour et au support <span class="gold-text">premium</span> pour 9,99&nbsp;€ tant que le drop flash est actif (tarif de base 19,99&nbsp;€).',
		'pricing.trial': 'Un doute ? Utilisez la licence <strong>SAO-TRIAL</strong> pendant 1 heure avec tous les modules, sans engagement.',
		'pricing.list1': 'Aim assist + auto aim + aimbot + autoshoot.',
		'pricing.list2': 'Triggerbot optimisé avec réactions de 4&nbsp;ms.',
		'pricing.list3': 'Gestion du recul multi-profils pour chaque arme.',
		'pricing.list4': 'Spoofing PID/HID/Arduino pour contourner certaines sécurités.',
		'pricing.list5': 'Support Discord premium 24/7.',
		'pricing.list6': 'Mises à jour régulières incluses.',
		'pricing.buy': 'Acheter maintenant',
		'pricing.download': 'Télécharger',
		'cta.eyebrow': 'Activation rapide',
		'cta.heading': 'Prêt à activer <span class="accent">SAOBOT</span> ?',
		'cta.copy': 'Débloquez le pack ULTIMATE, profitez de performances optimisées pour le classé et lancez votre session découverte d\'une heure avec la licence SAO-TRIAL avant de viser le top rank.',
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
		'terms.hero.heading': 'Cadre légal <span class="accent">SAOBOT</span>',
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
		'license.hero.heading': 'Licence utilisateur <span class="accent">SAOBOT</span>',
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
		'disclaimer.text': 'Avertissement : SAOBOT est un colorbot pédagogique avec interface graphique qui place automatiquement la souris à partir des captures MSS d\'une fenêtre ciblée. Le moteur applique une logique de détection définie avant d\'envoyer les coordonnées au driver HID pour un déplacement précis. Outil éducatif uniquement ; toute utilisation pour tricher est interdite et sous votre responsabilité. Nous ne sommes affiliés à aucun éditeur de jeux et déclinons toute responsabilité pour les conséquences légales ou autres.'
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

const initTestimonialCarousel = () => {
	const carousel = document.querySelector('.testimonial-carousel');
	const scroller = carousel?.querySelector('.testimonial-scroller');
	const track = carousel?.querySelector('.testimonial-track');
	if (!carousel || !scroller || !track) return;
	const cards = track.querySelectorAll('.testimonial-card');
	if (cards.length <= 1) return;

	const prevBtn = carousel.querySelector('[data-carousel="prev"]');
	const nextBtn = carousel.querySelector('[data-carousel="next"]');

	const computeGap = () => {
		const styles = window.getComputedStyle(track);
		const gapValue = parseFloat(styles.columnGap || styles.gap || '24');
		return Number.isNaN(gapValue) ? 24 : gapValue;
	};

	const computeStep = () => {
		const base = cards[0]?.offsetWidth || 320;
		return base + computeGap();
	};

	let step = computeStep();
	const updateStep = () => {
		step = computeStep();
	};

	window.addEventListener('resize', updateStep);

	const getLimit = () => Math.max(0, scroller.scrollWidth - scroller.clientWidth);

	const scrollToPosition = (position) => {
		scroller.scrollTo({ left: position, behavior: 'smooth' });
	};

	const goTo = (direction = 1) => {
		const limit = getLimit();
		if (limit <= 0) return;
		let target = scroller.scrollLeft + direction * step;
		const tolerance = 8;
		if (target < -tolerance) {
			target = limit;
		} else if (target > limit + tolerance) {
			target = 0;
		}
		scrollToPosition(target);
	};

	let autoTimer = null;
	const stopAuto = () => {
		if (!autoTimer) return;
		clearInterval(autoTimer);
		autoTimer = null;
	};

	const startAuto = () => {
		stopAuto();
		autoTimer = setInterval(() => {
			const limit = getLimit();
			if (limit <= 0) return;
			const nearEnd = scroller.scrollLeft >= limit - 4;
			if (nearEnd) {
				scrollToPosition(0);
			} else {
				scroller.scrollBy({ left: step, behavior: 'smooth' });
			}
		}, 4500);
	};

	const handleNav = (direction) => {
		stopAuto();
		goTo(direction);
		startAuto();
	};

	prevBtn?.addEventListener('click', () => handleNav(-1));
	nextBtn?.addEventListener('click', () => handleNav(1));
	carousel.addEventListener('mouseenter', stopAuto);
	carousel.addEventListener('mouseleave', startAuto);
	carousel.addEventListener('touchstart', stopAuto, { passive: true });
	carousel.addEventListener('touchend', startAuto);
	carousel.addEventListener('focusin', stopAuto);
	carousel.addEventListener('focusout', (event) => {
		if (!carousel.contains(event.relatedTarget)) {
			startAuto();
		}
	});
	startAuto();
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

const formatCountdown = (ms) => {
	const totalSeconds = Math.max(0, Math.floor(ms / 1000));
	const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
	const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
	const seconds = String(totalSeconds % 60).padStart(2, '0');
	return `${hours}h ${minutes}m ${seconds}s`;
};

const initFlashSaleExperience = () => {
	const sale = document.querySelector('[data-flash-sale]');
	if (!sale) return;

	const countdownEl = sale.querySelector('[data-countdown-output]');
	const countdownHours = Number(sale.dataset.countdownHours) || 4;
	const storageKey = 'saobot-flash-ends';

	const getStoredTarget = () => {
		const now = Date.now();
		let stored = Number.NaN;
		try {
			stored = Number(sessionStorage.getItem(storageKey));
		} catch (error) {
			stored = Number.NaN;
		}
		if (!Number.isFinite(stored) || stored <= now) {
			stored = now + countdownHours * 60 * 60 * 1000;
			try {
				sessionStorage.setItem(storageKey, String(stored));
			} catch (error) {
				/* ignore */
			}
		}
		return stored;
	};

	if (countdownEl) {
		let target = getStoredTarget();
		const interval = setInterval(() => {
			const remaining = target - Date.now();
			if (remaining <= 0) {
				countdownEl.textContent = '00h 00m 00s';
				sale.classList.add('flash-sale--expired');
				clearInterval(interval);
				return;
			}
			countdownEl.textContent = formatCountdown(remaining);
		}, 1000);
		countdownEl.textContent = formatCountdown(target - Date.now());
	}

	const meter = sale.querySelector('[data-meter]');
	if (meter) {
		const total = Number(meter.dataset.meterTotal) || 50;
		let current = Number(meter.dataset.meterStart);
		if (!Number.isFinite(current) || current <= 0) current = total;
		current = Math.min(total, Math.max(2, current));
		const min = Math.max(1, Math.round(total * 0.15));
		const currentEl = meter.querySelector('[data-meter-current]');
		const totalEl = meter.querySelector('[data-meter-total]');
		const fillEl = meter.querySelector('[data-meter-fill]');
		if (totalEl) totalEl.textContent = total;
		const renderMeter = () => {
			const progress = (current / total) * 100;
			if (currentEl) currentEl.textContent = current;
			if (fillEl) fillEl.style.width = `${Math.max(6, progress)}%`;
		};
		renderMeter();
		const scheduleDrop = () => {
			if (current <= min) return;
			const delay = (12 + Math.random() * 24) * 1000;
			setTimeout(() => {
				if (current <= min) return;
				current -= 1;
				renderMeter();
				scheduleDrop();
			}, delay);
		};
		scheduleDrop();
	}
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

const initDemoModal = () => {
	const modal = document.querySelector('.demo-modal');
	if (!modal) return;
	const frame = modal.querySelector('.demo-modal-frame');
	const closeBtn = modal.querySelector('[data-modal-close]');
	const triggers = document.querySelectorAll('.demo-expand');
	if (!frame || !closeBtn || !triggers.length) return;

	let lastTrigger = null;

	const lockScroll = (shouldLock) => {
		if (shouldLock) {
			document.body.style.setProperty('overflow', 'hidden');
		} else {
			document.body.style.removeProperty('overflow');
		}
	};

	const openModal = (src, title) => {
		frame.src = src;
		if (title) {
			frame.title = title;
		}
		modal.classList.add('is-open');
		modal.setAttribute('aria-hidden', 'false');
		lockScroll(true);
		closeBtn.focus({ preventScroll: true });
	};

	const closeModal = () => {
		modal.classList.remove('is-open');
		modal.setAttribute('aria-hidden', 'true');
		frame.src = '';
		lockScroll(false);
		if (lastTrigger) {
			lastTrigger.focus({ preventScroll: true });
		}
	};

	triggers.forEach((button) => {
		button.addEventListener('click', () => {
			const src = button.dataset.videoSrc;
			if (!src) return;
			lastTrigger = button;
			openModal(src, button.dataset.videoTitle || frame.title);
		});
	});

	closeBtn.addEventListener('click', closeModal);
	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && modal.classList.contains('is-open')) {
			closeModal();
		}
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
	initTestimonialCarousel();
	initCanvas();
	initSectionAnimations();
	initCounters();
	initCheckoutRedirect();
	initFlashSaleExperience();
	initDemoModal();
	initLanguageSwitcher();
});

const DEFAULT_LANG = 'en';
const LANG_STORAGE_KEY = 'saobot-lang';
const translations = {
	en: {},
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
		'hero.eyebrow': 'Suite d\'assistance tactique',
		'hero.heading': 'Domine chaque duel avec <span class="accent">SAOBOT</span>',
		'hero.lead': 'Conçu pour les environnements compétitifs inspirés de Valorant, SAOBOT combine aim assist, auto aim, contrôle du recul et spoofing PID/HID/Arduino pour des sessions ultra stables et discrètes.',
		'hero.planButton': 'Formule 9,99&nbsp;€ / mois',
		'hero.discord': 'Rejoindre Discord',
		'hero.modules': 'Explorer les modules',
		'hero.badges.aria': 'Statut en direct de SAOBOT',
		'hero.badge1.title': 'Suivi en direct',
		'hero.badge1.subtitle': 'Trajectoire vectorielle lissée',
		'hero.badge2.title': 'Spoof HID',
		'hero.badge2.subtitle': 'Leonardo camouflé',
		'hero.badge3.title': 'Veille anti-flag',
		'hero.badge3.subtitle': 'Audit Vanguard',
		'trial.blurb': 'Testez SAOBOT gratuitement pendant 1 heure avec la licence découverte <strong>SAO-TRIAL</strong>.',
		'trial.metadata': 'Licence&nbsp;: SAO-TRIAL',
		'trial.note': 'Activation instantanée · Modules complets · Sans carte',
		'hero.card.label': 'Profil actif',
		'hero.card.list1': 'Suivi dynamique basé sur une capture MSS',
		'hero.card.list2': 'Arduino pilote chaque mouvement de souris',
		'hero.card.list3': 'Injection HID masquée',
		'hero.card.button': 'Activer la licence',
		'hero.stats.precision': 'Précision moyenne',
		'hero.stats.reaction': 'Temps de réaction',
		'hero.stats.security': '12 derniers mois',
		'partners.eyebrow': 'Écosystème',
		'partners.heading': 'Escouade SAOBOT systems',
		'partners.copy': 'Chaque module d\'aimbot, triggerbot et spoofing matériel garde une signature humaine tout en dépassant la méta Valorant.',
		'partners.aria': 'Modules phares de SAOBOT',
		'partners.chip1.title': 'Saobot Function',
		'partners.chip1.desc': 'Colorbot + snap 4&nbsp;ms',
		'partners.chip2.title': 'Saobot Cheat',
		'partners.chip2.desc': 'Triggerbot jitter 2-5&nbsp;ms',
		'partners.chip3.title': 'Saobot Suite',
		'partners.chip3.desc': 'Macros de recul multi-profils',
		'partners.chip4.title': 'Saobot spoofing',
		'partners.chip4.desc': 'Spoof PID/HID invisible',
		'partners.chip5.title': 'Détection MSS',
		'partners.chip5.desc': 'Prédiction chrono du viseur',
		'features.eyebrow': 'Modules clés',
		'features.heading': 'Un arsenal complet pour rester devant',
		'features.copy': 'Chaque fonction est réglée pour un ressenti <span class="gold-text">premium</span> et des performances classées stables.',
		'features.card1.title': 'Aim Assist / Aimbot',
		'features.card1.desc': 'Gestion centralisée du colorbot (capture, traitement, clic auto) avec réglages furtifs.',
		'features.card1.tag': 'Aimbot Arduino',
		'features.card2.title': 'Triggerbot',
		'features.card2.desc': 'Triggerbot optimisé offrant des réactions record sur angle ou sniper.',
		'features.card2.tag': 'Tracker MSS',
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
		'split.left.heading': 'Conçu pour la scène Valorant',
		'split.left.copy': 'Interface sombre, overlays lumineux et contrôles instantanés reprennent les codes de Riot tandis que notre pile sécurité accélère le workflow.',
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
		'faq.a1': 'Un lissage vectoriel reproduit le mouvement humain avec des micro-variations tout en restant dans la plage d\'entrées acceptée par Valorant.',
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
		'faq.q8': 'Quel taux de ban avez-vous observé ?',
		'faq.a8': 'Depuis 12 mois nous restons sous 1&nbsp;% de signalements confirmés. Gardez les presets legit, évitez les FOV extrêmes et mettez SAOBOT à jour après chaque patch Vanguard.',
		'faq.q9': 'Comment fonctionne l\'autoshoot ?',
		'faq.a9': 'Autoshoot s\'appuie sur les triggers MSS et ajoute un jitter de 2 à 6&nbsp;ms pour rester humain. Limitez-le aux rafales courtes ou aux armes à un coup.',
		'faq.q10': 'L\'anti-recul s\'adapte-t-il à chaque arme ?',
		'faq.a10': 'Oui. Chaque profil embarque un motif X/Y spécifique. SAOBOT analyse la cadence et applique des micro-corrections pour suivre buffs/nerfs.',
		'faq.q11': 'Le prix changera-t-il après la bêta ?',
		'faq.a11': 'Les comptes existants conservent le tarif mensuel de 9,99&nbsp;€. Les nouvelles licences pourront évoluer après la roadmap 2026, votre prix reste figé.',
		'faq.q12': 'Quels moyens de paiement acceptez-vous ?',
		'faq.a12': 'Cartes bancaires (Visa, Mastercard), PayPal et crypto (BTC, ETH, USDT). Renouvellement mensuel automatique avec pause ou rechargement manuel.',
		'faq.q13': 'Comment se passe l\'activation de la licence ?',
		'faq.a13': 'Chaque licence se lie à un PC via empreinte hardware. Les paiements sont mensuels sans engagement et l\'accès se met en pause si vous arrêtez de renouveler.',
		'footer.copy': '© <span id="year"></span> SAOBOT. Tous droits réservés.',
		'footer.disclaimer': 'Produit non affilié à Riot Games. Utilisation à vos risques.'
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

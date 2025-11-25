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

document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('motion-ready');
	initYear();
	initSmoothScroll();
	initRevealObserver();
	initFaq();
	initCanvas();
	initSectionAnimations();
	initCounters();
});

import { useState, useEffect } from 'react';
import anime from 'animejs';

class animateItem {
	constructor(el) {
		this.DOM = {};
		this.DOM.el = el;
		this.DOM.svg = this.DOM.el.querySelector('.item-svg');
		this.DOM.path = this.DOM.svg.querySelector('path');
		this.paths = {};
		this.paths.start = this.DOM.path.getAttribute('d');
		this.paths.end = this.DOM.el.dataset.morphPath;
		this.DOM.image = this.DOM.svg.querySelector('image');
		this.DOM.bg = this.DOM.el.parentNode.querySelector('.item-bg');
		this.DOM.title = this.DOM.bg.querySelector('.slide-title');
		this.DOM.text = this.DOM.bg.querySelector('.slide-text');
		this.DOM.dubleTitle = this.DOM.el.querySelector('.slide-duble-title');

		this.CONFIG = {
			animation: {
				path: {
					duration: this.DOM.el.dataset.animationPathDuration || 1500,
					delay: this.DOM.el.dataset.animationPathDelay || 0,
					easing:
						this.DOM.el.dataset.animationPathEasing ||
						'easeOutElastic',
					elasticity: this.DOM.el.dataset.pathElasticity || 400,
				},
				image: {
					duration:
						this.DOM.el.dataset.animationImageDuration || 2000,
					delay: this.DOM.el.dataset.animationImageDelay || 0,
					easing:
						this.DOM.el.dataset.animationImageEasing ||
						'easeOutElastic',
					elasticity: this.DOM.el.dataset.imageElasticity || 400,
					scaleX: this.DOM.el.dataset.imageScalex || 1.1,
					scaleY: this.DOM.el.dataset.imageScaley || 1.1,
					translateX: this.DOM.el.dataset.imageTranslatex || 0,
					translateY: this.DOM.el.dataset.imageTranslatey || 0,
					rotate: this.DOM.el.dataset.imageRotate || 0,
				},
			},
		};
		this.enterFn();
	}

	enterFn = () => {
		this.isActive = true;
		this.animate();
	};

	leaveFn = () => {
		if (this.isActive) {
			this.isActive = false;
			this.animate();
		}
	};

	getAnimeObj(targetStr) {
		const target = this.DOM[targetStr];
		let animeOpts = {
			targets: target,
			duration: this.CONFIG.animation[targetStr].duration,
			delay: this.CONFIG.animation[targetStr].delay,
			easing: this.CONFIG.animation[targetStr].easing,
			elasticity: this.CONFIG.animation[targetStr].elasticity,
			scaleX: this.isActive ? this.CONFIG.animation[targetStr].scaleX : 1,
			scaleY: this.isActive ? this.CONFIG.animation[targetStr].scaleY : 1,
			translateX: this.isActive
				? this.CONFIG.animation[targetStr].translateX
				: 0,
			translateY: this.isActive
				? this.CONFIG.animation[targetStr].translateY
				: 0,
			rotate: this.isActive ? this.CONFIG.animation[targetStr].rotate : 0,
		};
		if (targetStr === 'path') {
			animeOpts.d = this.isActive ? this.paths.end : this.paths.start;
		}
		anime.remove(target);
		return animeOpts;
	}

	animate() {
		anime(this.getAnimeObj('path'));
		anime(this.getAnimeObj('image'));
		anime({
			targets: this.DOM.bg,
			easing: 'easeOutElastic',
			scale: this.isActive
				? { value: 1.2, duration: 500 }
				: { value: 0.6, duration: 500 },
		});
		anime.remove(this.DOM.title);
		anime({
			targets: this.DOM.title,
			easing: 'easeOutQuad',
			translateY: this.isActive
				? [
						{ value: '-50%', duration: 200 },
						{ value: ['50%', '0%'], duration: 200 },
				  ]
				: [
						{ value: '50%', duration: 200 },
						{ value: ['-50%', '0%'], duration: 200 },
				  ],
			opacity: [
				{ value: 0, duration: 200 },
				{ value: 1, duration: 200 },
			],
		});
		anime.remove(this.DOM.text);
		anime({
			targets: this.DOM.text,
			easing: 'easeOutQuad',
			translateY: this.isActive
				? { value: ['50%', '0%'], duration: 200, delay: 250 }
				: { value: '0%', duration: 1 },
			opacity: this.isActive
				? { value: [0, 1], duration: 200, delay: 250 }
				: { value: 0, duration: 1 },
		});
		anime.remove(this.DOM.dubleTitle);
		anime({
			targets: this.DOM.dubleTitle,
			easing: 'easeOutQuad',
			opacity: this.isActive
				? { value: 0, duration: 200 }
				: { value: 1, duration: 200 },
		});
	}
}

const usePathAnimation = () => {
	const [isNewEl, setNewEl] = useState(null);
	const [oldItem, setOldItem] = useState(null);

	const initNewEl = (el) => setNewEl(el);
	const initOldItem = (i) => setOldItem(i);

	useEffect(() => {
		if (isNewEl) {
			if (oldItem) oldItem.leaveFn();
			initOldItem(
				new animateItem(isNewEl.querySelector('.item-container'))
			);
		}
	}, [isNewEl]);

	return [initNewEl];
};

export default usePathAnimation;

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const leavesMoveAnimation = () => {
	ScrollTrigger.create({
		onUpdate: (self) => {
			//console.log(self.direction);
			const dir = self.direction === 1 ? -8 : 8;
			gsap.to('.leaves-up', {
				ease: 'power3',
				y: dir,
				//scale: 0.95,
				// stagger: 0.5,
				//overwrite: true,
				// onUpdate: () => {
				// 	gsap.set('.leaves-up', {
				// 		y: 0,
				// 	});
				// },
			});
		},
		//endTrigger: "#otherID",
		//onToggle: self => console.log("toggled, isActive:", self.isActive),
	});
	// ScrollTrigger.addEventListener('refreshInit', () =>
	// 	gsap.set('.leaves-up', { y: 0 })
	// );
	ScrollTrigger.addEventListener('scrollEnd', () =>
		gsap.to('.leaves-up', {
			ease: 'power3',
			y: 0,
			//scale: 1,
		})
	);
};

export const menuNavigation = (active) => {
	if (active) {
		return gsap
			.timeline()
			.to('.menu-anim-wrapper', {
				ease: 'power4',
				x: 0,
			})
			.fromTo(
				'.menu-anim-item',
				{
					x: -60,
					opacity: 0,
				},
				{
					ease: 'power4',
					stagger: 0.15,
					duration: 0.7,
					x: 0,
					opacity: 1,
				},
				'-=0.5'
			);
	}

	return gsap.to('.menu-anim-wrapper', {
		ease: 'power4',
		x: '-100vw',
	});
};

export const travelSliderAnimation = (el) => {
	const activeSlide = el.querySelector('.swiper-slide-active');
	const title = activeSlide.querySelector('.anim_title');
	const text = activeSlide.querySelector('.anim_text');
	const img = activeSlide.querySelector('.anim_img');

	gsap.fromTo(
		title,
		{
			y: -20,
			opacity: 0,
		},
		{
			duration: 1,
			ease: 'power4',
			y: 0,
			opacity: 1,
		}
	);
	gsap.fromTo(
		text,
		{
			x: -40,
			opacity: 0,
		},
		{
			duration: 1.1,
			ease: 'power4',
			x: 0,
			opacity: 0.9,
		}
	);
	gsap.fromTo(
		img,
		{
			x: 40,
			//opacity: 0,
		},
		{
			duration: 1.4,
			ease: 'power4',
			x: 0,
			//opacity: 1,
		}
	);
};

export const topSectionAnimation = () => {
	gsap.timeline()
		.fromTo(
			'.svg-letter-anim',
			{
				opacity: 0,
				scale: 1.3,
			},
			{
				stagger: 0.15,
				duration: 0.5,
				ease: 'sine.inOut',
				opacity: 1,
				scale: 1,
			}
		)
		.to(
			'.right-left-anim',
			{
				duration: 1.2,
				ease: 'power4',
				x: 0,
				opacity: 1,
			},
			'-=0.2'
		)
		.to(
			'.left-right-anim',
			{
				duration: 1.2,
				ease: 'power4',
				x: 0,
				opacity: 1,
			},
			'-=0.9'
		)
		.to(
			'.opacity-anim',
			{
				duration: 1.5,
				opacity: 1,
			},
			'-=0.7'
		);
};

export const counterAnimation = () => {
	const formatNumber = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	};

	const counter = document.querySelector('.counter-anim');
	const oneString = counter.getAttribute('data-counter').split(' ').join('');

	const value = {
		val: Number.parseInt(oneString),
	};

	ScrollTrigger.create({
		trigger: counter,
		start: 'bottom bottom',
		end: 'bottom bottom',
		once: true,
		onEnter: () =>
			gsap.from(value, {
				duration: 5,
				ease: 'circ.out',
				val: 0,
				roundProps: 'val',
				onUpdate: function () {
					counter.innerText = formatNumber(value.val);
				},
			}),
	});
};

export const spoilerAnimation = (e) => {
	const el = e.currentTarget;
	const activeEl = el.parentNode.parentNode.querySelector('.active');
	const tl = gsap.timeline();

	if (activeEl) {
		activeEl.classList.remove('active');
		tl.to(activeEl.lastChild, {
			duration: 0.1,
			ease: 'sine.in',
			scale: 0.2,
		})
			.set(activeEl.lastChild, { text: '+' })
			.to(activeEl.lastChild, {
				duration: 0.1,
				ease: 'sine.in',
				scale: 1,
			})
			.to(
				activeEl.nextElementSibling,
				{
					duration: 0.3,
					ease: 'sine.in',
					height: 0,
					opacity: 0,
				},
				'-=0.3'
			);

		if (el === activeEl) return;
	}

	tl.to(el.lastChild, {
		duration: 0.1,
		ease: 'sine.in',
		scale: 0.2,
	})
		.set(el.lastChild, { text: '-' })
		.to(el.lastChild, {
			duration: 0.1,
			ease: 'sine.in',
			scale: 1,
		})
		.to(
			el.nextElementSibling,
			{
				duration: 0.9,
				ease: 'elastic.out(1, 0.3)',
				height: Number(el.nextElementSibling.scrollHeight) + 16,
				opacity: 1,
			},
			'-=0.1'
		);
	el.classList.add('active');
};

export const showUpAnimation = () => {
	ScrollTrigger.batch('.show-up-anim', {
		end: 'bottom 15%',
		once: true,
		onEnter: (batch) =>
			gsap.fromTo(
				batch,
				{
					opacity: 0,
					y: 60,
				},
				{
					duration: 0.7,
					ease: 'power4',
					opacity: 1,
					y: 0,
				}
			),
	});
};

const arrayRandElement = (arr) => {
	let rand = Math.floor(Math.random() * arr.length);
	return arr[rand];
};

export const randomColor = () => {
	const colors = ['#43A3A8', '#7675FD', '#FAA881', '#7675FD', '#F2726C'];

	const selectedColor = arrayRandElement(colors).toString();
	document.documentElement.style.setProperty('--randomColor', selectedColor);
};

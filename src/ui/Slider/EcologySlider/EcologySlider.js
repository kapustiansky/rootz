import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import styles from './EcologySlider.module.scss';
import useSwiperRef from '../../../hooks/useSwiperRef';
import usePathAnimation from '../../../hooks/usePathAnimation';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

const slides = [
	{
		title: 'Avoid plastic',
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		img: 'e1.jpg',
		imgWidth: '640px',
		imgHeight: '480px',
		path: 'M155.611 31.1171C183.673 32.7399 202.757 56.8168 222.594 76.625C242.37 96.3719 266.404 115.415 267.902 143.246C269.451 172.005 252.397 198.943 230.173 217.405C209.694 234.418 182.288 235.986 155.611 236.531C128.123 237.093 97.2881 239.925 77.9204 220.517C58.5866 201.143 62.0839 170.54 62.5213 143.246C62.9484 116.595 63.2948 88.9534 80.3582 68.4001C98.9074 46.057 126.527 29.4353 155.611 31.1171Z',
	},
	{
		title: 'Choose organic',
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		img: 'e6.jpg',
		imgWidth: '640px',
		imgHeight: '520px',
		path: 'M169.842 40.8394C197.72 39.3742 228.734 37.5936 248.776 56.7087C268.979 75.9772 268.251 106.666 267.881 134.343C267.517 161.517 264.791 189.396 246.725 209.96C227.436 231.916 199.321 247.105 169.842 245.937C141.206 244.802 118.659 224.532 98.915 204.101C79.8268 184.349 61.9999 161.594 62 134.343C62.0001 107.092 78.1315 82.6054 98.9156 64.5848C118.391 47.6989 143.916 42.2019 169.842 40.8394Z',
	},
	{
		title: 'Save watter',
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		img: 'e3.jpg',
		imgWidth: '440px',
		imgHeight: '619px',
		path: 'M169.327 31.5901C193.898 32.9619 218.568 38.1327 236.702 57.0339C255.595 76.727 265.307 104.576 267.23 133.636C269.33 165.358 268.42 201.369 247.666 222.704C227.361 243.578 196.664 235.914 169.327 234.282C144.141 232.779 118.259 232.067 98.8039 213.818C77.5451 193.876 62.7567 164.96 62.0322 133.636C61.2914 101.611 73.3822 69.6779 94.9944 49.123C115.172 29.9326 143.052 30.1233 169.327 31.5901Z',
	},
	{
		title: 'Plant trees',
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		img: 'e4.jpg',
		imgWidth: '640px',
		imgHeight: '560px',
		path: 'M167.652 38.5072C199.344 40.1932 225.872 49.0094 248.274 69.5903C270.607 90.1075 268.023 124.242 268.023 147.356C268.023 176.193 273.372 190.778 248.274 209.961C225.146 227.637 197.78 243.714 167.652 244.28C136.61 244.864 113.17 235.841 91.2973 215.675C69.4633 195.545 62.0299 175.715 62.5239 147.356C63.0062 119.666 63.3974 90.9454 82.6675 69.5903C103.616 46.3756 134.807 36.7598 167.652 38.5072Z',
	},
	{
		title: 'Save energy',
		text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
		img: 'e5.jpg',
		imgWidth: '640px',
		imgHeight: '520px',
		path: 'M168.754 31.4997C196.699 30.0276 213.862 30.513 235.914 51.5937C257.967 72.6745 268.362 101.494 267.99 129.3C267.626 156.602 256.463 168.139 242.43 190.243C228.396 212.346 193.793 238.135 164.243 236.961C135.54 235.821 115.872 225.8 96.0811 205.273C76.9474 185.428 61.9999 156.679 62 129.3C62.0001 101.921 87.5609 72.2306 106.105 56.1149C124.649 39.9992 142.767 32.8686 168.754 31.4997Z',
	},
];

const EcologySlider = () => {
	const [paginationEl, paginationRef] = useSwiperRef();
	const [navigationPrevEl, navigationPrevRef] = useSwiperRef();
	const [navigationNextEl, navigationNextRef] = useSwiperRef();
	const [initNewEl] = usePathAnimation();

	return (
		<div className={`${styles.swiper_container} ecology-swiper`}>
			<div className={styles.swiper_wrapper}>
				<Swiper
					className={styles.custom_swiper}
					modules={[Navigation]}
					watchOverflow={true}
					slidesPerView={'auto'}
					navigation={{
						prevEl: navigationPrevEl,
						nextEl: navigationNextEl,
					}}
					centeredSlides={true}
					loop={true}
					loopFillGroupWithBlank={true}
					loopedSlides={3}
					pagination={{
						el: paginationEl,
						type: 'fraction',
					}}
					//breakpoints={breakpoints}
					onSlideChange={(e) => {
						let timeout;
						clearTimeout(timeout);
						timeout = setTimeout(() => {
							if (e.el) {
								initNewEl(
									e.el.querySelector('.swiper-slide-active')
								);
							}
						}, 100);
					}}>
					{slides.map((i, index) => {
						return (
							<SwiperSlide
								key={index}
								className={styles.slide_item}>
								<div className={`${styles.slide_bg_1} item-bg`}>
									<svg
										width='330'
										height='283'
										viewBox='0 0 330 283'
										fill='none'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M36.535 117.013C45.9435 86.8955 77.347 70.8459 105.944 55.7436C131.252 42.3779 158.588 32.8821 187.042 37.5279C216.343 42.312 241.533 58.504 260.083 80.9105C280.606 105.702 300.203 135.378 293.807 166.491C287.409 197.613 257.701 218.065 228.781 233.162C202.812 246.719 173.662 248.183 144.375 244.5C112.231 240.458 77.7583 235.826 57.2584 211.591C35.3035 185.636 26.518 149.079 36.535 117.013Z'
											fill='#F7F3F4'
										/>
										<path
											opacity='0.2'
											fillRule='evenodd'
											clipRule='evenodd'
											d='M23.9869 114.621C34.3145 81.5613 68.7856 63.9439 100.175 47.3664C127.956 32.6951 157.962 22.2717 189.196 27.3714C221.359 32.6228 249.01 50.3964 269.371 74.9917C291.9 102.204 313.411 134.779 306.39 168.932C299.366 203.094 266.757 225.544 235.012 242.116C206.506 256.997 174.508 258.604 142.361 254.561C107.077 250.124 69.2371 245.039 46.7347 218.437C22.6352 189.947 12.9914 149.819 23.9869 114.621Z'
											fill='#F7F3F4'
										/>
									</svg>
									<div className={styles.slide_description}>
										<p
											className={`${styles.slide_title} slide-title`}>
											{i.title}
										</p>
										<p
											className={`${styles.slide_text} slide-text`}
											data-text={i.text}>
											{i.text}
										</p>
									</div>
								</div>
								<div
									className={`${styles.morph_container} item-container`}
									data-animation-path-duration='1500'
									data-animation-path-easing='easeOutElastic'
									data-morph-path='M77.1256 9.31513C92.0355 10.0476 107.005 12.8087 118.008 22.9016C129.473 33.4173 135.366 48.2881 136.533 63.8056C137.807 80.7447 137.255 99.9735 124.662 111.366C112.34 122.513 93.7136 118.42 77.1256 117.549C61.8426 116.746 46.1374 116.366 34.3325 106.621C21.4327 95.9727 12.4592 80.5321 12.0195 63.8056C11.57 46.705 18.9066 29.6532 32.0209 18.6773C44.2645 8.43001 61.1823 8.53188 77.1256 9.31513Z'>
									<p
										className={`${styles.slide_duble_title} slide-duble-title`}>
										{i.title}
									</p>
									<svg
										className='item-svg'
										width='330'
										height='283'
										viewBox='0 0 330 283'
										fill='none'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d={i.path}
											fill={`url(#clipShape${index})`}
										/>
										<defs>
											<pattern
												id={`clipShape${index}`}
												patternContentUnits='objectBoundingBox'
												width='1'
												height='1'>
												<use
													xlinkHref={`#image${index}`}
													transform='translate(0 -0.239437) scale(0.0026738 0.00263614)'
												/>
											</pattern>
											<image
												className={styles.item_img}
												id={`image${index}`}
												width={i.imgWidth}
												height={i.imgHeight}
												xlinkHref={`./assets/images/${i.img}`}
											/>
										</defs>
									</svg>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className={styles.navigation_container}>
					<div ref={navigationPrevRef} className={styles.prev}>
						<img src='./assets/icons/arrow.svg' alt='' />
					</div>
					<div
						ref={paginationRef}
						className={styles.eco_pagination}></div>
					<div ref={navigationNextRef} className={styles.next}>
						<img src='./assets/icons/arrow.svg' alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EcologySlider;

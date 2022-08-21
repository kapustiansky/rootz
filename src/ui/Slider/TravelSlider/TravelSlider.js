import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import styles from './TravelSlider.module.scss';
import { travelSliderAnimation } from '../../../features/mainAnimations';
import useSwiperRef from '../../../hooks/useSwiperRef';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

const slides = [
	{
		title: 'Travel In Japan: The True Experience',
		text: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
	},
	{
		title: 'Helping Wild Turtles To Travel In Japan',
		text: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.',
	},
	{
		title: 'Threats ofModern Indusrial World',
		text: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper.',
	},
];

const TravelSlider = () => {
	const [navigationPrevEl, navigationPrevRef] = useSwiperRef();
	const [navigationNextEl, navigationNextRef] = useSwiperRef();

	const breakpoints = {
		1025: {
			pagination: false,
		},
	};

	return (
		<div
			className={`${styles.swiper_container} travel-swiper show-up-anim`}>
			<div className={styles.swiper_wrapper}>
				<div className={styles.navigation_container}>
					<div ref={navigationPrevRef} className={styles.prev}>
						<img src='./assets/icons/arrow.svg' alt='' />
					</div>
					<div ref={navigationNextRef} className={styles.next}>
						<img src='./assets/icons/arrow.svg' alt='' />
					</div>
				</div>
				<Swiper
					className={styles.custom_swiper}
					modules={[Navigation]}
					watchOverflow={true}
					spaceBetween={10}
					slidesPerView={1}
					navigation={{
						prevEl: navigationPrevEl,
						nextEl: navigationNextEl,
					}}
					centeredSlides={true}
					pagination={{
						clickable: true,
					}}
					breakpoints={breakpoints}
					onSlideChange={(e) => {
						let timeout;
						clearTimeout(timeout);
						timeout = setTimeout(() => {
							travelSliderAnimation(e.el);
						}, 100);
					}}>
					{slides.map((i, index) => {
						return (
							<SwiperSlide
								key={index}
								className={styles.slide_item}>
								<div className={styles.slide_info}>
									<p
										className={`${styles.slide_title} anim_title`}>
										{i.title}
									</p>
									<p
										className={`${styles.slide_text} anim_text`}>
										{i.text}
									</p>
								</div>
								<div
									className={`${styles.slide_img} anim_img`}></div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default TravelSlider;

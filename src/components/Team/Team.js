import styles from './Team.module.scss';
import useHoverPathAnimation from '../../hooks/useHoverPathAnimation';
import { useEffect, useRef } from 'react';

const Team = () => {
	const [setAnimationItems] = useHoverPathAnimation();
	const animeContainerRef = useRef(null);

	useEffect(() => {
		const animations =
			animeContainerRef.current.querySelectorAll('.hover-path-anim');
		if (animations.length > 0) {
			setAnimationItems(animations);
		}
	}, []);

	return (
		<div className='wrapper'>
			<div ref={animeContainerRef} className={styles.team_container}>
				<h3 className={styles.team_title}>Our top team</h3>
				<p className={styles.team_description}>
					Learn more about how you can save our planet&apos;s nature.
				</p>
				<div className={styles.team_images}>
					<div className={styles.team_line_container}>
						<div className={styles.team_line}>
							<img src='./assets/icons/team-line-1.svg' alt='' />
							{/* <img src='./assets/icons/team-line.svg' alt='' /> */}
						</div>
						<div className={styles.team_line}>
							<img src='./assets/icons/team-line-1.svg' alt='' />
						</div>
					</div>
					<div
						className={`${styles.team_image} show-up-anim hover-path-anim`}
						data-animation-path-duration='1500'
						data-animation-path-easing='easeOutElastic'
						data-morph-path='M158.346 48.1677C168.338 -1.16672 250.736 8.27521 279.301 34.6705C307.23 60.4791 312.242 87.9633 308.75 123.566C305.476 156.947 298.757 179.921 271.26 202.954C244.842 225.083 216.296 244.333 180.384 249.456C136.925 255.656 113.526 225.163 77.3596 202.954C34.7777 176.805 12.1497 142.856 32.6591 129.616C77.3597 100.76 3.16612 54.2689 43.7022 26.8092C74.7933 5.74751 138.362 11.865 158.346 48.1677Z'>
						<svg
							className='item-svg'
							width='335'
							height='263'
							viewBox='0 0 335 263'
							fill='none'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M159 21.0543C198.107 17.5397 248.341 -0.356469 275.5 28C302.055 55.7262 312.32 92.2525 309 130.5C305.887 166.362 291.643 184.756 265.5 209.5C240.382 233.274 211.644 244.996 177.5 250.5C136.181 257.161 132.386 252.359 98.0001 228.5C57.5143 200.408 16.0151 172.51 24.0001 123.884C31.8647 75.9905 10.4594 57.5 49 28C78.5607 5.37346 121.923 24.3865 159 21.0543Z'
								fill='url(#patternt1)'
							/>
							<defs>
								<pattern
									id='patternt1'
									patternContentUnits='objectBoundingBox'
									width='1'
									height='1'>
									<use
										xlinkHref='#imaget1'
										transform='matrix(0.00211155 1.38318e-05 -1.16304e-05 0.00251122 -0.0940201 -0.188098)'
									/>
								</pattern>
								<image
									id='imaget1'
									width='565'
									height='848'
									xlinkHref='./assets/images/t1.jpg'
								/>
							</defs>
						</svg>
					</div>
					<div
						className={`${styles.team_image} show-up-anim hover-path-anim`}
						data-animation-path-duration='1500'
						data-animation-path-easing='easeOutElastic'
						data-morph-path='M158.346 48.1677C168.338 -1.16672 250.736 8.27521 279.301 34.6705C307.23 60.4791 312.242 87.9633 308.75 123.566C305.476 156.947 298.757 179.921 271.26 202.954C244.842 225.083 216.296 244.333 180.384 249.456C136.925 255.656 113.526 225.163 77.3596 202.954C34.7777 176.805 12.1497 142.856 32.6591 129.616C77.3597 100.76 3.16612 54.2689 43.7022 26.8092C74.7933 5.74751 138.362 11.865 158.346 48.1677Z'>
						<svg
							className='item-svg'
							width='335'
							height='263'
							viewBox='0 0 335 263'
							fill='none'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M196.119 7.17872C235.225 3.66411 272.341 23.1435 299.5 51.5C326.055 79.2261 312.32 118.252 309 156.5C305.887 192.362 293.262 199.435 267.119 224.179C242.001 247.953 196.119 255.679 196.119 255.679C154.799 262.34 99.6187 243.179 99.6187 243.179C53.9998 224.179 23.1337 183.805 31.1187 135.179C38.9834 87.2854 50.0781 63.1787 88.6186 33.6787C118.179 11.0522 159.042 10.5109 196.119 7.17872Z'
								fill='url(#patternt2)'
							/>
							<defs>
								<pattern
									id='patternt2'
									patternContentUnits='objectBoundingBox'
									width='1'
									height='1'>
									<use
										xlinkHref='#imaget2'
										transform='matrix(0.00221213 1.33285e-05 -1.21843e-05 0.00241984 -0.11815 -0.10155)'
									/>
								</pattern>
								<image
									id='imaget2'
									width='565'
									height='848'
									xlinkHref='./assets/images/t2.jpg'
								/>
							</defs>
						</svg>
					</div>
					<div
						className={`${styles.team_image} show-up-anim hover-path-anim`}
						data-animation-path-duration='1500'
						data-animation-path-easing='easeOutElastic'
						data-morph-path='M158.346 48.1677C168.338 -1.16672 250.736 8.27521 279.301 34.6705C307.23 60.4791 312.242 87.9633 308.75 123.566C305.476 156.947 298.757 179.921 271.26 202.954C244.842 225.083 216.296 244.333 180.384 249.456C136.925 255.656 113.526 225.163 77.3596 202.954C34.7777 176.805 12.1497 142.856 32.6591 129.616C77.3597 100.76 3.16612 54.2689 43.7022 26.8092C74.7933 5.74751 138.362 11.865 158.346 48.1677Z'>
						<svg
							width='335'
							height='263'
							viewBox='0 0 335 263'
							fill='none'
							className='item-svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M177.833 11.3379C221.171 12.2743 244.729 9.43189 272.537 32.2709C298.411 53.5218 313.669 84.6038 315.537 112.271C317.552 142.106 299.724 200.954 272.537 224.271C243.55 249.132 186.397 253.875 140.037 252.771C95.1712 251.703 91.5869 227.982 61.4186 205.16C32.6924 183.428 31.8824 154.582 31.0372 125.242C30.1713 95.1831 44.4141 54.0937 74.537 32.2709C105.316 9.97255 133.107 10.3716 177.833 11.3379Z'
								fill='url(#patternt3)'
							/>
							<defs>
								<pattern
									id='patternt3'
									patternContentUnits='objectBoundingBox'
									width='1'
									height='1'>
									<use
										xlinkHref='#imaget3'
										transform='translate(0 -0.209047) scale(0.000520833 0.000612926)'
									/>
								</pattern>
								<image
									id='imaget3'
									width='1920'
									height='2880'
									xlinkHref='./assets/images/t3.jpg'
								/>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;

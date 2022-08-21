import styles from './Challenges.module.scss';
import ChallengesBgLg from '../../ui/Icons/ChallengesBgLg';
import ChallengesBgSm from '../../ui/Icons/ChallengesBgSm';
import { useState, useEffect } from 'react';

const Challenges = () => {
	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');

		if (mediaQuery.matches) {
			setMobile(true);
		} else {
			setMobile(false);
		}

		const resizeThrottler = () => {
			if (mediaQuery.matches) {
				setMobile(true);
			} else {
				setMobile(false);
			}
		};

		window.addEventListener('resize', resizeThrottler);
		return () => window.removeEventListener('resize', resizeThrottler);
	}, []);

	return (
		<div className='wrapper'>
			<div className={styles.section_title_container}>
				<div className={styles.svg_bg}>
					{isMobile ? <ChallengesBgSm /> : <ChallengesBgLg />}
				</div>
				<h3 className={`${styles.section_title} show-up-anim`}>
					The scale of the challenges facing our planet can seem
					daunting, but we can all do something.
				</h3>
			</div>
			<div className={`${styles.steps_list} show-up-anim`}>
				<div className={styles.step}>
					<div className={styles.img}>
						<img src='./assets/icons/assets.svg' alt='' />
					</div>
					<p className={styles.title}>Assets value COMPOSer</p>
				</div>
				<div className={styles.step}>
					<div className={styles.img}>
						<img src='./assets/icons/graph.svg' alt='' />
					</div>
					<p className={styles.title}>GRAPH BUDGET ANALYZER</p>
				</div>
				<div className={styles.step}>
					<div className={styles.img}>
						<img src='./assets/icons/montly.svg' alt='' />
					</div>
					<p className={styles.title}>MONTHLY AVG. REVENUE</p>
				</div>
			</div>
		</div>
	);
};

export default Challenges;

import styles from './HomeTopSection.module.scss';
import Button from '../../../ui/Button';
import Dodo from '../../../ui/icons/Dodo';
import Slogan from '../../../ui/icons/Slogan';
import Input from '../../../ui/Input';

const HomeTopSection = () => {
	return (
		<div className={`${styles.section_wrapper} wrapper`}>
			<div className={styles.left_content}>
				<div className={styles.slogan}>
					<Slogan />
				</div>
				<div className={styles.places}>
					<p className={`${styles.text} right-left-anim`}>
						The scale of the challenges facing our planet can seem
						daunting, but we can all do something.
					</p>
					<div
						className={`${styles.search_container} left-right-anim`}>
						<Input
							type='search'
							name='search'
							placeholder='Find the place to help'
						/>
						<div className={styles.search_marker}>
							<img src='./assets/icons/marker.svg' alt='' />
						</div>
						<Button
							type='button'
							text='search'
							clazz={'search_btn'}
						/>
					</div>
				</div>
			</div>
			<div className={`${styles.right_content} opacity-anim`}>
				<Dodo />
				<div className={styles.card}>
					<img src='./assets/icons/main-card-bg.svg' alt='' />
					<div className={styles.card_content}>
						<div className={styles.card_logo}>
							<img src='./assets/icons/heart.svg' alt='' />
						</div>
						<div>
							<span className={styles.card_title}>Members</span>
							<div
								className={`${styles.card_counter} counter-anim`}
								data-counter='29128'>
								29 128
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeTopSection;

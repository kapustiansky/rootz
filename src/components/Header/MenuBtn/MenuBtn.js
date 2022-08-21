import styles from './MenuBtn.module.scss';

const MenuBtn = ({ toggleMenu, isActiveMenu }) => {
	return (
		<div
			className={`${styles.menu_btn} ${
				isActiveMenu ? styles.active : ''
			}`}
			onClick={toggleMenu}>
			<input className={styles.menu_btn__cheeckbox} type='checkbox' />
			<div>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default MenuBtn;

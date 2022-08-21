import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer_wrapper} wrapper`}>
				<div className={styles.left}>
					<p className={styles.left_title}>Contacts</p>
					<p className={styles.left_text}>
						2019 Rootz Foundation.All rights reserved
					</p>
				</div>
				<div className={styles.center}>
					<p className={styles.center_title}>Headquarters</p>
					<p className={styles.center_text}>
						1234 TalibanLos Angeles, La 1234567(123) 456-7890
					</p>
				</div>
				<div className={styles.right}>
					<p className={styles.right_title}>Social media</p>
					<div className={styles.socials}>
						<a
							href='#'
							target='_blank'
							className={styles.social_item}>
							<img src='./assets/icons/tw.svg' alt='' />
						</a>
						<a
							href='#'
							target='_blank'
							className={styles.social_item}>
							<img src='./assets/icons/fb.svg' alt='' />
						</a>
						<a
							href='#'
							target='_blank'
							className={styles.social_item}>
							<img src='./assets/icons/ln.svg' alt='' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

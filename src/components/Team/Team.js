import styles from './Team.module.scss';

const Team = () => {
	return (
		<div className='wrapper'>
			<div className={styles.team_container}>
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
					<div className={`${styles.team_image} show-up-anim`}>
						<img src='./assets/images/t1.png' alt='' />
					</div>
					<div className={`${styles.team_image} show-up-anim`}>
						<img src='./assets/images/t2.png' alt='' />
					</div>
					<div className={`${styles.team_image} show-up-anim`}>
						<img src='./assets/images/t3.png' alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;

import styles from './GetStarted.module.scss';
import Form from '../Form';
import FormLeaves from '../../ui/icons/FormLeaves';

const GetStarted = () => {
	return (
		<div className={`${styles.get_started_container} show-up-anim`}>
			<div className={styles.get_started_wrapper}>
				<div className={styles.left_content}>
					<p className={styles.left_title}>Get started today!</p>
					<p className={styles.left_text}>
						Learn more about how you can save our planet&apos;s
						nature. From smart consumption to switching to renewable
						energy, each of us can do our part to save the planet.
					</p>
				</div>
				<div className={styles.right_content}>
					<div className={styles.form_svg}>
						<FormLeaves />
					</div>
					<div className={styles.form_container}>
						<p className={styles.form_title}>Log in</p>
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;

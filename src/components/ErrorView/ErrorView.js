import Logo from '../../ui/Icons/Logo';
import styles from './ErrorView.module.scss';

const ErrorView = ({ statusCode, title }) => {
	return (
		<section>
			<div className={styles.error_wrapper}>
				<div className={styles.title}>
					<p>{statusCode}</p>
					<p>{title}</p>
				</div>
				<div className={styles.logo}>
					<Logo />
				</div>
			</div>
		</section>
	);
};

export default ErrorView;

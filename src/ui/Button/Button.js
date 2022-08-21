import styles from './Button.module.scss';

const Button = ({ type = 'button', text = 'lol', clazz, animation = null }) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${styles[clazz]} ${animation}`}>
			{text}
		</button>
	);
};

export default Button;

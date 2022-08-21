import styles from './Input.module.scss';

const Input = ({
	type = 'text',
	name = '',
	placeholder = '',
	required = false,
}) => {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			required={required}
		/>
	);
};

export default Input;

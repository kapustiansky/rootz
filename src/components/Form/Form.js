import styles from './Form.module.scss';
import Button from '../../ui/Button';
import Input from '../../ui/Input';

const Form = () => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={onSubmit}>
			<div className={styles.inputs_container}>
				<Input
					type='text'
					name='name'
					placeholder='Name'
					required={true}
				/>
				<Input
					type='email'
					name='email'
					placeholder='Email'
					required={true}
				/>
			</div>
			<Button type='submit' text='Book a demo' clazz='login_btn' />
		</form>
	);
};

export default Form;

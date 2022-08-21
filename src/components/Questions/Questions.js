import styles from './Questions.module.scss';
import Button from '../../ui/Button';
import Spoiler from '../Spoiler';

const Questions = () => {
	return (
		<div className={`${styles.questions_wrapper} wrapper`}>
			<div className={`${styles.left_content} show-up-anim`}>
				<h3 className={styles.left_title}>Ready to Get started?</h3>
				<p className={styles.left_text}>
					When pattern is mentioned in interior design, it is easy to
					asso- ciate it with a geometric patterned wallpaper or
					colourful prints on interior fabrics.
				</p>
				<Button type='button' text='Contact us' clazz='questions_btn' />
			</div>
			<div className={styles.right_content}>
				<Spoiler />
			</div>
		</div>
	);
};

export default Questions;

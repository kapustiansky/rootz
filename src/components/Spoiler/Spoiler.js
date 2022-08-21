import styles from './Spoiler.module.scss';
import { spoilerAnimation } from '../../features/mainAnimations';

const spoiler = [
	{
		title: 'What can I do to protect our planet?',
		text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
	},
	{
		title: 'How to save nature ecology?',
		text: 'Not to make an open fire in nature and to clean up litter;',
	},
	{
		title: 'What is nature conservation?',
		text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
	},
];

const Spoiler = () => {
	const activeSpoiler = (e) => {
		spoilerAnimation(e);
	};

	return (
		<div className={styles.spoiler_container}>
			{spoiler.map((i, index) => {
				return (
					<div
						className={`${styles.spoiler} show-up-anim`}
						key={index}>
						<div
							className={styles.spoiler_title}
							onClick={activeSpoiler}>
							{i.title}
							<span className={styles.spoiler_icon}>+</span>
						</div>
						<p className={`${styles.spoiler_text} spoiler-anim`}>
							{i.text}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Spoiler;

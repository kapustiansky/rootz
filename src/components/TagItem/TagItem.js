import styles from './TagItem.module.scss';

const TagItem = ({ item }) => {
	const { type, image, tag, title, href } = item;

	return (
		<div className={styles.tag_card}>
			<div className={styles[type]}>
				<img src={`./assets/images/${image}`} alt='' />
			</div>
			<div className={styles.tag_info}>
				<a href={href} className={styles.tag}>
					<span># </span>
					<span className={styles.tag_name}>{tag}</span>
				</a>
				<p className={styles.tag_title}>{title}</p>
				<a href={href} className={styles.tag_link}>
					see more
				</a>
			</div>
		</div>
	);
};

export default TagItem;

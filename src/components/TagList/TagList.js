import TagItem from '../TagItem/TagItem';
import styles from './TagList.module.scss';

const TagList = ({ tags }) => {
	return (
		<div className={`${styles.tags_wrapper} wrapper show-up-anim`}>
			{tags.map((i, index) => {
				return <TagItem item={i} key={index} />;
			})}
		</div>
	);
};

export default TagList;

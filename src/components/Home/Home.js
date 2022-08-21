import styles from './Home.module.scss';
import { useEffect } from 'react';
import {
	leavesMoveAnimation,
	topSectionAnimation,
	counterAnimation,
	showUpAnimation,
} from '../../features/mainAnimations';
import TagList from '../TagList';
import TravelSlider from '../../ui/Slider/TravelSlider';
import Team from '../Team';
import Challenges from '../Challenges';
import GetStarted from '../GetStarted';
import HomeTopSection from './HomeTopSection';
import Questions from '../Questions';
import Ecology from '../Ecology';

const tags = [
	{
		type: 'image',
		image: 'pic1.png',
		tag: 'Stories',
		title: 'Travel In Japan: The True Experience',
		href: '#',
	},
	{
		type: 'video',
		image: 'pic2.png',
		tag: 'VideoTutor',
		title: 'Helping Wild Turtles',
		href: '#',
	},
	{
		type: 'image',
		image: 'pic3.png',
		tag: 'Photostory',
		title: 'Threats of Indusrial World',
		href: '#',
	},
];

const Home = () => {
	useEffect(() => {
		leavesMoveAnimation();
		topSectionAnimation();
		counterAnimation();
		showUpAnimation();
	}, []);

	return (
		<>
			<section className={styles.top_section}>
				<HomeTopSection />
			</section>
			<section className={styles.tags_section}>
				<TagList tags={tags} />
			</section>
			<section className={styles.travel_slider_section}>
				<TravelSlider />
			</section>
			<section className={styles.team_section}>
				<Team />
			</section>
			<section className={styles.challenges_section}>
				<Challenges />
			</section>
			<section className={styles.get_started_section}>
				<GetStarted />
			</section>
			<section className={styles.questions_section}>
				<Questions />
			</section>
			<section className={styles.ecology_section}>
				<Ecology />
			</section>
		</>
	);
};

export default Home;

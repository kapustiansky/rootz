import Head from 'next/head';
import Home from '../src/components/Home';

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Home />
		</>
	);
};

export default HomePage;

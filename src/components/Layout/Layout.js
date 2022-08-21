import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta name='theme-color' content='#f7f3f4'></meta>
			</Head>
			<>
				<Header />
				<main className=''>{children}</main>
				<Footer />
			</>
		</>
	);
};

export default Layout;

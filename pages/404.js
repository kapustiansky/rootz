import Head from 'next/head';
import ErrorView from '../src/components/ErrorView';

const ErrorPage = ({
	statusCode = 404,
	title = 'We couldnt find that page',
}) => {
	return (
		<>
			<Head>
				<title>Error: {statusCode}</title>
			</Head>
			<ErrorView statusCode={statusCode} title={title} />
		</>
	);
};

export default ErrorPage;

/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	formats: ['image/avif', 'image/webp'],
	deviceSizes: [320, 640, 768, 1024, 1290, 1920],
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "colors.scss";`,
	},
};

module.exports = nextConfig;

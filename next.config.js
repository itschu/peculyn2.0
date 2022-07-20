/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["peculyn.com"],
	},
};

module.exports = nextConfig;

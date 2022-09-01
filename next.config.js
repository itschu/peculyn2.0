/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["peculyn.online"],
	},
};

module.exports = nextConfig;

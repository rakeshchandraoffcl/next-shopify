const { withConfig } = require('./framework/common/config');

/** @type {import('next').NextConfig} */
const nextConfig = withConfig({
	framework: {
		name: 'shopify',
	},
	reactStrictMode: true,
});

module.exports = nextConfig;
console.log(JSON.stringify(module.exports, null, 2));

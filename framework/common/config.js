const path = require('path');
const fs = require('fs');

const merge = require('deepmerge');
const ALLOWED_FRAMEWORKS = ['shopify'];

const withConfig = (nextConfig = {}) => {
	const framework = nextConfig?.framework?.name;
	if (!framework) {
		throw new Error('API framework is missing, please provide a provider');
	}
	if (!ALLOWED_FRAMEWORKS.includes(framework)) {
		throw new Error(
			`Invalid framework ${framework}, valid frameworks - ${ALLOWED_FRAMEWORKS.join(
				', '
			)}`
		);
	}
	const frameworkConfigData = require(path.join(
		'../',
		framework,
		'next.config.js'
	));
	const config = merge(frameworkConfigData, nextConfig);
	const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
	const tsConfigData = require(tsConfigPath);
	tsConfigData.compilerOptions.paths['@framework'] = [
		`framework/${framework}`,
	];
	tsConfigData.compilerOptions.paths['@framework/*'] = [
		`framework/${framework}/*`,
	];
	fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfigData, null, 2));
	return config;
};

module.exports = {
	withConfig,
};

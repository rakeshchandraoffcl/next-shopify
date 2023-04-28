import { APIConfig } from '@common/types/api';
import { fetchAPI } from '../utils';

class Config {
	constructor(private config: APIConfig) {}

	getConfig(): APIConfig {
		return this.config;
	}
}

const configWrapper = new Config({
	apiURL: 'http://localhost:4000/graphql',
	fetch: fetchAPI,
});

export function getConfig() {
	return configWrapper.getConfig();
}

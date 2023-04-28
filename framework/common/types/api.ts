export type APIFetcherOptions = {
	url: string;
	query: string;
};
export type APIFetcherResults<T> = {
	data: T;
};

export interface APIConfig {
	apiURL: string;
	fetch: <T>(options: APIFetcherOptions) => Promise<APIFetcherResults<T>>;
}

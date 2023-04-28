import { APIFetcherOptions, APIFetcherResults } from '@common/types/api';

const fetchAPI = async <T>({
	query,
	url,
}: APIFetcherOptions): Promise<APIFetcherResults<T>> => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
		}),
	});
	const { data, errors } = await res.json();
	if (errors) {
		throw new Error(
			errors?.[0]?.message ?? errors?.message ?? 'Something goes wrong'
		);
	}
	return { data };
};

export default fetchAPI;

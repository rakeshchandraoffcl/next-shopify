type FetcherParams = {
	query: string;
};
type FetcherResult<T> = {
	data: T;
};

const fetchAPI = async <T>({
	query,
}: FetcherParams): Promise<FetcherResult<T>> => {
	const url = 'http://localhost:4000/graphql';
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

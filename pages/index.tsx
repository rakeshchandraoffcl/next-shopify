import getAllProducts from '@framework/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
	const products = await getAllProducts();
	return {
		props: { products },
		revalidate: 4 * 60 * 60,
	};
}

export default function Home({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <div>{JSON.stringify(products, null, 4)}</div>;
}

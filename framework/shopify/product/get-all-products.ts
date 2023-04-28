import { Product } from '@common/types/product';
import { ProductConnection } from '../schema';
import { fetchAPI, normalizeProduct, getAllProductsQuery } from '../utils';
import { APIConfig } from '@common/types/api';

type ReturnType = {
	products: ProductConnection;
};

const getAllProducts = async (config: APIConfig): Promise<Array<Product>> => {
	const { data } = await config.fetch<ReturnType>({
		query: getAllProductsQuery,
		url: config.apiURL,
	});
	const products =
		data.products.edges.map(({ node: product }) =>
			normalizeProduct(product)
		) ?? [];
	return products;
};

export default getAllProducts;

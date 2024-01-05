import { apiURL } from "../api";
import useApi from "../hooks/useAPI";
import ProductItem from "./productItem";

export default function ProductList() {
    const { data: products, isLoading, isError} = useApi(apiURL);

    if (isLoading) {
        return <div>Loading products...</div>
    }

    if (isError) {
        return <div>Error loading products</div>
    }

    return (
        <div>
            {products.map((product) => {
                return <ProductItem key={product.id} product={product} />
            }
            )}
        </div>
    )
}
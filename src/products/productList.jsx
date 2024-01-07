import ProductItem from "./productItem";
import {CartPage} from "../pages/Cart";
import useApi from "../hooks/useAPI";
import { apiURL } from "../api";

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
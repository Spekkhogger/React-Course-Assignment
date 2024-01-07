import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import {CartPage, addToCart} from "../pages/Cart";
import { apiURL } from "../api";

export default function CreateProductPage() {
    const [product, setProduct] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 
    const [isError, setIsError] = useState(false); 
    const { id } = useParams(); 

    useEffect(()=>{
        async function getData(url) {
            try {
                setIsLoading(true); 
                setIsError(false); 

                const response = await fetch(url);
                const result = await response.json(); 

                setProduct(result); 
            } catch (error){
                setIsError(true);
            }finally {
                setIsLoading(false); 
            }
        }
        getData(`${apiURL}/${id}`)
    }, [id]);


    if (isError){
        return <div>Error</div>;
    }

    const price = product.price;
    const discountedPrice = product.discountedPrice; 
    let priceContent; 

    if (price === discountedPrice) {
        priceContent = <div>$ {price}</div>
    } else {
        priceContent = 
        <div className="flex flex-col items-center">
            <div className="oldPrice">${price}</div>
            <div className="newPrice">New price: ${discountedPrice}</div>
        </div>
    }


    return (
        <div className="productPage">
            <img src={`${product.imageUrl}`} alt="" className="singeImage"/>
            <h1 className="productTitle">{product.title}</h1>
            <div>{product.description}</div>
            <div>{priceContent}</div>
            <button 
            className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white button-bg hover:button-bg-hover"
            type="button"
            >
                Add to cart
                </button>
        </div>
    );
}
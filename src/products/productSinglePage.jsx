import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "../api";

export default function CreateProductPage() {
    const [product, setProduct] = useState(null); 
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
                console.log(result); 
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

    return (
        <div>
            {/* <div>title: {product.title}</div> */}
            {/* <div>description: {product.description}</div> */}
            {/* <div>image: {product.imageUrl}</div>  */}
            <img src="{product.imageUrl}" alt=""></img>
            <button 
            className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white button-bg hover:button-bg-hover"
            type="button">
                Add to cart
                </button>
        </div>
    );
}
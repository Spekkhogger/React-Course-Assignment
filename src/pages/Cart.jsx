import { Link } from "react-router-dom"
import { useState } from "react";


export default function CartPage() {
    // const [cart, setCart] = useState([]);
    // const [cartPrice, setCartPrice] = useState(0); 

    // const addToCart = product => {
    //     setCart ([...cart, product]); 
    //     setCartPrice(cartPrice + product.price); 
    // };

    return (
        <div className="flex flex-col items-center m-10 ">
            <h1>Your Shopping cart</h1>
            {/* <div>Total items: {cart.length}</div>
            <div>Total price: ${cartPrice}</div> */}

            <Link to="/checkout" 
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white button-bg hover:bg-gray-600">
            Place order</Link>
        </div>
    )
}
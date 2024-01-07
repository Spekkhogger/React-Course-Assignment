import { Link } from "react-router-dom"


export default function CartPage() {
    return (
        <div>
            <h1>Your Shopping cart</h1>


            <Link to="./CheckoutSuccess.jsx">Place order</Link>
        </div>
    
    
    )

}
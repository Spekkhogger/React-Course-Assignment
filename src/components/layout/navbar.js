import { NavLink } from "react-router-dom";
import {ShoppingCartIcon} from "@heroicons/react/24/solid";
import SearchResults from "../../hooks/searchBar";

export default function Navbar() {
    return (<nav className="nav flex flex-col">
        <div className="flex justify-between">
        <NavLink to="/" className="logo font-mono">Ellisiv's Outlet</NavLink>
        <ul>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="cart-button">
                <NavLink to="/cart"><ShoppingCartIcon className="shoppingCart" /></NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-6 h-6"></svg>
                <div className="cart-number">0</div>
            </li> 
        </ul>
        </div>
        <div className="flex items-center justify-center">
            <SearchResults />
        </div>
    </nav>)
}
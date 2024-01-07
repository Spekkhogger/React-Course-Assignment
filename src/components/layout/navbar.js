import { NavLink } from "react-router-dom";
import {ShoppingCartIcon} from "@heroicons/react/24/solid";
import SearchResults from "../../hooks/searchBar";

export default function Navbar() {
    return (<nav className="nav flex flex-col">
        <div>
        <NavLink to="/" className="logo font-mono">Ellisiv's Outlet</NavLink>
        <ul>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
                <NavLink to="/cart"><ShoppingCartIcon className="shoppingCart" /></NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"></svg>
            </li> 
        </ul>
        </div>
        <div>
            <SearchResults />
        </div>
    </nav>)
}
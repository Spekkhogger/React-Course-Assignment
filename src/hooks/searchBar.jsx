import { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "./useAPI";
import { apiURL } from "../api";

export default function SearchResults() {
    const [searchTerm, setSearchTerm] = useState(''); 
    const { data: results, isLoading, isError } = useApi(apiURL); 

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm); 
    }

    const filteredResults = results.filter((item) =>
    item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div className="relative">
            <input 
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-md px-4 py-2 w-64 text-black"
            />
            {isLoading ? (
                <p>Loading...</p>
            ) : searchTerm !== "" ? (
            <ul className="flex flex-col absolute">
            {filteredResults.map((item, index) => (
                <li key={index} className="p-2">
                	<Link to={`product/${item.id}`} className="block px-4 py-2 rounded-md button-bg hover:bg-gray-600">
                        <h3>{item.title}</h3>
					</Link>
                </li>
            ))}
            </ul>
            ) : null}
        </div>
    );
}
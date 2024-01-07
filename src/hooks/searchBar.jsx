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
    console.log(searchTerm); 

    const filteredResults = results.filter((item) =>
    item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    console.log(filteredResults);

    return (
        <div>
            <input 
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-md px-4 py-2 w-64"
            >
            
            </input>

            <ul className="mt-4">
            {filteredResults.map((item, index) => (
                <li key={index} className=" p-2 my-1">
                	<Link to={`product/${item.id}`} className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white button-bg hover:bg-gray-600">
						View product
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
					</Link>
                </li>
            ))}
            </ul>
        </div>
    );
}
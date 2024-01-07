import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";

export default function ProductItem({product, addToCart}) {
    const { title, price, id, imageUrl} = product; 


    return (
		<div className="max-w-md productCard">
			<div className="p-6">
				<img src={`${imageUrl}`} className="" />
				<h2 className="block mt-1 text-lg font-medium">{title}</h2>
				<p className="mt-2 text-gray-500">{price}</p>
				<div className="flex items-center gap-3">
					<Link to={`product/${id}`} className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white button-bg hover:bg-gray-600">
						View product
					</Link>
					<button 
					// onClick={handleAddToCart} 
					className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white button-bg hover:bg-gray-600">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired
    }).isRequired,
}
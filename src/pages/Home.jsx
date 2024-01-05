import ProductList from "../products/productList";

function HomePage() {
	return (
		<div className="homeContent flex flex-col justify-center items-center">
			<h1 className="h1">Products</h1>
			<div className="flex flex-row flex-wrap">
				<ProductList />

			</div>
		</div>
	);
}

export default HomePage;
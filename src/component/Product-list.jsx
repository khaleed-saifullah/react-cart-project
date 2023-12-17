import { useEffect, useState } from "react";
import Product from "./Product";
import productList from "../utils/fetchProductList";

const ProductList = () => {
  let [products, setProduct] = useState([]);
  let [error, setError] = useState("");

  useEffect(() => {
    productList()
      .then((data) => setProduct(data))
      .catch((err) => setError("Something went wrong"));
  }, []);

  let output;

  if (error) {
    output = <div>There was an error</div>;
  } else if (products.length > 0) {
    output = products.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  } else {
    output = <div>No products found !</div>;
  }

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {output}
      </div>
    </div>
  );
};
export default ProductList;

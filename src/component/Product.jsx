import { useNavigate } from "react-router-dom";
import addCart from "../utils/addCart";

const Product = (props) => {
  let product = props.product;
  let navigate = useNavigate();

  const addCartHandler = () => {
    if (localStorage.getItem("token")) {
      addCart(product.id)
        .then((data) => {
          if (data.msg == "success") {
            alert("The product is add to cart successfully");
          }
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="card w-100 bg-white shadow-xl">
        <figure>
          <img src={product.image} alt={product.title} />
        </figure>
        <div className="card-body">
          <h6 className="text-black">{product.title}</h6>
          <p className="text-sm text-gray-400">{product.short_des}</p>
          <h6 className="font-bold">Price: ${product.price}</h6>
          <div className="card-actions justify-end">
            <button
              onClick={addCartHandler}
              className="btn btn-sm btn-outline btn-primary"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

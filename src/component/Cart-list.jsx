import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import cartList from "../utils/fetchCartList";
import removeCart from "../utils/removeCart";
import convertStringToNumber from "../utils/convertStringToNumber";

const CartList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    cartList()
      .then((data) => setItems(data))
      .catch((err) => setError("Something went wrong"));
  });

  const removeCartHandler = (productId) => {
    removeCart(productId)
      .then((data) => {
        if (data.msg == "success") {
          let remainingItems = items.filter((item) => {
            item.product.id !== productId;
          });

          setItems(remainingItems);
        }
      })
      .catch((err) => console.log(err));
  };

  const totalPrice = () => {
    const totalPrice = items.reduce((total, currentValue) => {
      let mainPrice = convertStringToNumber(currentValue);
      return (total = total + mainPrice);
    }, 0);
    return totalPrice.toLocaleString();
  };

  let output;
  if (error) {
    output = <div>There was an error</div>;
  } else if (items.length > 0) {
    output = items.map((item) => {
      return (
        <CartItem key={item.id} item={item} removeItem={removeCartHandler} />
      );
    });
  } else {
    output = <div>There is no product in cart</div>;
  }
  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {output}
          </div>
        </div>

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: 10</h2>
            <h6>Total Price: ${totalPrice()}</h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartList;

import React from "react";
import "../Cart/Cart.scss";
import summerdress from "../../assets/Icons/Images/summer-dress.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReduser";
import { useDispatch } from "react-redux";

const Index = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      <div className="details">
        {products.map((product, index) => {
          return (
            <div className="basketCard" key={index}>
              <img src={import.meta.env.VITE_UPLOAD_IMG + product.img} />

              <h1>{products[0].title}</h1>
              <div className="price">
                {product.quantity} x ${product.price}
              </div>
              <DeleteIcon
                className="delete"
                onClick={() => dispatch(removeItem(product.id))}
              />
            </div>
          );
        })}
      </div>

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      {/* <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span> */}
    </div>
  );
};

export default Index;

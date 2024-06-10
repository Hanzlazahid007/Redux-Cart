import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./../feature/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleChange = (id) => {
    dispatch(remove(id));
    return;
  };

  return (
    <div className="cartWrapper">
      {items.map((item) => {
        return (
          <div className="cartCard">
            <img src={item.image} alt="img" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleChange(item.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

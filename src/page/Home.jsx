import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./../feature/cartSlice";
import { fetchProduct } from "../feature/productSlice";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleChange = (item) => {
    dispatch(add(item));
    console.log(item);
  };

  useEffect(() => {
    dispatch(fetchProduct());
    // const fetcdata = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetcdata();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt="img" />
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
            <button className="btn" onClick={() => handleChange(item)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

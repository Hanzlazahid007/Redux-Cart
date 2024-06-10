import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>Cart Learner</span>
      <div>
        <Link to={"/"} className="navLink" style={{ fontWeight: "bolder" }}>
          {" "}
          Home
        </Link>
        <Link
          to={"/cart"}
          className="navLink"
          style={{ fontWeight: "bolder", marginRight: "5px" }}
        >
          {" "}
          Cart
        </Link>
        <Link to={"/"} className="navLink" style={{ fontWeight: "bolder" }}>
          {" "}
          item : {item.length}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

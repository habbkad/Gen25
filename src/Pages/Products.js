import React from "react";
import { useSelector } from "react-redux";

function Products() {
  const data = useSelector((state) => state.teachers);
  console.log(data);
  return <div>Products</div>;
}

export default Products;

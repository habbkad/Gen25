import React from "react";
import { useSelector } from "react-redux";
function Products() {
  const student = useSelector((state) => state.student);
  console.log(student);
  return <div>Products</div>;
}

export default Products;

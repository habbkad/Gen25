import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const student = useSelector((state) => state.student);
  console.log(student);
  return <div>Home</div>;
};

export default Home;

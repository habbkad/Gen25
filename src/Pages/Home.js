import React, { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((state) => state.students);
  console.log(data);
  return <div>Home</div>;
}

export default Home;

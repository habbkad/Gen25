import React from "react";
import { useSelector } from "react-redux";
const About = () => {
  const teacher = useSelector((state) => state.teacher);
  console.log(teacher);
  return <div>About</div>;
};

export default About;

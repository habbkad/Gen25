import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../redux/studentsSlice";
import Students from "../components/students";

const Home = () => {
  const students = useSelector((state) => state.student);
  console.log(students);

  return (
    <div>
      {" "}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Gen</th>
            <th>Edit Btns</th>
          </tr>
        </thead>
        <tbody>
          {students.students.map((item) => {
            return <Students item={item} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;

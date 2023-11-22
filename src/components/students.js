import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../redux/studentsSlice";
import EditForm from "./EditForm";

const Students = ({ item }) => {
  const disptach = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [visible, setVisible] = useState(false);

  //code for alert for delete

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.gen}</td>
      <td>
        <Button
          onClick={() => {
            handleShow();
          }}
        >
          Update
        </Button>{" "}
        <Button
          variant="danger"
          onClick={() => {
            // disptach(deleteStudent(item.id));
            setVisible(true);
          }}
        >
          Delete
        </Button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm student={item} />
        </Modal.Body>
      </Modal>
      <Modal
        show={visible}
        onHide={() => {
          setVisible(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Danger</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure?</p>
          <Button
            variant="danger"
            onClick={() => {
              disptach(deleteStudent(item.id));
            }}
          >
            Yes
          </Button>
          <Button>No</Button>
        </Modal.Body>
      </Modal>
    </tr>
  );
};

export default Students;

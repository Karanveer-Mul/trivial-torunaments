import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewContactModal = ({ closeModal }) => {
  return (
    <>
      <Modal.Header closeButton>Add Contact</Modal.Header>
      <Modal.Body>
        <Form></Form>
      </Modal.Body>
    </>
  );
};

export default NewContactModal;

import React from 'react';
import { Form } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target[0].value);
    e.target[0].value = "";
  };

  return (
    <Form
      className = "margin-bottom" 
      onSubmit={handleSubmit}   
    >
      <input
        className = "form-control col-md-12"
        placeholder = "Please type a new entry..."
      />
    </Form>
  );
};

export { TodoForm };

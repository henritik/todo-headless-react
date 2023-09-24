import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const Todo = ({ update, remove, todo, dis }) => {
  let className = "normal";
  if (todo.states[0] === 2) {
    className = "underlined";
  }

  return (
    <ListGroup.Item key={todo.id}>
      <span className={className}>{todo.title.rendered}</span>
      <TodoButtons todo={todo} dis={dis} update={update} remove={remove} />
    </ListGroup.Item>
  );
};

const TodoButtons = ({ update, remove, todo, dis }) => {
    return (
      <div className="buttons">
        {dis ? ( <Button variant="outline-secondary" onClick={() => { update(todo.id); }} disabled>✓</Button> )
          : ( <Button variant="outline-success" onClick={() => { update(todo.id); }}>✓</Button> )}
          {" "}<Button variant="outline-danger" onClick={() => { remove(todo.id); }}>✕</Button>
      </div>
    );
};

const TodoListFiltered = ({ todos, update, remove, dis, filter }) => {
  return todos.filter((todo) => todo.states[0] === filter).map((filteredTodo) => (
      <Todo todo={filteredTodo} key={filteredTodo.id} dis={dis} update={update} remove={remove} amount={todos.length} />
    ));
};

const TodoListAll = ({ todos, update, remove, dis }) => {
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} dis={dis} update={update} remove={remove} />
  ));
};

export { TodoListFiltered, TodoListAll };

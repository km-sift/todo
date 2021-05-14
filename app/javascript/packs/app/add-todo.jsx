import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Todo from './todo';

const AddTodo = () => {
  const [todos, addTodo] = useState([]);

  return (
    <>
      {todos.map((todo) => (
        <Todo {...todo}/>
      ))}
      <AddIcon onClick={() => addTodo([...todos, { title: 'new todo' }])}/>
    </>
  );
};

export default AddTodo;

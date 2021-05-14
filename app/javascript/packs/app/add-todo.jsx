import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Input from '@material-ui/core/Input';
import Todo from './todo';

const AddTodo = () => {
  const [todos, addTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  return (
    <>
      {todos.map((todo) => (
        <Todo {...todo}/>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Input value={newTodo} onChange={({ target: { value }}) => setNewTodo(value)} />
        <AddIcon onClick={() => addTodo([...todos, { title: newTodo }])}/>
      </div>
    </>
  );
};

export default AddTodo;

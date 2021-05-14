import React from "react";
import { useQuery } from "react-query";
import AddTodo from "./add-todo";
import Todo from "./todo";

const TodoList = () => {
  const { isLoading, error, data: todos } = useQuery("todos", () =>
    fetch("/todos.json", { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }}).then((res) => res.json())
  );

  if (isLoading) {
    return "Loading....";
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return (
    <ol>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
      <AddTodo />
    </ol>
  );
};

export default TodoList;

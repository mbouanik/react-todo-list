import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodo] = useState([]);
  const addItem = (newItem) => {
    setTodo((todos) => [...todos, { ...newItem, id: uuid() }]);
  };
  const removeItem = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <NewTodoForm addItem={addItem} />
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            item={todo.item}
            removeItem={removeItem}
            id={todo.id}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;

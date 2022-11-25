import React, { useContext } from "react";
import { TodoContext } from "./App";

const Form = () => {
  const { newTodo, addTodo, changeTodo } = useContext(TodoContext);

  return (
    <div>
      <form action="">
        <input type="text" value={newTodo} onChange={changeTodo} />
        <button onClick={addTodo}>할일추가</button>
      </form>
    </div>
  );
};

export default Form;

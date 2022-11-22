import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";
import useFetch from "./useFetch";
import Header from "./Header";
import Form from "./Form";

export const TodoContext = React.createContext();

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const api_url = "http://localhost:4500/api/todos";

  const loading = useFetch(setTodos, api_url);

  const changeTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const todo = { text: newTodo, checked: false, id: todos.length + 1 };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const changeTodoStatus = (id) => {
    //debugger;
    const updateTodos = todos.map((todo) => {
      // [!] +id : + 를 붙이면 number를   string으로 바꿔줌
      if (todo.id === +id) {
        if (todo.checked === true) todo.checked = false;
        else todo.checked = true;
      }
      return todo;
    });
    console.log("갱신된 todos : ");
    console.log(updateTodos);
    setTodos(updateTodos);
  };

  useEffect(() => {
    console.log("todos를 관찰하는 userEffect", todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, newTodo, addTodo, changeTodo, loading, changeTodoStatus }}
    >
      <Header />
      <Form />
      <List />
      {/* <Header todos={todos}/>
      <Form newTodo={newTodo} addTodo={addTodo} changeTodo={changeTodo} />
      <List
        todos={todos}
        loading={loading}
        changeTodoStatus={changeTodoStatus}
      /> */}
    </TodoContext.Provider>
  );
};

export default App;

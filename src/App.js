import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
function App() {
  const todoLocalStorage = JSON.parse(localStorage.getItem("listTodo")) || [];
  const currentTodo = useRef(todoLocalStorage);
  const [listTodo, setListTodo] = useState(currentTodo.current);
  const [pageURL, setPageURL] = useState("");
  useEffect(() => {
    window.localStorage.setItem(
      "listTodo",
      JSON.stringify(currentTodo.current)
    );
  }, [currentTodo.current]);
  useEffect(() => {
    const page = window.location.href.split("/")[4] || "all";
    setPageURL(page);
  }, []);
  useEffect(() => {
    switch (pageURL) {
      case "active":
        const listActive = currentTodo.current.filter(
          (todo) => todo.isCompleted === false
        );
        setListTodo(listActive);
        break;
      case "completed":
        const listCompleted = currentTodo.current.filter(
          (todo) => todo.isCompleted === true
        );
        setListTodo(listCompleted);
        break;
      case "all":
        setListTodo(currentTodo.current);
        break;

      default:
        break;
    }
  }, [pageURL, currentTodo.current]);
  const countActive = useCallback(() => {
    const activeTodo = currentTodo.current.filter(
      (todo) => todo.isCompleted === false
    );
    return activeTodo.length;
  }, [currentTodo.current]);
  const changePage = (page) => {
    setPageURL(page);
  };
  const handleClose = (id) => {
    const newTodo = listTodo.filter((todo) => todo.id !== id);
    setListTodo(newTodo);
    currentTodo.current = newTodo;
  };
  const handleAddTodo = (newTodo) => {
    setListTodo([...listTodo, newTodo]);
    currentTodo.current = [...listTodo, newTodo];
  };
  const handleIsCompleted = (id) => {
    const newTodo = listTodo.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setListTodo(newTodo);
    currentTodo.current = newTodo;
  };
  const handleClear = () => {
    const listActive = listTodo.filter((todo) => todo.isCompleted !== true);
    currentTodo.current = listActive;
    setListTodo(listActive);
    console.log("ok", listActive);
  };
  return (
    <div className="todo-app">
      <Header handleAddTodo={handleAddTodo} />
      <Todo
        listTodo={listTodo}
        handleClose={handleClose}
        handleIsCompleted={handleIsCompleted}
      />
      {currentTodo.current.length > 0 && (
        <Footer
          changePage={changePage}
          countActive={countActive}
          listTodo={listTodo}
          pageURL={pageURL}
          handleClear={handleClear}
        />
      )}
    </div>
  );
}

export default App;

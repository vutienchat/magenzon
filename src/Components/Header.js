import React from "react";
import { v1 as uuidv1 } from "uuid";

const Header = ({ handleAddTodo }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newTodo = {
        id: uuidv1(),
        name: e.target.value,
        isCompleted: false,
      };
      handleAddTodo(newTodo);
      e.target.value = "";
    }
  };
  return (
    <header>
      <h1 style={{ textAlign: "center", color: "#ead7d7", fontSize: "100px" }}>
        todos
      </h1>
      <input
        type="text"
        className="ipt-add"
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;

import React from "react";

const Todo = ({ handleClose, listTodo, handleIsCompleted }) => {
  return (
    <ul className="list-todo">
      {listTodo &&
        listTodo.length > 0 &&
        listTodo.map((item) => (
          <li className="list-todo-item" key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              hidden
              defaultChecked={item.isCompleted}
            />
            <label
              onClick={() => handleIsCompleted(item.id)}
              className="todo-content"
              htmlFor={item.id}
              style={
                item.isCompleted
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {item.name}
            </label>
            <button
              className="btn-close"
              onClick={() => handleClose(item.id)}
            ></button>
          </li>
        ))}
    </ul>
  );
};

export default Todo;

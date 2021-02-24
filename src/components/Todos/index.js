import React, { useState } from "react";
import TodoItem from "../TodoItem/index";
import "./style.css";

export default function Todos(props) {
  const [input, setInput] = useState("");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const onClickAdd = () => {
    if (input !== "") {
      var tempTasks = [...pendingTasks];
      tempTasks.push(input);
      setPendingTasks(tempTasks);
      setInput("");
    }
  };

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="todo__container column">
      <div className="todo__title">To-Dos List</div>
      <div className="todo-input__container row">
        <input
          type="text"
          value={input}
          onChange={onChangeInput}
          className="todo-input"
        />
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className="todos__container column">
        <div className="todos-list__container column">
          {pendingTasks.map((el, i) => (
            <TodoItem
              item={el}
              index={i}
              pendingTasks={pendingTasks}
              setPendingTasks={setPendingTasks}
              completedTasks={completedTasks}
              setCompletedTasks={setCompletedTasks}
            />
          ))}
        </div>
        <div className="todos-list__container column">
          {completedTasks.map((el) => (
            <div className="todo-item--completed">{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

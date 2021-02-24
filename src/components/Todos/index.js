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

  const deleteItem = (index) => {
    console.log("index", index);
    var tempTasks = [...pendingTasks];
    if (tempTasks.length === 1) {
      tempTasks = [];
    } else {
      tempTasks.splice(index, 1);
      console.log("after splice", tempTasks);
    }

    setPendingTasks(tempTasks);
  };

  const onItemComplete = (item) => {
    deleteItem(item);
    var tempTasks = [...completedTasks];
    tempTasks.push(item);
    setCompletedTasks(tempTasks);
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
              deleteItem={deleteItem}
              completeItem={onItemComplete}
              index={i}
              pendingTasks={pendingTasks}
              setPendingTasks={setPendingTasks}
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

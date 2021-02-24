import React, { useState } from "react";
import "./style.css";

export default function TodoItem(props) {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [input, setInput] = useState(props.item);

  const onInputChange = (event) => {
    setInput(event.target.value);
    var tempTasks = [...props.pendingTasks];
    tempTasks[props.index] = event.target.value;
    props.setPendingTasks(tempTasks);
  };

  return (
    <div
      className="todo-item__container row"
      onMouseOver={() => setButtonsVisible(true)}
      onMouseLeave={() => setButtonsVisible(false)}
    >
      <input
        className="todo-item__label"
        type="text"
        value={input}
        onChange={onInputChange}
      />
      {buttonsVisible && (
        <div className="todo-item__buttons row">
          <button
            className="todo-item__delete"
            onClick={() => props.deleteItem(props.item)}
          >
            REMOVE
          </button>
          <button
            className="todo-item__done"
            onClick={() => props.completeItem(props.item)}
          >
            DONE
          </button>
        </div>
      )}
    </div>
  );
}

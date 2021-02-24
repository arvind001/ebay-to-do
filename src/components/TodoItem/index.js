import React, { useState, useEffect } from "react";
import "./style.css";

export default function TodoItem(props) {
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const onInputChange = (event) => {
    var tempTasks = [...props.pendingTasks];
    tempTasks[props.index] = event.target.value;
    props.setPendingTasks(tempTasks);
  };

  const deleteItem = (index) => {
    var tempTasks = [...props.pendingTasks];
    tempTasks.splice(index, 1);
    props.setPendingTasks(tempTasks);
  };

  const onCompleteItem = (item, index) => {
    var tempTasks = [...props.pendingTasks];
    tempTasks.splice(index, 1);
    props.setPendingTasks(tempTasks);
    var tempTasks = [...props.completedTasks];
    tempTasks.push(item);
    props.setCompletedTasks(tempTasks);
  };

  useEffect(() => {
    console.log("new tasks", props.pendingTasks);
  }, [props.item]);

  return (
    <div
      className="todo-item__container row"
      onMouseOver={() => setButtonsVisible(true)}
      onMouseLeave={() => setButtonsVisible(false)}
    >
      <input
        className="todo-item__label"
        type="text"
        value={props.item}
        onChange={onInputChange}
      />
      {buttonsVisible && (
        <div className="todo-item__buttons row">
          <button
            className="todo-item__delete"
            onClick={() => deleteItem(props.index)}
          >
            REMOVE
          </button>
          <button
            className="todo-item__done"
            onClick={() => onCompleteItem(props.item, props.index)}
          >
            DONE
          </button>
        </div>
      )}
    </div>
  );
}

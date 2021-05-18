// Form for adding tasks - one text field and one submit button.
// Contains function for adding items to the list.
// Contains function for removing tasks.
import React, { useState } from "react";
import TodoItems from "./TodoItem";
function TodoList() {
  let todoInput = React.createRef();
  let array = [];
  if (localStorage.getItem("todoList")) {
    array = JSON.parse(localStorage.getItem("todoList"));
  } else {
    localStorage.setItem("todoList", JSON.stringify([]));
  }
  const [todoItems, setTodoItems] = useState(array);
  const [required, setRequired] = useState(false);
  const addListItem = () => {
    if (!todoInput.current.value) {
      setRequired(true);
    } else {
      setTodoItems([...todoItems, todoInput.current.value]);
      localStorage.setItem(
        "todoList",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("todoList")),
          todoInput.current.value,
        ])
      );
      setRequired(false);
      todoInput.current.value = "";
    }
  };
  const removeListItem = (item) => {
    let filteredList = JSON.parse(localStorage.getItem("todoList")).filter(
      function (value, index, arr) {
        return index !== item;
      }
    );
    setTodoItems([...filteredList]);
    localStorage.setItem("todoList", JSON.stringify(filteredList));
  };
  return (
    <div className="container">
      <form className="input-form">
        <input
          type="text"
          name="name"
          placeholder="Enter task"
          ref={todoInput}
          required={required}
        />
        <button type="submit" onClick={addListItem}>
          Add
        </button>
      </form>
      <TodoItems todoItems={todoItems} removeListItem={removeListItem} />
    </div>
  );
}
export default TodoList;

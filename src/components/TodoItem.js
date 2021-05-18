// Stores the list of tasks in array.
// Has click event and delete event handler.
// Should keep the list up-to-date locally.

const TodoItems = ({ todoItems, removeListItem }) => {
  return (
    <div className="todo-items">
      {todoItems.map((item, index) => {
        return (
          <div
            className="todo-item"
            key={index}
            onClick={() => removeListItem(index)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default TodoItems;

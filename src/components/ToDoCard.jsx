import { useState } from "react";

export function ToDoCard(props) {
  const { todo, todos, handleDeleteToDo, handleDoneTodo, editDoneToDo } = props;
  const curr = todo;
  const [inputValue, setInputValue] = useState(curr.input);
  const [editing, setEditing] = useState(false);

  function editor() {
    if (editing) {
      return (
        <>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Edit task"
          />
          <button
            onClick={() => {
              editDoneToDo(curr, inputValue); // Pass inputValue
              setEditing(false); // Exit editing mode
            }}
          >
            Done Editing
          </button>
        </>
      );
    }
    return null;
  }

  return (
    <div>
      {/* Task Buttons */}
      <div className="card todo-item">
        {editing ? editor() : <p>{curr.input}</p>}
        <div className="filter-buttons">
          <button
            disabled={curr.complete || editing}
            onClick={() => handleDoneTodo(curr)}
            className="hover-button"
          >
            <h6>Done</h6>
          </button>

          <button onClick={() => handleDeleteToDo(curr)} className="hover-button">
            <h6>Delete</h6>
          </button>

          <button
            disabled={curr.complete}
            onClick={() => setEditing(true)}
            className="hover-button"
          >
            <h6>Edit</h6>
          </button>
        </div>
      </div>
    </div>
  );
}

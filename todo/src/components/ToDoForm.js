import React from "react";

const ToDoForm = ({ dispatch, value, input, clearFields }) => {
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <h2> Add Task</h2>
          <input type="text" name="todo" onChange={input} value={value.todo} />
        </div>
        <div>
          <h2>Due Date</h2>
          <input type="date" value={value.due} name="due" onChange={input} />
        </div>
        <div>
          <h2>Task</h2>
          <div>
            <input type="radio" name="tag" onChange={input} value="DogWalk" />
            <label>Walk the Dog</label>
          </div>
          <div>
            <input type="radio" name="tag" onChange={input} value="MakeCoffee" />
            <label>Make Coffee</label>
          </div>
          <div>
            <input type="radio" name="tag" onChange={input} value="React" />
            <label>Study React</label>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: value });
            clearFields();
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;

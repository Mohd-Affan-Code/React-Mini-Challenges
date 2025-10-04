import React, { useState } from "react";

function TodoInput({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === input.trim().toLowerCase()
    );

    if (isDuplicate) {
      alert("Todo already exists!");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: input,
      complete: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoInput;

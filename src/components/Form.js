import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!dueDate) {
      alert("Please choose a due date!");
      return;
    }
    if (!description) return;

    const newItem = {
      description,
      dueDate,
      completed: false,
      id: crypto.randomUUID(),
    };
    setDescription("");
    setDueDate("");

    onAddItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add Task!</h3>

      <input
        className="dateInput"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <input
        className="taskInput"
        type="text"
        placeholder="task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

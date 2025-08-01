import Item from "./Item";
import { useState } from "react";

export default function TaskList({
  items,
  onDeleteItems,
  onCompleted,
  onDelete,
}) {
  const [sortBy, setSortBy] = useState("input");

  function handleSort(e) {
    setSortBy(e.target.value);
  }
  let sortedList;
  if (sortBy === "input") sortedList = items;

  if (sortBy === "description")
    sortedList = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "completed")
    sortedList = items.sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  if (sortBy === "dueDate")
    sortedList = items.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    });

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            onCompleted={onCompleted}
            onDeleteItems={onDeleteItems}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSort}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="completed">Sort by completed status</option>
          <option value="dueDate">Sort by due date</option>
        </select>
        <button onClick={onDelete}>Clear List</button>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import TaskList from "./TaskList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("taskList");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(items));
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCompletedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function deleteItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <TaskList
        onCompleted={handleCompletedItem}
        onDeleteItems={handleDeleteItems}
        items={items}
        onDelete={deleteItems}
      />
      <Stats items={items} />
    </div>
  );
}

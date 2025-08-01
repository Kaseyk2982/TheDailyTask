export default function Item({ item, onDeleteItems, onCompleted }) {
  return (
    <li>
      <input
        onChange={() => onCompleted(item.id)}
        type="checkbox"
        checked={item.completed}
      />
      <span
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.description} - due by - {item.dueDate}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

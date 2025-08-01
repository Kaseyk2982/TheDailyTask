export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding tasks in the form above! 🖊</em>
      </p>
    );

  const numItems = items.length;
  const numCompleted = items.filter((item) => item.completed).length;
  const percentage = Math.round((numCompleted / numItems) * 100);
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          🔧 You have {numItems} {numItems === 1 ? "task" : "tasks"} in your
          list, you {numCompleted === 0 ? "have" : "already"} completed{" "}
          {numCompleted} ({percentage}%)
        </em>
      ) : (
        <em>You've completed all your current tasks! 🤙</em>
      )}
    </footer>
  );
}

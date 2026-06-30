import Edit from "../assets/icon/Edit"

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}

function Card({ task, user, flag }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>
        <Edit width={16} height={16} status={task.statusId} />
      </div>

      <p>{task.description}</p>

      <span className="assignee">{user?.name}</span>

      <footer className="task-meta">
        <span>📎 {task.taskId % 3}</span>
        <span className="flag" style={{ color: flag?.color }}>⚑</span>
        <span>◷ {formatDate(task.deadline)}</span>
      </footer>
    </article>
  )
}

export default Card
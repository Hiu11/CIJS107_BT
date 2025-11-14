import TaskCard from "./TaskCard";

export default function TaskList({ status, tasks, users, flags }) {
  return (
    <div className="task-column">
      <div className="task-header">
        <h3>{status}</h3>
        <span>{tasks.length}</span>
      </div>

      {tasks.map(task => (
        <TaskCard
          key={task.taskId}
          task={task}
          users={users}
          flags={flags}
        />
      ))}
    </div>
  );
}

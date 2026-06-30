import "./App.css"
import Card from "./components/Card"
import { flags, tasks, taskStatus, users } from "./data"

function App() {
  const getUser = (userId) => users.find((user) => user.userId === userId)
  const getFlag = (flagId) => flags.find((flag) => flag.flagId === flagId)

  return (
    <main className="task-app">
      <header className="toolbar">
        <div className="search-box">⌕ <span>Search Items</span></div>
        <button className="new-button">New Item</button>
      </header>

      <section className="board">
        {taskStatus.map((status) => {
          const statusTasks = tasks.filter((task) => task.statusId === status.statusId)

          return (
            <div className="column" key={status.statusId}>
              <div className="column-header">
                <div className="column-title">
                  <span>{status.name}</span>
                  <b>{statusTasks.length}</b>
                </div>
                <div className="column-actions">
                  <button>+</button>
                  <button>...</button>
                </div>
              </div>

              <div className="task-list">
                {statusTasks.map((task) => (
                  <Card
                    key={task.taskId}
                    task={task}
                    user={getUser(task.assignedTo)}
                    flag={getFlag(task.flagId)}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App
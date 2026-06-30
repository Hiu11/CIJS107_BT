import { useMemo, useState } from 'react'
import './App.css'

const users = [
  { userId: 1, name: 'Nguyễn Văn A' },
  { userId: 2, name: 'Trịnh Hồng M' },
  { userId: 3, name: 'Lạc Khôi B' },
]

const taskStatus = [
  { statusId: 1, name: 'To do' },
  { statusId: 2, name: 'In Progress' },
  { statusId: 3, name: 'In Review' },
  { statusId: 4, name: 'Done' },
]

const flags = [
  { flagId: 1, name: 'Low', color: '#22c55e' },
  { flagId: 2, name: 'Medium', color: '#f59e0b' },
  { flagId: 3, name: 'High', color: '#ef4444' },
]

const initialTasks = [
  {
    taskId: 1,
    title: 'Mobile Wireframes',
    description: 'Lên bố cục ứng dụng thích nghi cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiện.',
    statusId: 1,
    flagId: 2,
    assignedTo: 1,
    deadline: '2024-04-12',
  },
  {
    taskId: 2,
    title: 'Mobile Wireframes',
    description: 'Thực hiện nghiên cứu người dùng để hiểu rõ hơn nhu cầu, thói quen và mong muốn của khách hàng mục tiêu.',
    statusId: 1,
    flagId: 3,
    assignedTo: 2,
    deadline: '2024-04-12',
  },
  {
    taskId: 3,
    title: 'Client Call',
    description: 'Cuộc họp trực tuyến với khách hàng để thảo luận về yêu cầu dự án.',
    statusId: 1,
    flagId: 1,
    assignedTo: 3,
    deadline: '2024-04-02',
  },
  {
    taskId: 4,
    title: 'Login Flow',
    description: 'Thiết kế luồng đăng nhập và quên mật khẩu.',
    statusId: 2,
    flagId: 2,
    assignedTo: 1,
    deadline: '2024-04-03',
  },
  {
    taskId: 5,
    title: 'Landing Page',
    description: 'Thiết kế giao diện landing page cho chiến dịch mới.',
    statusId: 3,
    flagId: 1,
    assignedTo: 1,
    deadline: '2024-03-08',
  },
  {
    taskId: 6,
    title: 'Product Mockups',
    description: 'Chuẩn bị mockup cho phần giới thiệu sản phẩm.',
    statusId: 4,
    flagId: 1,
    assignedTo: 1,
    deadline: '2024-03-02',
  },
]

const defaultForm = {
  title: '',
  description: '',
  deadline: '2024-06-15',
  assignedTo: 1,
  statusId: 1,
  flagId: 1,
}

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [searchText, setSearchText] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState(defaultForm)

  const filteredTasks = useMemo(() => {
    const keyword = searchText.trim().toLowerCase()

    if (!keyword) {
      return tasks
    }

    return tasks.filter((task) => {
      return task.title.toLowerCase().includes(keyword) || task.description.toLowerCase().includes(keyword)
    })
  }, [searchText, tasks])

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function closeModal() {
    setIsModalOpen(false)
    setForm(defaultForm)
  }

  function saveTask() {
    if (!form.title.trim()) {
      return
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        ...form,
        taskId: Date.now(),
        assignedTo: Number(form.assignedTo),
        statusId: Number(form.statusId),
        flagId: Number(form.flagId),
      },
    ])
    closeModal()
  }

  return (
    <main className="task-app">
      <header className="toolbar">
        <label className="search-box">
          <span>⌕</span>
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search Items"
          />
        </label>
        <button className="new-button" type="button" onClick={() => setIsModalOpen(true)}>New Item</button>
      </header>

      <section className="board">
        {taskStatus.map((status) => {
          const statusTasks = filteredTasks.filter((task) => task.statusId === status.statusId)

          return (
            <div className="column" key={status.statusId}>
              <div className="column-header">
                <div className="column-title">
                  <span>{status.name}</span>
                  <b>{statusTasks.length}</b>
                </div>
                <div className="column-actions">
                  <button type="button">+</button>
                  <button type="button">...</button>
                </div>
              </div>

              <div className="task-list">
                {statusTasks.map((task) => {
                  const user = users.find((item) => item.userId === task.assignedTo)
                  const flag = flags.find((item) => item.flagId === task.flagId)

                  return (
                    <article className="task-card" key={task.taskId}>
                      <div className="task-card-header">
                        <h3>{task.title}</h3>
                        <button type="button">✎</button>
                      </div>
                      <p>{task.description}</p>
                      <span className="assignee">{user?.name}</span>
                      <footer className="task-meta">
                        <span>📎 {task.taskId % 3}</span>
                        <span style={{ color: flag?.color }}>⚑</span>
                        <span>◷ {formatDate(task.deadline)}</span>
                      </footer>
                    </article>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-top">
              <span className="flag-preview">⚑</span>
              <button type="button" onClick={closeModal}>×</button>
            </div>

            <h2>Save task</h2>

            <div className="form-grid">
              <label>
                Title <b>*</b>
                <input
                  value={form.title}
                  onChange={(event) => updateForm('title', event.target.value)}
                  placeholder="Type title of task"
                />
                {!form.title.trim() && <small>Title is required</small>}
              </label>

              <label>
                End Date
                <input
                  type="date"
                  value={form.deadline}
                  onChange={(event) => updateForm('deadline', event.target.value)}
                />
              </label>

              <label className="wide-field">
                Description
                <textarea
                  value={form.description}
                  onChange={(event) => updateForm('description', event.target.value)}
                  placeholder="Type description..."
                />
              </label>

              <label>
                Assign
                <select value={form.assignedTo} onChange={(event) => updateForm('assignedTo', event.target.value)}>
                  {users.map((user) => <option key={user.userId} value={user.userId}>{user.name}</option>)}
                </select>
              </label>

              <label>
                Status
                <select value={form.statusId} onChange={(event) => updateForm('statusId', event.target.value)}>
                  {taskStatus.map((status) => <option key={status.statusId} value={status.statusId}>{status.name}</option>)}
                </select>
              </label>
            </div>

            <div className="modal-actions">
              <button type="button" onClick={closeModal}>Cancel</button>
              <button type="button" onClick={saveTask} disabled={!form.title.trim()}>Save</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
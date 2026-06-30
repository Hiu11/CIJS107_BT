import { useMemo, useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Select, Tag } from 'antd'
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
  { flagId: 1, name: 'Low', color: 'green' },
  { flagId: 2, name: 'Medium', color: 'orange' },
  { flagId: 3, name: 'High', color: 'red' },
]

const initialTasks = [
  { taskId: 1, title: 'Mobile Wireframes', description: 'Lên bố cục ứng dụng thích nghi cho Mobile.', statusId: 1, flagId: 2, assignedTo: 1, deadline: '2024-04-12' },
  { taskId: 2, title: 'User Research', description: 'Thực hiện nghiên cứu người dùng để hiểu rõ nhu cầu.', statusId: 1, flagId: 3, assignedTo: 2, deadline: '2024-04-12' },
  { taskId: 3, title: 'Client Call', description: 'Cuộc họp trực tuyến với khách hàng để thảo luận về dự án.', statusId: 1, flagId: 1, assignedTo: 3, deadline: '2024-04-02' },
  { taskId: 4, title: 'Login Flow', description: 'Thiết kế luồng đăng nhập và quên mật khẩu.', statusId: 2, flagId: 2, assignedTo: 1, deadline: '2024-04-03' },
  { taskId: 5, title: 'Landing Page', description: 'Thiết kế giao diện landing page cho chiến dịch mới.', statusId: 3, flagId: 1, assignedTo: 1, deadline: '2024-03-08' },
  { taskId: 6, title: 'Product Mockups', description: 'Chuẩn bị mockup cho phần giới thiệu sản phẩm.', statusId: 4, flagId: 1, assignedTo: 1, deadline: '2024-03-02' },
]

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function App() {
  const [form] = Form.useForm()
  const [tasks, setTasks] = useState(initialTasks)
  const [keyword, setKeyword] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredTasks = useMemo(() => {
    const text = keyword.trim().toLowerCase()

    if (!text) return tasks

    return tasks.filter((task) => {
      return task.title.toLowerCase().includes(text) || task.description.toLowerCase().includes(text)
    })
  }, [keyword, tasks])

  function openModal() {
    form.setFieldsValue({ assignedTo: 1, statusId: 1, flagId: 1 })
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
    form.resetFields()
  }

  function saveTask(values) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        taskId: Date.now(),
        title: values.title,
        description: values.description || 'No description',
        statusId: values.statusId,
        flagId: values.flagId,
        assignedTo: values.assignedTo,
        deadline: values.deadline?.format('YYYY-MM-DD') || '2024-06-15',
      },
    ])
    closeModal()
  }

  return (
    <main className="task-app">
      <header className="toolbar">
        <Input
          className="search-input"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Search Items"
          prefix="⌕"
        />
        <Button type="primary" onClick={openModal}>New Item</Button>
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
                  <Button shape="circle" size="small">+</Button>
                  <Button shape="circle" size="small">...</Button>
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
                        <Button type="text" size="small">✎</Button>
                      </div>
                      <p>{task.description}</p>
                      <Tag color="blue">{user?.name}</Tag>
                      <footer className="task-meta">
                        <span>📎 {task.taskId % 3}</span>
                        <Tag color={flag?.color}>{flag?.name}</Tag>
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

      <Modal
        title="Save task"
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={saveTask}>
          <div className="form-grid">
            <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Title is required' }]}>
              <Input placeholder="Type title of task" />
            </Form.Item>

            <Form.Item name="deadline" label="End Date">
              <DatePicker className="full-width" format="DD / MM / YYYY" />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input.TextArea placeholder="Type description..." rows={3} />
            </Form.Item>

            <Form.Item name="assignedTo" label="Assign">
              <Select options={users.map((user) => ({ value: user.userId, label: user.name }))} />
            </Form.Item>

            <Form.Item name="statusId" label="Status">
              <Select options={taskStatus.map((status) => ({ value: status.statusId, label: status.name }))} />
            </Form.Item>

            <Form.Item name="flagId" label="Priority">
              <Select options={flags.map((flag) => ({ value: flag.flagId, label: flag.name }))} />
            </Form.Item>
          </div>

          <div className="modal-actions">
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="primary" htmlType="submit">Save</Button>
          </div>
        </Form>
      </Modal>
    </main>
  )
}

export default App
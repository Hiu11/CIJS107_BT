import "./App.css";
import SearchItem from "./components/SearchItem";
import TaskList from "./components/TaskList";

function App() {

  const users = [
    { userId: 1, name: "Nguyễn Văn A" },
    { userId: 2, name: "Trịnh Hồng M" },
    { userId: 3, name: "Lạc Khôi B" }
  ];

  const flags = [
    { flagId: 1, name: "Low", color: "#00FF00" },
    { flagId: 2, name: "Medium", color: "#FFA500" },
    { flagId: 3, name: "High", color: "#FF0000" }
  ];

  const tasks = [
    {
      taskId: 1,
      title: "Mobile Wireframes",
      description: "Lên bố cục ứng dụng thích nghi cho Mobile.",
      statusId: 1,
      flagId: 2,
      assignedTo: 2,
      deadline: new Date("2024-04-12"),
      totalAttachments: 3
    },
    {
      taskId: 3,
      title: "Client Call",
      description: "Cuộc họp trực tuyến với khách hàng.",
      statusId: 1,
      flagId: 1,
      assignedTo: 3,
      deadline: new Date("2024-04-02"),
      totalAttachments: 2
    },
    {
      taskId: 4,
      title: "Design Logo",
      description: "Thiết kế logo cho dự án mới.",
      statusId: 1,
      flagId: 3,
      assignedTo: 2,
      deadline: new Date("2024-04-15"),
      totalAttachments: 5
    },
  ];

  const todoTasks = tasks.filter(t => t.statusId === 1);

  return (
    <div className="app-container">
      <SearchItem />

      <TaskList
        status="To Do"
        tasks={todoTasks}
        users={users}
        flags={flags}
      />
    </div>
  );
}

export default App;

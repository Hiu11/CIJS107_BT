import "./App.css";
import Card from "./components/Card";

const data = [
  {
    name: "Nguyễn Văn Tài 1",
    class_name: "Code Intensive",
    description: "Trở thành master coding là ước mơ của tôi",
    status: 1,
  },
  {
    name: "Nguyễn Văn Tài 2",
    class_name: "Code Intensive",
    description: "Trở thành master coding là ước mơ của tôi",
    status: 2,
  },
  {
    name: "Nguyễn Văn Tài 3",
    class_name: "Code Intensive",
    description: "Trở thành master coding là ước mơ của tôi",
    status: 3,
  },
];

function App() {
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          class_name={item.class_name}
          description={item.description}
          status={item.status}
        />
      ))}
    </>
  );
}

export default App;

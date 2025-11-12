import Card from './components/Card'

const data = [
  {
    name: "Nguyễn Văn A",
    class_name: "CIJS107",
    slogan: "Học đi đôi với hành"
  },
  {
    namwe: "Trần Thị B",
    class_name: "CIJS108",
    slogan: "Biết là chưa đủ, phải làm"
  },
  {
    name: "Lê Văn C",
    class_name: "CIJS109",
    slogan: "Học tập suốt đời"
  }
]

function App() {
  
  return (
    <>
    {data.map((item) => {
      return <Card name={item.name} class_name={item.class_name} slogan={item.slogan} />;
    })}
    </>
    );
  }

export default App;

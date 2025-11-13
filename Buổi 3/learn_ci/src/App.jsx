import Card from './components/Card'
import './App.css'

const data = [
  {
    name: 'Nguyễn Văn Tài',
    class_name: 'Code Intensive',
    discription: 'Trở thành master coding là ước mơ của tôi'
  },
  {
    name: 'Nguyễn Văn B',
    class_name: 'CIJS108',
    discription: 'Học về NodeJS'
  },
  {
    name: 'Nguyễn Văn C',
    class_name: 'CIJS109',
    discription: 'Học về DevOps'
  }
]
function App() {
  return (
    <>
        {data.map(item => <Card item={item} />)}
    </>     
  );
}

export default App

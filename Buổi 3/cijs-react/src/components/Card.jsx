import '../css/card.css'
function Card(props) {
    const { name, class_name, slogan } = props;
  return (
    <div className='card'>
      <p>Tôi tên: {name}</p>
        <p>Học lớp: {class_name}</p>   
        <p>{slogan}</p>
    </div>
  )
}

export default Card

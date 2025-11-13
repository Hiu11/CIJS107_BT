import React from 'react'

function Card({item}) {
const {name, class_name, discription} = item;
  return (
    <div className="card">
      <p>Tôi tên: {name}</p>
      <p>Học lớp: {class_name}</p>
      <p>{discription}</p>
    </div>
  )
}

export default Card;

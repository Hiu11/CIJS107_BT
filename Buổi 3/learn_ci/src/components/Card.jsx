import React from "react";
import Edit from "../assets/icon/Edit";
function Card(props) {
  return (
    <div className="card">
      <p>Tôi tên: {props.name}</p>
      <p>Học lớp: {props.class_name}</p>
      <p>{props.description}</p>
      <Edit width={24} height={24} status={props.status} />
    </div>
  );
}

export default Card;
  
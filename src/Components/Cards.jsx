import React from "react";

function Cards(props) {
  return (
    <div className="card-body">
      <div className="card-title">{props.name}</div>
      <p className="card-img">{props.emoji}</p>
    </div>
  );
}
export default Cards;
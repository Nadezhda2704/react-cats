import React from "react";

export const CatCard = (props) => {
  return (
    <div className="cat-card">
      <div className="cat-card--img">
        <img src={"images/" + props.img} alt="cat"/>
      </div>
      <p className="cat-card--text">{props.text}</p>
      <p className="cat-card--fact"><span className="text-bold">Факт: </span>{props.fact}</p>
    </div>
  )
}

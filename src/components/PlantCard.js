import React from "react";
import { useState } from "react";

function PlantCard({plant}) {
  const [onSelect, setonSelect] = useState(true)
  function handleClick(){
    setonSelect(!onSelect)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
        <button onClick={handleClick}className="primary">{onSelect?'In Stock': 'Out of Stock'}</button>
    </li>
  );
}

export default PlantCard;

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {
  const searchDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <ul className="cards">{searchDisplay.map((plant)=>{ return <PlantCard key={plant.id} plant={plant}/>})}</ul>
  );
}

export default PlantList;

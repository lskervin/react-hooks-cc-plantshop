import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage({plants, setPlants}) {
  const [search, setSearch] = useState('');
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search plants={plants} setPlants={setPlants} search={search} setSearch={setSearch}/>
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;

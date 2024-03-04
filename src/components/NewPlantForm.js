import React, { useEffect, useState } from "react";

function NewPlantForm({setPlants, plants}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  let newPlant = {name, image, price}

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(newPlant),
  })
    .then((response)=>response.json())
    .then((data)=> {setPlants([...plants, data])
      setName('')
      setImage('')
      setPrice('')
    })
} 

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>{setName(e.target.value)}}type="text" name="name" placeholder="Plant name" value={name} />
        <input onChange={(e)=>{setImage(e.target.value)}}type="text" name="image" placeholder="Image URL" value={image}/>
        <input onChange={(e)=>{setPrice(e.target.value)}}type="number" name="price" step="0.01" placeholder="Price" value={price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

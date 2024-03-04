import React from "react";

function Search({plants, setPlants, search, setSearch}) {

  function onSearchChange(e) {
    setSearch(e.target.value);
    console.log(search)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearchChange}
        value={search}
      />
    </div>
  );
}

export default Search;

import React from "react";

function Search({ setSearchText, searchText }) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleSearch (event) {
    setSearchText(event.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={handleSearch}
      />
      <button type="submit" >🔍</button>
    </form>
  );
}

export default Search;

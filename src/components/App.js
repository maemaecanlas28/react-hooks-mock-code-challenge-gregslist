import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(data => data.json())
    .then(data => setListings(data))
  }, [])

  return (
    <div className="app">
      <Header 
        searchText={searchText}
        setSearchText={setSearchText} />
      <ListingsContainer 
        listings={listings} 
        setListings={setListings}
        searchText={searchText}
        setSearchText={setSearchText} />
    </div>
  );
}

export default App;

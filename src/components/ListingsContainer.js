import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchText, setSearchText, listings, setListings}) {

  function handleDelete (id) {
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    } 
  }
  fetch(`http://localhost:6001/listings/${id}`, configObj)
  .then(data => data.json())
  .then(data => {
    const newListings= [...listings]
    let listingIndex = 0
    for (let i=0; i < newListings.length; i++) {
      const currListing = newListings[i]
      if (currListing.id === id) {
        listingIndex = i;
        break;
      }
    }
    newListings.splice(listingIndex, 1)
    setListings(newListings);
  })
}

  const displayListings = listings
  .filter(listing => {
    const lowerCaseListingName = listing.description.toLowerCase()
    const lowerCaseText = searchText.toLowerCase()

    return lowerCaseListingName.includes(lowerCaseText)
  })
  .map(listing => {
    return (<ListingCard 
      key={listing.id} 
      listing={listing}
      image={listing.image} 
      description={listing.description}
      location={listing.location} 
      handleDelete={handleDelete} />
  )})
  
  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;

import React, {useState} from "react";

function ListingCard({ listing, description, image, location, handleDelete}) {

  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavorite () {
    setIsFavorite(!isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details" onClick={handleFavorite}>
        {isFavorite ? (
          <button 
            className="emoji-button favorite active" >
              ★
          </button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(listing.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

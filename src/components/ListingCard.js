import React from "react";
import { Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const ListingCard = ({ user, setUser, listing, setListingSpotlight }) => {
  let history = useHistory();

  const sendToDetail = () => {
    setListingSpotlight(listing);
    console.log(listing)
    history.push("/listingdetail");
  };

  const handleFavorite = (event) => {
    event.preventDefault();
    console.log(user.id)
    fetch(`http://localhost:3000/listings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        address: listing.address.line,
        price: listing.price,
        square_feet: listing.building_size.size ? listing.building_size.size : 0,
        beds: listing.beds,
        baths: listing.baths,
      }),
    })
      .then((r) => r.json())
      .then((listing) => {

        // setUser( user => {
        //   let updatedUser = user
        //   updatedUser.favorites = [...user.favorites,listing]
        //   return updatedUser
        // })

        fetch(`http://localhost:3000/users/${user.id}`)
          .then( r => r.json())
          .then( userRender => setUser(userRender))


        // let favorites = user.favorites;
        // setUser(user => user.favorites = [...favorites, listing]);
        // this part maybe updating the User.... and preventing more favorites, investigate.
        // console.log('listing successfully created in DB')
      });
  };

  return (
    <Card>
      <div className="image">
        <img
          onClick={sendToDetail}
          src={
            listing.photo_count
              ? listing.photos[0].href
              : "https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
          }
          alt="idk"
        />
      </div>
      <div className="content">
        <div className="header">{listing.address.line}</div>
        <span>
          <i className="icon bed gray" />{" "}
          {listing.beds === 0 ? "Studio" : listing.beds + " Bed(s)"} /{" "}
          <i className="icon bath gray" /> {listing.baths} Bath
        </span>
      </div>

      <div className="extra content">
        <span>
          <i className="icon dollar sign green" />
          {listing.price}
          <i className="icon star" onClick={handleFavorite} />
        </span>
      </div>
    </Card>
  );
};

export default ListingCard;

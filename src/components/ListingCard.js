import {useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const ListingCard = ({ user, setUser, listing, setListingSpotlight, removeFavorite}) => {
  let history = useHistory();
  const [isFavorite, setIsFavorite] = useState(false)
  // let link = listing.photos[0].href.slice(0, (listing.photos[1].href.length)-5)+'xd-w1020_h770_q80.jpg'

  const sendToDetail = () => {
    setListingSpotlight(listing);
    console.log(listing)
    history.push("/listingdetail");
  };

  const handleRemoveFavorite = () => {
    
    const ourFavorite = user.favorites.find( favorite => parseInt(favorite.prop_id) === parseInt(listing.listing_id))
    setIsFavorite((isFavorite) => !isFavorite )
    if(ourFavorite) { 
    removeFavorite(ourFavorite.id)
    }

  }

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
        prop_id: parseInt(listing.listing_id),
        photo: listing.photos[0].href
      }),
    })
      .then((r) => r.json())
      .then((listing) => {
        setIsFavorite(true)
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

  useEffect(()=>{

    let prop_ids = user.favorites.map( favorite => parseInt(favorite.prop_id))
    if (prop_ids.includes(parseInt(listing.listing_id))) {
        setIsFavorite(true)  
    }


  },[listing.listing_id, user.favorites])

  return (
    <Card>
      <div className="image">
        <img className='listcard-image' 
          onClick={sendToDetail}
          src={
            listing.photo_count
              ? listing.photos[1].href.slice(0, (listing.photos[1].href.length)-5)+'xd-w1020_h770_q80.jpg'
              : "https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
          }
          alt="idk"
        />
      </div>
      <div className="content">
        <div className="header">{listing.address.line}</div>
        <span>
          <i className="icon bed gray" />{" "}
          {/* {listing.community ? (listing.community.beds_min === 0 ? "Studio" : listing.community.beds_min + " Bed(s)") : (listing.beds === 0 ? "Studio" : listing.beds + " Bed(s)")} /{" "} */}
          {listing.beds || listing.beds === 0 ? (listing.beds === 0 ? "Studio" : listing.beds + " Bed(s)") : (listing.community.beds_min === 0 ? "Studio" : listing.community.beds_min + " Bed(s)")} /{" "}
          <i className="icon bath gray" /> {listing.baths && listing.baths} Bath
        </span>
      </div>

      <div className="extra content">
        <span>
          <i className="icon dollar sign green" />
          {listing.price ? listing.price : listing.community.price_min}
          <i className={isFavorite ? "icon star yellow" : "icon star"} onClick={isFavorite ? handleRemoveFavorite : handleFavorite} />
        </span>
      </div>
    </Card>
  );
};

export default ListingCard;

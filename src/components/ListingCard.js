import React from "react";
import { Card } from "semantic-ui-react"
import { useHistory } from 'react-router-dom';



const ListingCard = ({user, setUser, listing, setListingSpotlight}) => {

  let history = useHistory()

  const sendToDetail = () => {
    setListingSpotlight(listing)
    history.push('/listingdetail')
  }

  const handleFavorite = (event) => {
    event.preventDefault()

    fetch(`http://localhost:3000/listings`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
          {
            user_id: user.id, 
            address: listing.address_new.line,
            price: listing.price_raw,
            square_feet: listing.sqft,
            beds: listing.beds, 
            baths: listing.baths
          }
        )
    })
    .then( r => r.json() )
    .then( listing => { 
      let favorites = user.favorites 
      setUser([...favorites, listing] ) 
      console.log('listing successfully created in DB')


    // fetch(`http://localhost:3000/favorites`, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'json/applications'},
    //   body: JSON.stringify({user_id: parseInt(user.id), listing_id: parseInt(listing.id)})
    // })
    //   .then( r => r.json() )
    //   .then( favorite => { console.log(favorite, typeof user.id, typeof listing.id)

    //   })
    
    })

  }


    return(
    <Card>
        <div className="image">
          <img  onClick={sendToDetail} fluid src={listing.photo_count ? listing.photo : 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg'} alt='idk' />
        </div>
        <div className="content">
          <div className="header">{listing.address_new.line}</div>
          <span>
          <i className="icon bed gray"/> {listing.beds === 'S' ? 'Studio' : listing.beds+' Bed(s)' } / <i className="icon bath gray"/> {listing.baths} Bath
          </span>
        </div>

        <div className="extra content">
          <span>
            <i className="icon dollar sign green"/>
            {listing.price_raw}
            <i className="icon star" onClick={handleFavorite}/>
          </span>
        </div>
    
    </Card>
    )

}

export default ListingCard;
import React from "react";
import { Card } from "semantic-ui-react"
import { useHistory } from 'react-router-dom';



const ListingCard = ({listing, setListingSpotlight}) => {

  let history = useHistory()

  const sendToDetail = () => {
    setListingSpotlight(listing)
    history.push('/listingdetail')


  }


    return(
    <Card onClick={sendToDetail}>
        <div className="image">
          <img  fluid src={listing.photo_count ? listing.photo : 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg'} alt='idk' />
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
          </span>
        </div>
    
    </Card>
    )

}

export default ListingCard;
import React from "react";
import ListingCard from "./ListingCard";
import { Card } from "semantic-ui-react"

const ListingsContainer = ( {listings, setListingSpotlight} ) => {

    const cardComponents = listings.map( listingObj=>  <ListingCard listing={listingObj} setListingSpotlight={setListingSpotlight}/>)


    return(
    <div className='grid-container'> 
            
            <Card.Group itemsPerRow={4}>
                {cardComponents}
            </Card.Group>
          
    </div>
    )

}

export default ListingsContainer;
import React from "react";
import ListingCard from "./ListingCard";
import { Card, Segment } from "semantic-ui-react"

const ListingsContainer = ( {user, setUser, listings, setListingSpotlight} ) => {

    const cardComponents = listings.map( listingObj=>  {

    return <ListingCard
        key={listingObj.listing_id}
        user={user}
        setUser={setUser}
        listing={listingObj} 
        setListingSpotlight={setListingSpotlight}/>})


    return(
    <div className='grid-container'> 
        <Segment style={{overflow: 'auto', maxHeight: '90vh', maxWidth: '50vw'}}>
            <Card.Group itemsPerRow={3}>
                {cardComponents}
            </Card.Group>
        </Segment>
          
    </div>
    )

}

export default ListingsContainer;
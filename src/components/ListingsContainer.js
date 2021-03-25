import React from "react";
import ListingCard from "./ListingCard";
import { Card } from "semantic-ui-react"

const ListingsContainer = ( {listings} ) => {

    const cardComponents = listings.map( listingObj=>  <ListingCard listing={listingObj}/>)


    return(
    <div style={{backgroundColor: 'green'}} className='grid-container'> 
            LISTING CONTAINER COMPONENT
            <Card.Group itemsPerRow={4}>
                {cardComponents}
            </Card.Group>
          
    </div>
    )

}

export default ListingsContainer;
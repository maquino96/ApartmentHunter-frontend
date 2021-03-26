import React from "react";
import { Image, Divider, Grid, Segment } from 'semantic-ui-react'

const ListingDetail = ({listingSpotlight}) => {
    
    if (listingSpotlight) {
    return(


        <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
              <Grid.Row>
                <Image fluid src={listingSpotlight ? listingSpotlight.photo : 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg'}/>
              </Grid.Row>
              <Grid.Row>
                <div> Address: {listingSpotlight.address}</div>
                <div> Price: {listingSpotlight.price_raw}</div>
                <div> {listingSpotlight.beds} Bed(s) // {listingSpotlight.baths} Bath(s)</div>
                <div>  { listingSpotlight.pet_policy && listingSpotlight.pet_policy } </div>
                <div> Listing Date: {listingSpotlight.list_date.slice(0,10)}</div>
               


              </Grid.Row>
    
          </Grid.Column>
    
          <Grid.Column verticalAlign='middle'>
          <Image src='https://st4.depositphotos.com/30089552/38986/v/950/depositphotos_389867130-stock-illustration-folded-map-placeholder-icon-thin.jpg' 
            size='large' alt='map holder'/>
       
          </Grid.Column>
        </Grid>
    
        <Divider vertical></Divider>
      </Segment>
    ) } else {
        return (
            <div> Error</div>
        )
    }

}

export default ListingDetail;
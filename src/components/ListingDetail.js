import React from "react";
import { Divider, Grid, Segment } from 'semantic-ui-react'
import Map from './Map'
import ImageCarousel from './ImageCarousel'

const ListingDetail = ({center, listingSpotlight, handleMarkerClick}) => {
    // console.log(listingSpotlight.photos[0].href)

    
    if (listingSpotlight) {
    return(


        <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
              <Grid.Row>
                <ImageCarousel listing={listingSpotlight} />
                {/* <Image fluid src={listingSpotlight ? `${listingSpotlight.photos[0].href.slice(0, (listingSpotlight.photos[0].href.length)-5)+'xd-w1020_h770_q80.jpg'}` : 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg'}/> */}
              </Grid.Row>
              <Grid.Row>
                <div> Address: {listingSpotlight.address.line}</div>
                <div> Price: {listingSpotlight.price? listingSpotlight.price : listingSpotlight.community.price_max}</div>
                <div>Square feet: {listingSpotlight.building_size.size ? listingSpotlight.building_size.size : (listingSpotlight.community.sqft_min ? listingSpotlight.community.sqft_min : 0)} sqft. </div>
                <div> {listingSpotlight.baths_full ? listingSpotlight.beds : listingSpotlight.community.beds_min} Bed(s) // {listingSpotlight.baths ? listingSpotlight.baths : listingSpotlight.community.baths_min} Bath(s)</div>
                <div>  { listingSpotlight.pet_policy && listingSpotlight.pet_policy } </div>
                <div> Listing Date: {listingSpotlight.list_date && listingSpotlight.list_date.slice(0,10)}</div>
               
              </Grid.Row>
    
          </Grid.Column>
    
          <Grid.Column verticalAlign='middle'>
          {/* <Image src='https://st4.depositphotos.com/30089552/38986/v/950/depositphotos_389867130-stock-illustration-folded-map-placeholder-icon-thin.jpg' 
            size='large' alt='map holder'/> */}

          <Map 
            center={center}
            listings={[listingSpotlight]}
            handleMarkerClick={handleMarkerClick}
            />
          </Grid.Column>
        </Grid>
    
        <Divider vertical>MAP</Divider>
      </Segment>
    ) } else {
        return (
            <div> Error</div>
        )
    }

}

export default ListingDetail;
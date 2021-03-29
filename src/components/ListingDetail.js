import React from "react";
import { Image, Divider, Grid, Segment } from 'semantic-ui-react'
import Map from './Map'

const ListingDetail = ({listingSpotlight}) => {
    // console.log(listingSpotlight.photos[0].href)

    const handleMarkerClick = () =>{
      // Below code allows you to redirect to another url in window
      // window.location.href=listingSpotlight.rdc_web_url 

      // Code that is running below will redirect in another tab. '_blank' may have  a security concern per the following stackoverflow link:
      // https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react
      window.open(listingSpotlight.rdc_web_url, '_blank')
    }
    
    if (listingSpotlight) {
    return(


        <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
              <Grid.Row>
                <Image fluid src={listingSpotlight ? `${listingSpotlight.photos[0].href.slice(0, (listingSpotlight.photos[0].href.length)-5)+'xd-w1020_h770_q80.jpg'}` : 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg'}/>
              </Grid.Row>
              <Grid.Row>
                <div> Address: {listingSpotlight.address.line}</div>
                <div> Price: {listingSpotlight.price}</div>
                <div>Square feet: {listingSpotlight.building_size.size ? listingSpotlight.building_size.size : 0} sqft. </div>
                <div> {listingSpotlight.beds} Bed(s) // {listingSpotlight.baths} Bath(s)</div>
                <div>  { listingSpotlight.pet_policy && listingSpotlight.pet_policy } </div>
                <div> Listing Date: {listingSpotlight.list_date && listingSpotlight.list_date.slice(0,10)}</div>
               
              </Grid.Row>
    
          </Grid.Column>
    
          <Grid.Column verticalAlign='middle'>
          {/* <Image src='https://st4.depositphotos.com/30089552/38986/v/950/depositphotos_389867130-stock-illustration-folded-map-placeholder-icon-thin.jpg' 
            size='large' alt='map holder'/> */}

          <Map 
            lattitude={listingSpotlight.address.lat} 
            longitude={listingSpotlight.address.lon}
            handleMarkerClick={handleMarkerClick}/>

       
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
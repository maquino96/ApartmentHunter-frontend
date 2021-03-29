import React from "react";
import Filter from "./Filter";
import ListingDetail from "./ListingDetail";
import ListingsContainer from "./ListingsContainer";
import UserInfo from "./UserInfo";
import { Grid } from 'semantic-ui-react'
import Map from './Map.js'

const ListingsPage = ({user, setUser, listings, setListingSpotlight, handleLogout, handleMarkerClick}) => {
    return(
    <Grid>
        <Grid.Row height={4}> 
            <Grid.Column width={4}> 
                <UserInfo 
                    user={user} 
                    handleLogout={handleLogout}/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Filter/>
            </Grid.Column>
        </Grid.Row>    
        <Grid.Row height={12}>
            <Grid.Column width={9}>
            <ListingsContainer 
                user={user}
                setUser={setUser}
                listings={listings} 
                setListingSpotlight={setListingSpotlight}/> 
            </Grid.Column>
            <Grid.Column width={7}>
                <Map handleMarkerClick={handleMarkerClick} listings={listings}/>
            </Grid.Column>
        </Grid.Row>

        <ListingDetail/>

  

    </Grid>
    )

}

export default ListingsPage;
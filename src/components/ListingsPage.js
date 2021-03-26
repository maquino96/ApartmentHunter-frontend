import React from "react";
import Filter from "./Filter";
import ListingDetail from "./ListingDetail";
import ListingsContainer from "./ListingsContainer";
import UserInfo from "./UserInfo";
import { Grid } from 'semantic-ui-react'

const ListingsPage = ({user, listings, setListingSpotlight, handleLogout}) => {
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
            <ListingsContainer 
                user={user}
                listings={listings} 
                setListingSpotlight={setListingSpotlight}/> 
        </Grid.Row>

        <ListingDetail/>

  

    </Grid>
    )

}

export default ListingsPage;
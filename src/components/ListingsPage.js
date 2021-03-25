import React from "react";
import Filter from "./Filter";
import ListingDetail from "./ListingDetail";
import ListingsContainer from "./ListingsContainer";
import UserInfo from "./UserInfo";
import { Grid } from 'semantic-ui-react'

const ListingsPage = ({listings}) => {
    return(
    <Grid>
        <Grid.Row height={4}> 
            <Grid.Column width={4}> 
                <UserInfo/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Filter/>
            </Grid.Column>
        </Grid.Row>    
        <Grid.Row height={12}>
            <ListingsContainer listings={listings}/> 
        </Grid.Row>

        <ListingDetail/>

  

    </Grid>
    )

}

export default ListingsPage;
import React, {useState} from "react";
import Filter from "./Filter";
import ListingDetail from "./ListingDetail";
import ListingsContainer from "./ListingsContainer";
import UserInfo from "./UserInfo";
import { Grid } from 'semantic-ui-react'
import Map from './Map.js'

const ListingsPage = ({user, setUser, listings, setListingSpotlight, handleLogout, handleMarkerClick, setZipcode, center}) => {
    const [filterObj, setFilterObj] = useState({
        priceMax: false,
        squareFeet: "",
        baths: "",
        beds: "",
        location: "",
    })

    const priceSort = listings.sort((a, b) => {
        if (!parseInt(filterObj.priceMax)) return (a.price - b.price) // Low to High
        else if (parseInt(filterObj.priceMax)) return (b.price - a.price) // High to Low
        else return 1
    })

    const squareFeetFilter = priceSort.filter(listing => {
        if (filterObj.squareFeet) {
            return listing.building_size.size >= parseInt(filterObj.squareFeet)
        }
        return true
    })

    const bedFilter = squareFeetFilter.filter(listing => {
        if (filterObj.beds) {
            if (filterObj.beds === "4") return listing.beds >= 4
            else {
                return listing.beds === parseInt(filterObj.beds)
            }
        } else return true
    })

    const bathFilter = bedFilter.filter(listing => {
        if (filterObj.baths) {
            if (filterObj.baths === "3") return listing.baths >= 3
            else {
                return listing.baths === parseInt(filterObj.baths)
            }
        } else return true
    })

    const locationFilter = bathFilter.filter(listing => {
        return listing.address.line.toLowerCase().includes(filterObj.location.toLowerCase())
    })
    
    return(
    <Grid>
        <Grid.Row height={4}> 
            <Grid.Column width={4}> 
                <UserInfo 
                    user={user} 
                    handleLogout={handleLogout}/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Filter 
                    listings={listings} 
                    filterObj={filterObj} 
                    setFilterObj={setFilterObj}
                    setZipcode={setZipcode}
                    />
            </Grid.Column>
        </Grid.Row>    
        <Grid.Row height={12}>
            <Grid.Column width={9}>
            <ListingsContainer 
                user={user}
                setUser={setUser}
                listings={locationFilter} 
                setListingSpotlight={setListingSpotlight}/> 
            </Grid.Column>
            <Grid.Column width={7}>
                <Map 
                center={center}
                listings={listings}
                handleMarkerClick={handleMarkerClick} />
            </Grid.Column>
        </Grid.Row>

        <ListingDetail/>

  

    </Grid>
    )

}

export default ListingsPage;
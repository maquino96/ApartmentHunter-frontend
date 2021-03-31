import React, {useState} from "react";
import Filter from "./Filter";
import ListingDetail from "./ListingDetail";
import ListingsContainer from "./ListingsContainer";
import { Grid } from 'semantic-ui-react'
import Map from './Map.js'

const ListingsPage = ({user, setUser, listings, setListingSpotlight, handleLogout, handleMarkerClick, setZipcode, center, removeFavorite}) => {
    const [filterObj, setFilterObj] = useState({
        priceMax: false,
        squareFeet: "",
        baths: "",
        beds: "",
        location: "",
    })

    const priceSort = listings.sort((a, b) => {
        if (!parseInt(filterObj.priceMax)) return ((a.price ? a.price : a.community.price_min) - (b.price ? b.price : b.community.price_min)) // Low to High
        else if (parseInt(filterObj.priceMax)) return ((b.price ? b.price : b.community.price_min) - (a.price ? a.price : a.community.price_min)) // High to Low
        else return 1
    })

    const squareFeetFilter = priceSort.filter(listing => {
        if (filterObj.squareFeet) {
            return (listing.building_size.size ? listing.building_size.size : listing.communit.sqft_min) >= parseInt(filterObj.squareFeet)
        }
        return true
    })

    const bedFilter = squareFeetFilter.filter(listing => {
        if (filterObj.beds) {
            if (filterObj.beds === "4") return (listing.beds || listing.beds === 0 ? listing.beds : listing.community.beds_min) >= 4
            else {
                return (listing.beds || listing.beds=== 0 ? listing.beds : listing.community.beds_min) === parseInt(filterObj.beds)
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
        <Grid.Row height={2}> 
            <Grid.Column width={16}>
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
                setListingSpotlight={setListingSpotlight}
                removeFavorite={removeFavorite}/> 
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
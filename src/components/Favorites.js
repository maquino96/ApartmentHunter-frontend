import FavoriteItem from "./FavoriteItem"
import { Item, Button } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'


function Favorites ({favorites, removeFavorite}) {
        let history = useHistory() 

        const favoriteCards = favorites && favorites.map( listing => 
        <FavoriteItem 
            key={listing.id} 
            listing={listing.listing}
            notes={listing.notes}
            id={listing.id}
            removeFavorite={removeFavorite}
            photo={listing.photo.slice(0, (listing.photo.length-5))+'xd-w1020_h770_q80.jpg'}/>)
    

    return (
        <Item.Group divided>
            <h1>Favorites</h1>
            <Button basic color="red" floated='right' onClick={() => history.push('./listings')}>Go Back</Button>
            {favoriteCards}
        </Item.Group>
    )
}

export default Favorites 
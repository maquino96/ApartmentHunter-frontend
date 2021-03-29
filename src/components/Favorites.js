import FavoriteItem from "./FavoriteItem"
import { Item } from 'semantic-ui-react'


function Favorites ({favorites}) {

    const favoriteCards = favorites.map( listing => 
    <FavoriteItem 
        key={listing.id} 
        listing={listing.listing}
        photo={listing.notes}/>)

    return (
        <Item.Group divided>
            <h1>TEST</h1>
            {favoriteCards}
        </Item.Group>
    )
}

export default Favorites 
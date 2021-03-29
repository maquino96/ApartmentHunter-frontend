import FavoriteItem from "./FavoriteItem"
import { Item } from 'semantic-ui-react'


function Favorites ({favorites}) {

    const favoriteCards = favorites.map( listing => 
    <FavoriteItem 
        key={listing.id} 
        listing={listing.listing}
        photo={listing.notes.slice(0, (listing.notes.length-5))+'xd-w1020_h770_q80.jpg'}/>)

    return (
        <Item.Group divided>
            <h1>TEST</h1>
            {favoriteCards}
        </Item.Group>
    )
}

export default Favorites 
import { Button, Item, TextArea, Form, Segment } from "semantic-ui-react";
import {useState} from "react"

function FavoriteItem({listing, photo, notes, id, removeFavorite, lightMode}) {
  const [isNotes, setIsNotes] = useState(false)
  const [notesState, setNotesState] = useState(notes)

  const handlePhotoClick = () => {
    window.open(photo, '_blank')
  }

  const handleNotes = () => { 
    if(isNotes) {
      fetch(`http://localhost:3000/favorites/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({notes: notesState})
      })
        .then(res => res.json())
        .then(favorite => {
          setIsNotes(!isNotes)
        })
    } else {
    setIsNotes(!isNotes)
    }
  }

  return (
    <Item>
      {/* <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" /> */}
      <Item.Image src={photo} onClick={handlePhotoClick}/>
      <Item.Content >
        <Item.Header as="a" style={{color: lightMode ? 'black' : 'white'}}>{listing.address}</Item.Header>
        <Item.Description style={{color: lightMode ? 'black' : 'white'}}>
                <div> Price: {listing.price}</div>
                <div>Square feet: {listing.square_feet} sqft. </div>
                <div> {listing.beds} Bed(s) // {listing.baths} Bath(s)</div>
        </Item.Description>
        <Form>
          {isNotes ? <TextArea onChange={(e) => setNotesState(e.target.value)} value={notesState}></TextArea> : <Segment className="ui padded segment">{notesState}</Segment>}
        </Form>
        <br></br>
        <Button primary floated='right' onClick={handleNotes}>
            {isNotes ? "Save Notes" : "Add Notes"}
          </Button>
        <Button secondary color='red' floated='right' onClick={() => removeFavorite(id)}>Remove Favorite</Button>
      </Item.Content>
    </Item>
  );
}

export default FavoriteItem;

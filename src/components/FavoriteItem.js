import { Button, Icon, Item } from "semantic-ui-react";

function FavoriteItem({listing, photo}) {


  return (
    <Item>
      {/* <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" /> */}
      <Item.Image src={photo} />
      <Item.Content>
        <Item.Header as="a">{listing.address}</Item.Header>
        <Item.Meta><span className="cinema">Union Square 14</span></Item.Meta>
        <Item.Description>
                <div> Price: {listing.price}</div>
                <div>Square feet: {listing.square_feet} sqft. </div>
                <div> {listing.beds} Bed(s) // {listing.baths} Bath(s)</div>
        </Item.Description>

        <Button primary floated='right'>
            Notes
            <Icon name='right chevron' />
          </Button>
      </Item.Content>
    </Item>
  );
}

export default FavoriteItem;

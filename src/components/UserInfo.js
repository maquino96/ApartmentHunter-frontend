import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";

const UserInfo = ({user}) => {
  return (
    <Card>
      <Card.Content>
        <Image
          //   floated="right"
          //   size="mini"
          src="https://ca.slack-edge.com/T02MD9XTF-U01JA0CUMDJ-f56762317b59-512"
          size="tiny"
        />
        <Card.Header>{user.name}</Card.Header>
        {/* <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
          <Button.Group vertical>
            <Button basic color='black' animated>
              <Button.Content visible>Log Out</Button.Content>
              <Button.Content hidden>
                <Icon name="log out" />
              </Button.Content>
            </Button>
            <Button basic color='black' animated="vertical">
              <Button.Content visible>Favorites</Button.Content>
              <Button.Content hidden>
                <Icon name="heart" />
              </Button.Content>
            </Button>
            <Button basic color='black'>
                Update User Info
            </Button>
          </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default UserInfo;

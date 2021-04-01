import React from "react";
import {Icon, Menu, Sidebar, Checkbox} from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const UserInfo = ({ user, handleLogout, visible, setVisible, handleUpdateForm, ludicrous, setLudicrous, lightMode, setLightMode, egg, setEgg}) => {
  let history = useHistory();

  const sendToFavorites = () => {
    console.log("clicked");
    history.push("/favorites");
  };

  return (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon='labeled'
        inverted
        visible={visible}
        vertical
        width={'thin'}
        onClick={()=>setVisible(!visible)}
      >
        <Menu.Item onClick={handleLogout} as="a">
          <Icon name="log out" />
          {!user.name || user.name === "Guest" ? "Sign In" : "Log Out"}
        </Menu.Item>
        <Menu.Item onClick={sendToFavorites} as="a">
          <Icon name="star" />
          Favorites
        </Menu.Item>
        <Menu.Item onClick={handleUpdateForm} as="a">
          <Icon name="user circle" />
          Update User Info
        </Menu.Item>
        <Menu.Item>
          <Checkbox toggle onChange={()=>setLightMode(!lightMode)} />
          <div>{lightMode ? 'Dark Mode' : 'Light Mode'}</div>
        </Menu.Item>
        <Menu.Item>
          <Checkbox toggle onChange={()=>setEgg(!egg)}/>
          <div></div>
        </Menu.Item>
        <Menu.Item>
          <Checkbox toggle onChange={()=>setLudicrous(!ludicrous)}/>
          <div>{egg ? null : 'Red or Blue Pill' }</div>
        </Menu.Item>

      </Sidebar>
      {/* <Card>
      <Card.Content>
        <Image
          centered 
          //   size="mini"
          src="https://ca.slack-edge.com/T02MD9XTF-U01JA0CUMDJ-f56762317b59-512"
          size="tiny"
        />
        <Card.Header>{user.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
          <Button.Group vertical>
            <Button basic color='black' animated onClick={handleLogout}>
              <Button.Content visible>Log Out</Button.Content>
              <Button.Content hidden>
                <Icon name="log out" />
              </Button.Content>
            </Button>
            <Button basic color='black' animated="vertical" onClick={sendToFavorites}>
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
    </Card> */}
    </>
  );
};

export default UserInfo;

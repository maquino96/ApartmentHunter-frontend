import { useState } from "react";
import { Form, Button, Divider, Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const LoginForm = ({ user, setUser, guest, setGuest, userUpdate, setUserUpdate, handleLogout, isHidden, setisHidden }) => {
  let history = useHistory();

//   const [isHidden, setisHidden] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const updateForm = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [key]: value });
    // console.log(formData)
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.name) {
          setUser(user);
          history.push("/listings");
        } else {
          alert("Username or Password is incorrect");
        }
      });
  };

  const handleGuestLogin = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Guest", password: "password" }),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.name) {
          setUser(user);
          history.push("/listings");
        } else {
          alert("Username or Password is incorrect");
        }
      });
  };
  const handleSignupSubmit = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((renderUser) => {
        if (renderUser.name) {
          setFormData({
            name: "",
            password: "",
          });
        //   console.log(user)
          setisHidden(!isHidden);
          alert("Thank you for signing up!")
          setUser(renderUser)
          history.push('/listings')
        } else {
          alert("Unable to create user");
        }
      });
  };

  const handleUpdateSubmit = (event) => {
      event.preventDefault()

      fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((renderUser) => {
          if (renderUser.name) {
            //   console.log(user)
            setFormData({
              name: "",
              password: "",
            });
            setUserUpdate(false)
            setUser(renderUser)
            alert("Update has completed")
            setisHidden(true)
            history.push('/listings')
            
          } else {
            alert("Unable to update user");
          }
        });
  }

  return (
    <div style={{padding: '3em'}}>
      {userUpdate ? (
        <div>
          <Form onSubmit={handleUpdateSubmit}>
            <h2>Update Form</h2>
            <Form.Group widths="equal">
              <Form.Input
                label="Name"
                placeholder="New Name"
                name="name"
                value={formData.name}
                onChange={updateForm}
              />
              <Form.Input
                type="password"
                label="Password"
                placeholder="New Password"
                name="password"
                value={formData.password}
                onChange={updateForm}
              />
            </Form.Group>
            <Form.Button type="submit">Update</Form.Button>
          </Form>
          <Button
            basic
            color="red"
            floated="right"
            onClick={() => history.push("./listings")}
          >
            Go Back
          </Button>
        </div>
      ) : (
        <div style={{
          padding: '8em'  
        }}>
          <Segment placeholder>
            <Grid columns={2} stackable testAlign="center">
              <Divider vertical>Or</Divider>
              <Grid.Row>
                <Grid.Column>
                  <div>
                    {isHidden && (
                      <Form
                        onSubmit={handleLoginSubmit}
                        id="login-form"
                        className="hidden"
                      >
                        <h2>Login</h2>
                        <Form.Group widths='equal'>
                          <Form.Input
                            label="Name"
                            placeholder="Enter Name"
                            name="name"
                            value={formData.name}
                            onChange={updateForm}
                          />
                          <Form.Input
                            label="Password"
                            placeholder="Enter Password"
                            name="password"
                            value={formData.password}
                            onChange={updateForm}
                          />
                        </Form.Group>
                        <Form.Button type="submit">Login</Form.Button>
                      </Form>
                    )}

                    {isHidden ? null : (
                      <Form onSubmit={handleSignupSubmit}>
                        <h2>Sign Up Form</h2>
                        <Form.Group widths="equal">
                          <Form.Input
                            label="Name"
                            placeholder="Desired Name"
                            name="name"
                            value={formData.name}
                            onChange={updateForm}
                          />
                          <Form.Input
                            label="Password"
                            placeholder="Desired Password"
                            name="password"
                            value={formData.password}
                            onChange={updateForm}
                          />
                        </Form.Group>
                        <Form.Button type="submit">Sign up</Form.Button>
                      </Form>
                    )}
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div>
                    {isHidden && (
                      <Button primary onClick={() => setisHidden(!isHidden)}>
                        Sign Up Form
                      </Button>
                    )}
                    {isHidden ? null : (
                      <Button secondary onClick={() => setisHidden(!isHidden)}>
                        Back to Login
                      </Button>
                    )}

                    <br></br>
                    <br></br>
                    <Button onClick={handleGuestLogin}> Guest </Button>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
      )}
    </div>
  );
};

export default LoginForm;

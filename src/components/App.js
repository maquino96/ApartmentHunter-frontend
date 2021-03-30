import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import ListingsPage from "./ListingsPage";
import { Container } from "semantic-ui-react";
import { Switch, Route, useHistory } from "react-router-dom";
import ListingDetail from "./ListingDetail";
import Favorites from "./Favorites";

function App() {
  const [listings, setListings] = useState([]);
  const [user, setUser] = useState({});
  const [listingSpotlight, setListingSpotlight] = useState({});
  const [zipcode, setZipcode] = useState(0)
  const [ center, setCenter] = useState( { lat: 40.74113, lng: -73.98971 } )
  let history = useHistory();
  // console.log(user);

  useEffect(() => {

    fetch(
      `https://realtor.p.rapidapi.com/properties/v2/list-for-rent?limit=51&offset=2&postal_code=${zipcode ? zipcode : 10010}&sort=relevance`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9be7cda230msh80b043bdb5786b7p11459ajsnd8086d8dfd11",
          "x-rapidapi-host": "realtor.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {

        setListings(data.properties);
        setCenter( {
            lat: data.properties[0].address.lat,
            lng: data.properties[0].address.lon
        })
        console.log("API CALL!", data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [zipcode]);

  const handleLogout = () => {
    setUser({});
    history.push("/login");
  };

  const handleMarkerClick = (url) => {
    // Below code allows you to redirect to another url in window
    // window.location.href=listingSpotlight.rdc_web_url

    // Code that is running below will redirect in another tab. '_blank' may have  a security concern per the following stackoverflow link:
    // https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react
    window.open(url, "_blank");
  };

  const removeFavorite = (id) => {

    fetch(`http://localhost:3000/favorites/${id}`, {
      method: 'DELETE' 
    })
      .then( r=> r.json())
      .then( deleted => {
        console.log(deleted)
        console.log('deleted') 
      
        fetch(`http://localhost:3000/users/${user.id}`)
        .then( r => r.json())
        .then( userRender => setUser(userRender))
      })


  }

  return (
    <div className="App">
      <Container>
        <h1>APARTMENT//HUNTER</h1>
        <Switch>
          <Route exact path="/login">
            <LoginForm user={user} setUser={setUser} />
          </Route>
          <Route exact path="/listingdetail">
            <ListingDetail
              handleMarkerClick={handleMarkerClick}
              listingSpotlight={listingSpotlight}
              center={center}
            />
          </Route>
          <Route exact path="/listings">
            <ListingsPage
              user={user}
              setUser={setUser}
              listings={listings}
              setListingSpotlight={setListingSpotlight}
              handleLogout={handleLogout}
              handleMarkerClick={handleMarkerClick}
              setZipcode={setZipcode}
              center={center}
              removeFavorite={removeFavorite}
            />
          </Route>
          <Route exact path="/favorites">
            <Favorites 
            favorites={user.favorites}
            removeFavorite={removeFavorite} />
          </Route>
          <Route exact path="/">
            <h1>Please login or sign up</h1>
          </Route>
          {/* <Route path='*'>
              <h1>Error 404</h1>
            </Route> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;

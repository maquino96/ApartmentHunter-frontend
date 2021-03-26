
import {useState, useEffect} from 'react'
import './App.css';
import LoginForm from './LoginForm';
import ListingsPage from './ListingsPage';
import { Container } from "semantic-ui-react";
import { Switch, Route } from 'react-router-dom'
import ListingDetail from './ListingDetail';



function App() {

  const [listings, setListings] = useState([])
  const [user, setUser] = useState({})
  const [listingSpotlight, setListingSpotlight] = useState({})

   useEffect(() => { 

    fetch("https://realtor.p.rapidapi.com/properties/list-for-rent?state_code=NY&limit=25&city=New%20York%20City&offset=0&postal_code=10010&sort=relevance", {
	  method: "GET",
	  headers: {
          "x-rapidapi-key": "9be7cda230msh80b043bdb5786b7p11459ajsnd8086d8dfd11",
          "x-rapidapi-host": "realtor.p.rapidapi.com"
	  }
      })
      .then(response => response.json())
      .then( data => {
        setListings(data.listings)
        console.log(data)})
      .catch(err => {
        console.error(err);
      });
  }, [])

  // const handleCardClick = () => {
    
  // }

  return (
    <div className="App">

      <Switch>
        <Container>
        <h1>APARTMENTHUNTER</h1>
          <Route exact path='/login'>
            <LoginForm user={user} setUser={setUser}/>
          </Route>
          <Route exact path='/listingdetail'>
            <ListingDetail listingSpotlight={listingSpotlight}/>
          </Route>
          <Route exact path='/listings'>
            <ListingsPage user={user} listings={listings} setListingSpotlight={setListingSpotlight}/>
          </Route>
          <Route exact path="/">
            <h1>Please login or sign up</h1>
          </Route>
          {/* <Route path='*'>
            <h1>Error 404</h1>
          </Route> */}
        </Container>
      </Switch>
      
    </div>
  );
}

export default App;

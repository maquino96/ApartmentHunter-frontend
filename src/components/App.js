
import {useState, useEffect} from 'react'
import './App.css';
import LoginForm from './LoginForm';
import ListingsPage from './ListingsPage';
import { Container } from "semantic-ui-react";
import { Switch, Route, useHistory } from 'react-router-dom'
import ListingDetail from './ListingDetail';



function App() {

  const [listings, setListings] = useState([])
  const [user, setUser] = useState({})
  const [listingSpotlight, setListingSpotlight] = useState({})
  let history = useHistory()

   useEffect(() => { 

    // fetch("https://realtor.p.rapidapi.com/properties/list-for-rent?state_code=NY&limit=25&city=New%20York%20City&offset=0&postal_code=10010&sort=relevance", {
	  // method: "GET",
	  // headers: {
    //       "x-rapidapi-key": "9be7cda230msh80b043bdb5786b7p11459ajsnd8086d8dfd11",
    //       "x-rapidapi-host": "realtor.p.rapidapi.com"
	  // }
    //   })
    //   .then(response => response.json())
    //   .then( data => {
    //     setListings(data.listings)
    //     console.log(data)})
    //   .catch(err => {
    //     console.error(err);
    //   });

  // UPDATED API FIGURE OUT THE FOLLOWING:

    fetch("https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=26&offset=0&postal_code=10010&sort=relevance", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "9be7cda230msh80b043bdb5786b7p11459ajsnd8086d8dfd11",
        "x-rapidapi-host": "realtor.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then( data => {
      setListings(data.properties)
      console.log('API CALL!',data)
    })
    .catch(err => {
      console.error(err);
    });
    
  }, [])

  const handleLogout = () => {
    setUser({})
    history.push('/login')
  }

  // const handleCardClick = () => {
    
  // }

  return (
    <div className="App">
      <Container>
        <h1>APARTMENTHUNTER</h1>
        <Switch>
            <Route exact path='/login'>
              <LoginForm user={user} setUser={setUser}/>
            </Route>
            <Route exact path='/listingdetail'>
              <ListingDetail listingSpotlight={listingSpotlight}/>
            </Route>
            <Route exact path='/listings'>
              <ListingsPage 
                user={user}
                setUser={setUser} 
                listings={listings} 
                setListingSpotlight={setListingSpotlight}
                handleLogout={handleLogout}
                />
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

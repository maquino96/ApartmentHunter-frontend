
import {useState, useEffect} from 'react'
import LoginForm from './LoginForm';
import ListingsPage from './ListingsPage';
import { Container } from "semantic-ui-react";
import { Switch, Route, useHistory } from 'react-router-dom'
import ListingDetail from './ListingDetail';
import Favorites  from './Favorites';




function App() {

  const [listings, setListings] = useState([])
  const [user, setUser] = useState({})
  const [listingSpotlight, setListingSpotlight] = useState({})
  let history = useHistory()
  console.log(user)

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

  // UPDATED API:

    fetch("https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=28&offset=2&postal_code=10010&sort=relevance", {
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

  const handleMarkerClick = (url) => {
    // Below code allows you to redirect to another url in window
    // window.location.href=listingSpotlight.rdc_web_url 

    // Code that is running below will redirect in another tab. '_blank' may have  a security concern per the following stackoverflow link:
    // https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react
    window.open(url, '_blank')
  }

  return (
    <div className="App">
      <Container>
        <h1>APARTMENTHUNTER</h1>
        <Switch>
            <Route exact path='/login'>
              <LoginForm user={user} setUser={setUser}/>
            </Route>
            <Route exact path='/listingdetail'>
              <ListingDetail handleMarkerClick={handleMarkerClick} listingSpotlight={listingSpotlight}/>
            </Route>
            <Route exact path='/listings'>
              <ListingsPage 
                user={user}
                setUser={setUser} 
                listings={listings} 
                setListingSpotlight={setListingSpotlight}
                handleLogout={handleLogout}
                handleMarkerClick={handleMarkerClick}
                />
            </Route>
            <Route exact path ='/favorites'>
              <Favorites favorites={user.favorites}/>
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

import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

const Map = ({center, listings, handleMarkerClick}) => {
    const coordinateArr = listings?.map(listing => {
        return {lat: listing.address.lat, lng: listing.address.lon, url: listing.rdc_web_url}
    })

    const markers = coordinateArr?.map(coordinateObj => {
       return <Marker key={coordinateObj.url} lat={coordinateObj.lat} lng={coordinateObj.lng} handleMarkerClick={handleMarkerClick} url={coordinateObj.url} />
    })
    
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys= {{key:
                    `${process.env.REACT_APP_GOOGLE_MAPS_JAVASCRIPT_API_KEY}`}}
                    center={ center }
                    defaultZoom={ 15 }    
            >

                {markers}

            </GoogleMapReact>
        </div>
    )
}


export default Map

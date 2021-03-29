import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

const Map = ({lattitude, longitude, handleMarkerClick}) => {
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys= {{key:
                    'AIzaSyCTanlrDJ66tlZ83se-DBlsAgRRf3xc-xQ'  }}
                    defaultCenter={ {lat: 40.74113,lng: -73.98971 } }
                    defaultZoom={ 14 }    
            >

                <Marker lat={lattitude} lng={longitude} onClick={handleMarkerClick}/>

            </GoogleMapReact>
        </div>
    )
}

// Map.defaultProps = {
//     center: {

//     },
//     zoom: 6
// }

export default Map

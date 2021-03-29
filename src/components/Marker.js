import React from 'react'
import { Icon } from 'semantic-ui-react'


const Marker = ({ url, handleMarkerClick}) => {
    return (
        <div onClick={()=> handleMarkerClick(url)} className='marker'>
            <Icon 
                name='map marker alternate' 
                color='red' size='big' 
                className='location-icon'   
            />
        </div>
    )
}

export default Marker

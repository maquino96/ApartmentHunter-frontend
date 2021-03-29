import React from 'react'
import { Icon } from 'semantic-ui-react'


const Marker = ({lat, lng, onClick}) => {
    return (
        <div className='marker'>
            <Icon 
                name='map marker alternate' 
                color='red' size='big' 
                className='location-icon'
                onClick={onClick}    
            />
        </div>
    )
}

export default Marker

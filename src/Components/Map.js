import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';


function Map({ center }) {
    const zoom = 7


    return (
        <div className='MapContainer'>
            <GoogleMapReact
            bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLE_KEY}}
            center = {center}   
            zoom = {zoom}>
            <LocationMarker lat={46.74527} lng={23.59189}/>
            </GoogleMapReact>
        </div>
    );
}


Map.defaultProps={
    center: {
        lat: 45.9443,
        lng: 25.0094
    }
}


export default Map;
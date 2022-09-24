import React from "react";
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-topcoat/location';


function LocationMarker({ lat, lng, onClick, id }) {
    return (
        <div onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon"/>

        </div>
    );
}

export default LocationMarker;
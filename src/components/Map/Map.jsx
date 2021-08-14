import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { Paper, Typography } from 'material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab';

import useStyles from './styles';

function Map({setCoordinates,setBounds,coordinates}) {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyChaqPjGGWONTnou_UUYS-HqgKlYpKyF5I'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={10}
            margin={[50,50,50,50]}
            // options={''}
            onChange={(e)=>{
                console.log(e);
                setCoordinates({lat: e.center.lat, lng: e.center.lng});
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
            }}
            // onChildClick={''}
            />            
        </div>
    )
}

export default Map

import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { Paper, Typography } from 'material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab';



function Map() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');
    const coordinates = { lat:0, lng:0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyChaqPjGGWONTnou_UUYS-HqgKlYpKyF5I'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={10}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}
            />            
        </div>
    )
}

export default Map

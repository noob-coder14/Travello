import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'

import useStyles from './styles';

export default function PlaceDetails({place}) {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
          </Box>
          {place?.awards?.map((award,i)=>(
            <Box key={i} mx={1} display="flex" justifyContent="space-between" alignItems="center">
              <img src={award.images.small} alt="image"></img>
              <Typography gutterBottom variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))}
          {place?.cuisine?.map(({name})=>{
            <Chip key={name} size="small" label={name} className={classes.chip}></Chip>
          })}
          {place?.address && (
            <Typography gutterBottom vatiant="body2" color="textSecondary" className={classes.subtitle}>
              <LocationOnIcon/> {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography gutterBottom vatiant="body2" color="textSecondary" className={classes.spacing}>
              <PhoneIcon/> {place.phone}
            </Typography>
          )}
          <CardActions>
            <Button size="small" color="primary" onClick={()=>{window.open(place.web_url, '_blank')}}>
              Trip Advisor
            </Button>
            <Button size="small" color="primary" onClick={()=>{window.open(place.website, '_blank')}}>
              Website
            </Button>
          </CardActions>
        </CardContent>
    </Card>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core';

const WeddingRegistryCard = () => {
  const classes = useStyles({})

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/wedding-registry/registry-card.png"
          title="Wedding registry"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wedding registry
          </Typography>
          <Typography variant="body2" component="p">
            We themed our wedding registry after Oregon Trail.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.button}>
          Visit the registry
        </Button>
      </CardActions>
    </Card>
  );
}

export default WeddingRegistryCard

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: "345px",
    backgroundColor: '#222',
    color: '#fff',
    margin: '16px 0'
  },
  media: {
    height: "256px",
  },
  button: {
    color: theme.palette.primary.light
  }
}));
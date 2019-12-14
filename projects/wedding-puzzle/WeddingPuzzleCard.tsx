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

const WeddingPuzzleCard = () => {
  const classes = useStyles({})

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/wedding-puzzle/puzzle.png"
          title="Wedding puzzle adventure"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wedding puzzle adventure
          </Typography>
          <Typography variant="body2" component="p">
            We made an outdoor puzzle solving game for our wedding guests to enjoy.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.button}>
          Digital version coming soon!
        </Button>
      </CardActions>
    </Card>
  );
}

export default WeddingPuzzleCard

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 345,
    backgroundColor: '#222',
    color: '#fff'
  },
  media: {
    height: 140,
  },
  button: {
    color: theme.palette.primary.light
  }
}));
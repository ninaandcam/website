import { Container, Typography, IconButton } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import ArrowBack from '@material-ui/icons/ArrowBack'


import React from 'react';

const WeddingPuzzleAdventure = () => {
  const classes = useStyles({})
  return (
    <>
      <div className={classes.header}>
        <IconButton className={classes.backButton}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" component="h1">Wedding puzzle adventure</Typography>
      </div>
      <Container maxWidth="sm">
        <div className={classes.body}>
          <Typography variant="body2">
            We built a Puzzle Hunt Adventure for people to enjoy at our wedding.
            The wedding was a multi-day affair at an outdoor “glamping” venue,
            so there was plenty of time for guests to enjoy games and activities.
          </Typography>
        </div>
      </Container>
    </>
  );
}

export default WeddingPuzzleAdventure;

const useStyles = makeStyles((theme: Theme) => {
  return {
    header: {
      maxWidth: theme.breakpoints.width('sm'),
      margin: '0 auto',
      display: 'flex',
      padding: '32px 0',
      alignItems: 'center',
    },
    body: {
      padding: '16px 0',
    },
    backButton: {
      color: '#333'
    }
  }
})

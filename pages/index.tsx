import { Container, CssBaseline, Fade, Slide, Typography } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Heart from '../components/icons/Heart'
import LeftMeeple from '../components/icons/LeftMeeple'
import RightMeeple from '../components/icons/RightMeeple'
import WeddingPuzzleCard from '../projects/wedding-puzzle/WeddingPuzzleCard'
import WeddingRegistryCard from '../projects/wedding-registry/WeddingRegistryCard'

const time = 2000

const Home = () => {
  const classes = useStyles({})
  const [shouldSlide, setShouldSlide] = useState(false)
  useEffect(() => setShouldSlide(true), [])
  const [showNames, setShowNames] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowNames(true)
    }, time)
  }, [])
  return (
    <div>
      <Head>
        <title>Nina and Cam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssBaseline />
      <div className={classes.header}>
        <Fade in={showNames} timeout={time}>
          <div className={classes.heart}>
            <Heart className={`${classes.icon} ${classes.heartIcon}`} />
          </div>
        </Fade>
        <div className={classes.left}>
          <Slide direction="right" in={shouldSlide} timeout={time}>
            <div className={classes.iconHolder}>
              <Fade in={showNames} timeout={time}>
                <Typography className={classes.name} variant="button" component="h2">
                  Nina
                </Typography>
              </Fade>
              <LeftMeeple className={classes.icon} />
            </div>
          </Slide>
        </div>
        <div className={classes.right}>
          <Slide direction="left" in={shouldSlide} timeout={time}>
            <div className={classes.iconHolder}>
              <RightMeeple className={classes.icon} />
              <Fade in={showNames} timeout={time}>
                <Typography className={classes.name} variant="button" component="h2">
                  Cam
                </Typography>
              </Fade>
            </div>
          </Slide>
        </div>
      </div>
      <Container className={classes.cardsContainer} maxWidth="md">
        <Fade in={showNames} timeout={time}>
          <div>
            <WeddingRegistryCard />
            <WeddingPuzzleCard />
          </div>
        </Fade>
      </Container>
    </div>
  )
}

export default Home

const useStyles = makeStyles((theme: Theme) => {
  return {
    header: {
      display: 'flex',
      padding: '32px 0',
      position: 'relative',
    },
    left: {
      width: '50%',
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    right: {
      width: '50%',
      display: 'flex',
    },
    icon: {
      fontSize: '64px',
      color: '#222',
    },
    iconHolder: {
      display: 'flex',
      alignItems: 'center',
    },
    heart: {
      left: '0',
      right: '0',
      margin: 'auto',
      position: 'absolute',
      width: '64px',
    },
    heartIcon: {
      color: theme.palette.primary.light,
    },
    name: {
      fontSize: '32px',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
  }
})

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

type Props = {
  item: string
  price: string
}
const RegistryItem = (props: Props) => {
  const classes = useStyles({})
  const { item, price } = props
  return (
    <div className={classes.item}>
      <img src={`wedding-registry/img/${item}.png`} alt={item} className={classes.img} />
      <div>{item}</div>
      <div>${price}</div>
    </div>
  )
}

export default RegistryItem

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    margin: '20px',
    display: 'inline-block',
    textAlign: 'center',
  },
  img: {
    height: '50px',
  },
}))

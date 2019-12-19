import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import clsx from 'clsx'

type Props = {
  item?: string
  name: string
  qty: string
  cost: string
  updateQty?: any
}
const RegistryLine = (props: Props) => {
  const classes = useStyles({})
  const { name, qty, cost, item, updateQty } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value)
    if (parseInt(value, 10)) {
      updateQty(item, Math.max(0, parseInt(value, 10)));
    } else {
      updateQty(item, '');
    }
  }

  return (
    <div className={classes.line}>
      <div className={clsx(classes.cell, classes.name)}>
        {name}
      </div>
      <div className={clsx(classes.cell, classes.qty)}>
        { typeof qty === 'string' && qty !== '' ? qty :
          <input
            type='number'
            value={qty}
            placeholder='0'
            className={classes.qtyText}
            onChange={handleChange}
            onFocus={(e) => {
              e.target.select();
              e.target.placeholder = '';
            }}
            onBlur={(e) => {
              if(e.target.value === '') {
                e.target.placeholder = '0'
              }
            }}
          />
        }
      </div>
      <div className={clsx(classes.cell, classes.cost)}>
        {cost}
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  line: {
    width: '95%',
    margin: '0.2em auto',
    lineHeight: '1.5em',
    textAlign: 'left'
  },
  cell: {
    display: 'inline-block',
    boxSizing: 'border-box'
  },
  name: {
    width: '55%',
    textAlign: 'left'
  },
  qty: {
    width: '15%',
    textAlign: 'right'
  },
  qtyText: {
    fontSize: '16px',
    fontFamily: 'Here Lies MECC Regular',
    width: '100%',
    textAlign: 'right',
    color: '#222',
    background: '#fafafa',
    padding: '0.2em 0'
  },
  cost: {
    width: '30%',
    textAlign: 'right'
  }
}))

export default RegistryLine;
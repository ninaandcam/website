import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import RegistryItem from '../projects/wedding-registry/RegistryItem'
import RegistryLine from '../projects/wedding-registry/RegistryLine'
import { useStripe } from '../projects/wedding-registry/useStripe'

type RegistryState = {
  wagon: string
  oxen: string
  wheel: string
  clothing: string
  food: string
  total: number
  message: string
}

declare var window: undefined | any

const WeddingRegistry = () => {
  const classes = useStyles({})
  const [state, setState] = useState<RegistryState>({
    wagon: '',
    oxen: '',
    wheel: '',
    clothing: '',
    food: '',
    total: 0,
    message: '',
  })

  useEffect(() => {
    if (process.browser && window !== undefined) {
      const _amount = new URLSearchParams(window.location.search).get('m')
      if (_amount) {
        const amount = parseInt(_amount, 10)
        setState({
          ...state,
          message: `Thank you for your gift of $${amount.toFixed(
            2
          )}! We appreciate your support as we begin our journey as a married couple.`,
        })
      }
    }
  }, [process.browser])

  const [stripeRef, stripe] = useStripe()

  function updateQty(item, count) {
    const total = Object.keys(itemPrices).reduce((out, next) => {
      const itemPrice = itemPrices[next]
      const isUpdatedItem = item === next
      const itemCount = isUpdatedItem ? count : state[next] || 0
      return out + itemPrice * itemCount
    }, 0)
    setState({ ...state, total, [item]: count })
  }

  // The 1st row of items
  const items1 = Object.keys(itemPrices)
    .slice(0, 3)
    .map(item => {
      return <RegistryItem key={item} item={item} price={itemPrices[item]} />
    })

  // The 2nd row of items
  const items2 = Object.keys(itemPrices)
    .slice(3, 5)
    .map(item => {
      return <RegistryItem key={item} item={item} price={itemPrices[item]} />
    })

  // Data to display each line in the "table"
  const lines = Object.keys(itemPrices).map(item => {
    const name = ['wagon', 'wheel'].includes(item) ? item + 's' : item
    return (
      <RegistryLine
        key={item}
        item={item}
        name={name}
        qty={state[item]}
        cost={'$' + (itemPrices[item] * state[item] || 0)}
        updateQty={updateQty}
      />
    )
  })

  // The items array is needed for Stripe
  const items = []
  const itemsForMemo = []
  Object.keys(itemPrices).forEach(item => {
    let name = item
    if (['wagon', 'wheel'].includes(item) && state[item] > 1) {
      name += 's'
    }
    if (state[item] > 0) {
      items.push({
        sku: itemSKUs[item],
        quantity: state[item],
      })
      itemsForMemo.push({
        name: name,
        quantity: state[item],
      })
    }
  })

  // The memo is summarizes the user purchase
  let memo = ''
  itemsForMemo.forEach(item => {
    memo += `${item.quantity} ${item.name}, `
  })
  if (items.length === 1) {
    memo = memo.slice(0, -2)
  } else if (items.length === 2) {
    memo = memo.slice(0, -2)
    const lastComma = memo.lastIndexOf(',')
    memo = memo.slice(0, lastComma) + ' and ' + memo.slice(lastComma + 2)
  } else if (items.length > 2) {
    memo = memo.slice(0, -2)
    const lastComma = memo.lastIndexOf(',')
    memo = memo.slice(0, lastComma + 2) + ' and ' + memo.slice(lastComma + 2)
  }

  return (
    <div className={classes.container} ref={stripeRef}>
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        lineHeight: '1.5em',
      }}
    >
      {state.message !== '' && (
        <div>
          <h2 className={classes.heading}>{state.message}</h2>
          <hr className={classes.divider} />
        </div>
      )}
      <h1 className={classes.heading}>Registry</h1>
      <div>
        <img
          src="wedding-registry/img/dude.png"
          style={{
            float: 'left',
            height: '150px',
            margin: '0 1em 1em 3em',
          }}
          alt="Store owner (presumably Marvin Joersz)"
        />
        <p
          style={{
            margin: '3em',
          }}
        >
          Purchase supplies to aid Nina and Cam on their journey as a married couple.
        </p>
        <div style={{ clear: 'both' }} />
      </div>

      <hr className={classes.divider} />

      <p
        style={{
          margin: '1.5em',
          textAlign: 'left',
        }}
      >
        Marv's General Store
        <br />
        Mandan, North Dakota
      </p>
      <p
        style={{
          margin: '1.5em',
          textAlign: 'right',
        }}
      >
        June 29, 2019
      </p>

      <hr className={classes.divider} />

      {items1}
      <br />
      {items2}
      <div style={{ clear: 'both' }} />
      <hr className={classes.divider} />
      <div
        style={{
          margin: '1.5em 0',
        }}
      >
        <RegistryLine name={''} qty={'qty.'} cost={'cost'} updateQty={updateQty} />
        {lines}
      </div>

      <hr className={classes.divider} />

      <RegistryLine name={''} qty={'total:'} cost={'$' + state.total} />

      <hr className={classes.divider} />

      <div
        style={{
          margin: '4em 0 2em',
        }}
      >
        <h2 className={classes.heading}>Send your gift</h2>
        <div
          style={{
            margin: '4em 1.5em',
            textAlign: 'left',
          }}
        >
          <p style={{ textAlign: 'left' }}>Option 1: PayPal</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`http://paypal.me/NinaJoshi/${state.total}`}
            className={classes.button}
          >
            Give ${state.total.toFixed(2)} {memo === '' ? '' : 'for ' + memo}
          </a>
        </div>
        <div
          style={{
            margin: '4em 1.5em',
            textAlign: 'left',
          }}
        >
          <p>Option 2: Check</p>
          <div
            style={{
              fontFamily: 'Arial',
              margin: '0 1em',
            }}
          >
            Pay to:
            <div
              style={{
                margin: '0.5em 1em',
              }}
            >
              To: "Nina Joshi" or "Cameron Christensen"
              <br />
              Amount: ${state.total.toFixed(2)}
              <br />
              Memo: "Wedding gift — {memo}"
            </div>
            <div className={classes.mail}>
              Mail to:
              <div
                style={{
                  margin: '0.5em 1em',
                }}
              >
                Nina Joshi and Cameron Christensen
                <br />
                P.O. Box 2862
                <br />
                Saratoga, CA 95070
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: '4em 1.5em',
            textAlign: 'left',
          }}
        >
          <p>Option 3: Card</p>
          <div
            style={{
              fontFamily: 'Arial',
              margin: '0em 1em',
            }}
          >
            <div>
              Note: 3% of your gift will go to transaction fees.
              <div
                style={{
                  margin: '1em 0',
                }}
              >
                Nina and Cam: ${(state.total - state.total * 0.03).toFixed(2)}
                <br />
                Fees: ${(state.total * 0.03).toFixed(2)}
              </div>
            </div>
          </div>
          <div
            className={classes.button}
            onClick={e => {
              stripe
                .redirectToCheckout({
                  items: items,
                  successUrl: 'https://cschrist.github.io/wedding-registry/?m=' + state.total,
                  cancelUrl: 'https://cschrist.github.io/wedding-registry/',
                })
                .then(function(result) {
                  console.log(result)
                })
            }}
          >
            Give ${state.total.toFixed(2)} {memo === '' ? '' : 'for ' + memo}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '600px',
          margin: '2em',
        }}
      >
        <h2 className={classes.heading}>Hope to see you at the wedding!</h2>
        <img
          src="wedding-registry/img/end.png"
          alt="A couple heading on their journey."
          style={{
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            margin: '0 auto',
          }}
        />
      </div>
      <style jsx>{`
        @font-face {
          font-family: "Here Lies MECC Regular";
          src: url("wedding-registry/font/here_lies_mecc.eot?") format("eot"),
            url("wedding-registry/font/here_lies_mecc.woff") format("woff"),
            url("wedding-registry/font/here_lies_mecc.ttf") format("truetype"),
            url("wedding-registry/font/here_lies_mecc.svg#Here-Lies-MECC") format("svg");
          font-weight: normal;
          font-style: normal;
          font-display: auto;
        }
      `}</style>
    </div>
    </div>
  )
}

export default WeddingRegistry

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    fontFamily: "Here Lies MECC Regular",
    background: "#222",
    color: "#fafafa",
    margin: 0,
    border: '1px solid #222',
    "& ::placeholder": {
      color: "#bbb",
    },
  },
  heading: {
    margin: '1.5em',
    lineHeight: '1.5em',
  },
  divider: {
    border: '4px solid #0f0',
  },
  mail: {},
  button: {
    background: '#222',
    fontFamily: 'Here Lies MECC Regular',
    display: 'inline-block',
    fontSize: '12px',
    border: '2px solid #fafafa',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '0.5em 1em',
    marginLeft: '1em',
    color: '#fafafa',
    borderRadius: '0.5em',
    '&:hover': {
      color: '#fff',
      border: '2px solid #0f0',
      cursor: 'pointer',
    },
  },
}))

const itemSKUs = {
  wagon: 'sku_E2igFvdFYwKXVf',
  oxen: 'sku_E2igwHLr4zN6Z2',
  wheel: 'sku_E2ig0PAwQx7DBv',
  clothing: 'sku_E2igTq4iZXn56P',
  food: 'sku_E2ig0xtdjTg5cH',
}

const itemPrices = {
  wagon: 150,
  oxen: 100,
  wheel: 20,
  clothing: 5,
  food: 1,
}

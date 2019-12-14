import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Line from './Line';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wagon: '',
      oxen: '',
      wheel: '',
      clothing: '',
      food: '',
      total: 0,
      message: ''
    };
    this.itemPrices = {
      wagon: 150,
      oxen: 100,
      wheel: 20,
      clothing: 5,
      food: 1
    }
    this.itemSKUs = {
      wagon: 'sku_E2igFvdFYwKXVf',
      oxen: 'sku_E2igwHLr4zN6Z2',
      wheel: 'sku_E2ig0PAwQx7DBv',
      clothing: 'sku_E2igTq4iZXn56P',
      food: 'sku_E2ig0xtdjTg5cH'
    }
    this.updateQty = this.updateQty.bind(this);
    this.stripe = window.Stripe('pk_live_Llp3ingWPhiXLLSm9fsnRGcd', {betas: ['checkout_beta_3']});
  }

  componentDidMount() {
    let amount = (new URLSearchParams(window.location.search)).get('m');
    if (amount) {
      amount = parseInt(amount, 10);
      this.setState({
        message: `Thank you for your gift of $${amount.toFixed(2)}! We appreciate your support as we begin our journey as a married couple.`
      });
    }
  }

  updateQty(item, count) {
    this.setState({ [item]: count }, () => {
      const total = Object.keys(this.itemPrices).reduce((sum, item) => {
        return sum + this.itemPrices[item] * (this.state[item] || 0);
      }, 0);
      this.setState({ total });
    });
  }

  render() {

    // The 1st row of items
    const items1 = Object.keys(this.itemPrices).slice(0,3).map(item => {
      return (
        <Item
          key={item}
          item={item}
          price={this.itemPrices[item]}
        />
      )
    });

    // The 2nd row of items
    const items2 = Object.keys(this.itemPrices).slice(3,5).map(item => {
      return (
        <Item
          key={item}
          item={item}
          price={this.itemPrices[item]}
        />
      )
    });

    // Data to display each line in the "table"
    const lines = Object.keys(this.itemPrices).map(item => {
      const name = ['wagon', 'wheel'].includes(item) ? item + 's' : item;
      return (
        <Line
          key={item}
          item={item}
          name={name}
          qty={this.state[item]}
          cost={'$' + (this.itemPrices[item] * (this.state[item]) || 0)}
          updateQty={this.updateQty}
        />
      )
    });

    // The items array is needed for Stripe
    const items = [];
    const itemsForMemo = [];
    Object.keys(this.itemPrices).forEach(item => {
      let name = item;
      if(['wagon', 'wheel'].includes(item) && this.state[item] > 1) {
        name += 's';
      }
      if(this.state[item] > 0) {
        items.push({
          sku: this.itemSKUs[item],
          quantity: this.state[item]
        });
        itemsForMemo.push({
          name: name,
          quantity: this.state[item]
        })
      }
    });

    // The memo is summarizes the user purchase
    let memo = '';
    itemsForMemo.forEach(item => {
      memo += `${item.quantity} ${item.name}, `;
    });
    if (items.length === 1) {
      memo = memo.slice(0, -2);
    } else if (items.length === 2) {
      memo = memo.slice(0, -2);
      const lastComma = memo.lastIndexOf(',');
      memo = memo.slice(0, lastComma) + " and " + memo.slice(lastComma+2);
    } else if (items.length > 2) {
      memo = memo.slice(0, -2);
      const lastComma = memo.lastIndexOf(',');
      memo = memo.slice(0, lastComma+2) + " and " + memo.slice(lastComma+2);
    }

    return (
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        lineHeight: '1.5em'
      }}>
        {this.state.message !== '' ?
          (
            <div>
              <h2 className={css(styles.heading)}>{this.state.message}</h2>
              <hr className={css(styles.divider)}/>
            </div>
          )
          : null}

        <h1 className={css(styles.heading)}>Registry</h1>
        <div>
          <img
            src='img/dude.png'
            style={{
              float: 'left',
              height: '150px',
              margin: '0 1em 1em 3em'
            }}
            alt='Store owner (presumably Marvin Joersz)'
          />
          <p style={{
            margin: '3em'
          }}>
            Purchase supplies to aid Nina and Cam on their journey as a married couple.
          </p>
          <div style={{clear: 'both'}} />
        </div>

        <hr className={css(styles.divider)}/>

        <p style={{
          margin: '1.5em',
          textAlign: 'left'
        }}>
          Marv's General Store
          <br />
          Mandan, North Dakota
        </p>
        <p style={{
          margin: '1.5em',
          textAlign: 'right'
        }}>
          June 29, 2019
        </p>

        <hr className={css(styles.divider)}/>

        {items1}
        <br/>
        {items2}
        <div style={{clear: 'both'}} />
        <hr className={css(styles.divider)}/>
        <div style={{
          margin: '1.5em 0'
        }}>
          <Line name={''} qty={'qty.'} cost={'cost'} updateQty={this.updateQty}/>
          {lines}
        </div>

        <hr className={css(styles.divider)}/>

        <Line name={''} qty={'total:'} cost={'$' + this.state.total}/>

        <hr className={css(styles.divider)}/>

        <div style={{
          margin: '4em 0 2em'
        }} >
          <h2 className={css(styles.heading)} >
            Send your gift
          </h2>
          <div style={{
            margin: '4em 1.5em',
            textAlign: 'left'
          }}>
            <p style={{textAlign: 'left'}}>Option 1: PayPal</p>
            <a
              target='_blank'
              rel="noopener noreferrer"
              href={`http://paypal.me/NinaJoshi/${this.state.total}`}
              className={css(styles.button)}>
              Give ${this.state.total.toFixed(2)} {memo === '' ? '' : 'for ' + memo}
            </a>
          </div>
          <div style={{
            margin: '4em 1.5em',
            textAlign: 'left'
          }} >
            <p>Option 2: Check</p>
            <div style={{
                fontFamily: 'Arial',
                margin: '0 1em'
              }}>
              Pay to:
              <div style={{
                  margin: '0.5em 1em'
                }}>
                To: "Nina Joshi" or "Cameron Christensen"
                <br />
                Amount: ${this.state.total.toFixed(2)}
                <br />
                Memo: "Wedding gift — {memo}"
              </div>
              <div className={css(styles.mail)} >
                Mail to:
                <div style={{
                    margin: '0.5em 1em'
                  }}>
                  Nina Joshi and Cameron Christensen
                  <br />
                  P.O. Box 2862
                  <br />
                  Saratoga, CA 95070
                </div>
              </div>
            </div>
          </div>
          <div style={{
            margin: '4em 1.5em',
            textAlign: 'left'
          }} >
            <p>
              Option 3: Card
            </p>
            <div style={{
                fontFamily: 'Arial',
                margin: '0em 1em'
              }}>
              <div>
                Note: 3% of your gift will go to transaction fees.
                <div style={{
                    margin: '1em 0'
                  }}>
                  Nina and Cam: ${(this.state.total - (this.state.total*0.03)).toFixed(2)}
                  <br/>
                  Fees: ${(this.state.total*0.03).toFixed(2)}
                </div>
              </div>
            </div>
            <div
              className={css(styles.button)}
              onClick={
                (e) => {
                  console.log(items);
                  this.stripe.redirectToCheckout({
                    items: items,
                    successUrl: 'https://cschrist.github.io/wedding-registry/?m=' + this.state.total,
                    cancelUrl: 'https://cschrist.github.io/wedding-registry/',
                  }).then(function (result) {
                    console.log(result);
                  });
                }
              }>
              Give ${this.state.total.toFixed(2)} {memo === '' ? '' : 'for ' + memo}
            </div>
          </div>
        </div>

        <div style={{
            maxWidth: '600px',
            margin: '2em'
          }}>
          <h2 className={css(styles.heading)} >
            Hope to see you at the wedding!
          </h2>
          <img src='img/end.png' alt='A couple heading on their journey.' style={{
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            margin: '0 auto'
          }}/>
        </div>

      </div>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    margin: '1.5em',
    lineHeight: '1.5em'
  },
  divider: {
    border: '4px solid #0f0'
  },
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
    ':hover': {
      color: '#fff',
      border: '2px solid #0f0',
      cursor: 'pointer'
    }
  }
});

export default App;

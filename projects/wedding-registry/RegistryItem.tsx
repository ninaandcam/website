import React, { Component } from 'react';

class Line extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    if (parseInt(value, 10)) {
      this.props.updateQty(this.props.item, Math.max(0, parseInt(value, 10)));
    } else {
      this.props.updateQty(this.props.item, '');
    }
  }

  render() {
    const { name, qty, cost } = this.props;
    return (
      <div className={css(styles.line)}>
        <div className={css(styles.cell, styles.name)}>
          {name}
        </div>
        <div className={css(styles.cell, styles.qty)}>
          { typeof qty === 'string' && qty !== '' ? qty :
            <input
              type='number'
              value={qty}
              placeholder='0'
              className={css(styles.qtyText)}
              onChange={this.handleChange}
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
        <div className={css(styles.cell, styles.cost)}>
          {cost}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default Line;
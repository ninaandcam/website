import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Item extends Component {
  render() {
    const { item, price } = this.props;
    return (
      <div className={css(styles.item)}>
        <img src={`img/${item}.png`} alt={item} className={css(styles.img)} />
        <div>{item}</div>
        <div>${price}</div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    margin: '20px',
    display: 'inline-block',
    textAlign: 'center'
  },
  img: {
    height: '50px'
  }
});

export default Item;
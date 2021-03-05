import React from 'react'
import Button from '../Button/Button';

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import './Items.styles.scss'

const Items = ({ item, addItem }) => {
  const { name, price, imageUrl} = item;
  return (
    <div className="items">
      <div className="items__image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="items__footer">
        <span className="items__name">{ name }</span>
        <span className="items__price">{ price }</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>Add to Cart</Button>
    </div>
  )}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Items)

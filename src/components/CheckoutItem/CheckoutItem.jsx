import React from 'react'
import { connect } from 'react-redux'

import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'

import './CheckoutItem.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="checkoutitem">
      <div className="checkoutitem__image_container">
        <img src={imageUrl}  alt="item" />
      </div>
      <span className="checkoutitem__name">{name}</span>
      <span className="checkoutitem__quantity">
        <div className="checkoutitem__quantity_arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="checkoutitem__quantity_value">{quantity}</span>
        <div className="checkoutitem__quantity_arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="checkoutitem__price">{price}</span>
      <span className="checkoutitem__remove_button" onClick={() => clearItem(cartItem)}>&#10007;</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
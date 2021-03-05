import React from 'react'

import './CheckoutItem.styles.scss'

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => (
  <div className="checkoutitem">
    <div className="checkoutitem__image_container">
      <img src={imageUrl}  alt="item" />
    </div>
    <span className="checkoutitem__name">{name}</span>
    <span className="checkoutitem__quantity">{quantity}</span>
    <span className="checkoutitem__price">{price}</span>
    <span className="checkoutitem__remove_button">&#10007;</span>
  </div>
)

export default CheckoutItem
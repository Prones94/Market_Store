import React from 'react'

import './CartItem.styles.scss'

const CartItem = ({ item: {imageUrl, price, name, quantity}}) => (
  <div className="cartitem">
    <img className="cartitem__image" src={imageUrl} alt= "item" />
    <div className="details">
      <span className="cartitem__detail_name">{name}</span>
      <span className="cartitem__detail_price">{quantity}x${price}</span>
    </div>
  </div>
)

export default CartItem
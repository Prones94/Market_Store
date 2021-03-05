import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './Checkout.styles.scss'

const Checkout = ({ cartItems, total}) => (
  <div className="checkout">
    <div className="checkout__header">
      <div className="checkout__header_block">
        <span>Product</span>
      </div>
      <div className="checkout__header_block">
        <span>Description</span>
      </div>
      <div className="checkout__header_block">
        <span>Quantity</span>
      </div>
      <div className="checkout__header_block">
        <span>Price</span>
      </div>
      <div className="checkout__header_block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      )
    }
    <div className="checkout__total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
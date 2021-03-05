import React from 'react'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import {  selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'

import './Cart.styles.scss'

const Cart = ({ cartItems, history, dispatch }) => (
    <div className='dropdown'>
      <div className="dropdown__cart_items">
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))
        :(
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</Button>
    </div>
  )

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));

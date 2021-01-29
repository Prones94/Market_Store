import React from 'react'
import './CartIcon.styles.scss'

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart' onClick={toggleCartHidden}>
      <ShoppingIcon className="cart__shopping_icon" />
      <span className="cart__item_count">0</span>
    </div>
  );

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)

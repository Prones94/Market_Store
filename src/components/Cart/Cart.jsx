import React from 'react'
import Button from '../Button/Button'

import './Cart.styles.scss'

const Cart = () => (
    <div className='dropdown'>
      <div className="dropdown__cart_items">
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )

export default Cart

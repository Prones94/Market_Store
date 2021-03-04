import React from 'react'
import Button from '../Button/Button';

import './Items.styles.scss'

const Items = ({ id, name, price, imageUrl }) => (
    <div className="items">
      <div className="items__image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="items__footer">
        <span className="items__name">{ name }</span>
        <span className="items__price">{ price }</span>
      </div>
      <Button inverted>Add to Cart</Button>

    </div>
  )

export default Items

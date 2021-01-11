import React from 'react'

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

    </div>
  )

export default Items

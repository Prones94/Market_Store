import React from 'react'
import './MenuItem.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}
  className={`${size} menu__item`}>
  <div className="menu__background_image" style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className="menu__content">
      <h1 className="menu__item_title">{title.toUpperCase()}</h1>
      <span className="menu__item_subtitle">SHOP NOW</span>
    </div>
  </div>
)


export default MenuItem

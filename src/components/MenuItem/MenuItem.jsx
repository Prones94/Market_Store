import React from 'react'
import { withRouter } from 'react-router-dom'

import './MenuItem.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}
  className={`${size} menu__item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
  <div className="menu__background_image" style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className="menu__content">
      <h1 className="menu__item_title">{title.toUpperCase()}</h1>
      <span className="menu__item_subtitle">SHOP NOW</span>
    </div>
  </div>
)


export default withRouter(MenuItem)

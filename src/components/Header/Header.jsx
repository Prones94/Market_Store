import React from 'react'
import { Link } from 'react-router-dom'

import market from '../../assets/market.png'

import './Header.styles.scss'

const Header = () => (
    <div className="header">
    <Link className="header__logo_container" to="/">
      <img src={market} alt="Logo" className="header__logo" />
    </Link>
    <div className="header__options">
      <Link className="header__option" to="/shop">SHOP</Link>
      <Link className="header__option" to="/shop">CONTACT</Link>
      <Link className="header__option" to="/signin">SIGN IN</Link>
    </div>
    </div>
  )

export default Header

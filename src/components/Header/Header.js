import React, { useState } from 'react'
import './Header.sass'

function Header() {
  const [menuStatus, setMenuStatus] = useState(false)
  return (
    <header className="header">
      <div className="header-container">
          <button className={`menu-mobile ${menuStatus ? 'close-menu' : ''}`} onClick={() => setMenuStatus(!menuStatus)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1 className="menu-brand"><a href="#">Juliana Bezerra | Identidade Verbal</a></h1>
          <nav className={`menu-items ${menuStatus ? 'active' : ''}`}>
            <div>
              <ul>
                <li><a href="#">Sobre</a></li>
              </ul>
            </div>
          </nav>
      </div>
    </header>
  )
}

export default Header

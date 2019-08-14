import React, { useState } from 'react'
import './Header.sass'

function Header({ data }) {
  const [menuStatus, setMenuStatus] = useState(false)
  return (
    <div className="header">
      <div className="header-container">
          <button className={`menu-mobile ${menuStatus ? 'close-menu' : ''}`} onClick={() => setMenuStatus(!menuStatus)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1 className="menu-brand"><a href="/">Juliana Bezerra | Identidade Verbal</a></h1>
          <nav className={`menu-items ${menuStatus ? 'active' : ''}`}>
            <div>
              <ul>
                {
                  data.map((item, index) => <li key={index}><a href={item.primary.link._meta.uid}>{item.primary.label[0].text}</a></li>)
                }
              </ul>
            </div>
          </nav>
      </div>
    </div>
  )
}

export default Header

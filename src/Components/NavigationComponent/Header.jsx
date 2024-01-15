import React from 'react'
import imgs from '../image/logoshop.png'

function Header() {
  return (
      <header>
          <h1><a href="/#">
              <img src={imgs} alt="logo" />
          </a>
          </h1>
          <div className="user">
              <p>abc@gmail.com</p>
          </div>
      </header>
  )
}

export default Header
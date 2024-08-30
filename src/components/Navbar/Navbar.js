import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">

        <div className="navbar-links">
          <a className="link" href="/">Home</a>
          <a className="link" href="/about">About</a>
          <a className="link" href="/contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar
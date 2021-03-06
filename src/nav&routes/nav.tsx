import React from 'react'
import '../styles.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#/">
        Welcome User
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href="#/">
            Sign out
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar

import React, { Component } from 'react'
import '../styles.css'
import { Link } from 'react-router-dom'

export class SideNav extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/users'} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/register'} className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/login'} className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

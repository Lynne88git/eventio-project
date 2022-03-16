import React, { Component } from 'react'
import Navbar from '../navigation_&_routes/nav'
import { SideNav } from '../navigation_&_routes/sidenav'

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container-fluid">
          <div className="row">
            <SideNav />

            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
            >
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom'

export class Nevbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Bikram</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link"  to="/home" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/sport" >sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/business" >business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/entertainment" >entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/health" >health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/science" >science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/technology" >technology</NavLink>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Nevbar

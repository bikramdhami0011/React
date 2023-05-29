import React from 'react'

import { Link } from 'react-router-dom'
export default function Navbar(props) {
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-2 mx-3`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggles} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault " >{props.mode==='light'?'Enable DarkMode':'Enable LightMode'}</label>
        </div>
      </nav>
    </div>
  )
}

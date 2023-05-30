import React from 'react'

import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid" id="navbarNavDropdown">
          <a className="navbar-brand" href="/" id="navbarNavDropdown">BLS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" id="navbarNavDropdown">
                <NavLink className="nav-link active" to="/" id="navbarNavDropdown">Home</NavLink>
              </li>
              <li className="nav-item" id="navbarNavDropdown">
                <NavLink className="nav-link" to="/about" id="navbarNavDropdown">About Us</NavLink>
              </li>
              <li className="nav-item" id="navbarNavDropdown">
                <NavLink className="nav-link" to="/Blog" id="navbarNavDropdown">blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-display">
          <button className="bg-primary rounded my-2 " style={{height:'30px'
        , width:'40px'}} onClick={()=>{props.toggles('primary')}} ></button>
        </div>
        <div className="flex-display">
          <button className="bg-success rounded my-2 " style={{height:'30px'
        , width:'40px'}} onClick={()=>{props.toggles('success')}} ></button>
        </div>
        <div className="flex-display">
          <button className="bg-warning rounded my-2 " style={{height:'30px'
        , width:'40px'}} onClick={()=>{props.toggles('warning')}} ></button>
        </div>
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-2 mx-3`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggles('primary')}} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault " >{props.mode==='light'?'Enable DarkMode':'Enable LightMode'}</label>
        </div> */}
        
      </nav>
    </div>
  )
}

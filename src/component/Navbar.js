import React from 'react'

import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid"   >
          <a className="navbar-brand" href="/"   >BLS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"  >
            <ul className="navbar-nav">
              <li className="nav-item"   >
                <NavLink className="nav-link  " to="/"   >Home</NavLink>
              </li>
              <li className="nav-item"   >
                <NavLink className="nav-link" to="/about"   >About Us</NavLink>
              </li>
              <li className="nav-item"   >
                <NavLink className="nav-link" to="/Blog"   >blog</NavLink>
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

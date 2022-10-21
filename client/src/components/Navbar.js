import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="myzon" >MYZON</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to ="/"  className="nav-link " aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ="/register" className="nav-link" >Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" >Login</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
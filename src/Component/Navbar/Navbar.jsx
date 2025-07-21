import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container">
          <NavLink className="nav-link text-uppercase fs-2" aria-current="page" to="">Start Framework</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">

              <li className="nav-item">
                <NavLink className="nav-link text-uppercase fw-bold mt-3 mt-md-0 px-2" to="About">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link  text-uppercase fw-bold mt-3 mt-md-0 px-3" to="Portfolio">Portfolio</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-uppercase fw-bold mt-3 mt-md-0 px-2" to="Contact">Contact</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

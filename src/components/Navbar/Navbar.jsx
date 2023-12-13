import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-color py-1" style={{ height: "60px", background: "black", color: "white" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/Products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/NewArrival"
                >
                  NewArrival
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/Login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar
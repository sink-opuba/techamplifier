import React from "react"
import { Link } from "gatsby"
import "./SideBar.scss"

const SideBar = ({ show, click }) => {
  let sideBarClasses = "sidebar"
  if (show) {
    sideBarClasses = "sidebar open"
  }
  return (
    <>
      <nav className={sideBarClasses}>
        <div className="sidebar__header">
          <div className="sidebar__icon" onClick={click}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather cancel__icon"
            >
              <line x1="22" y1="10" x2="10" y2="22"></line>
              <line x1="10" y1="10" x2="22" y2="22"></line>
            </svg>
          </div>
        </div>

        <div className="sidebar__body">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Startups</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="#contact">Contact Us </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default SideBar

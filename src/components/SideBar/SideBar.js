import React from "react"
import "./SideBar.scss"

const SideBar = ({ show, handleClick }) => {
  let sideBarClasses = "sidebar"
  if (show) {
    sideBarClasses = "sidebar open"
  }
  return (
    <>
      <nav className={sideBarClasses}>
        <div className="sidebar__header">
          <button className="sidebar__icon" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather cancel__icon"
            >
              <line x1="22" y1="10" x2="10" y2="22"></line>
              <line x1="10" y1="10" x2="22" y2="22"></line>
            </svg>
          </button>
        </div>

        <div className="sidebar__body">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#startups">Startups</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#contact">Contact Us </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default SideBar

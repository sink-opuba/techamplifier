import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"
import HeaderStyle from "./header.module.scss"
import DrawToggleButton from "./DrawToggleButton/DrawToggleButton"
import SideBar from "./SideBar/SideBar"
import logo from "../images/techamplifier-text-white.png"

const Header = ({ siteTitle }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const toggleSideBarClick = () => setSideBarOpen(!sideBarOpen)

  return (
    <>
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.headerTextBox}>
          <Link to="/">
            <img src={logo} alt="techamplifier logo" />
          </Link>
        </div>

        <div className={HeaderStyle.navToggle}>
          <DrawToggleButton click={toggleSideBarClick} />
        </div>
      </header>
      <SideBar show={sideBarOpen} handleClick={toggleSideBarClick} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

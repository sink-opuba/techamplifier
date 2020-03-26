import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"
import HeaderStyle from "./header.module.scss"
import DrawToggleButton from "./DrawToggleButton/DrawToggleButton"
import SideBar from "./SideBar/SideBar"

const Header = ({ siteTitle }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const toggleSideBarClick = () => setSideBarOpen(!sideBarOpen)
  return (
    <>
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.headerTextBox}>
          <h1 className={HeaderStyle.headerText}>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>

        <div className={HeaderStyle.navToggle}>
          <DrawToggleButton click={toggleSideBarClick} />
        </div>
      </header>
      <SideBar show={sideBarOpen} click={toggleSideBarClick} />
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

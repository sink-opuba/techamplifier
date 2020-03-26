import PropTypes from "prop-types"
import React, { useState } from "react"
import HeaderStyle from "./header.module.scss"
import DrawToggleButton from "./DrawToggleButton/DrawToggleButton"
import SideBar from "./SideBar/SideBar"
import BackDrop from "./BackDrop/BackDrop"

const Header = ({ siteTitle }) => {
  const [state, setState] = useState({
    sideBarOpen: false,
  })

  const toggleSideBarClick = () => {
    setState({ sideBarOpen: !state.sideBarOpen })
  }

  const backDropClick = () => {
    setState({ sideBarOpen: false })
  }

  const { sideBarOpen } = state

  return (
    <>
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.headerTextBox}>
          <h1 className={HeaderStyle.headerText}>
            <Link to="/">{siteTitle} &#x1F514;</Link>
          </h1>
        </div>

        <div className={HeaderStyle.navToggle}>
          <DrawToggleButton click={toggleSideBarClick} />
        </div>
      </header>
      <SideBar show={sideBarOpen} click={backDropClick} />
      {sideBarOpen && (
        <>
          {" "}
          <BackDrop click={backDropClick} />{" "}
        </>
      )}
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

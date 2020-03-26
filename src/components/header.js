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
      <header>
        <div>
          <h1>{siteTitle}</h1>
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyle from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={HeaderStyle.header}>
    <div className={HeaderStyle.headerTextBox}>
      <h1 className={HeaderStyle.headerText}>
        <Link to="/">
          {siteTitle} &#x1F514;
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

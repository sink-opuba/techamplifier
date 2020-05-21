import React from "react"
import { Link } from "gatsby"
const style = {
  color: "#000000",
  textDecoration: "underline",
}
const MenuList = () => (
  <>
    <li>
      <Link to="/" activeStyle={style}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/#events" activeStyle={style}>
        Events
      </Link>
    </li>
    <li>
      <Link to="/#startups" activeStyle={style}>
        Startups
      </Link>
    </li>
    <li>
      <Link to="/about" activeStyle={style}>
        About Us
      </Link>
    </li>
  </>
)

export default MenuList

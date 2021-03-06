import React, { useState } from "react"
import PropTypes from "prop-types"
import { navigate, useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import MenuList from "./MenuList"
import LayoutStyle from "./layout.module.scss"
import logo from "../images/techamplifier-logo-blue.png"
import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <>
      <div className={LayoutStyle.techamplifierLayout} id="top">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={LayoutStyle.container}>
          <aside className={LayoutStyle.asideMenu}>
            <ul className={LayoutStyle.menuList}>
              <MenuList />
            </ul>
          </aside>
          <main className={LayoutStyle.main}>{children}</main>
        </div>
        <footer className={LayoutStyle.footer}>
          <div id="contact" className={LayoutStyle.contact}>
            <div className={LayoutStyle.contactSocials}>
              <h3>Connect With Us</h3>
              <ul className={LayoutStyle.contactSocialsList}>
                <li>
                  <a href="#facebook">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://twitter.com/techamplifier">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#linkedin">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="#youtube">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/techamplifier/">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
              <p>
                Call: <a href="tel:+2349016344696">+2349016344696</a>
              </p>
              <p>
                <a href="mailto:info@techamplifier.africa">Send Us a mail</a>
              </p>
            </div>
            <div className={LayoutStyle.contactFormContainer}>
              <h3>Stay Updated</h3>
              <p>Stay updated on our activities, news, events, and more.</p>
              <form
                className={LayoutStyle.contactForm}
                name="NewsLetter"
                data-netlify="true"
                method="post"
                action="/thanks/"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="NewsLetter" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <div>
                  <input
                    id="subscribe"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    title="The domain portion of the email address is invalid (the portion after the @)."
                    pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button type="submit">
                    Subscribe{" "}
                    <span role="img" aria-label="Ok emoji">
                      👌
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={LayoutStyle.copyright}>
            {/* Logo here later */}
            <div className={LayoutStyle.logo}>
              <img src={logo} alt="techamplifier logo" />
            </div>
            <span className={LayoutStyle.backToTop}>
              <a href="#top"> &#8593;</a>
            </span>
            <p>
              {" "}
              {new Date().getFullYear()} © Techamplifier Africa Ltd. All rights
              reserved. Powered by{" "}
              <a href="https://warriinnovationhub.com">Waffiihub</a>.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

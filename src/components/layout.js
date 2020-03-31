import React, { useState } from "react"
import PropTypes from "prop-types"
import {navigate, useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import LayoutStyle from "./layout.module.scss"

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
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#startups">Startups</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
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
                  <a href="#facebook">FB</a>
                </li>
                <li>
                  {" "}
                  <a href="#twitter">TW</a>
                </li>
                <li>
                  <a href="#linkedin">LN</a>
                </li>
                <li>
                  <a href="#youtube">YT</a>
                </li>
                <li>
                  <a href="#instagram">IG</a>
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
              <p>Stay updated on our activities, news, events and more.</p>
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
                    name="email"
                    type="email"
                    placeholder="Your email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div className={LayoutStyle.copyright}>
            {/* Logo here later */}
            <p>
              <span role="img" aria-label="techamplifier Logo">
                &#x1F514;
              </span>
            </p>
            <span className={LayoutStyle.backToTop}>
              <a href="#top"> &#8593;</a>
            </span>
            <p>
              {" "}
              copyright © Techamplifier Inc. {new Date().getFullYear()}. All
              rights reserved. Powered by{" "}
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

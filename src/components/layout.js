import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import LayoutStyle from "./layout.module.scss"

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

  return (
    <>
      <div className={LayoutStyle.techamplifierLayout}>
      <Header siteTitle={data.site.siteMetadata.title} />
        <div className={LayoutStyle.container}>
        <aside className={LayoutStyle.asideMenu}>
            <ul className={LayoutStyle.menuList}>
              <li><a href="/">Home</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#startups">Startups</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </aside>
        <main className={LayoutStyle.main}>
          {children}
          </main>
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
              >
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email"
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

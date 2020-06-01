import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutStyle from "./about.module.scss"

const Aboutpage = () => (
  <Layout>
    <SEO title="About" />
    <div className={AboutStyle.container}>
      <div className={AboutStyle.header}>
        <h1>About us</h1>
        <p>
          Tech Amplifier Africa is a media technology company that amplifies the
          innovations and technologies coming out of emerging ecosystems in
          Africa.
        </p>
        <p>
          We are doing this by sharing their story and hosting various virtual
          and in-person events.
        </p>
      </div>
      <div className={AboutStyle.contact}>
        <h3>Contact Us</h3>
        <div>
          <h4>Got stories and insight you will love us to feature?</h4>
          <ul>
            <li>
              Email Us at{" "}
              <a href="mailto:editor@techamplifier.africa">
                editor@techamplifier.africa
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Want your startup featured?</h4>
          <ul>
            <li>
              Email Us at{" "}
              <a href="mailto:startups@techamplifier.africa">
                startups@techamplifier.africa
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Want to do business with us or advertise on TechAmplifier?</h4>
          <ul>
            <li>
              Send us an email at{" "}
              <a href="mailto:ads@techamplifier.africa">
                ads@techamplifier.africa
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Want to sponsor or exhibit at our next event?</h4>
          <ul>
            <li>
              Do well to email{" "}
              <a href="mailto:events@techamplifier.africa">
                events@techamplifier.africa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Aboutpage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutStyle from "./about.module.scss"

const Aboutpage = () => (
  <Layout>
    <SEO title="About" />
    <div className={AboutStyle.container}>
      <div>
        <h1>Tech Amplifier Africa</h1>
        <h4>
          Tech Amplifier Africa is a media technology company that amplifies the
          innovations and technology coming out of emerging ecosystems in
          Africa.
        </h4>
        <h4>
          We are doing this by sharing their story and hosting various virtual
          and in-person events.
        </h4>
      </div>
      <div>
        <h3>Contact Us</h3>
        <div>
          <h4>Got stories and insight you will love us to feature?</h4>
          <p>
            Email Us at{" "}
            <a href="mailto:editor@techamplifier.africa">
              editor@techamplifier.africa
            </a>
          </p>
        </div>

        <div>
          <h4>Want your startup featured?</h4>
          <p>
            Email Us at{" "}
            <a href="mailto:startups@techamplifier.africa">
              startups@techamplifier.africa
            </a>
          </p>
        </div>

        <div>
          <h4>Want to do business with us or advertise on TechAmplifier?</h4>
          <p>
            Send us an email at{" "}
            <a href="mailto:ads@techamplifier.africa">
              ads@techamplifier.africa
            </a>
          </p>
        </div>

        <div>
          <h4>Want to sponsor or exhibit at our next event?</h4>
          <p>
            Do well to email{" "}
            <a href="mailto:events@techamplifier.africa">
              events@techamplifier.africa
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Aboutpage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Aboutpage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About TechAmplifier</h1>
    <p>Welcome to TechAmplifier platform</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Aboutpage

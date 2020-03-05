import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyle from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={IndexStyle.container}>
      
    </div>
  </Layout>
)

export default IndexPage

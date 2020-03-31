import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
const ThanksPage = () => {
  return (
    <Layout>
      <SEO title="Thanks" />
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <h1>
          Thank You!
          <span role="img" aria-label="thumbsup emoji">
            👍
          </span>
        </h1>
        <p>You'll hear from us in the days, weeks, and months ahead.</p>
      </div>
    </Layout>
  )
}
export default ThanksPage

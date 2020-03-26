import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={NotFound.container}>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/"> &larr; Back Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage

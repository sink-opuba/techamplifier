import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyle from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "warri.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid 
          }
        }
      }
    }
  `)

  return (
  <Layout>
    <SEO title="Home" />
    <div className={IndexStyle.container}>
      <article className={IndexStyle.mainArticle}>
        <h1 className={IndexStyle.mainArticleHeading}>The main Article heading will be here the main Article heading will be here article</h1>
        <h3>Ovie Kenny</h3>
          <Img alt="dummy text" fluid={data.placeholderImage.childImageSharp.fluid} />
      </article>
      <div className={IndexStyle.articlesContainer}>
        <h3>The Latest</h3>

        <article className={IndexStyle.article}>
          <div>
          <Img alt="article text" fluid={data.placeholderImage.childImageSharp.fluid} />
          <p>March 12th, 2020</p>
          </div>
          <h3>
            The article header will come in here
          </h3>
          <p>excerpt from the mainn article will be here shortly...<span><button>Read More</button></span></p>
        </article>
      </div>
    </div>
  </Layout>
  )
}
export default IndexPage

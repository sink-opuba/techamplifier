import React from "react"
import { useStaticQuery, graphql} from "gatsby"
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
          <header className={IndexStyle.articleHeader}>
            <h3 className={IndexStyle.articleHeading}>
              A really nice story from the Africa Tech ecosystem we lorem
            </h3>
            <h4 className={IndexStyle.articleAuthor}>Aniyekebi Ebiye</h4>
             <p className={IndexStyle.articleDate}>March 12, 2020</p>
          </header>
       
          <p className={IndexStyle.articleParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam...</p>
          <div className={IndexStyle.articleImageBox}>
            <Img alt="placeholder img" fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </article>
        {/* <Link to="#article"> */}
        <article className={IndexStyle.article}>
          <header className={IndexStyle.articleHeader}>
            <h3 className={IndexStyle.articleHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </h3>
            <h4 className={IndexStyle.articleAuthor}>Aniyekebi Ebiye</h4>
             <p className={IndexStyle.articleDate}>March 12, 2020</p>
          </header>
       
          <p className={IndexStyle.articleParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam...</p>
          <div className={IndexStyle.articleImageBox}>
            <Img alt="placeholder img" fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </article>
        {/* </Link> */}
        
      <div className={IndexStyle.loadMoreBox}>
        <button>Load More...</button>
      </div>
      </div>
    </div>
  </Layout>
  )
}
export default IndexPage

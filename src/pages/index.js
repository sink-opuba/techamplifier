import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyle from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query postQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(fromNow: true)
            path
            author
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imagedescription
            tag
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`)
const edges = data.allMarkdownRemark.edges
const posts = [...edges]
const mainPost = posts.shift()


  return (
  <Layout>
    <SEO title="Home" />
    <div className={IndexStyle.container}>
      <Link to={`/${mainPost.node.frontmatter.path}`}>
        <article className={IndexStyle.mainArticle}>
        <h1 className={IndexStyle.mainArticleHeading}>{mainPost.node.frontmatter.title}</h1>
        <h3>{mainPost.node.frontmatter.author}</h3>
          <Img alt={mainPost.node.frontmatter.imagedescription} fluid={mainPost.node.frontmatter.featuredimage.childImageSharp.fluid} />
        </article>
      </Link>
      <div className={IndexStyle.articlesContainer}>
        <h3>The Latest</h3>
        { posts.map((post, index) => {
            return (
              <Link to={`/${post.node.frontmatter.path}`}>
                <article key={index} className={IndexStyle.article}>
                <header className={IndexStyle.articleHeader}>
                <h3 className={IndexStyle.articleHeading}>
                  {post.node.frontmatter.title}
                </h3>
            <h4 className={IndexStyle.articleAuthor}>{post.node.frontmatter.author}</h4>
            <p className={IndexStyle.articleDate}>{post.node.frontmatter.date}</p>
              </header>
           
            <p className={IndexStyle.articleParagraph}>{post.node.excerpt}</p>
              <div className={IndexStyle.articleImageBox}>
                <Img alt={post.node.frontmatter.imagedescription} fluid={post.node.frontmatter.featuredimage.childImageSharp.fluid} />
              </div>
            </article>            
                </Link>
            )
          })
        }

      <div className={IndexStyle.loadMoreBox}>
        <button>Load More...</button>
      </div>
      </div>
    </div>
  </Layout>
  )
}
export default IndexPage

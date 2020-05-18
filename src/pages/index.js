import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexStyle from "./index.module.scss"
import { chunkArray } from "../helpers/chunkArray"
import PostCard from "../components/postCard"

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
              authorimage {
                childImageSharp {
                  fixed(width: 30, height: 30) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
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
  const [state, setState] = useState({
    page: 1,
    chunksPerPage: 1,
    allLoaded: false,
  })

  const edges = data.allMarkdownRemark.edges
  const posts = [...edges]
  const mainPost = posts.shift()

  const { allLoaded, page, chunksPerPage } = state

  // Implements Load more feature
  const renderPosts = () => {
    let { page, chunksPerPage } = state
    let chunks = chunkArray(Array.from(posts), 2)
    let paginated = Array.from(chunks).splice(0, page * chunksPerPage)
    return paginated.map((group, index) => (
      <PostCard posts={group} key={index} />
    ))
  }

  const onLoad = () => {
    let allLoaded = (page + 1) * chunksPerPage >= posts.length / 2
    setState(prevState => ({
      ...prevState,
      page: prevState.page + 1,
      allLoaded,
    }))
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className={IndexStyle.container}>
        {/* <Link to={`/${mainPost.node.frontmatter.path}`}> */}
        <article className={IndexStyle.mainArticle}>
          <h1 className={IndexStyle.mainArticleHeading}>
            {mainPost.node.frontmatter.title}
          </h1>
          <h3 className={IndexStyle.mainArticleAuthor}>
            <span>
              <Img
                alt={mainPost.node.frontmatter.author + "img"}
                fixed={
                  mainPost.node.frontmatter.authorimage.childImageSharp.fixed
                }
              />
            </span>
            {mainPost.node.frontmatter.author}
          </h3>
          <Img
            alt={mainPost.node.frontmatter.imagedescription}
            fluid={
              mainPost.node.frontmatter.featuredimage.childImageSharp.fluid
            }
          />
          <p className={IndexStyle.mainArticleExcerpt}>
            {mainPost.node.excerpt}
            <a href={`/${mainPost.node.frontmatter.path}`}>
              Read More <span>&rarr;</span>
            </a>
          </p>
        </article>
        {/* </Link> */}
        <div className={IndexStyle.articlesContainer}>
          <h3>The Latest</h3>

          {renderPosts()}
          {posts.length >= chunksPerPage * 2 + 1 && (
            <div className={IndexStyle.loadMoreBox}>
              <button type="button" onClick={onLoad} disabled={allLoaded}>
                {allLoaded ? "All loaded" : "load More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage

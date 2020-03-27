import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import IndexStyle from "../pages/index.module.scss"

const PostCard = ({ posts }) => {
  return posts.map((post, index) => {
    return (
      <Link key={index} to={`/${post.node.frontmatter.path}`}>
        <article className={IndexStyle.article}>
          <header className={IndexStyle.articleHeader}>
            <h3 className={IndexStyle.articleHeading}>
              {post.node.frontmatter.title}
            </h3>
            <h4 className={IndexStyle.articleAuthor}>
              {post.node.frontmatter.author}
            </h4>
            <p className={IndexStyle.articleDate}>
              {post.node.frontmatter.date}
            </p>
          </header>

          <p className={IndexStyle.articleParagraph}>{post.node.excerpt}</p>
          <div className={IndexStyle.articleImageBox}>
            <Img
              alt={post.node.frontmatter.imagedescription}
              fluid={post.node.frontmatter.featuredimage.childImageSharp.fluid}
            />
          </div>
        </article>
      </Link>
    )
  })
}

export default PostCard

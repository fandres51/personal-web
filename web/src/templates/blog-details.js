import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/blog-details.module.css"

const BlogDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  const image =  getImage(data.markdownRemark.frontmatter.featuredImg)

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
            <GatsbyImage image={image} alt="featured image"/>
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default BlogDetails

export const query = graphql`
  query BlogInfo($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            gatsbyImageData (
                placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

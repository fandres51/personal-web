import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data)
  const blogs = data.blogs.nodes
  const contact = data.contact.siteMetadata.email

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites</h3>
        <div className={styles.projects}>
          {blogs.map(blog => (
            <Link to={"/projects/" + blog.frontmatter.slug} key={blog.id}>
              <div>
                <GatsbyImage image={getImage(blog.frontmatter.thumb)} alt={data.blogs.title} />
                <h3>{blog.frontmatter.title}</h3>
                <p>{blog.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Blogs {
    blogs: allMarkdownRemark(sort: { fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData (
                placeholder: BLURRED
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        email
      }
    }
  }
`

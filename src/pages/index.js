import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Sky Fire Chef"/>
      <div className="m-4">
        <div className="my-6 text-center">
          <h1 className="text-3xl">100 days of Gatsby</h1>
          <h6>(and other useless things).</h6>
        </div>
        <h4 className="text-2xl">{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="pb-6 px-6 mb-4 shadow-lg" key={node.id}>
            <Link to={node.fields.slug}>
              <h3 className="text-4xl">
                {node.frontmatter.title}{" "}
                <span>— {node.frontmatter.date}</span>
              </h3>
              <div className="list-inside">{node.excerpt}</div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC } ) 
      {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Sky Fire Chef"/>
      <Box m={6}>
        <Box textAlign="center">
          <Heading>100 days of Gatsby</Heading>
          <h6>(and other useless things).</h6>
        </Box>
        <Divider />
        <Heading fontSize="xl">{data.allMarkdownRemark.totalCount} Posts</Heading>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Box m={4} p={6} boxShadow="md" key={node.id}>
            <Link to={node.fields.slug}>
              <Heading >
                {node.frontmatter.title}{" "}
                <span>— {node.frontmatter.date}</span>
              </Heading>
              <Text mt={4}>{node.excerpt}</Text>
            </Link>
          </Box>
        ))}
      </Box>
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
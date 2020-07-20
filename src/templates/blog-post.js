import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading } from "@chakra-ui/core"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <Box mx={6}>
                <Heading my={4} textAlign="center">{post.frontmatter.title}</Heading>
                <Box lineHeight="1.6" mb="2.2" dangerouslySetInnerHTML={{ __html: post.html }} />
            </Box>            
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
            excerpt
        }
    }
`
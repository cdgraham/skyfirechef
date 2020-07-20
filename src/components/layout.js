import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Box, Flex, Heading } from "@chakra-ui/core"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Box maxWidth='960px' my={4} mx="auto" align="center">
      <Flex bg="teal.600" color="white" rounded="lg" p={4} align="center" justify="space-between">
        <Flex >
          <Link to={`/`}>
            <Heading className="">{data.site.siteMetadata.title}</Heading>
          </Link>
        </Flex>
        <Flex fontSize="xl">
          <Link to={`/about/`}>
            About
          </Link>
        </Flex>
      </Flex>
      {children}
    </Box>
  )
}
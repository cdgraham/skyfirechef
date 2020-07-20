import React from "react"
import { graphql } from "gatsby"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <Box m={6}>
        <Heading textAlign="center" m={4}>About { data.site.siteMetadata.title }</Heading>
        <Text textAlign="center" m={4}>
          This is my site for learning and playing with Gatsby and React.
        </Text>
        <Heading fontSize="2xl">Hi, I'm Christopher</Heading>
            <p>I'm an undiscovered developer, maker, artist, tinkerer and multipotentialite.</p>
            <Flex mt={4}>
                <Image size="md"
                    src="https://www.cdgraham.com/static/7a1d441b7a1f4901f920875282c15ad0/89f4f/profile.jpg" 
                    alt="Christopher Graham" 
                />
                <Box pl={6}>
                    <Text pb={4}>Multipotentialite who loves learning, solving problems, warehouse racking, tinkering, and crab legs. With a diverse background, I am looking for my next adventure in technology. My background includes operating nuclear reactors, software development, database and systems administrator, selling real estate, making YouTube videos, WordPress development, travelling to remote warehouses and leading teams of developers. Oh and eating crème brûlée in France.</Text>
                    <Text>I have worked in a variety of industries, like warehouse management, real estate, gambling, financial; and various types of organizations, the Military, Government, start-ups and large firms. Looking for work in technology/software development where I can get my hands dirty, use my current skills and learn new ones.</Text>
                </Box>
            </Flex>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
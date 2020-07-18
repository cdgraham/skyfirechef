import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About { data.site.siteMetadata.title }</h1>
      <p>
        This is my site for learning and playing with Gatsby and React.
      </p>
      <h2>Hi, I'm Christopher</h2>
            <p>I'm an undiscovered developer, maker, artist, tinkerer and multipotentialite.</p>
            <div>
                <img 
                    src="https://www.cdgraham.com/static/7a1d441b7a1f4901f920875282c15ad0/89f4f/profile.jpg" 
                    alt="Christopher Graham" 
                />
                <div>
                    <p>Multipotentialite who loves learning, solving problems, warehouse racking, tinkering, and crab legs. With a diverse background, I am looking for my next adventure in technology. My background includes operating nuclear reactors, software development, database and systems administrator, selling real estate, making YouTube videos, WordPress development, travelling to remote warehouses and leading teams of developers. Oh and eating crème brûlée in France.</p>
                    <p>I have worked in a variety of industries, like warehouse management, real estate, gambling, financial; and various types of organizations, the Military, Government, start-ups and large firms. Looking for work in technology/software development where I can get my hands dirty, use my current skills and learn new ones.</p>
                </div>
            </div>
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
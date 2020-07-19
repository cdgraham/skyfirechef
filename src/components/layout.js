import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

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
    <div className="container px-8 py-12 max-w-lg mx-auto sm:max-w-xl lg:max-w-5xl">
      <header className="flex items-center justify-between flex-wrap text-xl bg-teal-700 px-6 py-4 rounded-lg">
        <div>
          <Link to={`/`}>
            <h3 className="text-white">{data.site.siteMetadata.title}</h3>
          </Link>
        </div>
        <div className="text-white">
          <Link to={`/about/`}>
            About
          </Link>
        </div>
      </header>
      {children}
    </div>
  )
}
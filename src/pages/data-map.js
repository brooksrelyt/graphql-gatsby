import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    {data.umdHub.articles.data.map((article, i) => (
      <div key={i}>
        <h2>
          {article.title}
        </h2>
        <h2>
          {article.subtitle}
        </h2>
      </div>
    ))}
  </div>
)

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    umdHub {
      articles {
        data {
          id
          title
          subtitle
          body
        }
      }
    }
  }
`

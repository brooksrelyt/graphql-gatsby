import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
          edges {
            node {
              id
              authors {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {console.log(data)}
        {console.log(data.authors)}
        <p>{data.id} test</p>
      </header>
    )}
  />
)
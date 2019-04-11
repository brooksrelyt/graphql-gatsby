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
              authorship_date {
                unformatted
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {console.log(data.id)}
        {console.log(data.id)}
        <p>{data.id} test</p>
      </header>
    )}
  />
)
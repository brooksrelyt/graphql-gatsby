import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query articleData {
        dataJson {
          data {
            articles {
              data {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <p>{data.dataJson.data.articles.data.title}</p>
        test
      </header>
    )}
  />
)
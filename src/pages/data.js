// import React, { Component } from 'react'
// import { graphql } from 'gatsby'

// // This query is executed at build time by Gatsby.
// export const GatsbyQuery = graphql`
//   {
//     umdHub {
//       articles {
//         data {
//           title
//         }
//       }
//     }
//   }
// `

// class ClientFetchingExample extends Component {
//   render() {
//     const {
//       umdHub: { articles },
//     } = this.props.data

//     console.log(articles.data[0].title)
//     return (
//       <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
//         <h1>{articles.data[0].title} - Is the title of the article</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//       </div>
//     )
//   }
// }

// export default ClientFetchingExample
// /* eslint-disable */
// import React from 'react'
// import { graphql } from 'gatsby'
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

// import Layout from "../components/layout"


// export default ({ data }) => (
//   <div>
//     <div className="container spaces">
//       <div className="row">
//         <div className="col">
//           <h2>A list of Articles generated using graphql (no links yet)</h2>
//         </div>
//       </div>
//       <div className="row med-spaces">
//       {data.umdHub.articles.data.slice(0, 10).map((article, i) => (
//         <div className="col-4">
//           <Card key={i}>
//             {article.hero_image.map((hero, i) => (
//               <div>
//                 <CardImg top width="100%" src={hero.url_1200_630} alt="Card image cap" />
//               </div>
//             ))}
//             <CardBody>
//               <CardTitle>{article.title}</CardTitle>
//               <CardSubtitle>{article.subtitle}</CardSubtitle>
//               <hr />
//               <CardText>{article.summary}</CardText>
//             </CardBody>
//           </Card>
//         </div>
//       ))}
//       </div>
//     </div>
//   </div>
// )

// // This query is executed at build time by Gatsby.
// export const GatsbyQuery = graphql`
//   {
//     umdHub {
//       articles {
//         data {
//           id
//           title
//           subtitle
//           body
//           summary
//           hero_image {
//             url_1200_630
//           }
//         }
//       }
//     }
//   }
// `

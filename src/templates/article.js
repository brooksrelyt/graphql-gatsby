/* eslint-disable */
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

// eslint-disable-next-line
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data.umdHub.article)
  return (
    <div>
      <Header />
      
      <div className="container spaces article">
        <div className="row">
          <section className="col-md-9">
              <div className="tag-list">
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="/">Highlighted</a></li>
                  <li className="list-inline-item"><a href="/">Innovation</a></li>
                  <li className="list-inline-item"><a href="/">Web Only</a></li>
                  <li className="list-inline-item">February 28, 2019</li>
                </ul>
              </div>
              <h1>hello</h1>

              <div className="row article-content">
                <div className="col-md-10 offset-md-1">
                  <h2 className="subheader">Subtitle</h2>
                  <div className="author"> 
                    <p>By <a href="/">Jane Doe</a> | Photos by <a href="/">ISTOCK</a></p>
                    <hr />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
          </section>
          <aside className="col-md-3">
            <div>
              <ListGroup flush>
                <ListGroupItem disabled tag="a" href="#">Recent Posts</ListGroupItem>
                <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                <span>February 27, 2019</span>
              </ListGroup>
            </div>

            <div>
              <ListGroup flush>
                <ListGroupItem disabled tag="a" href="#">Web Only</ListGroupItem>
                <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                <span>February 27, 2019</span>
              </ListGroup>
            </div>

            <div>
              <ListGroup flush>
                <ListGroupItem disabled tag="a" href="#">Popular Posts</ListGroupItem>
                <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                <span>February 27, 2019</span>
                <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                <span>February 27, 2019</span>
              </ListGroup>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// This query is executed at build time by Gatsby.
// export const query = graphql`
//   query {
//     umdHub {
//        article(id: "73221c6f-b7aa-4cfd-9402-fa0ccf5e0579") {
//         data {
//           id
//           title
//           subtitle
//           body
//           summary
//           hero_image {
//             url_1200_630
//           }
//           authorship_date {
//             formatted_short
//             unix
//             unix_int
//             formatted_long
//             formatted_short
//             time
//           }
//           slug
//         }
//       }
//     }
//   }
// `


export const query = graphql`
  query($id: String!) {
    umdHub {
       article(id: $id) {
        data {
          id
          title
          subtitle
          body
          summary
          hero_image {
            url_1200_630
          }
          authorship_date {
            formatted_short
            unix
            unix_int
            formatted_long
            formatted_short
            time
          }
          slug
        }
      }
    }
  }
`

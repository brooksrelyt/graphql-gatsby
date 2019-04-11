/* eslint-disable */
import React from 'react'
import { graphql } from 'gatsby'
import { ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import Layout from "../../components/layout"
import Header from "../../components/header"
import Footer from "../../components/footer"


export default ({ data }) => (
  <div>
    <Header />
    <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-12">
          <img className="img-fluid med-spaces" src="https://via.placeholder.com/1800x600" alt=" " />
        </div>
      </div>

      <div className="row">
        <section className="col-md-9">
          <div className="row">
            {data.umdHub.articles.data.slice(0, 10).map((article, i) => (
            <div className="col-md-6">
              <Card className="mb-5">
                <a href="/">
                {article.hero_image.map((hero, i) => (
                  <div>
                    <CardImg top width="100%" src={hero.url_1200_630} alt=" " />
                  </div>
                ))}
                  
                </a>
                <CardBody>
                  <a href="{article.url}">
                    <CardTitle>{article.title}</CardTitle>
                  </a>
                  <CardText>{article.summary}</CardText>
                  <CardText className="footer">
                    <span><a className="comment" href="/">0 Comment</a></span><span className="date">February 21, 2019</span>
                  </CardText>
                </CardBody>
              </Card>
            </div>
            ))}
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
    <div className="container spaces">
      <div className="row">
        <div className="col">
          <h2>A list of Articles generated using graphql (no links yet)</h2>
        </div>
      </div>
      <div className="row med-spaces">
      {data.umdHub.articles.data.slice(0, 10).map((article, i) => (
        <div className="col-4">
          <Card key={i}>
            {article.hero_image.map((hero, i) => (
              <div>
                <CardImg top width="100%" src={hero.url_1200_630} alt="Card image cap" />
              </div>
            ))}
            <CardBody>
              <CardTitle>{article.title}</CardTitle>
              <CardSubtitle>{article.subtitle}</CardSubtitle>
              <hr />
              <CardText>{article.summary}</CardText>
            </CardBody>
          </Card>
        </div>
      ))}
      </div>
    </div>
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
          summary
          hero_image {
            url_1200_630
          }
        }
      }
    }
  }
`

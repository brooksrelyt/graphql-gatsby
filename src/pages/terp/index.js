/* eslint-disable */
import React from 'react'
import { graphql, Link } from 'gatsby'
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
          {data.umdHub.articles.data.slice(6, 7).map((article) => (
          <div class="hero-wrapper half clearfix">
              {article.hero_image.map((hero, i) => (
                <div key={i}>
                  <div id="hero" class="header-banner" style={{backgroundImage: `url(${hero.url_1920_1080})`}}></div>
                </div>
              ))}
              <div class="container h-textarea">
                  <div class="row">
                      <div class="col-lg-12 columns h-textarea-inner">
                          <div class="textarea-intro">
                          <br />
                              <h2 class="white uppercase medium center"><strong>{ article.title }</strong></h2>
                              <h4 class="white subheader georgia center"><em>{ article.summary }</em></h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          ))}
        </div>
      </div>

      <div className="row">
        <section className="col-md-9">
          <div className="row">
            {data.umdHub.articles.data.slice(0, 6).map((article) => (
            <div className="col-md-6">
              <Card className="mb-5">
                <Link to={node.fields.slug} >
                {article.hero_image.map((hero, i) => (
                  <div key={i}>
                    <CardImg top width="100%" src={hero.url_1200_630} alt=" " />
                  </div>
                ))}
                  
                </Link>
                <CardBody>
                  <Link to="/article/{article.slug}">
                    <CardTitle>{article.title}</CardTitle>
                  </Link>
                  <CardText>{article.summary}</CardText>
                  <CardText className="footer">
                    <span><a className="comment" href="/">0 Comment</a></span><span className="date">{article.authorship_date.formatted_short}</span>
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
              <ListGroupItem className="title" disabled tag="a" href="#">Recent Posts</ListGroupItem>
              {data.umdHub.articles.data.slice(10,14).map((article, i) => (
                <div key={i}>
                  <ListGroupItem tag="a" href="#">{article.title}</ListGroupItem>
                  <span>{article.authorship_date.formatted_short}</span>
                </div>
              ))}
            </ListGroup>
          </div>

          <div>
            <ListGroup flush>
              <ListGroupItem className="title" disabled tag="a" href="#">Web Only</ListGroupItem>
              {data.umdHub.articles.data.slice(15,19).map((article, i) => (
                <div key={i}>
                  <ListGroupItem tag="a" href="#">{article.title}</ListGroupItem>
                  <span>{article.authorship_date.formatted_short}</span>
                </div>
              ))}
            </ListGroup>
          </div>

          <div>
            <ListGroup flush>
              <ListGroupItem className="title" disabled tag="a" href="#">Popular Posts</ListGroupItem>
              {data.umdHub.articles.data.slice(20,24).map((article, i) => (
                <div key={i}>
                  <ListGroupItem tag="a" href="#">{article.title}</ListGroupItem>
                  <span>{article.authorship_date.formatted_short}</span>
                </div>
              ))}
            </ListGroup>
          </div>
        </aside>
      </div>
    </div>

    <Footer />
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

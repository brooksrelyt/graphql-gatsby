import React from 'react'
import { graphql } from 'gatsby'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Markdown from 'react-markdown'

// eslint-disable-next-line
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Header />
      
      <div className="container spaces article">
        <div className="row">
          <section className="col-md-9">
              {data.umdHub.article.data.map((article) => (
                <div>
                  <div className="tag-list">
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="/">Highlighted</a></li>
                      <li className="list-inline-item"><a href="/">Innovation</a></li>
                      <li className="list-inline-item"><a href="/">Web Only</a></li>
                      <li className="list-inline-item"><strong>{article.authorship_date.formatted_short}</strong></li>
                    </ul>
                  </div>

                  <h1>{article.title}</h1>
                  
                  {article.hero_image.map((hero, i) => (
                    <div key={i}>
                      <img className="img-fluid no-pad-top med-spaces" src={hero.url_1200_630} alt=" " />
                    </div>
                  ))}

                  <div className="row article-content">
                    <div className="col-md-10 offset-md-1">
                      <h2 className="subheader">{article.subtitle}</h2>
                      {article.authors.map((author, index) => (
                        <div className="author" key={index}> 
                          <p>By {author.name} | {article.authorship_date.formatted_short}</p>
                          <hr />
                        </div>
                      ))}
                      <div>
                        <Markdown
                          source={article.body}
                          escapeHtml={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const query = graphql`
  query($id:String!) {
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
          authors {
            name
          }
          authorship_date {
            formatted_short
          }
        }
      }
    }
  }
`

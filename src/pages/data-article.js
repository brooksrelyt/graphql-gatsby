import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { ListGroup, ListGroupItem } from 'reactstrap';

import SEO from '../components/seo'
// eslint-disable-next-line
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    umdHub {
      articles {
        data {
          slug
          title
          body
          subtitle
          hero_image {
            url_1200_630
          }
        }
      }
    }
  }
`

class ClientFetchingExample extends Component {
  render() {
    const {
      umdHub: { articles },
    } = this.props.data

    console.log(articles.data[0].title)
    return (
      <div>
		    <SEO title="Article" keywords={[`gatsby`, `application`, `react`]} />
		    <Header />
		    
		    <div className="container spaces article">
		      <div className="row">
		        <section className="col-md-9">
		          <div className="tag-list">
		            <ul class="list-inline">
		              <li class="list-inline-item"><a href="/">Highlighted</a></li>
		              <li class="list-inline-item"><a href="/">Innovation</a></li>
		              <li class="list-inline-item"><a href="/">Web Only</a></li>
		              <li class="list-inline-item">February 28, 2019</li>
		            </ul>
		          </div>
		          <h1>{articles.data[0].title}</h1>
		          {articles.data[0].hero_image.map((hero, i) => (
		            <div key={i}>
		              <img className="img-fluid no-pad-top med-spaces" src={hero.url_1200_630} alt=" " />
		            </div>
		          ))}
		          <div className="row article-content">
		            <div className="col-md-10 offset-md-1">
		              <h2 className="subheader">{articles.data[0].subtitle}</h2>
		              <div className="author"> 
		                <p>By <a href="/">Jane Doe</a> | Photos by <a href="/">ISTOCK</a></p>
		                <hr />
		              </div>
		              <div>
		                <p>{articles.data.body}</p>
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
}


export default ClientFetchingExample

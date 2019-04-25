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
		                <p>Stress fractures of the shin bones are one of the most common injuries that put runners on the couch, and athletes often simply slow down in an attempt to avoid them. But according to recently published research from the Department of Kinesiology, running fast doesn’t actually cause any more strain on runners’ tibias than running at a slower pace does.</p>

		                <p>Assistant Professor Ross Miller and his research team, including doctoral students Jessica Hunter and Gina Garcia and Associate Professor Jae Kun Shim, studied 43 recreational runners as they circled a 50-meter track, first at a self-chosen moderate speed, and again alternating between slow and fast speeds.</p>

		                <p>While each participant ran, the researchers measured three variables that affect the stress on their tibias: how quickly they transfer their weight onto their leg when taking a step, the pattern of their foot’s movement on the ground and how much weight their legs ultimately bore.</p>

		                <p>The researchers found that conventional wisdom didn’t pan out: Both speeds contributed similarly to the stresses related to the first two variables, but when it came to the third, slow running caused participants’ tibias to bear more cumulative weight than fast running did. That’s because, when a runner’s pace slows, their stride shortens and their feet are in contact with the ground longer. The findings were published in the journal Medicine & Science in Sports & Exercise.</p>

		                <p>“Of the variables we tested, the difference in step length between the fast and slow speeds had the greatest effect on cumulative tibial load,” Hunter told Runner’s World in an interview about the research. “Since step lengths were shorter at slower speeds, subjects needed to take more steps while running slower.”</p>

		                <p>Because stress fractures are often attributed to running too fast or too intensely, interval training—alternating between fast and slow speeds—is thought to decrease risk of injury. Little is known, though, about how changing speeds affects the strain placed on a runner’s shins. This study clarifies the effect of interval training on stress fracture risk, suggesting that runners can add more fast running to their training programs without increasing their chance of injury.</p>

		                <p>The study also has implications for how runners calculate the intensity of their workouts. Runners often measure the strain placed on their body by tracking the total distance and average speed of their runs, but the study’s results show that additional variables like changes in speed should also be tracked.</p>
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

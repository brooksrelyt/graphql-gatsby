const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`./src/templates/article.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  return graphql(`
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
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.umdHub.articles.data.forEach(data => {
		  createPage({
		    path: `${data.slug}`,
		    component: articleTemplate,
		    context: {
		      slug: data.slug
		    },
		  })
		})
  })
}
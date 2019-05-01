const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`./src/templates/article.js`)
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
		    path: data.id,
		    component: articleTemplate,
		    id: data.id,
		    context: {
		      slug: `/articles/${data.slug}-${data.id}`
		    },
		  })
		})
		return;
  })
}
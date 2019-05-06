const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `umdHub`) {
    const slug = createFilePath({ data, getNode, basePath: `pages` })
    createNodeField({
      data,
      name: `id`,
      value: id,
    })
  }
}

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
		    path: `/articles/${data.slug}-${data.id}`,
		    component: articleTemplate,
		    id: `${data.id}`,
		    context: {
		      slug: `/articles/${data.slug}-${data.id}`
		    },
		  })
		})
		return;
  })
}
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `umdHub`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  return graphql(`
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
).then(result => {
    result.data.umdHub.articles.forEach(({ data }) => {
      createPage({
        path: articles.data.slug,
        component: path.resolve(`./src/terp/article.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: articles.data.slug,
        },
      })
    })
  })
}
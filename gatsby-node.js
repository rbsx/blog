const path = require('path')
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node,getNode,boundActionCreators }) => {
    const { createNodeField } = boundActionCreators

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath( { node,getNode,basePath: `pages` } )

        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
        
        if (node.frontmatter.tags) {
            const tagsSlugs = node.frontmatter.tags.map( tag => `tags/${tag.toLowerCase()}/` )
            createNodeField({ node, name: `tagSlugs`, value: tagsSlugs})
        }
    }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const {createPage} = boundActionCreators

    return new Promise( (resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }
        `).then(result => {     
            if (result.errors) {
                console.log(result.errors)
                // resolve()
                reject(result.errors);
            }
            result
                .data
                .allMarkdownRemark
                .edges
                .map(({node}) => 
                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/post/blog-post.js`),
                        context: {
                            slug: node.fields.slug
                        }
                    })
                )

            let tags = []
            result.data.allMarkdownRemark.edges.forEach( edge => {
                if (edge.node.frontmatter.tags) 
                    tags = tags.concat(edge.node.frontmatter.tags)                
            })
            console.log(tags)
            tags = tags.filter( (e,i,s) => s.indexOf(e)===i )
            console.log(tags)
            tags.forEach(tag => {
                const tagPath = `/tags/${tag.toLowerCase()}/`
                createPage({
                    path: tagPath,
                    component: path.resolve(`./src/templates/tags/tag-page.js`),
                    context: {
                        tag,
                    },
                })
            })


            resolve()
        })
    })
}
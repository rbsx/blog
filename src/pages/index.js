import React from "react"
import Link from 'gatsby-link'
import styles from './index.module.css'

export default ({ data }) => 
    <div>
        <h1>Hi fellas!</h1>
        <div>We got { data.allMarkdownRemark.totalCount } posts in total</div>
        { data.allMarkdownRemark.edges.map( ({node}) => 
            <div>
                <h3>
                    <Link to={node.fields.slug} >
                        {node.frontmatter.title}{" "}
                    </Link>
                </h3>
                <p className={styles.post__tags}>
                    <span className={styles.post__tags_icon}>
                        #
                    </span>
                    { node.frontmatter.tags.map( tag => 
                        <Link to={tag}>
                            {tag}
                        </Link>
                    ) }
                </p>
                <p>
                    {node.excerpt}
                </p>
                <span className={styles.post__date}> {node.frontmatter.date} </span>
                <hr className={styles.hr}/>
            </div>
        )}
    </div>


export const query = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "DD MMMM, YYYY")
                            tags
                        }
                        fields {
                            slug
                        }
                        excerpt
                }
            }
        }
    }
`
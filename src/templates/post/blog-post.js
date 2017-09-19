import React from "react"
import styles from './blog-post.module.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className={styles.post}>
      <h1>
        {post.frontmatter.title}
      </h1>
      <div className={styles.post__container} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
                frontmatter {
                    title   
            }
        }
    }
`
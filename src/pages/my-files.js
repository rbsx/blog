import React from 'react'

export default ({data}) => {
    console.log(data)
    return (
        <div>
            <h2>Current files</h2>
            {data.allFile.edges.map( ({node}) =>
                <div>
                    {node.relativePath} -- {node.prettySize} --
                    {node.extension} -- {node.birthTime}
                    <hr/>
                </div>
            )}
        </div>
    )
}

export const query = graphql`
    query MyFilesQuery {
        allFile {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }
`
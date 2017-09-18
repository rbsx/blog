import Typography from "typography"
import fgTheme    from 'typography-theme-fairy-gates'
fgTheme.headerFontFamily = [
    '-apple-system','BlinkMacSystemFont',
    'Segoe UI','Roboto','Oxygen','Ubuntu',
    'Cantarell', 'Fira Sans','Droid Sans',
    'Helvetica Neue','sans-serif'
]
fgTheme.overrideStyles = ({rhythm}, options) => ({
    'a': {
        textDecoration: 'none'
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(1.5),
      marginBottom: rhythm(0.5),
    },
})
const typography = new Typography(fgTheme)

export default typography
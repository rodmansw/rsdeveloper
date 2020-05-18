import Typography from 'typography'
import SutroTheme from 'typography-theme-sutro'

delete SutroTheme.googleFonts

SutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    fontFamily: 'Montserrat,sans-serif',
    marginTop: rhythm(1 / 2),
    textRendering: 'optimizeLegibility'
  },
  h1: {
    fontWeight: 900,
    letterSpacing: '-1px'
  },
  'p,span': {
    textRendering: 'optimizeLegibility',
    fontWeight: 400
  },
  pre: {
    textRendering: 'optimizeLegibility'
  },
  a: {
    textRendering: 'optimizeLegibility',
    color: 'var(--secondary)'
  }
})

SutroTheme.scaleRatio = 5 / 2

const typography = new Typography(SutroTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

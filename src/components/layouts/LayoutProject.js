/** @jsx jsx */
import { ThemeProvider, jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'
import FooterWhite from './FooterWhite'
import HeaderWhite from './HeaderWhite'
import theme from '../../theme/theme'

const LayoutProject = ({ children }) => {
  // Load the Prismic edit button
  if (typeof window !== 'undefined' && window.prismic) {
    window.prismic.setupEditButton()
  }

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <div
        sx={{
          border: '10px solid #FFF',
        }}>
        <HeaderWhite />
        <main
          sx={{
            variant: 'styles.main',
          }}>
          {children}
        </main>
        <FooterWhite />
      </div>
    </ThemeProvider>
  )
}

export default LayoutProject

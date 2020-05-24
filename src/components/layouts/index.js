/** @jsx jsx */
import { ThemeProvider, jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Header from "./Header"
import theme from "../../theme/theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  // Define the meta title and description
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  // Load the Prismic edit button
  if (typeof window !== "undefined" && window.prismic) {
    window.prismic.setupEditButton()
  }

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div
        sx={{
          border: "10px solid",
          borderColor: "accent",
        }}
      >
        <Header />
        <main
          sx={{
            variant: "styles.main",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout

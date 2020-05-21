/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { RichText } from "prismic-reactjs"
import { graphql } from "gatsby"
import Layout from "../components/layouts"
import BlogPosts from "../components/BlogPosts"

// Query for the Blog Home content in Prismic
export const query = graphql`
  {
    prismic {
      allHomepages(uid: null) {
        edges {
          node {
            _meta {
              id
              type
            }
            hero_title
          }
        }
      }
      allProjectss(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            date
            body {
              ... on PRISMIC_ProjectsBodyText {
                type
                label
                primary {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`

// Using the queried Blog Home document data, we render the top section
const BlogHomeHead = ({ home }) => {
  return (
    <Container
      data-wio-id={home._meta.id}
      sx={{
        variant: "styles.container",
      }}
    >
      <h1>{RichText.asText(home.hero_title)}</h1>
      {/* <p className="blog-description">{RichText.asText(home.description)}</p> */}
    </Container>
  )
}

export default ({ data }) => {
  // Define the Blog Home & Blog Post content returned from Prismic
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const projects = data.prismic.allProjectss.edges

  if (!doc) return null

  return (
    <Layout>
      <BlogHomeHead home={doc.node} />
      <div
        sx={{
          p: "15px",
        }}
      >
        <BlogPosts projects={projects} />
      </div>
    </Layout>
  )
}

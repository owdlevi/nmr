/** @jsx jsx */
import { Container, jsx } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { linkResolver } from 'gatsby-source-prismic-graphql'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { RichText } from 'prismic-reactjs'
import LayoutProject from '../components/layouts/LayoutProject'
import ProjectItem from '../components/Project/ProjectItem'
import { FullWidthImage, Quote, ClientTestimonial, Text, ShortVideo, TwoColumnImage } from '../components/slices'

// Query for the Blog Post content in Prismic
export const query = graphql`
  query BlogPostQuery(
    $uid: String
    $paginationPreviousUid: String!
    $paginationPreviousLang: String!
    $paginationNextUid: String!
    $paginationNextLang: String!
  ) {
    prismic {
      allProjectss(uid: $uid) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            intro
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
              ... on PRISMIC_ProjectsBodyQuote {
                type
                label
                primary {
                  quote
                }
              }
              ... on PRISMIC_ProjectsBodyImage_with_caption {
                type
                label
                primary {
                  image
                  imageSharp {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
              ... on PRISMIC_ProjectsBodyTwo_column_image {
                type
                label
                primary {
                  comparison_component
                  left_image
                  left_imageSharp {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                  right_image
                  right_imageSharp {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
              ... on PRISMIC_ProjectsBodyShort_video {
                type
                label
                primary {
                  video {
                    _linkType
                    ... on PRISMIC__FileLink {
                      url
                      size
                      name
                    }
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
              }
              ... on PRISMIC_ProjectsBodyTestimonial {
                type
                label
                primary {
                  client_company
                  client_name
                  testimonial_text
                }
              }
            }

            headerimage
            headerimageSharp {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      prevArticle: projects(uid: $paginationPreviousUid, lang: $paginationPreviousLang) {
        title
        _meta {
          uid
          lang
          type
        }
        listing_image
        listing_imageSharp {
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      nextArticle: projects(uid: $paginationNextUid, lang: $paginationNextLang) {
        title
        _meta {
          uid
          lang
          type
        }
        listing_image
        listing_imageSharp {
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

// Sort and display the different slice options
const ProjectSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.type) {
        case 'text':
          return (
            <div key={index} className="homepage-slice-wrapper">
              {<Text slice={slice} />}
            </div>
          )

        case 'quote':
          return (
            <div key={index} className="homepage-slice-wrapper">
              {<Quote slice={slice} />}
            </div>
          )
        case 'testimonial':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <ClientTestimonial slice={slice} />
            </div>
          )
        case 'image_with_caption':
          return (
            <div key={index} className="homepage-slice-wrapper">
              {<FullWidthImage slice={slice} />}
            </div>
          )
        case 'short_video':
          return (
            <div key={index} className="homepage-slice-wrapper">
              {<ShortVideo slice={slice} />}
            </div>
          )
        case 'two_column_image':
          return <div key={index}>{<TwoColumnImage slice={slice} />}</div>

        default:
          return
      }
    })()
    return res
  })
}

// Display the title, date, and content of the Post
const ProjectBody = ({ projectBody }) => {
  return (
    <div>
      {/* Go through the slices of the post and render the appropiate one */}
      <ProjectSlices slices={projectBody.body} />
    </div>
  )
}

//Test Pagination

const EnhancedPagination = ({ nextArticle, prevArticle }) => (
  <div sx={{ backgroundColor: 'background', display: 'flex', flexFlow: 'row', justifyContent: 'space-between' }}>
    {prevArticle ? <ProjectItem project={prevArticle} /> : ``}
    {nextArticle ? <ProjectItem project={nextArticle} /> : ``}
  </div>
)

export default (props) => {
  // Define the Post content returned from Prismic
  const doc = props.data.prismic.allProjectss.edges.slice(0, 1).pop()

  if (!doc) return null

  const {
    pageContext: { paginationPreviousMeta, paginationNextMeta },
    data: {
      prismic: { prevArticle, nextArticle },
    },
  } = props

  const sharpHeaderImage = get(doc.node, 'headerimageSharp.childImageSharp.fluid')
  const headerImage = sharpHeaderImage ? <Img fluid={sharpHeaderImage} /> : <img src={doc.node.headerimage.url} alt="" />

  return (
    <LayoutProject>
      <div
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: -1,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          '&::after': {
            position: 'absolute',
            content: '" "',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(4,5,38, 0.5)',
          },
        }}>
        {headerImage}
      </div>
      <Container
        sx={{
          backgroundColor: 'transparent',

          zIndex: 10,
        }}>
        <div
          className="projectIntro"
          sx={{
            maxWidth: '600px',
            width: '100%',
            height: 'calc(90vh - 200px)',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
          }}>
          <h1
            sx={{
              variant: 'styles.h1',
              color: '#fff',
              textTransform: 'uppercase',
            }}>
            {RichText.asText(doc.node.title)}
          </h1>
          <p
            sx={{
              color: '#fff',
              fontSize: '21px',
              mt: 0,
              mb: '40px',
            }}>
            {doc.node.intro ? RichText.asText(doc.node.intro) : ``}
          </p>
        </div>
        <div
          sx={{
            width: '100%',
            // maxWidth: '1200px',
            mx: 'auto',
            backgroundColor: '#fff',
          }}>
          <ProjectBody projectBody={doc.node} />
          <EnhancedPagination prevArticle={prevArticle} nextArticle={nextArticle} />
        </div>
      </Container>
    </LayoutProject>
  )
}

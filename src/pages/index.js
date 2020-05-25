/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
import Hero from '../components/Hero'
import { Link as ScrollLink } from 'react-scroll'
// import ProjectsList from "../components/Project/ProjectsList"
import ProjectsGrid from '../components/Project/ProjectsGrid'

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
      allCategorys {
        edges {
          node {
            category_name
            _meta {
              uid
            }
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
            listing_image
            listing_imageSharp {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            category {
              category_tag {
                _linkType
                ... on PRISMIC_Category {
                  category_name
                  _meta {
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const [filter, setFilter] = useState('all')
  const [projects, setProjects] = useState([])
  // Define the Blog Home & Blog Post content returned from Prismic
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const categorys = data.prismic.allCategorys.edges

  const updateFilter = (filter) => {
    setFilter(filter)
  }
  useEffect(() => {
    if (filter === 'all') {
      setProjects(data.prismic.allProjectss.edges)
    } else {
      const filteredProjects = data.prismic.allProjectss.edges.filter((project) => {
        return project.node.category.filter((category) => {
          return category.category_tag._meta.uid === filter
        }).length
      })
      setProjects(filteredProjects)
    }
    return () => {}
  }, [filter])

  if (!doc) return null

  return (
    <Layout>
      <Hero home={doc.node} />
      <div
        sx={{
          p: '15px',
        }}>
        {/* Arrow down and filters */}
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            px: 4,
          }}>
          <ScrollLink
            sx={{
              display: 'inline-block',
              width: '24px',
            }}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}>
            <svg
              sx={{
                display: 'inline-block',
                width: '24px',
                cursor: 'pointer',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.15 152.91">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <line
                    x1="10.39"
                    y1="92.41"
                    x2="10.39"
                    y2="152.41"
                    fill="none"
                    stroke="#e6ebee"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="14.39 148.41 10.39 152.41 6.39 148.41"
                    fill="none"
                    stroke="#e6ebee"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text
                    transform="rotate(-90 49.905 31.635)"
                    fontSize="21"
                    fill="#e6ebee"
                    fontFamily="ITCAvantGardePro-Bold, ITC Avant Garde Gothic Pro"
                    fontWeight="700">
                    SCROLL
                  </text>
                </g>
              </g>
            </svg>
          </ScrollLink>
          <div
            sx={{
              mb: [3, 4],
            }}>
            <span
              sx={{
                variant: 'styles.filterLink',
              }}>
              FILTER BY:
            </span>
            <span
              onClick={(e) => updateFilter('all')}
              sx={{
                variant: 'styles.filterLink',
                color: filter === 'all' ? `#424242` : `#B3B3B3`,
                mx: 2,
              }}>
              All
            </span>
            {categorys.map((category) => {
              return (
                <span
                  key={category.node._meta.uid}
                  onClick={(e) => updateFilter(category.node._meta.uid)}
                  sx={{
                    variant: 'styles.filterLink',
                    color: filter === category.node._meta.uid ? `#424242` : `#B3B3B3`,
                    mx: 2,
                  }}>
                  {category.node.category_name[0].text}
                </span>
              )
            })}
          </div>
        </div>
        <ProjectsGrid projects={projects} />
        {/* <ProjectsList projects={projects} /> */}
      </div>
    </Layout>
  )
}

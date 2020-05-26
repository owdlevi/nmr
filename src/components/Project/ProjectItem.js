/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import { useSpring, animated, config } from 'react-spring'
import get from 'lodash/get'
import { Waypoint } from 'react-waypoint'
import { linkResolver } from '../../utils/linkResolver'

const ProjectItem = ({ project }) => {
  const [iscardActive, setCardActive] = useState(false)
  const [iscardVisisble, setCardVisible] = useState(false)
  console.log(project)

  const style = useSpring({
    opacity: iscardActive ? 1 : 0,
    config: config.slow,
  })

  const sharpImage = get(project, 'listing_imageSharp.childImageSharp.fluid')
  const ProjectImage = sharpImage ? (
    <Img
      fluid={sharpImage}
      sx={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
        objectFit: 'cover',
      }}
    />
  ) : (
    <img
      sx={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
        objectFit: 'cover',
      }}
      src={project.listing_image.url}
      alt={project.listing_image.alt}
    />
  )

  return (
    <Link
      onMouseEnter={() => setCardActive(true)}
      onMouseLeave={() => setCardActive(false)}
      sx={{
        display: 'inline-block',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        lineHeight: 0,
      }}
      to={linkResolver(project._meta)}>
      {ProjectImage}
      <animated.div
        style={style}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#2526E5',
          p: [4, 5],
        }}>
        <div
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}>
          <div
            sx={{
              color: 'primary',
            }}>
            <span>Web /</span>
            <span>Digital</span>
          </div>
          <h2
            sx={{
              color: 'background',
              fontSize: ['24px', '32px'],
              lineHeight: '2em',
              fontWeight: 700,
              m: 0,
            }}>
            {RichText.asText(project.title)}
          </h2>
          <svg
            sx={{
              width: ['30px', '40px', '50px', '60px'],
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 61 61">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <circle cx="30.5" cy="30.5" r="30" fill="none" stroke="#fff" stroke-miterlimit="10" />
                <line x1="20.5" y1="30.5" x2="40.5" y2="30.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
                <polyline points="36.5 26.5 40.5 30.5 36.5 34.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </g>
          </svg>
        </div>
      </animated.div>
    </Link>
  )
}

export default ProjectItem

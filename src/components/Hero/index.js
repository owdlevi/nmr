/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'

// Using the queried Blog Home document data, we render the top section
const Hero = ({ home }) => {
  return (
    <Container
      data-wio-id={home._meta.id}
      sx={{
        variant: 'styles.container',
        maxWidth: '1130px',
        minHeight: '300px',
        height: 'calc(90vh - 500px)',
        px: 4,
      }}>
      <h2
        sx={{
          variant: 'styles.subtitleh2',
        }}>
        Digital, Web & Print Design Agency
      </h2>
      <h1
        sx={{
          variant: 'styles.h1',
        }}>
        {RichText.asText(home.hero_title)}
      </h1>
      <Link
        to="/our-story"
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: 'accent',
          fontSize: '21px',
          textTransform: 'uppercase',
          fontWeight: 700,
          textDecoration: 'none',
          mt: ['40px', '50px'],
        }}>
        <span>Our story</span>
        <svg
          sx={{
            display: 'inline-block',
            ml: [2, 3],
            width: '60px',
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60.71 8.71">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <line y1="4.35" x2="60" y2="4.35" fill="none" stroke="#2526e5" stroke-miterlimit="10" />
              <polyline points="56 0.35 60 4.35 56 8.35" fill="none" stroke="#2526e5" stroke-miterlimit="10" />
            </g>
          </g>
        </svg>
      </Link>

      {/* <p className="blog-description">{RichText.asText(home.description)}</p> */}
    </Container>
  )
}

export default Hero

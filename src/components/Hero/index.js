/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"

// Using the queried Blog Home document data, we render the top section
const Hero = ({ home }) => {
  return (
    <section
      sx={{
        mx: 4,
        position: "relative",
      }}
    >
      <Container
        data-wio-id={home._meta.id}
        sx={{
          variant: "styles.container",
          maxWidth: "1130px",
          minHeight: "300px",
          height: "calc(90vh - 200px)",
        }}
      >
        <h2
          sx={{
            variant: "styles.subtitleh2",
          }}
        >
          Digital, Web & Print Design Agency
        </h2>
        <h1
          sx={{
            variant: "styles.h1",
          }}
        >
          {RichText.asText(home.hero_title)}
        </h1>
        <Link
          to="/our-story"
          sx={{
            display: "inline-block",
            color: "accent",
            fontSize: "21px",
            textTransform: "uppercase",
            fontWeight: 700,
            textDecoration: "none",
            mt: ["40px", "50px"],
          }}
        >
          Our story
        </Link>
        <svg
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            display: "inline-block",
            width: "24px",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.15 152.91"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <line
                x1="10.39"
                y1="92.41"
                x2="10.39"
                y2="152.41"
                fill="none"
                stroke="#e6ebee"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <polyline
                points="14.39 148.41 10.39 152.41 6.39 148.41"
                fill="none"
                stroke="#e6ebee"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <text
                transform="rotate(-90 49.905 31.635)"
                font-size="21"
                fill="#e6ebee"
                font-family="ITCAvantGardePro-Bold, ITC Avant Garde Gothic Pro"
                font-weight="700"
              >
                SCROLL
              </text>
            </g>
          </g>
        </svg>

        {/* <p className="blog-description">{RichText.asText(home.description)}</p> */}
      </Container>
    </section>
  )
}

export default Hero

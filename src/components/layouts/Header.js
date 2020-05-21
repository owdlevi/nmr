/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Link } from "gatsby"

const Header = (props) => {
  return (
    <header
      sx={{
        variant: "styles.header",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            width: ["100%", "40%", "30%"],
            order: 1,
            textAlign: "left",
          }}
        >
          <Link
            to="/"
            sx={{
              height: "40px",
            }}
          >
            <img
              sx={{
                height: "40px",
              }}
              alt="UI Logo"
              src="/logo.svg"
            />
            <span
              sx={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                top: -9999,
              }}
            >
              Home
            </span>
          </Link>
        </div>
        <div
          sx={{
            width: ["60", "70%"],
            display: ["none", "flex", "flex"],
            order: 3,
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "right",
            verticalAlign: "center",
          }}
        >
          <Link
            to="/about-us"
            sx={{
              variant: "styles.navlink",
              ml: [3, 4],
              py: 2,
            }}
          >
            About
          </Link>
          <Link
            to="/blog"
            sx={{
              variant: "styles.navlink",
              ml: [3, 4],
              py: 2,
            }}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            sx={{
              variant: "styles.navlink",
              ml: [3, 4],
              py: 2,
            }}
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header

/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { Link } from "gatsby"

export default () => (
  <footer
    sx={{
      variant: "styles.footer",
      backgroundColor: "background",
    }}
  >
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/say-hello"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          textTransform: "uppercase",
          fontWeight: "700",
          fontSize: "21px",
          color: "#3C45EF",
          m: [2, 0],
          p: 0,
          order: 1,
        }}
      >
        <svg
          sx={{
            display: "inline-block",
            mr: "10px",
          }}
          id="Layer_1"
          height="24px"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.18 24"
        >
          <path
            fill="#3C45EF"
            d="M24,2.18V16.36H11.3L6.54,19.75V16.36H2.18V2.18ZM26.18,0H0V18.53H4.36V24L12,18.53H26.18ZM20.73,6.55H5.45V5.46H20.73Zm0,2.18H5.45V9.82H20.73ZM14.18,12H5.45v1.09h8.73Z"
          />
        </svg>
        <span
          sx={{
            display: "inline-block",
          }}
        >
          SAY HELLO
        </span>
      </Link>
      <span
        sx={{
          color: "#B3B3B3",
          fontSize: "21px",
          fontWeight: 700,
          display: "inline-block",
          order: [3, 2],
          width: ["100%", "auto"],
          textAlign: "center",
        }}
      >
        © 2019 NoMoreRules.co.uk
      </span>
      <a
        href="#"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          textTransform: "uppercase",
          fontWeight: "700",
          fontSize: "21px",
          color: "#3C45EF",
          m: [2, 0],
          p: 0,
          order: [2, 3],
        }}
      >
        <svg
          sx={{
            display: "inline-block",
            mr: "10px",
          }}
          id="Layer_1"
          width="24px"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#3C45EF"
            d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.59-.07,4.85c-.15,3.23-1.67,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23c1.27,0,1.65-.07,4.85-.07M12,0C8.74,0,8.33,0,7.05.07c-4.36.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0m0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84M12,16a4,4,0,1,1,4-4,4,4,0,0,1-4,4M18.41,4.15A1.45,1.45,0,1,0,19.84,5.6a1.45,1.45,0,0,0-1.43-1.45"
          />
        </svg>
        <span
          sx={{
            display: "inline-block",
          }}
        >
          Instagram
        </span>
      </a>
    </Container>
  </footer>
)

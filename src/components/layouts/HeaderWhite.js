/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Link } from 'gatsby'
import Sticky from 'react-stickynode'

const Header = (props) => {
  return (
    <Sticky
      enabled={false}
      top={0}
      innerZ={9999}
      activeClass="nav-sticky"
      sx={{
        background: 'transparent',
      }}>
      <header
        sx={{
          variant: 'styles.header',
          background: 'transparent',
        }}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
          }}>
          <div
            sx={{
              width: ['100%', '40%', '30%'],
              order: 1,
              textAlign: 'left',
            }}>
            <Link
              to="/"
              sx={{
                width: ['100px', '120px', '180px'],
              }}>
              <svg
                sx={{
                  width: ['100px', '120px', '180px'],
                }}
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180 96.34">
                <path
                  fill="#ffffff"
                  d="M18.31 45.22s-4.83-13.37-6-16.72a62.71 62.71 0 01-2-7.24c.42 6.06.48 7.12.48 12.42v11.54H0V0h10.54s4.24 13.25 5.24 16.07a47.8 47.8 0 011.65 6.07c-.24-4.42-.3-8.77-.3-13.31V0h10.78v45.22zM85.85 45.22V29.5c0-5.53.23-16.19.23-16.19l-3.76 31.91H73.9l-4.18-31.91s.35 9.89.35 16.07v15.84h-9.89V0h14s1.82 10 2.9 16.66c.53 3.3 1.06 8.78 1.06 8.78s.64-5.48 1.11-8.72C80.2 10 81.79 0 81.79 0h14.54v45.22zM151.8 25.73l-9.19.47a13.66 13.66 0 00.65-4.35c0-2.36-.41-3.24-1.59-3.3-1.71-.12-2.18 1.18-2.18 5.18v21.49h-11V11h10.83v4.42c.83-2.77 3.42-5.42 6.54-5.42 4.65 0 7 2.83 7 8.54a26.19 26.19 0 01-1 7.24M167.81 46c-7.65 0-13.95-2.48-13.95-17.9 0-13.78 5.3-18.37 13.66-18.37 8.06 0 11.89 4.53 12.13 15.31a47.29 47.29 0 01-.42 5.53H165c.06 4.95.47 7.36 2.71 7.36 1.77 0 2.42-1.41 2.42-3.53 0-.42-.12-1.53-.18-2l9.71.36A21.46 21.46 0 01180 36c0 6.18-3.65 10-12.19 10m-.53-28.33c-1.65 0-2.18 1.3-2.24 7.13h4.24a17.46 17.46 0 00.06-1.83c-.06-4.18-.65-5.3-2.06-5.3M110.46 45.22c0-8.77.49-10.1 2-10.1s2.05.81 2.06 10.1h11.3c-.11-13.32-5.26-18.11-13.42-18.11-7.92 0-13.18 4.85-13.3 18.11zM42 45.22c0-8.77.49-10.1 2-10.1s2.05.81 2.06 10.1H57.4C57.29 31.9 52.14 27.11 44 27.11c-7.92 0-13.18 4.85-13.3 18.11z"
                />
                <path
                  fill="#ffffff"
                  d="M16.31 95.58a28.33 28.33 0 01-1.06-8.25V83c0-3.89-.53-5-2.71-5h-.76v17.58H0V50.36h16.07c7 0 11.66 3.29 11.66 11.48 0 7.12-2.35 9.77-8.12 10.54 6.06.35 7.12 4.77 7.18 11.89.06 4.12.88 9.6 2.18 11.31zm-3.53-37.45h-1v10.95h1.64c1.65 0 2.12-1.12 2.12-5.71 0-3.42-.29-5.24-2.76-5.24M45.63 95.58v-4.13a8.05 8.05 0 01-7.42 4.89c-5.06 0-7.83-2.41-7.83-8.18V61.31h11.07V85.8c0 1.53.83 2.18 1.83 2.18s2.18-.82 2.18-3.06V61.31h11v34.27z"
                />
                <rect fill="#ffffff" x="59.94" y="50.36" width="11.01" height="45.22" />
                <path
                  fill="#ffffff"
                  d="M87.55 96.34c-7.65 0-14-2.47-14-17.9 0-13.78 5.3-18.37 13.66-18.37 8.07 0 11.89 4.54 12.13 15.31a49.59 49.59 0 01-.34 5.54H84.79c.06 4.94.47 7.36 2.71 7.36 1.76 0 2.41-1.42 2.41-3.54 0-.41-.12-1.53-.18-2l9.72.35a21.9 21.9 0 01.29 3.3c0 6.18-3.65 10-12.19 10M87 68c-1.65 0-2.18 1.3-2.24 7.13H89a17.56 17.56 0 00.06-1.83C89 69.14 88.44 68 87 68M114 96.28c-7.24 0-12.24-2.94-12.3-8.59a14 14 0 01.41-3.6l9-.58a11.91 11.91 0 00-.35 2.71c0 1.94.88 3.11 2.76 3.11a2.32 2.32 0 002.48-2.47c0-3.12-1.48-4.36-4.6-5.59-.88-.35-1.47-.53-2.47-.88C104.1 78.62 102 75.85 102 70c.06-6.12 5.06-9.77 12.48-9.77 6.72 0 11.49 2.83 11.66 8.54a8.24 8.24 0 01-.12 2.29l-9 .77a12.26 12.26 0 00.06-2.18c-.11-1.35-.76-2.59-2.53-2.59s-2.18 1-2.18 1.94c0 1.59.59 2.71 3.59 3.71.53.18 1.77.65 2.65 1 6.13 2.48 8.31 5.89 8.31 11.9 0 6.89-4.54 10.71-13 10.71M140 90.44a5.14 5.14 0 11-5.14-5.13 5.14 5.14 0 015.14 5.13"
                />
              </svg>
              <span
                sx={{
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  overflow: 'hidden',
                  top: -9999,
                }}>
                Home
              </span>
            </Link>
          </div>
          <div
            sx={{
              width: ['60', '70%'],
              display: ['none', 'flex', 'flex'],
              order: 3,
              justifyContent: 'flex-end',
              alignItems: 'center',
              textAlign: 'right',
              verticalAlign: 'center',
            }}>
            <Link
              to="/our-work"
              sx={{
                variant: 'styles.navlink',
                color: '#ffffff',
              }}>
              OUR WORK
            </Link>
            <Link
              to="/meet-the-nerds"
              sx={{
                variant: 'styles.navlink',
                color: '#ffffff',
              }}>
              MEET THE NERDS
            </Link>
            <Link
              to="/say-hello"
              sx={{
                variant: 'styles.navlinkcta',
                color: '#ffffff',
                borderColor: '#ffffff',
              }}>
              SAY HELLO
            </Link>
          </div>
        </Container>
      </header>
    </Sticky>
  )
}

export default Header

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
        backgroundColor: 'background',
      }}>
      <header
        sx={{
          variant: 'styles.header',
        }}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
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
              <img
                sx={{
                  width: ['100px', '120px', '180px'],
                }}
                alt="UI Logo"
                src="/logo.svg"
              />
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
              }}>
              OUR WORK
            </Link>
            <Link
              to="/meet-the-nerds"
              sx={{
                variant: 'styles.navlink',
              }}>
              MEET THE NERDS
            </Link>
            <Link
              to="/say-hello"
              sx={{
                variant: 'styles.navlinkcta',
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

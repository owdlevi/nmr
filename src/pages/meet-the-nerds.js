/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Layout from '../components/layouts'
import OurStory from '../components/SVG/ourStory'
import { Helmet } from 'react-helmet'

const title = `Meet the nerds | No More Rules`
const description = `Meet the nerds description `

const MeetTheNerds = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Container
        sx={{
          p: 4,
          display: 'flex',
          flexFlow: 'row',
          flexWrap: 'nowrap',
          overflow: 'hidden',
          justifyContent: 'flex-end',
          position: 'relative',
        }}
        className="pageHeader">
        <div
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
          <OurStory />
        </div>
        <div
          sx={{
            height: '600px',
            width: '40%',
            overflow: 'hidden',
          }}>
          <img src="/our-story-right.jpg" alt="" />
        </div>
      </Container>
    </Layout>
  )
}

export default MeetTheNerds

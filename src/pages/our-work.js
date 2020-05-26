/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Layout from '../components/layouts'

const title = `Our Work | No More Rules`
const description = `Our Work description `

const OurWork = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <h1>Our Work</h1>
    </Layout>
  )
}

export default OurWork

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Layout from '../components/layouts'

const title = `Say Hello | No More Rules`
const description = `Say Hello description `

const SayHello = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <h1>Say Hello</h1>
    </Layout>
  )
}

export default SayHello

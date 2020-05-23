var fs = require('fs')
var dir = './.cache/caches/gatsby-source-prismic-graphql'

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

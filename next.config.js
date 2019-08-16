
const withCss = require('@zeit/next-css')
// module.exports = withCss()

const withSass = require('@zeit/next-sass')
// module.exports = withSass()

const webpack = require('webpack')
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')

module.exports = withSass(withCss())


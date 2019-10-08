// next.config.js
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withCSS(
  withFonts(
    withReactSvg({
      include: path.resolve(__dirname, 'public'),
      webpack(config, options) {
        return config
      }
    })
  )
)

const withOptimizedImages = require('next-optimized-images')
const withTypescript = require('@zeit/next-typescript')

module.exports = (
  withOptimizedImages(
    withTypescript({
      publicPath: '',
      distDir: '../dist',
      imagesName: '[hash].[ext]',
      exportPathMap: async function(defaultPathMap) {
        return defaultPathMap
      },
    })
  )
)

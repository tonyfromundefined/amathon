const withOptimizedImages = require('next-optimized-images')
const withTypescript = require('@zeit/next-typescript')

module.exports = (
  withOptimizedImages(
    withTypescript({
      distDir: '../dist',
      imagesName: '[hash].[ext]',
    })
  )
)

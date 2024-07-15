'use strict'
import * as path from 'path'
function resolve(dir: string) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '~': resolve('./src'),
      '@': resolve('./src/renderer/src'),
      '~resources': resolve('./resources')
    }
  }
}

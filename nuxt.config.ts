import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  srcDir: 'src',
  buildModules: ['@nuxt/typescript-build'],
  router: {
    base: './',
    mode: 'hash'
  }
}

module.exports = config

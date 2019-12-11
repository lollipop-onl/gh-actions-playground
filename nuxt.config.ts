import { Configuration } from '@nuxt/types'

const { BASE_PATH = '' } = process.env;

const config: Configuration = {
  mode: 'spa',
  srcDir: 'src',
  buildModules: ['@nuxt/typescript-build'],
  router: {
    base: BASE_PATH,
    mode: 'hash'
  }
}

module.exports = config

const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',
  env: {
    API_LOCATION: 'https://beta.stash.ph/api/v1',
    TOKEN: '_token'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' }
    ],
    script: [
     /* { src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js' }*/
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/styles/scss/starlight.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/lodash.js', ssr: true },
    { src: '~/plugins/bootstrap.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/sweetalert.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: true } ]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*babel: {
      presets: [
        'es2015',
        'stage-0',
      ],
      plugins: [
        'transform-runtime'
      ]
    },*/
    vendor: [
      'axios',
      'jquery',
      'bootstrap',
      'lodash',
      '~/assets/js/template.js',
      'js-cookie',
      'sweetalert2'
    ],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        'window.$': 'jquery',
        _: 'lodash',
        'window._': 'lodash'
      })
    ],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    analyze: {
      analyzerMode: 'static'
    }
  }
}

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Summit | Mohammed Ayman',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Practising on Vue.js(Nuxt.js) with Tailwind'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '~/assets/img/logo.png'
      },

    ],
    script: [{
        src: "https://kit.fontawesome.com/7ccf14bcd9.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      },
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  css: [
    '~/static/animatePage.css',
  ],
  plugins: [{
    src: '~plugins/vue-owl-carousel',
    ssr: false
  }, ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },

  /*
   ** Build configuration
   */

  build: {
    postcss: {
      plugins: {
        tailwindcss: 'tailwind.config.js'
      }
    },

    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  purgeCSS: {
    mode: 'postcss'
  },
}

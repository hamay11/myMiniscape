module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'くろのこあつめ',
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: 'kuronokoatsume', },
      { hid: 'og:site_name', property: 'og:site_name', content: 'くろのこあつめ', },
      { hid: 'og:type', property: 'og:type', content: 'website', },
      { hid: 'og:title', property: 'og:title', content: 'くろのこあつめ', },
      { hid: 'og:description', property: 'og:description', content: '忍者組のおうちへようこそ〜！ゆっくりしていってね', },
      { hid: 'og:image', property: 'og:image', content: '/background.jpg', },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', },],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070', },
  /**
   * plugins
   */
  /*
  ** Include css not in components
  */
 css: [
  // node.js module but we specify the pre-processor
  // { src: 'bulma/bulma.sass', lang: 'sass', },
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient, }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      config.resolve.alias['vue'] = 'vue/dist/vue.common';
    },
  },
  mode: 'spa',
  /**
   * PWA setting
   */
  modules: [
    '@nuxtjs/pwa',
  ],
  manifest: {
    name: 'My web service',
    lang: 'ja',
  },
};

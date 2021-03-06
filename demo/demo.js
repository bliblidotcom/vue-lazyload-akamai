import Vue from 'vue'
import App from './App.vue'
import plugin from '../vue-lazyload-akamai'

import 'babel-core/register'

// add polyfill for IntersectionObserver
require('intersection-observer')
// use plugin
Vue.use(plugin, {
  useWebp: true,
  placeholder: 'assets/placeholder.png',
  fallback: 'assets/broken-image.jpg'
});

new Vue({
  el: '#app',
  render: h => h(App)
})

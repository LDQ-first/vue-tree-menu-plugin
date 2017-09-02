// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

import VueRipple from 'vue-useripple'
Vue.use(VueRipple)
import treeMenuComponent from './components/treeMenu.vue'

const VueTreeMenu = {
  install: function(Vue) {
    Vue.component('treeMenu',treeMenuComponent)
  }
}

Vue.use(VueTreeMenu)

Vue.config.productionTip = false

Vue.directive('hljs', (e) => {
  const codes = e.querySelectorAll('pre code')
  codes.forEach(code => {
    hljs.highlightBlock(code)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueTimeago from 'vue-timeago'

import TodoGrid from './components/TodoGrid.vue'

// import VuePerfectScrollbar from 'vue-perfect-scrollbar'

Vue.use(Vuetify, {
  theme: {
    todogrid: '#eceff1',
    todocard: '#455a64'
  }
})

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})

Vue.config.productionTip = false

Vue.component('todo-grid', TodoGrid);

// Vue.component('scrollbar', VuePerfectScrollbar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

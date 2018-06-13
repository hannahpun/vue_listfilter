// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import underscore from 'vue-underscore'

import store from './store.js'

import './styles/element-variables.scss'
import './styles/application.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(underscore)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

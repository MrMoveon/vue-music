// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import fastclick from 'fastclick'
import 'lib-flexible'
import '@/assets/less/app.less'
import '@/libs/swiper/css/swiper.min.css'
import muiComponents from './components/index.js'

Vue.config.productionTip = false
	
Vue.prototype.$http=axios
Vue.use(vueAxios,axios)
Vue.use(muiComponents)
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

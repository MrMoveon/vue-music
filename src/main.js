// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible'
import '@/assets/less/app.less'
import '@/libs/swiper/css/swiper.min.css'

import muiComponents from '@/components'
import Toast from '@/components/toast'
import storage from './utils/storage'
Vue.config.productionTip = false

Vue.use(vueAxios, axios)
Vue.use(muiComponents)
Vue.use(Toast)

// 使用vue-lazyload插件，
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/loading.jpg'),
  loading: require('./assets/images/loading.jpg'),
  attempt: 1
})
Fastclick.attach(document.body)
//具有顶部搜索框的路由
var hasSearchRouter = ['Me', 'Music', 'Found']
router.beforeEach((to, from, next) => {

  //如果存在，就显示搜索框
  if (hasSearchRouter.indexOf(to.name) >= 0) {
    store.commit('CHANGE_SEARCH_STATUS', false)
  }

  if(!storage.get('uid') && to.query.view==='login'){
	store.dispatch('loginView',true)
  }
  if(from.query.view==='login'){
	store.dispatch('loginView',false)
  }
  next()
})

/* eslint-disable no-new */
new Vue({el: '#app', router, store, template: '<App/>', components: {
    App
  }})

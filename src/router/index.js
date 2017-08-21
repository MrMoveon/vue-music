import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/views/music/Music'
import Found from '@/views/found/Found'
import Me from '@/views/me/Me'
import Error from '@/views/error/Error'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect:'/music'
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path:'*',
      name: 'Error',
      component: Error
    }
  ]
})

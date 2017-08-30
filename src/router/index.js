import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/main/Main'

import Music from '@/views/music/Music'
import Singer from '@/views/music/singer/Singer'
import SingerDetail from '@/views/music/singer/SingerDetail'

import Found from '@/views/found/Found'

import Me from '@/views/me/Me'

import Error from '@/views/error/Error'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/main/music'
        }, {
            path: '/main',
            name: 'Main',
            component: Main,
            children: [
                {
                    path: 'music',
                    name: 'Music',
                    component: Music,
                    meta: {
                        tab: 2
                    }
                }, {
                    path: 'me',
                    name: 'Me',
                    component: Me,
                    meta: {
                        tab: 1
                    }
                }, {
                    path: 'found',
                    name: 'Found',
                    component: Found,
                    meta: {
                        tab: 3
                    }
                }
            ]
        }, {
            path: '/main/music/singer',
            name: 'Singer',
            component: Singer
        }, {
            path: '/main/music/singer/detail/:id',
            name: 'SingerDetail',
            component: SingerDetail
        }, {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
})

<template>
  <div id="app" class="mui-page-group">
    <music-header></music-header>
    <keep-alive v-if="$route.meta.cache">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
    <transition :name="loginTransition">
      <music-login v-if="loginViewVisibel"></music-login>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MusicHeader from './views/common/MusicHeader'
import MusicLogin from './views/me/login/Login'
export default {
  name: 'app',
  components: {
    MusicHeader,
    MusicLogin
  },
  computed:{
    ...mapGetters([
      'isLogin',
      'loginViewVisibel',
      'loginTransition'
      ])
  }
}
</script>
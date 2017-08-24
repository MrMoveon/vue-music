<template>
  <div id="app" class="mui-page-group">
    <music-header></music-header>
    <transition :name="mainTransition">
      <keep-alive v-if="$route.meta.cache">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </transition>
    
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
  data(){
    return {
      mainTransition1:"slide-left"
    }
  },
  components: {
    MusicHeader,
    MusicLogin
  },
  watch: {
    '$route' (to, from) {
      const toTabNum=to.meta.tab;
      const fromTabNum=from.meta.tab;
      let animate=toTabNum < fromTabNum ? 'slide-right' :'slide-left'
      this.$store.commit('CHANGE_MAINTRANSTION',animate)
     

    }
  },
  computed:{
    ...mapGetters([
      'isLogin',
      'loginViewVisibel',
      'loginTransition',
      'mainTransition'
      ])
  }
}
</script>
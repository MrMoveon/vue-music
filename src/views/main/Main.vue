<template>
  <div class="mui-page-group mui-page">
    <music-header></music-header>
    <transition :name="mainTransition">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <transition :name="loginTransition">
      <music-login v-if="loginViewVisibel"></music-login>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MusicHeader from './MusicHeader'
import MusicLogin from '../me/login/Login'
export default {
  name: 'main',
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
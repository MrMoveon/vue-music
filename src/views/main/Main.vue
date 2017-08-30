<template>
  <div class="mui-page">
    <music-header></music-header>
    <transition :name="mainTransition">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MusicHeader from './MusicHeader'

export default {
  name: 'main',
  data(){
    return {

    }
  },
  components: {
    MusicHeader,
  },
  watch: {
    '$route' (to, from) {
      // main tab左右滑动
      const toTabNum=to.meta.tab;
      const fromTabNum=from.meta.tab;
      let animate=toTabNum < fromTabNum ? 'slide-right' :'slide-left'
      this.$store.commit('CHANGE_MAINTRANSTION',animate)
    }
  },
  computed:{
    ...mapGetters([
      'mainTransition'
      ])
  }
}
</script>
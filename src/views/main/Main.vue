<template>
  <div class="mui-page">
    <music-header v-on:onmenu="handlemenu"></music-header>
    <transition :name="mainTransition">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <mui-side-bar :visible.sync="sidebarShow" ref="sidebar"></mui-side-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MusicHeader from './MusicHeader'
import MuiSideBar from '@/components/sidebar/Sidebar'
export default {
  name: 'main',
  data(){
    return {
      sidebarShow:false
    }
  },
  components: {
    MusicHeader,
    MuiSideBar
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
  },
  methods:{
    handlemenu(){
     
      this.sidebarShow=true
     
    }
  }
}
</script>
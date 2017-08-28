<template>
  <div id="app" class="mui-page">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
      transitionName:"slide-left"
    }
  },
  components: {
    MusicHeader,
    MusicLogin
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
<template>
  <div id="app" class="mui-page">
    <transition :name="transitionName">
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
import MusicHeader from './views/common/MusicHeader'
import MusicLogin from './views/me/login/Login'

export default {
  name: 'app',
  data(){
    return {
      transitionName:"slide-left"
    }
  },
  mounted(){
    this.checkLogin()
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
  },
  methods:{
    checkLogin(){
        this.$store.dispatch('checkLogin').then((resolve)=>{
			this.$store.commit('CHANGE_LOGIN_STATUS',true)
		},(reject)=>{
			console.log(reject)
		})
    }
  }
}
</script>
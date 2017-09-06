<template>
	<div class="mui-page music-main">
		<music-header v-on:onmenu="handlemenu" v-on:rightbtn="handleRightBtn"></music-header>
		<transition :name="mainTransition">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		
		<popover :visible.sync="popover">
			<mui-cell icon="appstoreo" title="听歌识曲" :arrow="false"></mui-cell>
			<mui-cell icon="saoma" title="扫一扫" :arrow="false"></mui-cell>
		</popover>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MusicHeader from './MusicHeader'


import storage from '../../utils/storage'
import popover from '@/components/popover/Popover'

export default {
	name: 'main',
	data() {
		return {
			
			popover:false
			
		}
	},
	components: {
		MusicHeader,
		
		popover
	},
	watch: {
		'$route'(to, from) {
			// main tab左右滑动
			const toTabNum = to.meta.tab;
			const fromTabNum = from.meta.tab;
			let animate = toTabNum < fromTabNum ? 'slide-right' : 'slide-left'
			
			this.$store.commit('CHANGE_MAINTRANSTION', animate)
		}
		
	},
	computed: {
		...mapGetters([
			'mainTransition'
		])
	},
	
	methods: {
		 // 打开左侧菜单
		handlemenu() {
			this.$store.commit('CHANGE_SIDEBAR',true)
  		  },
		//打开popover
		handleRightBtn(){
			this.popover=true
		}
		
	}
}
</script>

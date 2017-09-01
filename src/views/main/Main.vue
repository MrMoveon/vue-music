<template>
	<div class="mui-page music-main">
		<music-header v-on:onmenu="handlemenu" v-on:rightbtn="handleRightBtn"></music-header>
		<transition :name="mainTransition">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		<mui-side-bar :visible.sync="sidebarShow" ref="sidebar" class="music-main-sidebar">
			<!-- 顶部菜单 -->
			<me-menu :data="menu"></me-menu>
			<!-- 中间滚动区域 -->
			<mui-scroll-view class="music-left-menu" ref="leftMenuScrollV" name="leftMenuScrollV" direction="vertical" slidesPerView="auto" :scrollbar="null">
				<mui-scroll-view-item style="height:auto">
					<div class="music-menu-container">
						<mui-cell title="仅WIFI联网"></mui-cell>
						<mui-cell title="定时关闭"></mui-cell>
						<mui-cell title="免流量服务"></mui-cell>
						<mui-cell title="微云音乐网盘"></mui-cell>
						<mui-cell title="传歌到手机"></mui-cell>
						<mui-cell title="清理占用内存"></mui-cell>
						<mui-cell title="免费wifi"></mui-cell>
						<mui-cell title="帮助与反馈"></mui-cell>
						<mui-cell title="关于QQ音乐"></mui-cell>
					</div>
				</mui-scroll-view-item>
			</mui-scroll-view>
			<!-- 底部按钮 -->
			<div class="bottom-tool">
				<mui-button>
					<mui-icon name="setting"></mui-icon>设置
				</mui-button>
				<mui-button @click="logout" v-if="$store.getters.isLogin">
					<mui-icon name="logout"></mui-icon>退出登录
				</mui-button>
			</div>
		</mui-side-bar>
		<popover :visible.sync="popover">
			<mui-cell icon="appstoreo" title="听歌识曲" :arrow="false"></mui-cell>
			<mui-cell icon="saoma" title="扫一扫" :arrow="false"></mui-cell>
		</popover>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MusicHeader from './MusicHeader'
import MuiSideBar from '@/components/sidebar/Sidebar'
import MeMenu from '@/views/me/MeMenu'
import storage from '../../utils/storage'
import popover from '@/components/popover/Popover'

export default {
	name: 'main',
	data() {
		return {
			sidebarShow: false,
			popover:false,
			menu: [
				{
					icon: require('../../assets/images/mymusic_icon_allsongs_normal.png'),
					text: '升级vip',
					number: '畅想音乐特权'
				},
				{
					icon: require('../../assets/images/more_icon_personal_center.png'),
					text: '个性化中心',
					number: '默认主题'
				},
				{
					icon: require('../../assets/images/more_icon_notificationcenter.png'),
					text: '消息中心',
					number: 0
				}
			]
		}
	},
	components: {
		MusicHeader,
		MuiSideBar,
		MeMenu,
		popover
	},
	watch: {
		'$route'(to, from) {
			// main tab左右滑动
			const toTabNum = to.meta.tab;
			const fromTabNum = from.meta.tab;
			let animate = toTabNum < fromTabNum ? 'slide-right' : 'slide-left'
			
			this.$store.commit('CHANGE_MAINTRANSTION', animate)
		},
		sidebarShow(val){
			if(!val){
				this.$Dialog.close()
			}
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
			this.sidebarShow = true
		},
		//打开popover
		handleRightBtn(){
			this.popover=true
		},
		// 退出登录
		logout(){
			this.$Dialog.open({
				title:'退出登录',
				text:'退出登录后，不会删除任何历史数据',
				showCancelButton:true,
				callback:(action)=>{
					if(action=='confirm'){
						this.$store.dispatch('logout')
						setTimeout(()=>{
							this.$Toast({
								msg:'退出成功',
								position:'bottom'
							})
							this.$refs.sidebar.handleClose()
						},500)
						
					}
				}
			})
		}
	}
}
</script>
<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.music-main-sidebar {
	&.mui-sidebar {
		padding: 0 30/@rem;
	}
	.me-menu {
		padding-top: 50/@rem;
		height: 300/@rem;
		//.hairline(bottom, #f8f8f8);
		border-bottom:1px solid #f8f8f8;
	}
	.music-left-menu {
		position: absolute;
		left:30/@rem;
		right:30/@rem;
		top: 310/@rem;
		bottom: 100/@rem;
		height: auto;
		width: auto;
	}
	.bottom-tool{
		position: absolute;
		left:30/@rem;
		right:30/@rem;
		bottom: 0/@rem;
		height: 100/@rem;
		display: flex;
		justify-content: space-between;
		align-items:center;
		.hairline(top,#f8f8f8);
		.mui-button{
			border: none;
			.mui-icon{
				color:@color-green;
				margin-right: 15/@rem;
			}
			&:active{
				background:none;
			}
		}
	}
}
</style>
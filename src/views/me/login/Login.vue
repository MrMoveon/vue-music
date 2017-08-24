<template>
  <div class="mui-page music-login">
    <div class="music-login-bottom-btn">
      <mui-button type="success" size="large" @click="handlelogin"> <mui-icon name="weixin"></mui-icon> 微信登录</mui-button>
      <mui-button type="primary" size="large" @click="handlelogin"> <mui-icon name="qq"></mui-icon> QQ登录</mui-button>
     </div>
     <div class="music-login-bottom-text">
       <p>QQ与微信帐号的资产和权限不互通</p>   
       <p>同意《用户许可协议》 《隐私政策》</p>
     </div>
  </div>
</template>

<script>
import Indicator from '../../../components/indicator';
 
export default {
	name:'Login',
	methods:{
		handlelogin(){
			//加载框
			Indicator.open({
				text:'登录中...',
				spinnerType:'default',
			})
			//登录成功，关闭加载框，改变登录界面的过渡动画，改变登录界面显示状态，改变登录状态
			setTimeout(() =>{
				Indicator.close();
				this.$store.commit('CHANGE_LOGINTRANSTION','slide-bottom')
				setTimeout(()=>{
					this.$store.commit('CHANGE_LOGINVIEW_STATUS',false)
					this.$store.commit('CHANGE_LOGIN_STATUS',true)
				},20)
			}, 2000);
		}
	}
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
  .music-login{
      z-index: 2002;
      background: #fff url(../../../assets/images/login-bg.jpg) no-repeat;
      background-size: cover;
      .music-login-bottom-btn{
        position: absolute;
        left: 0;
        right: 0;
        bottom:150/@rem;
        .mui-button{
          padding:20/@rem;
          width: 490/@rem;
          margin:20/@rem auto;
          border-radius:80/@rem;
        }
      }
      .music-login-bottom-text{
        position: absolute;
        left: 0;
        right: 0;
		bottom:20/@rem;
		text-align: center;
      }
  }
</style>

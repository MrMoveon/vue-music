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
import tips from '@/mixins/tips'
import back from '@/mixins/back'
export default {
  name:'Login',
  mixins:[tips,back],
	methods:{
		handlelogin(){
			//加载框
			Indicator.open({
				text:'登录中...',
				spinnerType:'default',
			})
			//登录成功
      this.$store.dispatch('login').then(resolve=>{
        if(resolve){
          Indicator.close()
          this.success('登录成功')
          this.back()
        }
      })
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

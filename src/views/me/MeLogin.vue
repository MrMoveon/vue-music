<template>
    <div class="me-login">
        <div class="me-login-info" v-if="$store.state.app.isLogin">
            <div class="info">
                <div class="icon">
                    <img src="../../assets/images/lyric_poster_default_bg6_small.jpg" alt="">
                </div>
                <div class="name">
                    飞翔的企鹅
                </div>
            </div>
            <div class="vip">
                <p class="vip-label">[年费会员] </p>
                <p>2018-08-03 到期</p>
            </div>
        </div>
        <div class="me-login-btn" v-else>
            <p>登录听歌，加速QQ等级</p>
            <a class="btn" @click="goLogin">立即登录</a>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'MeLogin',
    methods:{
        goLogin(){
            this.$router.push({name:'Me',query:{view:'login'}})
            this.$store.commit('CHANGE_LOGINTRANSTION','slide-top')
            this.$store.commit('CHANGE_LOGINVIEW_STATUS',true)
        }
    }
}
</script>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.me-login {
    .me-login-btn {
        text-align: center;
        padding: 60/@rem 0;
        .font-dpr(16px);
        .btn {
            display: block;
            margin: 40/@rem auto 0;
            width: 200/@rem;
            height: 60/@rem;
            line-height:60/@rem;
            border: 3/@rem solid @color-green;
            color: @color-green;
            .font-dpr(14px);
        }
    }
    .me-login-info {
        height: 150/@rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 30/@rem;
        border-bottom:24/@rem solid #f4f4f4;
        .info {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .icon {
            width: 80/@rem;
            height: 80/@rem;
            border-radius: 50%;
            margin-right:30/@rem;
            overflow: hidden;
            img {
                display: block;
                width: 100%;
            }
        }
        .name{
            .font-dpr(17px);
        }
        .vip{
            p{
                color: #bbb;
                text-align: right;
                .font-dpr(12px);
            }
            .vip-label{
                color:@color-green;
            }

        }
    }
}
</style>

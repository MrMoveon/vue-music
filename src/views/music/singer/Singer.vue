<template>
    <div class="mui-page music-singer">
        <mui-header title="歌手" color="green" tabs fixed>
            <mui-icon name="arrowleft" slot="left" @click="back"></mui-icon>
            <div class="mui-header-tabs-title" slot="middle">
                <router-link :to="{name:'SingerAll'}" replace  class="mui-header-tabs-title-item">
                    歌手
                </router-link>
                 <router-link :to="{name:'SingerFocus'}" replace class="mui-header-tabs-title-item">
                    我的关注
                </router-link>
                
            </div>
            <div slot="right">
                <mui-icon name="search" @click="back"></mui-icon>
            </div>
        </mui-header>
        <div class="singer-tab-container">
            <transition :name="tabAnimate">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        
    </div>
</template>

<script>
import back from '@/mixins/back'

export default {
    name:'Singer',
    mixins:[back],
    data(){
        return {
           tabAnimate:'slide-left'
        }
    },
    watch: {
    '$route' (to, from) {
      // main tab左右滑动
      const toTabNum=to.meta.tab;
      const fromTabNum=from.meta.tab;
      this.tabAnimate=toTabNum < fromTabNum ? 'slide-right' :'slide-left'
     
    }
  },
    mounted(){
       
    },
    methods: {
     
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.music-singer {
    padding-top:88/@rem;
    a.mui-header-tabs-title-item {
        width: 190/@rem;
        background: @color-green;
        border-color: #fff;
        color: #fff;
    }
    .mui-header-tabs-title .active {
        color: @color-green;
        background: #fff;
    }
    
    .singer-tab-container{
        position: absolute;
        left: 0;
        right: 0;
        top:88/@rem;
        bottom:0;
    }
    
}

</style>

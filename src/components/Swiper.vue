<template>
  <div class="mui-swiper-wrap" ref="container">
      <div class="mui-swiper" ref="swiper">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Swiper',
    props:{
        data:{
            type:Array
        }
    },
    mounted(){
        setTimeout(()=>{
            //计算swiper容器宽度
            this.$refs.swiper.style.width=this.getWidth()*this.data.length+'px'
            this.initSwiper();
        },20)
    },
    methods:{
        initSwiper(){
            this.swiper=new BScroll(this.$refs.container,{
                scrollX:true,
                scrollY:false,
                snap:true,
                snapLoop:true,
                swipeTime:3500
            })
        },
        getWidth(){
            return document.documentElement.getBoundingClientRect().width;
        }    
    }
}
</script>

<style lang='less'>
@import '../assets/less/variables.less';
@import '../assets/less/mixins.less';

.mui-swiper-wrap{
    position: relative;
    width: 10rem;
    overflow: hidden;
    .mui-swiper{
        position: relative;
        height: 100%;
        .mui-swiper-item{
            width:10rem;
            float: left;
            img{
                width: 100%;
            }
        }
    }
}
</style>

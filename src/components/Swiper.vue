<template>
  <div class="swiper-container" ref="slide">
      <div class="swiper-wrapper" ref="slideGroup">
          <slot></slot>
      </div>
      <div class="swiper-pagination" v-show="showDot"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from '@/libs/swiper/js/swiper.js'
  import BScroll from 'better-scroll'

  const COMPONENT_NAME = 'slide'

  export default {
    name: COMPONENT_NAME,
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Number,
        default: 0
      },
      showDot: {
        type: Boolean,
        default: true
      }
    },
    data() {
        return {}
    },
    mounted() {
       setTimeout(()=>{
            this.initSlide();
       },20)
    },
    methods: {
        initSlide(){
            this.slider = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                observer:true,
                observeParents:true,
                loop:this.loop,
                autoplay:this.autoPlay
            });
        }
    }
  }
</script>

<style lang='less'>
@import '../assets/less/variables.less';
@import '../assets/less/mixins.less';

.swiper-container {
   .w750;
   .swiper-pagination-bullet{
       width: 12/@rem;
       height: 12/@rem;
       background:#fff;
       opacity: 0.5;
       transition: all 0.3s;
   }
   .swiper-pagination-bullet-active{
        background:#fff;
        opacity: 1;
        width: 30/@rem;
        border-radius: 48/@rem;
   }
}
.swiper-slide {
    .w750;
    img{
        .w750;
    }
}
// .swiper-container{
//     height: 100%;
//     width: 10rem;
//     overflow: hidden;
//     position: relative;
//     .swiper-wrapper{
//         height: 100%;
//         width: 100%;
//         overflow: hidden;
//         position: relative;
//         .mui-swiper-item{
//             text-align: center;
//         font-size: 18px;
//         background: #fff;
//         width: 10rem;
//         height: 280/@rem;
      
//             a{
//                 width:100%;
//                 height: 100%;
//                 display:block;
//                 overflow: hidden;
//             }
//             img{
//                 width: 100%;
//                 display: block;
//             }
//         }
//     }
//     .dots{
//         position: absolute;
//         bottom: 20/@rem;
//         left:0;
//         right:0;
//         height: 12/@rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
        
//         .dot{
//             display: inline-block;
//             width: 12/@rem;
//             height: 12/@rem;
//             margin: 5/@rem;
//             background:#fff;
//             border-radius:50%;
//             opacity: 0.6;
//             transition:all .3s;
//             &.active{
//                 width: 30/@rem;
//                 border-radius:20/@rem;
//                 opacity: 1;
//             }
//         }
//     }
// }
</style>

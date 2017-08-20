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


  export default {
    name: 'Slide',
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
                autoplay:this.autoPlay,
                autoplayDisableOnInteraction:false
            });
        }
    }
  }
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';

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
        display: block;
        .w750;
    }
}

</style>

<template>
    <div :id="name" class="swiper-container mui-scrollview">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-scrollbar" v-if="this.scrollbar"></div>
    </div>
</template>

<script>
import Swiper from '@/libs/swiper/js/swiper.js'
export default {
    name: 'ScrollView',
    props: {
        name:{
            type:String,
            default:'id'+Math.floor(Math.random()*10000)
        },
        scrollbar:{
            type:String,
            default:'.swiper-scrollbar'
        },

        direction:{
            type:String,
            default:"horizontal"
        },
        slidesPerView: {
            type: [Number,String],
            default: 3
        },
        freeMode: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        setTimeout(() => {
            this.initScrollview()
        }, 20)
    },
    methods: {
        initScrollview() {
            console.log('init')
            this['scrollview'+this.name] = new Swiper('#'+this.name, {
                scrollbar:this.scrollbar,
                direction:this.direction,   //滚动方向
                slidesPerView: this.slidesPerView,//设置容器能够同时显示的item数量
                freeMode: this.freeMode,//默认为false，普通模式：滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，会根据惯性滑动且不会贴合
                roundLengths:true,//防止文字模糊
                observer: true,
                observeParents: true
            });
        },
        update(){
            //更新操作
            console.log('update')
             this['scrollview'+this.name].update()
        }
    }
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.mui-scrollview {
    width: 10rem;
}
</style>

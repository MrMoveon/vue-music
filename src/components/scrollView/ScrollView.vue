<template>
    <div class="swiper-container mui-scrollview">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from '@/libs/swiper/js/swiper.js'
export default {
    name: 'ScrollView',
    props: {
        slidesPerView: {
            type: Number,
            default: 3
        },
        spaceBetween: {
            type: Number,
            default: 30
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
            this.scrollview = new Swiper('.mui-scrollview', {
                slidesPerView: this.slidesPerView,//设置容器能够同时显示的item数量
                spaceBetween: 0,//间距
                freeMode: this.freeMode,//默认为false，普通模式：滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，会根据惯性滑动且不会贴合
                observer: true,
                observeParents: true
            });
        },
        update(){
            //更新操作
            this.scrollview.update();
        }
    }
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.mui-scrollview {
    width: 10rem;
    .mui-view-items {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        .font-dpr(12px);
    }
}
</style>

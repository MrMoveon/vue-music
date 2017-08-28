<template>
    <div class="mui-page music-singer-detail">
        <!-- https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000 -->
        <mui-header title="歌手详情" color="green" fixed>
            <mui-icon name="arrowleft" slot="left" @click="back"></mui-icon>
            <div slot="right">
                <mui-icon name="more_android_light" @click="back"></mui-icon>
            </div>
        </mui-header>
        <div class="top-container">
            <div class="top-container-bg" ref="bg" style="background-image:url(https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000)">
            </div>
        </div>
        <div class="tool-btn" ref="toolBtn">
            <mui-button outlined type="white">
                <mui-icon name="staro"></mui-icon>关注</mui-button>
            <mui-button outlined type="white">
                <mui-icon name="customerservice"></mui-icon>随机播放全部</mui-button>
        </div>
        <div class="singerdetail-container-wrap">
            <mui-scroll-view class="singerdetail-container" ref="singerDetailScrollV" name="singerdetail-scroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null">
                <mui-scroll-view-item class="singer-songlist" style="height:auto">
                    <mui-media-cell title="hello" desc="desc"></mui-media-cell>
                    <mui-media-cell title="hello" desc="desc"></mui-media-cell>
                    <mui-media-cell title="hello" desc="desc"></mui-media-cell>
                    <mui-media-cell title="hello" desc="desc"></mui-media-cell>
                    <mui-media-cell title="hello" desc="desc"></mui-media-cell>
                    <mui-media-cell title="hello" desc="desc"></mui-media-cell>
                    <mui-media-cell title="hello" desc="desc"></mui-media-cell>
                    <mui-media-cell title="hello" desc="desc"></mui-media-cell>
                </mui-scroll-view-item>
            </mui-scroll-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingerDetail',
    data() {
        return {

        }
    },
    mounted() {
        setTimeout(() => {
            this.loadData()
        }, 20);
    },
    methods: {
        loadData() {
            this.$refs.singerDetailScrollV.update()
            this.$refs.singerDetailScrollV.done(this.scrolling())
        },
        scrolling() {
            // 获取 musicScrollV 的 swiper对象
            var vm = this;
            var scroll = vm.$refs.singerDetailScrollV.getCurrentObj()
            var bgHeight = this.$refs.bg.clientHeight
            var bg = vm.$refs.bg
            var toolBtn = vm.$refs.toolBtn
            scroll.on('TouchStart', function(swiper, event) {
                // 清除transition
                bg.style.transition = ``
                toolBtn.style.transition = ``
            })
            scroll.on('TouchMove', function(swiper, event) {
                //移动的时候，设置bg的scale缩放
                var scale = 1;
                var translate = scroll.getWrapperTranslate()
                if (translate > 0) {
                    scale += translate / bgHeight
                    bg.style.transform = `scale(${scale})`
                    toolBtn.style.transform = `translate(0,${translate + 'px'}`
                }
            })
            scroll.on('TouchEnd', function(swiper, event) {
                bg.style.transition = `all 0.3s`
                bg.style.transform = `scale(1)`
                toolBtn.style.transition = `all 0.3s`
                toolBtn.style.transform = `translate(0,0)`
                
            })
           
        },
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';

.music-singer-detail {
    .mui-header {
        background: transparent;
    }
    .top-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: 7;
    }
    .top-container-bg {
        height: 610/@rem;
        background-size: cover; // filter: blur(5px);
    }
    .tool-btn {
        position: absolute;
        left: 0;
        right: 0;
        top: 440/@rem;
        text-align: center;
        z-index: 8;
        .font-dpr(12px);
        .mui-button {
            border-radius: 60/@rem;
        }
    }
    .singerdetail-container-wrap {
        position: absolute;
        top: 88/@rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 9;
    }
    .singerdetail-container {
        position: absolute;
        top: 422/@rem;
        bottom: 0;
        overflow: initial;
        height: auto;
        .singer-songlist {
            background: #fff;
        }
    }
}
</style>

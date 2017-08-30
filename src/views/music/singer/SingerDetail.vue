<template>
    <div class="mui-page music-singer-detail">
        <mui-header :title="singer.Fsinger_name" color="green" fixed>
            <mui-icon name="arrowleft" slot="left" @click="back"></mui-icon>
            <div slot="right">
                <mui-icon name="more_android_light" @click="back"></mui-icon>
            </div>
        </mui-header>
        <div class="top-container">
            <div class="top-container-bg" ref="bg" :style="{backgroundImage:`url(${singer.url})`}">
            </div>
        </div>
        <div class="tool-btn" ref="toolBtn">
            <mui-button outlined type="white"  @click="handleFocus" v-if="isFocus===-1">
                <mui-icon name="staro"></mui-icon>关注</mui-button>
            <mui-button  type="green"  @click="cancelFocus" v-else>
                <mui-icon name="star"></mui-icon>已关注</mui-button>    
            <mui-button outlined type="white">
                <mui-icon name="customerservice"></mui-icon>随机播放全部</mui-button>
        </div>
        <div class="singerdetail-container-wrap">
            <mui-scroll-view class="singerdetail-container" ref="singerDetailScrollV" name="singerdetail-scroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null">
                <mui-scroll-view-item class="singer-songlist" style="height:auto">
                    <mui-media-cell :title="item.albumName" :desc="descript(item)" v-for="(item,index) in singer.singerSong" :key="index"></mui-media-cell>
                </mui-scroll-view-item>
            </mui-scroll-view>
        </div>
    </div>
</template>

<script>
import _ from 'underscore'
import tips from '@/mixins/tips'
import back from '@/mixins/back'
import Indicator from '@/components/indicator'
import {getSingerDetail} from '@/api/music'
export default {
    name: 'SingerDetail',
    mixins:[tips,back],
    data() {
        return {
            isComplate:false,
            singer:{
                Fsinger_name:'',
                url:'',
                singerSong:[]
            }
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.loadData()
        // }, 20);
    },
    activated(){
        //  setTimeout(() => {
        //     this.loadData()
        // }, 20);
    },
    beforeRouteEnter (to, from, next){
        Indicator.open({
				text:'数据加载中...',
				spinnerType:'default',
			})
        getSingerDetail(to.params.id).then(res=>{

                if(res.code===0){
                    next(vm => {
                        vm.isComplate=false
                        vm.singer={
                            Fsinger_name:res.data.singer_name,
                            Fsinger_mid:res.data.singer_mid,
                            url:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${res.data.singer_mid}.jpg?max_age=2592000`,
                            singerSong:res.data.list
                        }
                        setTimeout(()=> {
                            vm.isComplate=true
                            Indicator.close()
                        }, 20);
                      
                    })
                    
                   
                }else{
                     next(false)
                }
            })
    },
    computed:{
        isFocus(){
            return _.findIndex(this.$store.getters.focusSinger,{Fsinger_name:this.singer.Fsinger_name})
        }
    },
    watch:{
        isComplate(val){
            if(val===true){
                this.$refs.singerDetailScrollV.update()
                this.$refs.singerDetailScrollV.done(this.scrolling())
            }
        }
    },
    methods: {
        loadData() {
            getSingerDetail(this.$route.params.id).then(res=>{
            
                console.log(res)
                if(res.code===0){
                    this.singer={
                        Fsinger_name:res.data.singer_name,
                        Fsinger_mid:res.data.singer_mid,
                        url:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${res.data.singer_mid}.jpg?max_age=2592000`,
                        singerSong:res.data.list
                    }
                    this.$nextTick(()=>{
                        this.$refs.singerDetailScrollV.update()
                         this.$refs.singerDetailScrollV.done(this.scrolling())
                    })
                }
            })
            
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
                    toolBtn.style.zIndex=10
                }else{
                    toolBtn.style.zIndex=8
                }
            })
            scroll.on('TouchEnd', function(swiper, event) {
                bg.style.transition = `all 0.3s`
                bg.style.transform = `scale(1)`
                toolBtn.style.transition = `all 0.3s`
                toolBtn.style.transform = `translate(0,0)`
                
            })
           
        },
        descript(item){
            return `${item.singerName} .  ${item.company}`
        },
        //关注歌手
        handleFocus(){
            Indicator.open({
				text:'关注中...',
				spinnerType:'default',
			})
            this.$store.dispatch('focusSinger',{
                Fsinger_name:this.singer.Fsinger_name,
                Fsinger_mid:this.singer.Fsinger_mid,
                url:this.singer.url
            }).then((resolve)=>{
                Indicator.close()
            },(reject)=>{
                Indicator.close()
                this.$router.push({name:'SingerDetail',query:{view:'login'}})
            })
        },
        // 取消关注
        cancelFocus(){
            var index=this.isFocus
            this.$store.dispatch('cancelSinger',{Fsinger_name:this.singer.Fsinger_name})
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
        height: 750/@rem;
        background-size: cover; // filter: blur(5px);
        &:after{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top:0;
            bottom:0;
            background: rgba(0,0,0,0.4)
        }
    }
    .tool-btn {
        position: absolute;
        left: 0;
        right: 0;
        top: 440/@rem;
        text-align: center;
        z-index: 10;
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

<template>
    <div class="mui-page music-found">
        
        <mui-scroll-view  ref="foundScrollV" name="found-scroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null">
            <mui-scroll-view-item style="height:auto;" class="mui-container mui-container-flex"  v-if="!isCompated">
                <mui-loading direction="column"></mui-loading>
            </mui-scroll-view-item>
            <mui-scroll-view-item style="height:auto;" class="mui-container" v-else>
                <mui-media-cell v-for="(item,index) in foundData" :key="index" align='right' :img="item.front_pic">
                    <div class="other-text" slot="text">
                        <div class="otitle  mui-ellipsis-2">{{item.title}}</div>
                        <p class="omusic  mui-ellipsis-1"><mui-icon name="yinyue"></mui-icon>{{item.media_list.first_display}}</p>
                        <p class="otool"><span>{{item.creator_nick}}</span><span>{{item.display_msg}}</span></p>
                    </div>
                </mui-media-cell> 
            </mui-scroll-view-item>
        </mui-scroll-view>
    </div>
</template>

<script>
import {getFound} from '@/api/found'
import MusicHeader from '../common/MusicHeader'
export default {
    name: 'Found',
    data() {
        return {
            isCompated:false,
            foundData:[]
        }
    },
    mounted(){
        this.loadData();
    },
    deactivated(){
        if(this.timer) clearInterval(this.timer);
    },
    methods:{
        loadData(){
            getFound().then(res=>{
                if(res.data.code===0){
                    this.foundData=res.data.magzine.data.v_magzine
                     setTimeout(() => {
                            this.isCompated=true
                            this.$nextTick(() => {
                            
                                setTimeout(()=>{
                                    //执行更新
                                    this.$refs.foundScrollV.update()
                                    //执行子组件的回调函数
                                    this.$refs.foundScrollV.done(this.scrolling())
                                }, 20);
                            
                            })
                    }, 1000)
                   
                }
            })
        },
        /**
         * 获取 foundScrollV 的 swiper对象，通过TouchStart，TouchMove来获取偏移值判断方向，设置顶部搜索的显示隐藏
         */
        scrolling() {
            // 获取 foundScrollV 的 swiper对象
            var vm = this;
            var scroll = vm.$refs.foundScrollV.getCurrentObj()

            scroll.on('TouchStart', function (swiper, event) {
                //获取按下的pageY值
                var touch = event.touches[0]
                vm.pageY1 = touch.pageY;
                //通过定时器来获取滑动中translate的值，并判断顶部搜索框的隐藏显示
                clearInterval(vm.timer);
                vm.timer = setInterval(() => {
                    vm.searchVisibel(scroll)
                }, 200)
            })
            scroll.on('TouchMove', function (swiper, event) {
                //获取移动的pageY值
                var touch = event.touches[0]
                vm.pageY2 = touch.pageY;
                //通过pageY1,2的值判断上滑下滑
                if (vm.pageY2 - vm.pageY1 < 0) {
                    vm.direction = 'down'
                } else {
                    vm.direction = 'up'
                }
            })
            scroll.on('TouchEnd', function (swiper, event) {
                 setTimeout(()=>{
                     //scrollview是否在滚动
                    var animating= vm.$refs.foundScrollV.getAnimating();
                    if(!animating && vm.timer){
                        clearInterval(vm.timer);
                    }
                 },100)
            })
            //滚动结束，清除定时器
            scroll.on('TransitionEnd', function () {
                clearInterval(vm.timer);
            })
        },
        searchVisibel(obj) {
            var vm = this;
            var translate = obj.getWrapperTranslate()

            if (translate < -240) {
                vm.$store.commit('CHANGE_SEARCH_STATUS', false)
                if (vm.direction === 'down') {
                    vm.$store.commit('CHANGE_SEARCH_STATUS', true)
                } else {
                    vm.$store.commit('CHANGE_SEARCH_STATUS', false)
                }
            } else {
                vm.$store.commit('CHANGE_SEARCH_STATUS', false)
            }
        }
    },
    components: {
        MusicHeader

    }
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';

.music-found {
    .mui-container {
        padding-top: (88+75-4)/@rem;
        overflow: initial;
    }
    
    .mui-media-list{
        .otitle{
            color: #333;
            padding-top:30/@rem;
            .font-dpr(18px);
        }
        .mui-thumb{
            width: 230/@rem;
            height: 230/@rem;
        }
        .omusic{
            color: #333;
            .font-dpr(12px);
            margin: 10/@rem 0;
            .iconfont{
                padding-right:10/@rem;
                .font-dpr(12px);
            }
        }
        .otool{
            .font-dpr(12px);
            color: #999;
        }
    }
}

.music-me {
    background: #fff;
}


</style>

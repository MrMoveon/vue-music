<template>
    <div class="mui-page music-home">

        <mui-scroll-view class="music-container" ref="musicScrollV" name="music-scroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null">
             <mui-scroll-view-item style="height:auto;" class="mui-container mui-container-flex"  v-if="!recommend.length">
                <mui-loading direction="column"></mui-loading>
            </mui-scroll-view-item>
            <mui-scroll-view-item style="height:auto" v-else>
                <div class="mui-container " style="overflow:initial;position:static">
                    <!-- 幻灯片 -->
                    <mui-slide v-if="slideData.length" :autoPlay='3000'>
                        <mui-slide-item v-for="(item,index) in slideData" :key='index' :item='item'></mui-slide-item>
                    </mui-slide>
                    <!-- 首页菜单 -->
                    <music-menu></music-menu>
                    <!-- 新歌速递 -->
                    <music-new-song :newSong="newSong"></music-new-song>
                    <!-- 热门歌单推荐 -->
                    <music-recommend :recommend="recommend"></music-recommend>
                </div>
            </mui-scroll-view-item>
        </mui-scroll-view>
        
    </div>
</template>

<script>
import { getSilde, getNewSong, getRecommend } from '@/api/music'
import MusicHeader from '../common/MusicHeader'
import MusicMenu from './MusicMenu'
import MusicNewSong from './MusicNewSong'
import MusicRecommend from './MusicRecommend'
export default {
    name: 'Musci',
    data() {
        return {
            slideData: [],
            newSong: [],
            recommend: []
        }
    },
    mounted() {
        //this.loadData()
       setTimeout(()=>{
            this.loadAll()
       },20)
    },
    deactivated(){
        if(this.timer) clearInterval(this.timer);
    },
    methods: {
        loadData() {
            getSilde().then((res) => {
                this.slideData = res.data.slider
            })
        },
        loadAll() {

            Promise.all([getSilde(), getNewSong(), getRecommend()]).then(results => {
                this.slideData = results[0].data.slider
                if (results[1].code === 0) {
                    this.newSong = results[1].data.albumlist
                }
                if (results[2].code === 0) {
                    this.recommend = results[2].data.list
                }
                this.$nextTick(() => {
                    setTimeout(() => {
                        //执行更新
                        this.$refs.musicScrollV.update();
                        //执行子组件的回调函数
                        this.$refs.musicScrollV.done(this.scrolling());
                    }, 20)
                })
            })
        },
        /**
         * 获取 musicScrollV 的 swiper对象，通过TouchStart，TouchMove来获取偏移值判断方向，设置顶部搜索的显示隐藏
         */
        scrolling() {
            // 获取 musicScrollV 的 swiper对象
            var vm = this;
            var scroll = vm.$refs.musicScrollV.getCurrentObj()
           
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
                    var animating= vm.$refs.musicScrollV.getAnimating();
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
        MusicHeader,
        MusicMenu,
        MusicNewSong,
        MusicRecommend
    }

}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';


.music-home .mui-container {
    padding-top: (88+75-4)/@rem;
    overflow: initial;
}

.music-home {
    background: #f4f4f4;
}

.music-container {
    height: 100%;
}
</style>

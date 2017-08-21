<template>
    <div class="mui-page music-home">
        <mui-header title="音乐馆" fixed tabs>
            <router-link to='/List' slot="left" tag="span">
                <img class="icon-img" src="../../assets/images/top_tab_more_selected.png" alt="">
            </router-link>
            <div class="mui-header-tabs" slot="middle">
                <a class="mui-header-tabs-item">我的</a>
                <a class="mui-header-tabs-item active">音乐馆</a>
                <a class="mui-header-tabs-item">发现</a>
            </div>
            <img class="icon-img" slot="right" src="../../assets/images/top_tab_mymusic_selected.png" alt="">
        </mui-header>
        <music-top-search></music-top-search>
        <div class="mui-container ">
            <!-- 幻灯片 -->
            <mui-slide v-if="slideData.length" :autoPlay='3000'>
                <mui-slide-item v-for="(item,index) in slideData" :key='index' :item='item'></mui-slide-item>
            </mui-slide>
            <!-- 首页菜单 -->
            <music-menu></music-menu>  
            <!-- 新歌速递 -->
            <music-new-song></music-new-song>
        </div>
        
    </div>
</template>

<script>
import {getSilde} from '@/api/music'
import MusicTopSearch from './MusicTopSearch'
import MusicMenu from './MusicMenu'
import MusicNewSong from './MusicNewSong'
export default {
    name: 'Musci',
    data() {
        return {
            slideData:[]        
        }
    },
    mounted(){
        this.loadData()
    },
    methods: {
        loadData(){
           getSilde().then((res)=>{
               this.slideData=res.data.slider
            })
        }
    },
    components:{
        MusicTopSearch,
        MusicMenu,
        MusicNewSong
    }

}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
// tabs
.mui-header-tabs{
    .mui-header-tabs-item{
        color: #d0eedd;
    }
    .mui-header-tabs-item:nth-child(2){
        color: #fff;
        padding: 0 40/@rem 0 40/@rem;
    }
    .active{
        font-weight: @font-weight;
    }
}

.top-search ~ .mui-container{
    padding-top:(88+75-4)/@rem;
}
.music-home{
    background: #f4f4f4;
}
</style>

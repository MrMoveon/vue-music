<template>
    <div class="music-new-song">
        <div class="title">
            新歌速递
        </div>
        <div class="song-wrap">
            <mui-scroll-view v-if="songData.length" ref="scrollView" name="newSong" :scrollbar="null">
                <mui-scroll-view-item v-for="(item,index) in songData" :key='index'>
                    <a href="javascript:;">
                        <img v-lazy="item.url" alt="">
                        <span>{{item.album_name}}</span>
                    </a>
                </mui-scroll-view-item>
            </mui-scroll-view>
        </div>
    </div>
</template>

<script>
import { getNewSong } from '@/api/music'
export default {
    name: 'MusicNewSong',
    props:{
        newSong:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
   
    computed:{
        songData(){
            return this.setSongUrl(this.newSong)
        }
    },
    methods: {
        setSongUrl(data){
            return data.map(item=>{
                item.url='https://y.gtimg.cn/music/photo_new/T002R300x300M000'+ item.album_mid +'.jpg?max_age=2592000'
                return item
            })
        }
    }
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.music-new-song {
    //padding-top: 15/@rem;
    .title {
        height: 70/@rem;
        line-height: 70/@rem;
        padding: 0 20/@rem;
        .font-dpr(16px);
    }
    .mui-view-items{
        display: flex;
        flex-direction: column;
        padding-left: 20/@rem;
       
        a{
            display: block;
            width: 100%;
        }
        img{
            display: block;
            width: 100%;
        }
        span{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-align: left;
            width: 100%;
            height: 80/@rem;
            padding: 0 10/@rem;
            background: #fff;
            word-wrap:break-word; 
            white-space:normal; 
            word-break:break-all;
            .font-dpr(12px);
            
        }
    }
}
</style>

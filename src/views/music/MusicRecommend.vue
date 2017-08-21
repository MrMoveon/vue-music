<template>
    <div class="music-recommend">
        <div class="title">热门歌单推荐</div>
        <div class="music-recommend-container">
            <ul class="music-recommend-list">
                <li  class="music-recommend-list-item" v-for="(item,index) in recommend" :key="index">
                    <div class="icon">
                        <img v-lazy="item.imgurl" alt="">
                    </div>
                    <div class="text">
                        <div class="name">{{item.creator.name}}</div>
                        <div class="desc">{{item.dissname}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getRecommend } from '@/api/music'
export default {
    name: 'MusicRecommend',
    props:{
        recommend:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.music-recommend {
    padding-top:10/@rem;
    .title {
        height: 70/@rem;
        line-height: 70/@rem;
        padding: 0 20/@rem;
        .font-dpr(16px);
    }
}

.music-recommend-container {
    .music-recommend-list{
        margin:0;
        padding:0 20/@rem;
    }
    .music-recommend-list-item{
        position: relative;
        display: flex;
        flex-direction: row;
        //padding:30/@rem 30/@rem;
        background: #fff;
       // .hairline(bottom,#f8f8f8);
       margin-bottom: 20/@rem;
    }
    .icon{
        width: 140/@rem;
        height: 140/@rem;
        overflow: hidden;
        margin-right:30/@rem;
        img{
            width: 100%;
            display: block;
        }
    }
    .text{
        display: flex;
        flex-direction: column;
    }
    .name{
        .font-dpr(16px);
        padding-top:15/@rem;
    }
    .desc{
        .font-dpr(12px);
        padding-top:15/@rem;
    }
}
</style>

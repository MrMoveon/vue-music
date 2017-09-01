<template>
    <div class="music-play-view" v-show="playList.length>0">
        <div class="mui-page fullscreen-play" v-show="!fullScreen">
            <mui-header title="歌手" color="green" fixed>
                <mui-icon name="zhankai" slot="left"></mui-icon>
                <div slot="right">
                    <mui-icon name="more_android_light"></mui-icon>
                </div>
            </mui-header>
            <div class="singer-name">
              鹿晗
            </div>
            <div class="play-container">
                <div class="play-item player"></div>
            </div>
        </div>
        <div class="mini-play"  v-show="!fullScreen">
            <div class="mini-play-left">
                <div class="mini-play-thumb">
                    <img src="../../assets/images/login-bg.jpg" alt="">
                </div>
                <div class="mini-play-text">
                    <div class="title">送别</div>
                    <div class="singer">鹿晗</div>
                </div>
            </div>
            <div class="mini-play-right">
                <div class="mini-play-btn r-btn" v-show="playState"><mui-icon name="bofang"></mui-icon></div>
                <div class="mini-paus-btn  r-btn" v-show="!playState"><mui-icon name="zanting"></mui-icon></div>
                <div class="mini-collection-btn  r-btn"><mui-icon name="hearto"></mui-icon></div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'MusicPlayView',
    computed:{
        ...mapGetters([
            'fullScreen',
            'playState',
            'currentIndex',
            'currentSong',
            'playList',
            'sequenceList',
            'playMode'
        ])
    }
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.music-play-view {
    .fullscreen-play{
        background: #555555;
        .singer-name{
            .font-dpr(12px);
            color: #fff;
            width: 100%;
            text-align: center;
            padding-top:88/@rem;
            height: 40/@rem;
        }
    }
    .mui-header {
        background: transparent;
    }
    .mini-play{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:2000;
        background: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 110/@rem;
        .mini-play-left,.mini-play-right{
            display: flex;
            flex-direction: row;
        }
        .mini-play-left{
            padding-left:20/@rem;
            align-items: center;
        }
        .mini-play-thumb{
            width: 80/@rem;
            height: 80/@rem;
            border-radius:100%;
            overflow: hidden;
            margin-right: 20/@rem;
            img{
                width: 80/@rem;
                height: 80/@rem;
                display: block;
            }
        }
        .mini-play-text{
            .title{
                .font-dpr(14px);
            }
            .singer{
                 .font-dpr(12px);
                 color:@color-green;
            }
        }
        .mini-play-right{
            .r-btn{
                width: 110/@rem;
                text-align: center;
            }
            .mui-icon{
                .font-dpr(26px);
                color: @color-green;
            }
        }
    }
}
</style>

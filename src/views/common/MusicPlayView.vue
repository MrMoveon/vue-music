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
            <div class="bg">
                <img src="../../assets/images/lyric_poster_default_bg3_small.jpg" alt="">
            </div>
            <div class="play-middle">
                <div class="play-middle-left item">
                    <div class="play-middle-cd">
                        <div class="cd-thumb">
                            <img src="../../assets/images/lyric_poster_default_bg3_small.jpg" alt="">
                        </div>
                    </div>
                    <div class="play-middle-mini-lyric">
                        有幸还能讨你欢心
                    </div>
                </div>
            </div>
            <div class="play-bottom">
                <div class="dot">
                    <span class="active"></span>
                    <span></span>
                </div>
                <div class="progress-wrap">
                    <div class="time play-time">0:00</div>
                    <div class="progress-bar">
                        <div class="bar-inner">
                            <div class="progress"></div>
                            <div class="progress-btn-wrap">
                                <div class="progress-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div class="time end-time">4:32</div>
                </div>
                <div class="tool-btn">
                    <div class="left-btn">
                        <div class="btn"><img src="../../assets/images/player_btn_random_normal.png" alt=""></div>
                        <!-- <div class="btn"><img src="../../assets/images/player_btn_repeat_normal.png" alt=""></div>
                        <div class="btn"><img src="../../assets/images/player_btn_repeatone_normal.png" alt=""></div> -->
                    </div>
                    <div class="mid-btn">
                        <div class="btn"><img src="../../assets/images/landscape_player_btn_pre_normal.png" alt=""></div>
                        <!-- <div class="btn"><img src="../../assets/images/landscape_player_btn_pause_normal.png" alt=""></div> -->
                        <div class="btn"><img src="../../assets/images/landscape_player_btn_play_normal.png" alt=""></div>
                        <div class="btn"><img src="../../assets/images/landscape_player_btn_next_normal.png" alt=""></div>
                    </div>
                    <div class="right-btn">
                        <div class="btn"><img src="../../assets/images/player_btn_favorite_normal.png" alt=""></div>
                        <!-- <div class="btn"><img src="../../assets/images/player_btn_favorited_normal.png" alt=""></div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="mini-play"  v-show="fullScreen">
            <div class="mini-play-left">
                <div class="mini-play-thumb">
                    <div class="thumb">
                        <img src="../../assets/images/login-bg.jpg" alt="">
                    </div>
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
    .bg{
        position: absolute;
        left:0;
        right: 0;
        top:0;
        bottom:0;
        z-index:1;
        &:after{
            content: '';
            position: absolute;
            left:0;
            right: 0;
            top:0;
            bottom:0;
            background: rgba(0,0,0,0.4);
        }
        img{
            display: block;
            width: 100%;
            height:100%;
            filter:blur(20px);
        }
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
    .play-middle{
        position: absolute;
        left: 0;
        right: 0;
        top:150/@rem;
        bottom:300/@rem;
        z-index:2;
        .play-middle-left{
            height: 100%;
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
        }
        .play-middle-cd{
            width: 540/@rem;
            height: 540/@rem;
            border: 20/@rem solid rgba(255,255,255,0.1);
            overflow: hidden;
            border-radius: 100%;
            margin-bottom: 20/@rem;
            .thumb{
                width: 540/@rem;
                height: 540/@rem;
            }
            img{
                width: 100%;
                height: 100%;
                display: block;
            }        
        }
        .play-middle-mini-lyric{
            .font-dpr(12px);
            color:@color-green;
        }
    }
    .play-bottom{
        position: absolute;
        left: 0;
        right: 0;
        bottom:0/@rem;
        z-index:3;
        .dot{
            width: 100%;
            text-align: center;
            span{
                display: inline-block;
                width: 14/@rem;
                height: 14/@rem;
                border-radius:100%;
                background:rgba(255,255,255,0.5)
            }
            .active{
                width: 40/@rem;
                border-radius:10/@rem;
                background:rgba(255,255,255,0.8);
            }
        }
        .progress-wrap{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding:20/@rem 40/@rem;
            .time{
                .font-dpr(12px);
                color: #fff;
            }
            .progress-bar{
                flex:1;
                height: 6/@rem;
                padding:0 20/@rem;
                .bar-inner{
                    width: 100%;
                    height:100%;
                    background:rgba(255,255,255,0.4);
                    position: relative;
                }
                .progress{
                    width: 100/@rem;
                    height:100%;
                    background:@color-green;
                }
                .progress-btn-wrap{
                    position: absolute;
                    left: 100/@rem;
                    top:-7/@rem;
                     width:20/@rem;
                     height:20/@rem;
                }
                .progress-btn{
                    width:20/@rem;
                    height:20/@rem;
                    background:@color-green;
                    border-radius:100%;
                }
            }
        }
        .tool-btn{
            height: 130/@rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom:40/@rem;
            padding:0 40/@rem;
            .left-btn,.right-btn{
                .btn{
                    width: 80/@rem;
                    height: 80/@rem;
                    img{
                        width: 100%;
                        height:100%;
                        display: block;
                    }
                }
            }
            .mid-btn{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                
                .btn{
                    width: 156/@rem;
                    height: 130/@rem;
                    img{
                        width: 100%;
                        height:100%;
                        display: block;
                    }
                }
            }
        }
        
    }
}
</style>

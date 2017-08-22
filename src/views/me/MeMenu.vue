<template>
    <div class="me-menu">
        <ul class="me-menu-list">
            <li class="me-menu-list-item" v-for="(item,index) in gridData" :key="index">
                <a href="#">
                    <span class="icon"><img :src="item.icon" alt=""></span>
                    <span class="text">{{item.text}}</span>
                    <span class="span number">{{item.number}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MeMenu',
    data() {
        return {
            gridData: [
                {
                    icon: require('../../assets/images/mymusic_icon_allsongs_normal.png'),
                    text: '本地歌曲',
                    number: 520
                },
                {
                    icon: require('../../assets/images/mymusic_icon_download_normal.png'),
                    text: '下载歌曲',
                    number: 0
                },
                {
                    icon: require('../../assets/images/mymusic_icon_history_normal.png'),
                    text: '最近播放',
                    number: 520
                },
                {
                    icon: require('../../assets/images/mymusic_icon_favorite_normal.png'),
                    text: '我喜欢',
                    number: 520
                },
                {
                    icon: require('../../assets/images/mymusic_icon_mv_normal.png'),
                    text: '下载MV',
                    number: 520
                },
                {
                    icon: require('../../assets/images/mymusic_icon_paid_songs_normal.png'),
                    text: '听歌识曲',
                    number: 520
                },
            ]

        }
    }
}
</script>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.me-menu {
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: outside;
    }
    .me-menu-list {
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
    }
    .me-menu-list-item {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center;
        a{
            display: block;
        }
        .icon{
            display: block;
            width: 100/@rem;
            height: 100/@rem;
            overflow: hidden;
            img{
                display: block;
                width: 100%;
            }
        }
        .text{
            display: block;
            .font-dpr(12px);
        }
        .number{
             display: block;
             .font-dpr(10px);
             color:#999;
             padding-bottom:10/@rem;
        }
    }
}
</style>

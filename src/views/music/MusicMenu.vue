<template>
    <div class="music-menu">
        <div class="music-menu-item">
            <img src="../../assets/images/icon-geshou.png" alt="">
            歌手
        </div>
        <div class="music-menu-item">
            <img src="../../assets/images/icon-fenlei.png" alt="">
            分类
        </div>   
        <div class="music-menu-item">
            <img src="../../assets/images/icon-zj.png" alt="">
            专辑
        </div>       
    </div>
</template>

<script>
export default {
    name:'MusicMenu'
}
</script>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.music-menu {
    padding: 20/@rem;
    display: flex;
    flex-direction: row;
    .music-menu-item{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        background: #fff;
        height: 114/@rem;
        border-radius:6/@rem;
        .font-dpr(16px);
        img{
            margin-right:20/@rem;
            width: 60/@rem;
            height: 60/@rem;
        }

        &:nth-child(1),&:nth-child(2){
            margin-right:14/@rem;
        }
    }
}
</style>

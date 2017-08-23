<template>
  <div class="top-search">
      <div class="top-search-area">
          <img class="icon-img" src="../../assets/images/label_search_icon.png" alt="">搜索
      </div>
  </div>
</template>

<script>
export default {
    name:'MusicTopSearch'
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.top-search{
    position: fixed;
    top:@header-height;
    left: 0;
    right: 0;
    z-index: 2;
    .w750;
    margin-top: -2px;
    height: 75/@rem;
    background: @color-green;
    box-sizing: border-box;
    padding:0 10/@rem 10/@rem 10/@rem;
    transition: all 0.3s;
    .top-search-area{
        background: @color-green-active;
        display: flex;
        height: 100%;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        color: #fff;
        border-radius:8/@rem;
        .font-dpr(15px);
    }
    .icon-img{
        width: 56/@rem;
        height: 56/@rem;
    }

    &.is-hide{
        @top:-80/@rem;
        transform: translate3d(0,@top,0);
    }
}
</style>

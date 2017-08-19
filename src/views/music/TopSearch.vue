<template>
  <div class="top-search">
      <div class="top-search-area">
          <img class="icon-img" src="../../assets/images/label_search_icon.png" alt="">搜索
      </div>
  </div>
</template>

<script>
export default {

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
    .w750;
    margin-top: -2px;
    height: 75/@rem;
    background: @color-primary;
    box-sizing: border-box;
    padding:0 10/@rem 10/@rem 10/@rem;
    .top-search-area{
        background: @color-primary-darken;
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
}
</style>

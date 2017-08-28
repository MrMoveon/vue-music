<template>
    <div class="mui-loading" :class="direction">
        <mui-spinner :type="spinnerType"></mui-spinner>
        <span class="text">{{text}}</span>
    </div>
</template>

<script>
export default {
    name:'Loading',
    props:{
        text:{
            type:String,
            default:'正在载入...'
        },
        direction:{
            type:String,
            default:'row'
        },
        spinnerType:{
            type:String,
            default:'ring'
        }
    }
}
</script>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.mui-loading{
    display: flex;
    justify-content: center;
    align-items: center;
    .mui-spinner{
        margin-right:10/@rem;
    }
    &.column{
        flex-direction: column;
    }
    .text{
        color:#999;
    }
}
</style>

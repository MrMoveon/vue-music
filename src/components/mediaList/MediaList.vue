<template>
    <div class="mui-list">
        <div class="mui-list-left"  :class="{'is-right':align==='right'}">
            <div class="mui-icon" v-if="icon" :class="{'radius':radius}">
                <img :src="icon" alt="" :style="{width:iconW,height:iconH}">
            </div>
            <div class="mui-text">
                <span class="title" v-if="title" v-text="title"></span>
                <span class="desc" :class="'mui-ellipsis-'+ellipsis" v-if="desc" v-text="desc"></span>
            </div>
        </div>
        <div class="mui-list-right" v-if="align != 'right'">
            <i class="iconfont icon-arrow-right" v-if="arrow"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'MediaList',
    props:{
        arrow:{
            type:Boolean,
            default:true
        },
        icon:{
            type:String,
            default:''
        },
        iconSize:{
            type:Array,
            default:function(){
                return []
            }
        },
        ellipsis:{
            type:Number,
            default:1
        },
        align:{
            type:String,
            default:'left'
        },
        radius:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:''
        },
        desc:{
            type:String,
            default:''
        },
    },
    computed:{
        iconW(){
            return this.iconSize.length>1?this.iconSize[0]:''
        },
        iconH(){
            return this.iconSize.length>1?this.iconSize[1]:''
        }
    }
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.mui-list{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 30/@rem 30/@rem;
    //居右
    
    .hairline(bottom,#eee);
    .mui-list-left{
        display: flex;
        flex-direction: row;
        align-items:center;
        .mui-text{
            display: flex;
            flex-direction: column;
            text-align: left;
        }
        .title{
            .font-dpr(16px);
        }
        .desc{
            .font-dpr(14px);
        }
        &.is-right{
            width: 100%;
            justify-content: space-between;
            flex-direction: row-reverse;
            .mui-icon{
                margin: 0 0 0 20/@rem;
            }
        }
    }
    
    .mui-icon{
        width: 110/@rem;
        height: 110/@rem;
        margin-right: 20/@rem;
        overflow: hidden;
        &.radius{
            border-radius:50%;
        }
        img{
            width: 100%;
        }
    }

    .mui-list-right{
        .iconfont{
            .font-dpr(16px);
            color:#999;
        }
    }
}
</style>

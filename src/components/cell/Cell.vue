<template>
    <div class="mui-list" @click="handleClick">
        <div class="mui-list-left"  :class="{'is-right':align==='right'}">
            <div class="mui-icon" v-if="icon" :class="{'radius':radius}">
                <img :src="icon">
            </div>
            <div class="mui-text">
                <span class="title mui-ellipsis-1" v-if="title" v-text="title"></span>
                <span class="desc mui-ellipsis-1"  v-if="desc" v-text="desc"></span>
                <slot name="text"></slot>
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
        to:[String,Object],
        replace:Boolean,
        arrow:{
            type:Boolean,
            default:true
        },
        icon:{
            type:String,
            default:''
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
    methods:{
        handleClick(){
            if(!this.to) return
            // 根据:to="{name:'Music'}"  to="http://www.baidu.com"   传递的类型来判断跳转类型
            if(typeof this.to === 'object'){
                if(this.replace){
                    return this.$router.replace(this.to)
                }
                return this.$router.push(this.to)
            }else if(typeof this.to === 'string'){
                return window.location.href=this.to;
            }
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
    padding: 30/@rem 30/@rem;
    //居右
    
    .hairline(bottom,#eee);
    .mui-list-left{
        display: flex;
        flex-direction: row;
       
        .mui-text{
            display: flex;
            flex:1;
            flex-direction: column;
            flex-wrap: wrap;
            text-align: left;
            
        }
        .title{
            .font-dpr(16px);
            color:#333;
        }
        .desc{
            .font-dpr(14px);
            color:#999;
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
        align-self:center;
        .iconfont{
            .font-dpr(16px);
            color:#999;
        }
    }
}
</style>

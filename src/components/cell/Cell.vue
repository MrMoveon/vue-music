<template>
    <div class="mui-list" @click="handleClick">
        <div class="mui-list-left">
            <div class="mui-thumb" v-if="!icon && img" :class="{'radius':radius}">
                <img v-lazy="img">
            </div>
            <div class="mui-icon" v-if="icon">
                <span class="iconfont" :class="'icon-'+icon" :style="{color:iconColor}"></span>
            </div>
            <div class="mui-text">
                <span class="title mui-ellipsis-1" v-if="title" v-text="title"></span>
                <slot name="title"></slot>
            </div>
        </div>
        <div class="mui-list-right">
            <span v-if="value" class="value">{{value}}</span>
            <i class="iconfont icon-arrow-right" v-if="arrow"></i>
        </div>
    </div>
</template>

<script>
/**
 * @param {string|Object} [to] -  链接跳转，字符串为window.location.href跳转，对象为路由跳转
 * @param {Boolean} [replace] -  链接跳转，替换掉当前的 history 记录
 * @param {Boolean} [arrow] -  右侧箭头显示
 * @param {string} [icon] -  icon图标class名
 * @param {string} [value] -  右侧value值
 * @param {string} [img] -  图片地址
 * @param {Boolean} [radius] -  图片圆角
 * @param {string} [title] -  标题
 * @example 
 * <mui-cell title="猜您喜欢" value="10" :to="{name:'Music',query:{id:123}}">
 * </mui-cell>
 * <mui-cell icon="icon-shoucang-fill" icon-color='#3cb67b' title="收藏" :to="{name:'Music',query:{id:123}}">
 * </mui-cell>
 * <mui-cell :img="require('../../assets/images/lyric_poster_default_bg6_small.jpg')"  title="收藏" :to="{name:'Music',query:{id:123}}">
 * </mui-cell>
 * <mui-cell title="猜您喜欢" desc="来听听和【不爱你】一样好听的歌曲吧" to="http://www.baidu.com">
 * </mui-cell>
 */
export default {
    name:'Cell',
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
        iconColor:{
            type:String,
            default:''      
        },
        img:{
            type:String,
            default:''
        },
        radius:Boolean,
        title:{
            type:String,
            default:''
        },
        value:{
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
    padding: 20/@rem 30/@rem;
    //居右
    
    .hairline(bottom,#eee);
    .mui-list-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        .mui-text{
            display: flex;
            flex:1;
            flex-direction: column;
            flex-wrap: wrap;
            text-align: left;
            
        }
        .title{
            .font-dpr(14px);
            color:#333;
        }
        
        
    }
    
    .mui-thumb{
        width: 36/@rem;
        height:36/@rem;
        margin-right: 10/@rem;
        overflow: hidden;
        &.radius{
            border-radius:50%;
        }
        img{
            width: 100%;
        }
    }
    .mui-icon{
        margin-right:10/@rem;
        .iconfont{
            position: relative;
           
            .font-dpr(18px);
        }
        
    }
    .mui-list-right{
        align-self:center;
        
        .iconfont{
            .font-dpr(16px);
            color:#999;
        }
        .value{
            .font-dpr(12px);
            position: relative;
            top: -3/@rem;
            display: inline-block;
            color:#999;
        }
    }
}
</style>

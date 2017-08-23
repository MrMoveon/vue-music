<template>
    <div class="mui-media-list" @click="handleClick">
        <div class="mui-media-list-left"  :class="{'is-right':align==='right'}">
            <div class="mui-thumb" v-if="img" :class="{'radius':radius}">
                <img :src="img">
            </div>
            <div class="mui-text">
                <span class="title mui-ellipsis-1" v-if="title" v-text="title"></span>
                <span class="desc mui-ellipsis-2"  v-if="desc" v-text="desc"></span>
                <slot name="text"></slot>
            </div>
        </div>
        <div class="mui-media-list-right" v-if="align != 'right'">
            <i class="iconfont icon-arrow-right" v-if="arrow"></i>
        </div>
    </div>
</template>

<script>
/**
 * @param {string|Object} [to] -  链接跳转，字符串为window.location.href跳转，对象为路由跳转
 * @param {Boolean} [replace] -  链接跳转，替换掉当前的 history 记录
 * @param {Boolean} [arrow] -  右侧箭头显示
 * @param {string} [img] -  图片地址
 * @param {string} [align] -  图片居左还是居右   left right
 * @param {Boolean} [radius] -  图片圆角
 * @param {string} [title] -  标题
 * @param {string} [desc] -  描述
 * @example 
 * <mui-media-cell :img="require('../../assets/images/lyric_poster_default_bg6_small.jpg')" align="right" title="猜您喜欢" desc="来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧">
 * </mui-media-cell>
 * <mui-media-cell to="http://www.baidu.com" :img="require('../../assets/images/lyric_poster_default_bg6_small.jpg')" >
 *      <div class="othen-text" slot="text">
 *          <div>猜您喜欢</div>
 *          <p>来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧</p>
 *          <p>来听听和【不爱你】一样好听的歌曲吧</p>
 *          <p>来听听和【不爱你】一样好听的歌曲吧</p>
 *      </div>
 *   </mui-media-cell>
 *  <mui-media-cell :img="require('../../assets/images/lyric_poster_default_bg6_small.jpg')" title="猜您喜欢" desc="来听听和【不爱你】一样好听的歌曲吧">
 *  </mui-media-cell>
 *  <mui-media-cell radius :img="require('../../assets/images/lyric_poster_default_bg6_small.jpg')" title="猜您喜欢" desc="来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧">
 *  </mui-media-cell>
 */
export default {
    name:'MediaCell',
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
        img:{
            type:String,
            default:''
        },
        align:{
            type:String,
            default:'left'
        },
        radius:Boolean,
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
.mui-media-list{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30/@rem 30/@rem;
    //居右
    
    .hairline(bottom,#eee);
    .mui-media-list-left{
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
            .font-dpr(12px);
            color:#999;
        }
        &.is-right{
            width: 100%;
            justify-content: space-between;
            flex-direction: row-reverse;
            .mui-thumb{
                margin: 0 0 0 20/@rem;
            }
        }
    }
    
    .mui-thumb{
        width: 120/@rem;
        height: 120/@rem;
        margin-right: 20/@rem;
        overflow: hidden;
        align-self: flex-start;
        &.radius{
            border-radius:50%;
        }
        img{
            width: 100%;
            display: block;
        }
    }
    .mui-icon{
        margin-right:10/@rem;
        .iconfont{
            position: relative;
            top: -2/@rem;
            .font-dpr(18px);
        }
        
    }
    .mui-media-list-right{
        align-self:center;
        .iconfont{
            .font-dpr(16px);
            color:#999;
        }
    }
}
</style>

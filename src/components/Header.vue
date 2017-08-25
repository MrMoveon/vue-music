<template>
<div class="mui-header" :class="[{'is-fixed':fixed},headerColor]">
	<div class="mui-header-left">
		<slot name="left"></slot>
	</div>
	<div class="mui-header-right">
		<slot name="right"></slot>
	</div>
	<div class="mui-header-title">
		<span v-if="!tabs">{{title}}</span>
		<slot v-else name="middle"></slot>
	</div>
</div>
</template>

<script>
/**
 * mui-header
 * @desc 顶部导航
 * @param {(type|number)} [color=primary] - 显示颜色，可选 `primary`,`white`
 * @param {string} size - 尺寸，可选 `noraml`,`large`
 * @param {string} title - 标题
 * @param {Boolean} fixed - 是否浮动到顶部 
 * @param {Boolean} tabs - title区中间tab按钮 
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 * @param {slot} [middle] - 显示在中间区域的tab内容
 * @example
 *

 *       <mui-header style="margin-top:10px;" tabs color="white">
 *           <router-link to='List' slot="left" tag="span">
 *               <i class="iconfont">&#xe72a;</i>
 *               <span class="mui-header-left-text">返回</span>
 *           </router-link>
 *           <div class="mui-header-tabs-title" slot="middle">
 *               <span class="mui-header-tabs-title-item is-active">类别1</span>
 *               <span class="mui-header-tabs-title-item">类别2</span>
 *           </div>
 *           <div slot="right">
 *               <i class="iconfont">&#xe708;</i>
 *               <i class="iconfont">&#xe732;</i>
 *           </div>
 *       </mui-header>

 */
export default {
  name: 'Header',
  props:{
    title:{
      type:String,
      default:''
    },
    color:{
      type:String,
      default:'primary'
    },
    fixed:{
      type:Boolean,
      default:false
    },
    tabs:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      name:'mui-header--',
    }
  },
  computed:{
    headerColor(){
      return this.name+this.color;
    }
  }
}
</script>


<style lang='less'>
@import '../assets/less/variables.less';
@import '../assets/less/mixins.less';
.@{name}header{
    position: relative;
    height: @header-height;
    overflow: hidden;
    color: #fff;
    padding:0 10/@rem;
    .w750;
    //.hairline(bottom,@color-split);
    
   &.is-fixed{
       position: fixed;
       left: 0;
       right: 0;
       top: 0;
       z-index: 9;
   }
   &--primary{
    background-color:@color-primary;
   }
   &--green{
    background-color:@color-green;
   }
   &--white{
    background-color:#fff;
    color: @color-text;
   }
  
}
.@{name}header-title{
    position: absolute;
    left: 80/@rem;
    right: 80/@rem;
    top: 0;
    text-align: center;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    padding:0 10px;
    height: @header-height;
    line-height: @header-height;
    .font-dpr(16px);
}
.@{name}header-left,.@{name}header-right{
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80/@rem;
    height:@header-height;
    .icon-img{
        width: 80/@rem;
        height:80/@rem;
        &:active{
            opacity: 0.5;
        }
    }
    a,span,i{
        .font-dpr(14px);
        &:active{
            opacity: 0.5;
        }
        &.iconfont{
            .font-dpr(20px);
        }
    }
    &-text{
        display: inline-block;
        line-height: @header-height;
    }
   
}
.@{name}header-right{
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80/@rem;
    height:@header-height;
    .icon-img{
        width: 80/@rem;
        height:80/@rem;
        &:active{
            opacity: 0.5;
        }
    }
    a,span{
        .font-dpr(14px);
        &:active{
            opacity: 0.5;
        }
    }
    
}
.@{name}header-tabs-title{
    height: @header-height;
    font-size: 0;
    padding-top:10/@rem;
    &-item{
        display:inline-block;
        width: 122/@rem;
        height: @header-height - 28/@rem;
        line-height: @header-height - 28/@rem;
        background:darken(@color-primary-active, 10%);
        .font-dpr(15px);
        border-width: 1px;
        border-style:solid;
        border-color:darken(@color-primary-active, 10%);
        &:first-of-type{
            border-radius:6/@rem 0 0 6/@rem;
        }
        &:last-of-type{
            border-radius:0 6/@rem 6/@rem 0;
        }
    }
    .active{
        background: #fff;
        color: darken(@color-primary-active, 10%);
        border-color:#fff;
    }
}
</style>

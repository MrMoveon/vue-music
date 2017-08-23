<template>
  <button class="mui-button" :class="[buttonClass]" :style="[buttonStyle]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
/**
 * m-button
 * @desc 按钮
 * @param {(type|number)} [type=default] - 显示类型，传入类型名，可选 `primary`,`danger`,`warning`, `success`
 * @param {string} size - 尺寸，可选 `noraml`,`large`
 * @param {string} color - 自定义颜色，如 `#333333`,`#999999`
 * @param {Boolean} outlined - 无底色按钮 
 * @param {Boolean} disabled - 禁用按钮 
 * @example
 *
 * <m-button type="primary">按钮</m-button>
 * <m-button type="primary" outlined>无底色按钮</m-button>
 * <m-button type="primary" disabled>禁用按钮</m-button>
 * <m-button type="primary" size="large">块级按钮</m-button>
 */
export default {
  name: 'Button',
  props:{
    type:{
      type:String,
      default:''
    },
    color:{
      type:String,
      default:''
    },
    size:{
      type:String,
      default:'noraml'
    },
    outlined:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      name:'mui-button--',
      msg: ''
    }
  },
  computed: {
    buttonClass(){
      let classobj='';
      if(this.type){
        classobj+=this.name+this.type;
      }
      if(this.size){
        classobj+=' '+this.name+this.size;
      }
      if(this.outlined){
        classobj+=' '+this.name+'outlined';
      }
      if(this.disabled){
        classobj+=' is-disabled';
      }
     return classobj;
    },
    buttonStyle(){
      if(this.color){
        return {backgroundColor:this.color};
      }
    }
   
  },
  methods:{
    handleClick(ev){
      this.$emit('click',ev);
    }
  }
}
</script>


<style lang='less'>
@import '../assets/less/variables.less';
@import '../assets/less/mixins.less';
.@{name}button{
    position: relative;
    display: inline-block;
    padding: 6/@rem 12/@rem;
    .font-dpr(14px);
    line-height: 1;
    border-radius:4/@rem;
    transition: all .3s;
    
    color: @color-text;
    text-align: center;
    font-family: @font-family-default;
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: @color-text-gray-light;
    &:not(.is-disabled):active{
        background-color: @color-text-gray-light;
        border-color: @color-text-gray-light;
    }
    &.m-button--outlined{
        color: #fff;
    }
}
 // background
.@{name}button--primary{
    background-color: @color-primary;
    border-color: @color-primary;
    color:#fff;
    &:not(.is-disabled):active{
        background-color: @color-primary-active;
        border-color: @color-primary-active;
    }
    &.m-button--outlined{
        color: @color-primary-active;
    }
}
.@{name}button--danger{
    background-color: @color-danger;
    border-color: @color-danger;
     color:#fff;
    &:not(.is-disabled):active{
        background-color: @color-danger-active;
        border-color: @color-danger-active;
    }
    &.m-button--outlined{
        color: @color-danger-active;
    }
}
.@{name}button--warning{
    background-color: @color-warning;
    border-color: @color-warning;
     color:#fff;
    &:not(.is-disabled):active{
        background-color: @color-warning-active;
        border-color: @color-warning-active;
    }
    &.m-button--outlined{
        color: @color-warning-active;
    }
}
.@{name}button--success{
    background-color: @color-success;
    border-color: @color-success;
     color:#fff;
    &:not(.is-disabled):active{
        background-color: @color-success-active;
        border-color: @color-success-active;
    }
    &.m-button--outlined{
        color: @color-success-active;
    }
}
// size

.@{name}button--noraml{
    padding: 8/@rem 12/@rem;
    .font-dpr(14px);
    .iconfont{
        .font-dpr(14px);
    }
}
.@{name}button--large{
    display: block;
    .font-dpr(18px);
    width: 100%;
    padding: 11px 10px;
    .font-dpr(16px);
    margin-bottom: 10px;
    .iconfont{
       .font-dpr(16px);
    }
}
.@{name}button--outlined{
    background-color: transparent;
    &:not(.is-disabled):active{
        color:#fff;
    }
}
.@{name}button.is-disabled{
    opacity: 0.5;
}

</style>

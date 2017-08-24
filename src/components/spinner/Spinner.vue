<template>
  <div class="mui-spinner">
    <img :class="'mui-spinner--'+size" :src="path" >
  </div>
</template>

<script>
/**
 * mui-spinner
 * @desc 加载动画
 * @param {(string|number)} [type=default] - 显示类型，传入类型名，可选 `default`,`default-dark`,`default-primary`, `ellipsis`,`ellipsis-dark`,`ellipsis-primary`,
 * @param {number} size - 尺寸
 *
 * @example
 * <mui-spinner type="default"></mui-spinner>
 * <mui-spinner type="default-dark"></mui-spinner>
 * <mui-spinner type="default-primary"></mui-spinner>
 * 
 */
export default {
  name: 'Spinner',
  props:{
    type:{
      type:String,
      default:'default'
    },
    size:{
      type:String,
      default:'normal'
    }
  },
  computed:{
    path(){
      return require("./images/"+this.type+".svg");
    }
  },
  data () {
    return {
      
    }
  }
}
</script>


<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.@{name}spinner{
  img{
    display: block;
    margin:0 auto;
  }
  .@{name}spinner--normal{
      width:80/@rem;
      height:80/@rem;
      
  }
}
</style>

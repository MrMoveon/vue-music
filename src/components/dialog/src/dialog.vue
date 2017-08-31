<template>
<div class="mui-dialog">
    <transition name="pop">
        <div class="mui-dialog-wrap" v-show="visible">
            <div class="mui-dialog-inner">
                <div class="mui-dialog-title">{{title}}</div>
                <div class="mui-dialog-text">{{text}}</div>
            </div>
            <div class="mui-dialog-buttons">
                <span class="mui-dialog-button" v-show="showCancelButton" @click="handleCallback('cancel')">{{cancelText}}</span>
                <span class="mui-dialog-button" v-show="showConfirmButton" @click="handleCallback('confirm')">{{confirmText}}</span>
            </div>
        </div>    
     </transition>
    <div class="mui-dialog-mask" @click="handleClose()" v-show="visible" :style="{backgroundColor:'rgba(0,0,0,'+maskOpacity+')'}"></div>
   
</div>

</template>
<script>
export default {
  name:'dialog',
  data(){
      return {
          title:'提示',
          text:'',
          cancelText:'取消',
          confirmText:'确定',
          showCancelButton:false,
          showConfirmButton:true,
          callback:null,
          visible:false,
          maskClose:false,
          maskOpacity:0.6
      }
  },
  props:{
     
  },
  methods:{
    handleCallback(action){
        var callback=this.callback;
        //callback(action);
        //根据return false 来判断是否关闭弹出框
        var isClose=callback(action);
        if(isClose!=false){
            this.visible=false;
        }
      
    },
    handleClose(){
        if(this.maskClose){
            this.visible=false;
        }
    }
  }
}
</script>
<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-dialog{
    position: absolute;
    z-index: 9999;
    &-wrap{
        width: 540/@rem;
        background: #fff;
        position: fixed;
        z-index:10001;
        left: 50%;
        top:50%;
        transform: scale(1) translate3d(-50%,-50%,0);
        border-radius:12/@rem;
        transform-origin:0% 0%;
    }
    &-inner{
       padding: 15/@rem;
    }
    &-title{
        text-align: center;
        .font-dpr(16px);
        font-weight: 500;
    }
    &-text{
        text-align: center;
        .font-dpr(14px);
        padding-top:20/@rem;
    }
    &-buttons{
        position: relative;
        display: flex;
        text-align: center;
        height: 88/@rem;
        .hairline(top,#eee);
        .mui-dialog-button{
            position: relative;
            flex: 1;
            line-height: 88/@rem;
            color: @color-primary;
            .font-dpr(14px);
            .hairline(right,#eee);
            &:last-child{
                .hairline-remove(right);
            }
        }
    }
    &-mask{
        width: 100%;
        height: 100%;
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:10000;
        background: rgba(0,0,0,0.4);
    }
}
.pop-enter-active, .pop-leave-active {
  transition: all .2s ease
}
.pop-enter, .pop-leave-to{
  opacity: 0;
  transform: scale(0.8) translate(-50%,-50%);
  transform-origin:0% 0%;
}
</style>

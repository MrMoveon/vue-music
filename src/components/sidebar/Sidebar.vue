<template>
  <div class="mui-sidebar" v-show="visible">
      <transition :name="transition">
      <div class="mui-sidebar-container" v-show="containerShow">
          123123
      </div>
      </transition>
      <div class="mui-sidebar-mask" @touchend.prevent="handleClose"></div>      
  </div>
</template>

<script>
export default {
    name:'SideBar',
    props:{
        visible:{
            type:Boolean,
            default:true
        }
    },
    watch:{
        containerShow(val){
            if(!val){
                setTimeout(()=>{
                    this.$emit('update:visible',false)
                    this.transition='sidebar-left'
                }, 600);
            }
        },
        visible(val){
            if(val){
                setTimeout(()=> {
                    this.containerShow=true
                }, 20);
            }
        }
    },
    data(){
        return {
            sidebarShow:this.visible,
            containerShow:false,
            transition:'sidebar-left'
        }
    },
    methods:{
        handleClose(){
            this.transition='sidebar-right'
            this.containerShow=!this.containerShow;
        }
    }
}
</script>

<style lang='less'>
.mui-sidebar{
    position: absolute;
    left: 0;
    top:0;
    bottom:0;
    width:100%;
    z-index:3000;
    .mui-sidebar-container{
        position: absolute;
        left: 0;
        top:0;
        bottom:0;
        width:80%;
        z-index: 2;
        overflow: hidden;
        background:#fff;
        transition:all .5s;
    }
    .mui-sidebar-mask{
        position: absolute;
        left: 0;
        top:0;
        bottom:0;
        width:100%;
        z-index:1;
        background: rgba(0,0,0,0.6)
    }
}
.sidebar-left-enter,.sidebar-right-leave-active {
    transform:translate(-100%,0)
}
.sidebar-left-leave-active,.sidebar-right-enter{
    transform:translate(0%,0)
}

//左右移动动画
// .slide-left-enter, .slide-right-leave-active {
//   opacity: 0;
//   -webkit-transform: translate(50/@rem, 0);
//   transform: translate(50/@rem, 0);
// }
// .slide-left-leave-active, .slide-right-enter {
//   opacity: 0;
//   -webkit-transform: translate(-50/@rem, 0);
//   transform: translate(-50/@rem, 0);
// }
</style>

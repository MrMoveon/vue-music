<template>
        <div class="mui-popover" v-show="visible">
            <transition name="popover-fade">
                <div class="mui-popover-wrap"  v-if="popover">
                    <div class="mui-popover-arrow"></div>
                    <div class="mui-popover-inner">
                        <slot></slot>
                    </div>
                </div>
            </transition>
            <div class="mui-popover-mask" @click="close"></div>
        </div>
    
</template>

<script>
export default {
    name: 'Popover',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            popover:this.visible
        }
    },
    watch:{
        visible(val){
            if(val){
                this.popover=true
            }
        }
    },
    methods:{
        close(){
            this.popover=false
            setTimeout(()=> {
                this.$emit('update:visible',false)
            }, 500);
            
           
        }
    }

}
</script>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.mui-popover {

    .mui-popover-wrap {
        position: absolute;
        top: 50/@rem;
        right: 10/@rem;
        z-index: 10001;
        transition: all .5s ease;
    }
    .mui-popover-inner {
        position: absolute;
        top: 25/@rem;
        right: 0;
        width: 360/@rem;
        background: #fff;
        border-radius: 6/@rem;
        overflow: hidden;
    }
    .mui-popover-arrow {
        position: absolute;
        top: 0px;
        right: 30/@rem;
        border-left: 15/@rem solid transparent;
        border-right: 15/@rem solid transparent;
        border-top: 15/@rem solid transparent;
        border-bottom: 15/@rem solid #fff;
    }
    .mui-popover-mask {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10000;
        background: rgba(0, 0, 0, 0.4);
    }
}


.popover-fade-enter, .popover-fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>

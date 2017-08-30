<template>
    <div class="mui-page music-singer-all">
       
        
        <div style="height:auto;" class="mui-container mui-container-flex"  v-if="!list.length">
            <div class="normal">
                <img class="icon" src="../../../assets/images/focus_singer_img.gif" alt="">
                <span class="text">没有关注的歌手</span>
                <router-link :to="{name:'SingerAll'}" replace tag='div'>
                    <mui-button outlined type="green">去关注</mui-button>
                </router-link>
                
            </div>
        </div>
        <mui-scroll-view class="singer-container" ref="singerScrollV" name="singer-scroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null" v-else>
            <mui-scroll-view-item style="height:auto" >

                <mui-cell radius :to="{name:'SingerDetail',params:{id:item.Fsinger_mid}}" :arrow='false' :img="item.url" :title="item.Fsinger_name" v-for="(item,index) in list" :key="index" >
                </mui-cell>
                
            </mui-scroll-view-item>
        </mui-scroll-view>
       
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
import storage from '../../../utils/storage'
export default {
    name:'SingerFoucs',
    data(){
        return {
            list:[]
        }
    },
    computed:{
        ...mapGetters([
            'isLogin'
        ])
    },
    created(){
        setTimeout(()=>{
            this.loadData();
        },100)
    },
    activated(){
        setTimeout(()=>{
            this.loadData();
        },100)
    },
    mounted(){
        
    },
    methods: {
        loadData(){
          
            if(this.isLogin){
                this.list=JSON.parse(storage.get('focusSinger'))
            }
            
            
        }
       
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';

.music-singer-all {

    .mui-header-tabs-title-item {
        width: 190/@rem;
        background: @color-green;
        border-color: #fff;
    }
   
    .mui-list {
        .mui-thumb {
            width: 120/@rem;
            height: 120/@rem;
            margin-right: 40/@rem;
        }
    }
    .normal{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        .icon{
            width: 225/@rem;
            height: 225/@rem;
        }
        .text{
            .font-dpr(14px);
        }
        .mui-button{
            margin-top: 10/@rem;
             width: 225/@rem;
        }
    }
}

</style>

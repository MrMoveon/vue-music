<template>
    <div class="mui-page music-singer-all">
       
        
        <div style="height:auto;" class="mui-container mui-container-flex"  v-if="!listGroup.length">
            <mui-loading direction="column"></mui-loading>
        </div>
        <mui-scroll-view class="singer-container" ref="singerScrollV" name="singer-scroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null" v-else>
            <mui-scroll-view-item style="height:auto" v-for="(item,index) in listGroup" :key="index">

                <div class="singel-label">{{item.label}}</div>

                <mui-cell radius :to="{name:'SingerDetail',params:{id:list.Fsinger_mid}}" :arrow='false' :img="list.url" :title="list.Fsinger_name" v-for="(list,sindex) in item.list" :key="sindex" >
                </mui-cell>
                
            </mui-scroll-view-item>
        </mui-scroll-view>
        <!-- <div class="singel-label fixed">{{currentLabel}}</div> -->
        <div class="mui-shortcut" @touchstart="handleShortcut" @touchmove="shortcutmove">
            <ul>
                <li v-for="(item,index) in listGroup" :class="currentIndex===index?'active':''" :key="index" :data-index="index">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>

import {getSinger} from '@/api/music'
import mui from '@/utils/mui'
export default {
    name:'SingerAll',

    data(){
        return {
            currentIndex:0,
            listGroup:{}
        }
    },
    mounted(){
        setTimeout(()=>{
            this.loadData();
        },20)
    },
    methods: {
        loadData(){
           getSinger().then(res=>{
               var listGroup={
                   hot:{
                       label:'热',
                       list:[]
                   }
               }
               if(res.code===0){
                   res.data.list.forEach((item,index) => {
                       if(index<10){
                           //热门
                           listGroup.hot.list.push({
                                Fsinger_id:item.Fsinger_id,
                                Fsinger_name:item.Fsinger_name,
                                Fsinger_mid:item.Fsinger_mid,
                                url:`https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
                            })
                       }
                       if(!listGroup[item.Findex]) {
                           listGroup[item.Findex]={
                               label:item.Findex,
                               list:[]
                           };
                       }
                       listGroup[item.Findex].list.push({
                           Fsinger_id:item.Fsinger_id,
                           Fsinger_name:item.Fsinger_name,
                           Fsinger_mid:item.Fsinger_mid,
                           url:`https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
                       })
                   });
                   //this.listGroup=listGroup
               }
                let hot=[]
                let ret=[]
                for(let i in listGroup){
                    let val=listGroup[i]
                    if(val.label==='热'){
                        hot.push(val)
                    }else if(val.label.match(/[a-zA-Z]/)){
                        ret.push(val)
                    }
                }
                // 通过字符编码排序
                ret.sort((a,b)=>{
                    return a.label.charCodeAt(0)-b.label.charCodeAt(0)
                })
                this.listGroup=hot.concat(ret)
                this.$nextTick(()=>{
                    setTimeout(()=>{
                        this.$refs.singerScrollV.update()
                        this.$refs.singerScrollV.done(this.scrolling());
                    }, 20);
                })
           })
        },
        handleShortcut(e){
           // 获取点击的索引
          
           var index=mui(e.target).get(0).dataset.index;
           this.currentIndex=parseInt(index)
           //跳转到索引项
           this.$refs.singerScrollV.slideTo(index)
        },
        shortcutmove(e){
           // console.log(e)
           //获取手指移动的元素
           var element = document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
           if(!mui(element).attr('data-index')){
               return 
           }
            // 获取点击的索引
           var index=mui(element).get(0).dataset.index;
           if(index==null) return 
           this.currentIndex=parseInt(index)
           //跳转到索引项
           this.$refs.singerScrollV.slideTo(index)
           
        },
        scrolling(){
            // 获取 musicScrollV 的 swiper对象
            var vm = this;
            var scroll = vm.$refs.singerScrollV.getCurrentObj()
           
            scroll.on('TouchStart', function (swiper, event) {
               
                clearInterval(vm.timer);
                //开定时器时时获取索引值
                vm.timer = setInterval(() => {
                    vm.currentIndex=vm.$refs.singerScrollV.getActiveIndex()
                }, 200)
            })
            
            scroll.on('TouchEnd', function (swiper, event) {
                 setTimeout(()=>{
                     //scrollview是否在滚动，没滚动清除定时器，
                    var animating= vm.$refs.singerScrollV.getAnimating();
                    if(!animating && vm.timer){
                        clearInterval(vm.timer);
                    }
                 },100)
            })
            //滚动结束，清除定时器
            scroll.on('TransitionEnd', function () {
                clearInterval(vm.timer);
            })
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
   
    .singel-label{
        height: 50/@rem;
        line-height:50/@rem;
        background: #f8f8f8;
        padding-left:30/@rem;
        &.fixed{
            position: fixed;
            left: 0;
            right: 0;
            top:88/@rem;
            z-index: 1;
        }
    }
    .mui-list {
        .mui-thumb {
            width: 120/@rem;
            height: 120/@rem;
            margin-right: 40/@rem;
        }
    }
}
.mui-shortcut{
    ul,li{
        margin: 0;
        padding:0;
        list-style-position: outside;
        list-style: none;
    }
    li{
        height: 40/@rem;
        text-align: center;
        .font-dpr(12px);
        &.active{
            color: @color-green;
        }
    }
    position: absolute;
    right: 10px;
    top:50%;
    transform: translate(0,-50%);
    z-index:2;
}
</style>

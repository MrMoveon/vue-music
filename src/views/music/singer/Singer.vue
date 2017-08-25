<template>
    <div class="mui-page music-singer">
        <mui-header title="歌手" color="green" tabs>
            <mui-icon name="arrowleft" slot="left" @click="back"></mui-icon>
            <div class="mui-header-tabs-title" slot="middle">
                <span class="mui-header-tabs-title-item active">歌手</span>
                <span class="mui-header-tabs-title-item">我的</span>
            </div>
            <div slot="right">
                <mui-icon name="search" @click="back"></mui-icon>
            </div>
        </mui-header>
        <mui-scroll-view class="singer-container" ref="singerScrollV" name="singer-scroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null">
            <mui-scroll-view-item style="height:auto" v-for="(item,index) in listGroup" :key="index">
                <div class="singel-label">{{item.label}}</div>
               
                <mui-cell radius :arrow='false' :img="list.url" :title="list.Fsinger_name" v-for="(list,sindex) in item.list" :key="sindex" >
                </mui-cell>
                
            </mui-scroll-view-item>
        </mui-scroll-view>
        <div class="mui-shortcut">
            <ul>
                <li v-for="(item,index) in listGroup" :key="index">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getSinger} from '@/api/music'
export default {
    name:'Singer',
    data(){
        return {
            listGroup:{}
        }
    },
    mounted(){
        this.loadData();
    },
    methods: {
        loadData(){
           getSinger().then(res=>{
               console.log(res)
               var listGroup={
                   hot:{
                       label:'热',
                       list:[]
                   }
               }
               if(res.code===0){
                   res.data.list.forEach((item,index) => {
                       if(index<10){
                           listGroup.hot.list=[{
                           Fsinger_id:item.Fsinger_id,
                           Fsinger_name:item.Fsinger_name,
                           url:`https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
                       }]
                       }
                       if(!listGroup[item.Findex]) {
                           listGroup[item.Findex]={
                               label:item.Findex,
                               list:[]
                           };
                       }
                       listGroup[item.Findex].list=[{
                           Fsinger_id:item.Fsinger_id,
                           Fsinger_name:item.Fsinger_name,
                           url:`https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
                       }]
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
                ret.sort((a,b)=>{
                    return a.label.charCodeAt(0)-b.label.charCodeAt(0)
                })
                this.listGroup=hot.concat(ret)
           })
        },
        back() {
            console.log(1)
            this.$router.go(-1)
        }
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.music-singer {
    .mui-header-tabs-title-item {
        width: 190/@rem;
        background: @color-green;
        border-color: #fff;
    }
    .mui-header-tabs-title .active {
        color: @color-green;
    }
    .singel-label{
        height: 50/@rem;
        line-height:50/@rem;
        background: #f8f8f8;
        padding-left:30/@rem;
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
    }
    position: absolute;
    right: 10px;
    top:50%;
    transform: translate(0,-50%);
    z-index:2;
}
</style>

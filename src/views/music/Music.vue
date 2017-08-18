<template>
    <div class="mui-page">
        <mui-header title="音乐馆" fixed tabs>
            <router-link to='/List' slot="left" tag="span">
                <img class="icon-img" src="../../assets/images/top_tab_more_selected.png" alt="">
            </router-link>
            <div class="mui-header-tabs" slot="middle">
                <a class="mui-header-tabs-item">我的</a>
                <a class="mui-header-tabs-item active">音乐馆</a>
                <a class="mui-header-tabs-item">发现</a>
            </div>
            <img class="icon-img" slot="right" src="../../assets/images/top_tab_mymusic_selected.png" alt="">
        </mui-header>
        <top-search></top-search>
        <div class="mui-container">

        </div>
        <mui-swiper v-if="swiperData.length" :data="swiperData">
                <div class="mui-swiper-item" v-for="(item , index) in swiperData" :key="index">
                    <a :href="item.link"><img :src="item.url" alt=""></a>
                </div>
        </mui-swiper>
    </div>
</template>

<script>
import TopSearch from './TopSearch'
export default {
    name: 'Musci',
    data() {
        return {
            swiperData:[
                {
                    url:require('../../assets/images/banner.jpg'),
                    link:'#'
                },
                {
                     url:require('../../assets/images/banner.jpg'),
                    link:'#'
                },
                {
                     url:require('../../assets/images/banner.jpg'),
                    link:'#'
                },
                {
                    url:require('../../assets/images/banner.jpg'),
                    link:'#'
                }
            ]        
        }
    },
    methods: {

    },
    components:{
        TopSearch
    }

}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
// tabs
.mui-header-tabs{
    .mui-header-tabs-item{
        color: #d0eedd;
    }
    .mui-header-tabs-item:nth-child(2){
        color: #fff;
        padding: 0 40/@rem 0 40/@rem;
    }
    .active{
        font-weight: @font-weight;
    }
}

.top-search ~ .mui-container{
    padding-top:(88+75-2)/@rem;
}

</style>

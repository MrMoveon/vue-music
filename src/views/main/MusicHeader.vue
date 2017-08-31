<template>
    <div class="music-header">
        <mui-header title="音乐馆" fixed tabs color="green">
            
            <span slot="left"  @click="handleMenu">
                 <mui-icon name='caidan'></mui-icon>
            </span>
            <div class="mui-header-tabs" slot="middle">
                <router-link :to="{name:'Me'}" tag='a' class="mui-header-tabs-item" replace>我的</router-link>
                <router-link :to="{name:'Music'}" tag='a' class="mui-header-tabs-item" replace>音乐馆</router-link>
                <router-link :to="{name:'Found'}" tag='a' class="mui-header-tabs-item" replace>发现</router-link>
            </div>
            <mui-icon name='more_light' slot="right" @click="$emit('rightbtn')"></mui-icon>
        </mui-header>
        <music-top-search :class="{'is-hide':$store.state.app.searchStatus}"></music-top-search>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import MusicTopSearch from './MusicTopSearch'

export default {
    methods:{
        ...mapMutations([
            'CHANGE_SEARCH_STATUS'
        ]),
        handleMenu(){
            this.$emit('onmenu')
        }
    },
    components: {
        MusicTopSearch
    }
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.music-header{
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    z-index: 2001;
}
// tabs
.mui-header-tabs {
    .mui-header-tabs-item {
        color: #d0eedd;
    }
    .mui-header-tabs-item:nth-child(2) {
        padding: 0 40/@rem 0 40/@rem;
    }
    .active {
        font-weight: @font-weight;
        color:#fff;
    }
}
</style>

<template>
    <div class="page">
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
    </div>
</template>

<script>
export default {
    name: 'Musci',
    data() {
        return {

        }
    },
    methods: {
        hello() {
            return '123123';
        }
    }

}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.mui-header-tabs{
    .mui-header-tabs-item:nth-child(2){
        padding: 0 40/@rem 0 40/@rem;
    }
    .active{
        font-weight: @font-weight;
    }
}

</style>

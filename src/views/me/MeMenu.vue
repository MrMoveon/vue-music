<template>
    <div class="me-menu">
        <ul class="me-menu-list">
            <li class="me-menu-list-item" v-for="(item,index) in data" :key="index">
                <a href="#">
                    <span class="icon"><img :src="item.icon" alt=""></span>
                    <span class="text">{{item.text}}</span>
                    <span class="span number">{{item.number}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MeMenu',
    props:{
        data:Array
    }
    
}
</script>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.me-menu {
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: outside;
    }
    .me-menu-list {
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        padding-bottom:20/@rem;
    }
    .me-menu-list-item {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center;
        padding-top:20/@rem;
        a{
            display: block;
        }
        .icon{
            display: block;
            width: 80/@rem;
            height: 80/@rem;
            margin:0 auto;
            overflow: hidden;
            img{
                display: block;
                width: 100%;
            }
        }
        .text{
            display: block;
            .font-dpr(12px);
        }
        .number{
             display: block;
             .font-dpr(10px);
             color:#999;
        }
    }
}
</style>

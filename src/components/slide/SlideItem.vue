<template>
    <div class="swiper-slide">
        <a :href="item.linkUrl"><img :src="item.picUrl" alt=""></a>
    </div>
</template>

<script>
export default {
    name: 'SlideItem',
    props: {
        item: {
            type: Object,
            default: function () {
                return {}
            }
        }
    }
}
</script>

<style>

</style>

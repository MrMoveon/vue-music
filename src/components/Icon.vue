<template>
    <span class="iconfont" :class="'icon-'+name" @click="handleClick">
    </span>
</template>

<script>
export default {
    name: "Icon",
    props: {
        name: String
    },
    methods:{
        handleClick(ev){
            this.$emit('click',ev)
        }
    }
}
</script>

<template>
    <span class="iconfont" :class="'icon-'+name">
    </span>
</template>

<script>
export default {
    name: "Icon",
    props: {
        name: String
    }
}
</script>

<template>
  <div class="mui-page">
      <mui-header title="歌手" color="green">
          <mui-icon name="arrowleft" slot="left" @click="back"></mui-icon>
      </mui-header>
      12313
  </div>
</template>

<script>
export default {
methods:{
    back(){
        console.log(1)
        this.$router.go(-1)
    }
}
}
</script>

<style>

</style>
icon-arrowleft
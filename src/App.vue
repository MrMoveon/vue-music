<template>
  <div id="app" class="mui-page-group">
    <music-header></music-header>
    <keep-alive v-if="$route.meta.cache">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import MusicHeader from './views/common/MusicHeader'
export default {
  name: 'app',
  components: {
    MusicHeader
  }
}
</script>
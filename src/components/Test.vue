<template>
  <div class="hello">
    <h1>TEST</h1>
    <router-link :to="{path:'/test',query:{'show':'test'}}">显示</router-link>
	<a @click="$router.go(-1)">返回test</a>
    <h2>Essential Links</h2>
    <div v-if="isShow">test show</div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow:false
    }
  },
  mounted(){

  },
  watch:{
	'$route'(to,from){
		if(to.query.show){
			 this.isShow=true
		}
		if(from.query.show){
			 this.isShow=false
		}
	}
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar.vue'
export default {
  name: 'App',
  components: {
    tabbar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

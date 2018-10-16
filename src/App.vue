<template>
  <div id="app" class="container">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!--tabBar -->
    <tabbar/>
    <footer/>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar.vue'
import footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    tabbar,
    footer
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
  margin-top: 2px;
}

</style>

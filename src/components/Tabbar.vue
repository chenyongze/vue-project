<!-- Tab Bar list -->
<template lang="html">
  <div class="footer">
   <li v-for="item in list"><a :href="item.url">{{item.name}}</a></li>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      list: [
        {'name':"首页","url":'/'},
        {'name':"我的","url":'/#/center'},
        {'name':"about","url":'/#/about'},
      ],
    }
  }
}
</script>

<style scoped>
  .footer {
    height: 50px;
    margin-bottom: 30px;
  }
  .footer li {
    color: green;
  }
</style>
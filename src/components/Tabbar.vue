<!-- Tab Bar list -->
<template lang="html">
  <ul class="footer">
   <li v-for="item in list"><a :href="item.url">{{item.name}}</a></li>
  </ul>
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
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul.footer {
    border: 1px solid #e7e7e7;
    bottom: 0;
    padding: 0;
    position:fixed;
    overflow: hidden;
    font-size: 1.4em;
    width: 100%;
    background:#f3f3f3;
    list-style-type: none;
  }
  ul.footer li {
    float: left;
    padding: 0;
    margin: 0;
    background-image: none;
  }
  ul.footer a {
    display: block;
    color: #666;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  ul.footer a:active{
    background-color: #4CAF50;
  }
</style>

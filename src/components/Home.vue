<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <!-- <span v-for="n in 10">{{ n }} </span> -->
    <!-- <input type="button" @click="get()" value="按钮"> -->
    <div>
      <li v-for="item in list"> <img :src="item.cover" width="100%" height="100%"></li>
    </div>
  </div>

 <!-- <span v-for="n in 10">{{ n }} </span> -->
</template>

<script>

var apiHost = process.env.API_BASE;
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'dotalk App',
      list:[],
    }
  },
  mounted() {
        this.getImages()
  },
  methods:{
      getImages:function(){
          console.log('click get')
          //发送get请求
          this.$http.get(apiHost+'/resource/api.image/listx').then(function(res){
              console.log(res.body);
              this.list = res.body.data;

          },function(){
              alert('请求失败处理');   //失败处理
          });
      }
  },
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

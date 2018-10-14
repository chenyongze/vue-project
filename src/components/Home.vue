<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <!-- <span v-for="n in 10">{{ n }} </span> -->
    <!-- <input type="button" @click="get()" value="按钮"> -->
    <div>
      <li v-for="item in list"> <img :src="item.cover" width="100%" height="100%"></li>
    </div>

    <span class="infinite-scroll-text">{{tips}}</span>

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
      tips: '努力加载中...',
      REQUIRE: true,
      page: 1,//页码
      showlaoding: true //是否显示loading效果
    }
  },

  // created(){
  //   var url = apiHost+'/resource/api.image/listx';
  //   this.axios.get(url)
  //     .then(res => {
  //       // 成功回调
  //       console.log(res);
  //       this.list = res.data.data;
  //     }, res => {
  //       // 错误回调
  //     })

  // },

  mounted() {
        this.getData(this.page);
        // window.addEventListener('scroll', this.sq);

              // 注册scroll事件并监听
      window.addEventListener('scroll', () => {
        console.info('可视区域大小' + document.documentElement.clientHeight + '........' + window.innerHeight)
        //console.info('滚动高度' + document.body.scrollTop) //原生的方法存在的兼容性问题 mac上面就计算出来是0
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        console.info('文档高度' + document.body.offsetHeight)
        //判断是否滚动到底部
        if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果
          if (!this.showlaoding) { //防止多次加载
            this.getData(this.page += 1)
          }
        }
      })
  },
  methods:{
      getData(page) {
        this.showlaoding = true
        this.axios.get(apiHost+'/resource/api.image/listx', {
          params: {
            page: page,
            limit: 10
          }
        })
        .then((res) => {
            if (res.status == 200) {
              let list = res.data.data
              list.map(n => this.list.push(n))

              this.list.forEach(n => {
                const d = new Date(n.create_at)
                n.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
              })
              this.showlaoding = false

            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
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

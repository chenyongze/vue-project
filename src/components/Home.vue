<template>
  <div class="">

    <div id= "banner" class="carousel slide banner-nav" data-ride="carousel">
      <!-- 指示符 -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- 轮播图片 -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
        </div>
        <div class="carousel-item">
          <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
        </div>
        <div class="carousel-item">
          <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
        </div>
      </div>

      <!-- 左右切换按钮 -->
      <a class="carousel-control-prev" href="#banner" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#banner" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>

    <div class="container">
        <div class="col-sm-2 image-list" v-for="item in list">
          <img :src="item.cover" class="rounded" width="100%" height="100%">
        </div>
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
  .image-list{
    float: left;
    width: 45%;
    margin: 0 0 0 17px;
    padding: 0 0 0 1px;
    /*border: 2px solid gray;*/
  }
  .banner-nav {
    margin: 0 0 5px 0;
  }
  .banner-nav img {
    width: 100%;
    height: 200px;

  }
  .infinite-scroll-text{
    float: left;
  }
</style>

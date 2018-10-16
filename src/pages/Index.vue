<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page__title">{{pageName}}</h1>
    </div>
    <div class="page__hd">
      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">图片列表</div>
        <div class="weui-panel__bd">

          <a href="#/detail" v-for=" item in list" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__bd image-list-item">
              <img class="weui-media-box__thumb" :src="item.cover" alt="">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">标题一</h4>
              <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var apiHost = process.env.API_BASE;
  export default {
    name: 'Index',
    data () {
      return {
        pageName: 'dotalk App',
        list:[],
        tips: '努力加载中...',
        REQUIRE: true,
        page: 1,//页码
        showlaoding: true //是否显示loading效果
      }
    },
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

<style scoped>

  .image-list-item{
    width: 18px;
  }

</style>

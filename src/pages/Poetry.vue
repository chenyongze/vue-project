<template>
  <div>

    <p style="">这是一个段落。</p>

    <p class="ex">这是一个段落。</p>
    <p>
      <a href="" class="a-f"> yongze url</a>
    </p>


    <div class="pulllog-box">
    底部
    </div>
  </div>

</template>

<script>
    export default {
        name: "Poetry"
    }
</script>

<style scoped>
  a:link {color:#000000;}      /* 未访问链接*/
  a:visited {color:#00FF00;}  /* 已访问链接 */
  a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
  a:active {color:#0000FF;}  /* 鼠标点击时 */


  .pulllog-box {

  }
</style>

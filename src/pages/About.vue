<template>
  <div class="container">
    <h2>边框颜色</h2>
    <p>Bootstrap4 提供了一些类来设置边框颜色:</p>
    <span class="border border-primary"></span>
    <span class="border border-secondary"></span>
    <span class="border border-success"></span>
    <span class="border border-danger"></span>
    <span class="border border-warning"></span>
    <span class="border border-info"></span>
    <span class="border border-light"></span>
    <span class="border border-dark"></span>
    <span class="border border-white"></span>
  </div>
</template>

<style scoped>

  ul.a{
    list-style-type:circle;
  }

  table {
    width: 370px;
    text-align: justify;
    border-collapse: collapse;
  }

  th {
    background-color: #42b983;
    color:white;
  }
  table , th ,td {
    border: 1px solid #535886;
  }

  td {
    /*padding: 9px;*/
  }

  .testDiv {
    width: 170px;
    height: 140px;
    border: 1px solid green;
    text-align: center;
    float: left;
    /*padding: 25px;*/
    /*margin: 25px;*/
  }
</style>

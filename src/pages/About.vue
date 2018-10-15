<template>
	<div>
  <table>
    <tr>
      <th>firstName</th>
      <th>lastName</th>
    </tr>
    <tr>
      <td>Y</td>
      <td>😜</td>
    </tr>
    <tr>
      <td>B</td>
      <td>😡</td>
    </tr>
  </table>

    <div class="testDiv">
      fdsafadsfads
    </div>
    <div class="testDiv">
      fdsfasdf
    </div>
    <div class="testDiv">
      fdsfasdf
    </div>
    <div class="testDiv">
      fdsfasdf
    </div>
    <div class="testDiv">
      fdsfasdf
    </div>
    <div class="testDiv">
      fdsfasdf
    </div>
    <div class="testDiv">
      fdsfasdf
    </div>

    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>

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

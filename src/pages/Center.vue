<template>
  <div class="container">
    <h2>图片卡片</h2>
    <p>图片在头部 (card-img-top):</p>
    <div class="card" style="width:400px">
      <img class="card-img-top" src="https://static.runoob.com/images/mix/img_avatar.png" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div>
    <br>

    <p>图片在底部(card-img-bottom):</p>
    <div class="card" style="width:400px">
      <div class="card-body">
        <h4 class="card-title">Jane Doe</h4>
        <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
      <img class="card-img-bottom" src="https://static.runoob.com/images/mix/img_avatar.png" alt="Card image" style="width:100%">
    </div>
  </div>
</template>

<style scoped>
.center-nav{
	color: green;
	font-size: 20px;
}
	
</style>

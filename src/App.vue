<template>
  <div id="app">
    <div>Hello</div>
    <div>
      <i class="iconfont iconwenda"></i>
      <van-button type="primary" class="box1">主要按钮</van-button>
      <div class="box"></div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
.box{
  width: 350px;
  height: 64px;
  background-color: pink;
}
.box1{
  width: 375px!important;
}
</style>

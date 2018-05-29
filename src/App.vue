<template>
  <div id="app">
    <ul class="footer">
      <li class="act">首页</li>
      <li>首页1</li>
      <li>首页2</li>      
    </ul>
    <router-view/>
    <div class="spare"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@r:37.8rem;
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60/@r;
}
.footer{
  font-size: 16/@r;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 50/@r;
  line-height: 50/@r;
  background: #fff;
  position: fixed;
    bottom: 0;
    width: 100%;
  li{
    width: 33.3%;
    float: left;
    &.act{
      background: #ccc;

    }
  }
}
.spare{
  height: 50/@r;
}
</style>

<template>
  <div class="hello">
    <div class='box' v-for="k in 10" :key="k">
      {{k}}
    </div>
  

  </div>
</template>
<script scoped>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped   lang="less">
@r:37.8rem;
*{
  margin: 0;
  padding: 0;
}
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
.box{
  width: 170/@r;
  height: 170/@r;
  background: #f00;
  font-size: 16/@r;
  float: left;
  margin: 15/@r 5/@r 0 10/@r;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">

body{
  font-size: 0.28rem;
  width: 100%;
  max-width: 640px !important;
  margin: 0 auto !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-nav-bar--fixed {
  max-width: 640px;
}
@media screen and (min-width: 640px){
  .van-nav-bar--fixed {
    left:50% !important;
    margin-left:-320px;
  }
}
</style>


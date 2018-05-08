<template>
  <div id="app">
    <Header></Header>
    <!-- <div>
      <router-link to='/'>index</router-link>
      <router-link to='/first'>firstPage</router-link>
      <router-link to='/second'>secondPage</router-link>
    </div> -->
    <div class="wrap">
      <router-view/>
    </div>

    <myFooter></myFooter>
  </div>
</template>

<script>
import Header from './components/header'
import myFooter from './components/my-footer'

export default {
  name: 'App',
  components: {
    Header,
    myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.wrap {
  min-height: calc(100% - 100px);
}
</style>

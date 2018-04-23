<template>
  <div id="app">
    <Header></Header>
    <div>
      <router-link to='/'>index</router-link>
      <router-link to='/first'>firstPage</router-link>
      <router-link to='/second'>secondPage</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: 'App',
  components: {
    Header
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
}
</style>

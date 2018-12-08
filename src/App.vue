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
    <myFooter>
      <span @click="slotClickEvent" slot="firstSlot">this is first slot</span>
      <span @click="slotClickEvent" slot="secondSlot">this is second slot</span>
    </myFooter>
  </div>
</template>

<script>
  import { Header } from './components'
  import myFooter from './components/my-footer'
  /* eslint-disable */
  export default {
    name: 'App',
    components: {
      Header,
      myFooter
    },
    methods: {
      slotClickEvent() {
        console.log('this is a slot')
      }
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

  .wrap {
    height: 100vh;
  }
</style>

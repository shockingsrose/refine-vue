<template>
  <nav>
    <div class="container">
      <span class="float-l">精细化分析工具</span>
      <ul>
        <li :class="{'active':navState.user}" @click="switchNav(0)">
          <router-link to='/'>用户</router-link>
        </li>
        <li :class="{'active':navState.analysis}" @click="switchNav(1)">
          <router-link to='/'>分析</router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>
<script>
export default {
  name: 'div_header',
  data () {
    return {
      msg: 'this is a vue components——header',
      navState: {
        user: true,
        analysis: false
      }
    }
  },
  // computed () {},

  methods: {
    switchNav (index) {
      switch (index) {
        case 0:
          this.navState.user = true
          this.navState.analysis = false
          break
        case 1:
          this.navState.user = false
          this.navState.analysis = true
          break
        default:
          break
      }
    }
  }
}
</script>
<style scoped>
nav {
  height: 50px;
  line-height: 50px;
  background-color: #354052;
  color: #fff;
}
nav ul {
  display: inline-block;
  font-size: 0;
}
nav ul li {
  width: 60px;
}
nav ul li a {
  font-size: 16px;
  color: #fff;
}
nav ul li:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);
}
nav ul li.active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>

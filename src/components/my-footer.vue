<template>
    <footer>{{text}}</footer>
</template>

<script>
export default {
  data () {
    return {
      text: 'this is a footer'
    }
  }
}
</script>

<style scoped>
footer {
  height: 50px;
  line-height: 50px;
  background-color: #354052;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
</style>

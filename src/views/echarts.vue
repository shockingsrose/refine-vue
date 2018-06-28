<template>
  <div id="box">
    <div class="space-30"></div>
    <lineChart></lineChart>
  </div>
</template>

<script>
import lineChart from '../components/line-chart'
export default {
  data () {
    return {
      msg: 'this is echarts'
    }
  },
  components: {
    lineChart
  }
}
</script>

<style scoped>
#box {
  min-height: 1000px;
}
</style>

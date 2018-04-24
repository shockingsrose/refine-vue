<template>
    <div id="myChart" :style="{height:'500px'}"></div>
</template>

<script>
export default {
  data () {
    return {
      echarts: this.$echarts
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      let option = {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['注册事件', '登录事件', '付款事件']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '注册事件',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '登录事件',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '付款事件',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      myChart.setOption(option)

      window.onresize = myChart.resize
    }
  }
}
</script>

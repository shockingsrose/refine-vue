<template>
  <div>
    <!-- <div @click='drawLine'>click</div> -->
    <div :id="chart" :style="{height:'500px'}"></div>
  </div>
</template>

<script>
export default {
  props: ['dataList', 'name', 'dateList', 'chart'],
  data () {
    return {
      echarts: this.$echarts
    }
  },

  mounted () {},
  watch: {
    // 当数据加载后，再执行画图函数
    dataList (curVal, oldVal) {
      this.drawLine()
    }
  },
  computed: {
    datas: function () {
      return this.dataList
    },
    dates: function () {
      return this.dateList
    }
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById(this.chart))
      let option = {
        title: {
          text: `${this.name}折线图`
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [this.name]
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
          data: this.dates
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: this.name,
            type: 'line',
            stack: '总量',
            data: this.datas
          }
        ]
      }
      myChart.setOption(option)

      window.onresize = myChart.resize
    }
  }
}
</script>

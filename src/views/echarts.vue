<template>
  <div id="box">
    <div class="space-30"></div>
    <lineChart :data-list=registerData.dataList :date-list=registerData.dateList name='注册事件' chart='chart1'></lineChart>
    <lineChart :data-list=loginData.dataList :date-list=loginData.dateList name='登录事件' chart='chart2'></lineChart>
    <lineChart :data-list=payData.dataList :date-list=payData.dateList name='付款事件' chart='chart3'></lineChart>
  </div>
</template>

<script>
import lineChart from '../components/line-chart'
export default {
  data () {
    return {
      msg: 'this is echarts',
      registerData: { dataList: [], dateList: [] },
      loginData: { dataList: [], dateList: [] },
      payData: { dataList: [], dateList: [] }
    }
  },
  mounted () {
    this.getRegisterData()
    this.getLoginData()
    this.getPayData()
  },
  computed: {},
  methods: {
    getRegisterData () {
      this.$axios({
        url: 'http://localhost:3000/data/register',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        let data = res.data
        if (data && data.length > 0) {
          let o = {}
          for (const element of data) {
            let date = element.createTime.split(' ')[0]
            if (!o[date]) {
              o[date] = element.times
            } else {
              o[date] += element.times
            }
          }
          for (const key in o) {
            this.registerData.dateList.push(key)
            this.registerData.dataList.push(o[key])
          }
        }
      })
    },
    getLoginData () {
      this.$axios({
        url: 'http://localhost:3000/data/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        let data = res.data
        if (data && data.length > 0) {
          let o = {}
          for (const element of data) {
            let date = element.loginTime.split(' ')[0]
            if (!o[date]) {
              o[date] = element.times
            } else {
              o[date] += element.times
            }
          }

          for (const key in o) {
            this.loginData.dateList.push(key)
            this.loginData.dataList.push(o[key])
          }
        }
      })
    },
    getPayData () {
      this.$axios({
        url: 'http://localhost:3000/data/pay',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        let data = res.data
        if (data && data.length > 0) {
          let o = {}
          for (const element of data) {
            let date = element.payTime.split(' ')[0]
            if (!o[date]) {
              o[date] = element.times
            } else {
              o[date] += element.times
            }
          }

          for (const key in o) {
            this.payData.dateList.push(key)
            this.payData.dataList.push(o[key])
          }
        }
      })
    }
  },

  components: {
    lineChart
  }
}
</script>

<style scoped>

</style>

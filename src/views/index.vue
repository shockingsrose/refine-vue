<template>
  <div>
    <!-- <slot name='header'></slot> -->

    <div :class="{'container-fluid':true}">
      <div class="space-20"></div>
      <div class="inline-left font-18">注册统计 人数:{{registerCount}}</div>
      <div class="space-20"></div>
      <!-- 表格 -->
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <th>序号</th>
            <th>用户IP</th>
            <th>访问时间</th>
            <th>访问次数</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in registerList" :key="index">
              <td>{{index + 1}}</td>
              <td>{{item.userCode}}</td>
              <td>{{item.createTime}}</td>
              <td>{{item.times}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div :class="{'container-fluid':true}">
      <div class="space-20"></div>
      <div class="inline-left font-18">登录统计 人数:{{loginCount}}</div>
      <div class="space-20"></div>
      <!-- 表格 -->
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <th>序号</th>
            <th>用户IP</th>
            <th>访问时间</th>
            <th>访问次数</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in loginList" :key="index">
              <td>{{index + 1}}</td>
              <td>{{item.userCode}}</td>
              <td>{{item.loginTime}}</td>
              <td>{{item.times}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div :class="{'container-fluid':true}">
      <div class="space-20"></div>
      <div class="inline-left font-18">付款统计 人数:{{payCount}}</div>
      <div class="space-20"></div>
      <!-- 表格 -->
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <th>序号</th>
            <th>用户IP</th>
            <th>访问时间</th>
            <th>访问次数</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in payList" :key="index">
              <td>{{index + 1}}</td>
              <td>{{item.userCode}}</td>
              <td>{{item.payTime}}</td>
              <td>{{item.times}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      msg: 'index',
      registerList: null,
      loginList: null,
      payList: null,
      registerCount: null,
      loginCount: null,
      payCount: null
    }
  },
  mounted () {
    this.getRegisterData()
    this.getLoginData()
    this.getPayData()
  },
  methods: {
    getRegisterData () {
      this.$axios({
        url: 'http://localhost:3000/data/register',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        this.registerList = res.data
        this.registerCount = this.registerList.length
      })
    },
    getLoginData () {
      this.$axios({
        url: 'http://localhost:3000/data/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        this.loginList = res.data
        this.loginCount = this.loginList.length
      })
    },
    getPayData () {
      this.$axios({
        url: 'http://localhost:3000/data/pay',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        this.payList = res.data
        this.payCount = this.payList.length
      })
    }
  }
}
</script>

<style scoped>
th {
  text-align: center;
  font-weight: 900;
  padding: 8px;
}
</style>

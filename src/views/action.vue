<template>
    <div class="container">
        <div class="space-50"></div>
        <div class="row">
            <div class="col-md-4">
                <span class="inline-block btn" @click='register'>注册按钮</span>
            </div>
            <div class="col-md-4">
                <span class="inline-block btn" @click='login'>登录按钮</span>
            </div>
            <div class="col-md-4">
                <span class="inline-block btn" @click='pay'>付款按钮</span>
            </div>
        </div>
    </div>
</template>
<script>
// config

export default {
  data () {
    return {
      msg: '用户操作页面'
    }
  },
  methods: {
    register () {
      //   console.log('点击注册按钮')
      this.$axios({
        url: 'http://localhost:3000/action/register',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        let data = res.data
        if (data.Code === 1) alert('注册成功')
      })
    },
    login () {
      //   console.log('点击登录按钮')
      this.$axios({
        url: 'http://localhost:3000/action/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        let data = res.data
        if (data.Code === 1) alert('登录成功')
      })
    },
    pay () {
      this.$axios({
        url: 'http://localhost:3000/action/pay',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        let data = res.data
        if (data.Code === 1) alert('付款成功')
      })
    }
  }
}
</script>
<style scoped>
.btn {
  width: 150px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  transition: all 0.2s;
  border: 1px solid #ccc;
  padding: 0;
}
.btn:hover {
  background-color: cornflowerblue;
  color: #fff;
}
</style>

<template>
  <div>
    <!-- <slot name='header'></slot> -->

    <div :class="{'container-fluid':true}">
      <div class="space-20"></div>
      <div class="inline-left font-18">人数:{{peopleCount}}</div>
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
            <tr v-for="(item, index) in list" :key="index">
              <td>{{index + 1}}</td>
              <td>{{item.IP}}</td>
              <td>{{item.createTime}}</td>
              <td>{{item.times}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>index里的value为： {{value}}</div>
    <button @click="handleSyncChange">点击改变父组件的value</button>
    <sync :value.sync="value"></sync>

    <validate></validate>
  </div>

</template>
<script>
  import data from '../assets/json/list.json'
  import sync from '../components/sync'
  import validate from '../components/validate.vue'

  export default {
    components: { sync, validate },
    data() {
      return {
        msg: 'index',
        list: data.list,
        value: '父组件的value',
      }
    },
    computed: {
      peopleCount() {
        return this.list.length
      },

    },
    methods: {
      handleSyncChange() {
        this.value = '父组件改变了value'
      }

    }
  }
</script>

<style scoped>
  .container-fluid {
  	min-height: 1000px;
  }
  th {
  	text-align: center;
  	font-weight: 900;
  	padding: 8px;
  }
</style>

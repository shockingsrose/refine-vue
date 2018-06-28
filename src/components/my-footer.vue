<template>
  <footer>
    <p>
      <button @click="commitAdd">+</button>
      <span>{{numCount + name}}</span>
      <span>{{count}}</span>
      <button @click="commitMinus">-</button>
      <slot name="secondSlot"></slot>

    </p>

  </footer>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      message: 'this is a footer'
    }
  },
  computed: {
    ...mapState('state', ['count', 'name']),
    ...mapGetters('state', ['numCount'])
  },
  methods: {
    // ...mapActions('state', ['commitAdd', 'commitMinus'])
    commitAdd() {
      this.$store.dispatch('state/commitAdd', 12);
    },
    commitMinus() {
      this.$store.dispatch('state/commitMinus');
    },


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
button {
  width: 50px;
  background: inherit;
  border-color: transparent;
}
</style>

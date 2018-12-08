<template lang="pug">
    div(style="height:1000px")
        Button(type="info", @click="show = !show") 切换
        transition(name="fade")
            div(v-show="show", appear)
                div(style="width:100%;height:500px;background: yellow;")
        Button(type="success", @click="aqua = !aqua") 原生切换
        div(id="nativeDiv", :class="{'transitionColor': aqua, 'init': true}")            

</template>

<script>
    export default {
        data() {
            return {
                show: true,
                nativeDiv: null,
                aqua: false,
            }
        },
        mounted() {
            const ele = document.querySelector('#nativeDiv');
            ele.addEventListener('transitionstart', (args) => {
                console.log(args);
            })
            ele.addEventListener('transitionend', (args) => {
                console.log(args);
            })
        },
        methods: {
            toggle() {
                this.aqua = !this.aqua;
                console.log(this.aqua)
            }
        }
    }
</script>
<style scoped>
    .init {
      width: 300px;
      height: 300px;
      background: #000;
      transform: scale(0);
      transition: all 1s linear;
    }
    .transitionColor {
      background-color: aqua;
      transform: scale(1);
      transition: all 1s linear;
    }
</style>



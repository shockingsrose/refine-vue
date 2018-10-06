<template lang="pug">
  div.modal(v-show="value")
    div.mask(@click="closeModal")
    div.body
        slot(name="title")
        slot(name="content")
        slot(name="footer")

</template>

<script>
    export default {
        name: 'cModal',
        props: {
            value: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: 'title',
            },
            draggable: {
                type: Boolean,
                default: false,
            },
            width: {
                type: Number,
                default: 400,
            },
        },
        data() {
            return {}
        },
        methods: {
            closeModal() {

            },
        },
        watch: {
            value(val) {
                this.$emit('input', val);
            },
        }
    };
</script>

<style scoped>
    .modal {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      z-index: 999;
    }
    .mask {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
</style>

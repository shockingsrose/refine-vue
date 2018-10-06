<template lang="pug">
    div
        p props里的value为： {{value}}
        button(@click="handleClick") 点击改变value的值
</template>
<script>
    export default {
        props: {
            value: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                toggle: false
            }
        },
        methods: {
            handleClick() {
                this.toggle = !this.toggle;
                this.$emit('update:value', this.toggle ? '子组件value' : '父组件value');
            }
        }
    }
</script>

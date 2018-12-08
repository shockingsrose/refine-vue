<template lang="pug">
    div
        p 这是第{{index}}个组件
        Button(type="primary", @click="del") 删除
        Input(type="text", v-model="value")
</template>

<script>
    export default {
        props: {
            index: {
                type: Number | String,
                default: 0,
            }
        },
        data() {
            return {
                date: new Date(),
                value: 0,
            }
        },
        methods: {
            del() {
                this.$emit('del', this.index);
            }
        },
        created() {
            console.log('created');
        }
    }
</script>


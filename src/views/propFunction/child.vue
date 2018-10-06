<template lang="pug">
    //- Modal(v-model="show")
    Button(type="info", @click="func('child')") 修改名字
</template>

<script>    
    export default {
        inject: ["parent"],
        props: {
            func: {
                type: Function,
            },
            value: {
                type: Boolean,
                default: false,
            },
            data: {
                type: [Array, Object],
            }
        },
        data() {
            return {
                show: false,
            }
        },
        watch: {
            value(val) {
                this.show = val;
            },
            show(val) {
                this.$emit('input', val);
            }
        },
        created() {
            console.log(this.func);
            console.log(this.parent);
        },
    }
</script>

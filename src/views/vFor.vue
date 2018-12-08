<template lang="pug">
    div
        ul
            li(v-for="(item, index) in list", :key="item")
                span {{item.value}}
                Button(@click="remove(index)") 删除

</template>

<script>
    export default {
        data() {
            return {
                list: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 },]
            }
        },
        methods: {
            remove(index) {
                this.list.splice(index, 1);
            }
        }
    }
</script>


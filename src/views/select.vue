<template lang="pug">
    div
        Select( v-model="selectItem", filterable)
            Option(v-for="item in list", :value="item.value", :key="item.value") {{item.label}}
</template>

<script>
    export default {
        data() {
            return {
                selectItem: '',
                list: []
            }
        },
        created() {
            for (let i = 0; i < 10; i++) {
                this.list.push({ label: `${i * 10}`, value: i })
            }
        }
    }
</script>

<template>
    <div>
        <test v-for="(item,index) in list" :key="index">
            <button @click="remove(index)">delete{{index+1}}</button>
        </test>
        <button @click="add()">add</button>
    </div>
</template>

<script>
    import record from './text'
    import test from './test';
    export default {
        components: { record, test },
        data() {
            return {
                list: []
            }
        },
        methods: {
            add: function () {
                this.list.push({ value: 1, date: Date.now() });
            },
            remove: function (index) {
                console.log(index);
                this.list.splice(index, 1);
            }
        }
    }
</script>

<template lang="pug">
    div
        p(v-for="item in arr", v-if="item.age > 13") {{item.name}}
</template>

<script>
    export default {
        data() {
            return {
                arr: [{ name: 'hehe', age: 12 }, { name: 'maybe', age: 34 }, { name: 'ame', age: 56 }],
            }
        }
    }
</script>

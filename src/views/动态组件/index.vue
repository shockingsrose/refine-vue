<template lang="pug">
    div
        Button(type="primary", @click="add") 新增component
        component(:is="componentA", :index="index", v-for="(componentA, index) in list",:key="Math.random(index)", @del="del")
</template>

<script>
    import componentA from './component.vue';

    export default {
        name: 'keep alive',
        components: { componentA },
        data() {
            return {
                list: [],
            }
        },
        methods: {
            add() {
                // this.list.push({ component: componentA, show: true })
                this.list.push(componentA)
            },
            del(index) {
                // this.list.forEach((element, i) => {
                //     if (i === index) {
                //         element.show = false
                //     }
                // });
                this.list.splice(index, 1)
            }
        }

    }
</script>

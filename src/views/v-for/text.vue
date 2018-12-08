<template lang="pug">
    div
        input(v-model="value" type="input")
        slot
        a(@click="change") {{a}}

</template>

<script>
    export default {
        created() {
            console.log('text created')
        },
        data() {
            return {
                a: "click Me!",
                value: Date.now()
            }
        },
        methods: {
            change: function () {
                this.a = "clicked";
            }
        }
    }
</script>

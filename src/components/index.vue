<template>
    <p>{{message}}</p>
</template>
<script>
    export default {
        props: {
            data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },

        data() {
            message: 'components index.vue'
        }
    }
</script>

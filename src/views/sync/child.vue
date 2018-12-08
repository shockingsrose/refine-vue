<template lang="pug">
    div

        Button(type="primary", @click="change") 冠军互换        
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
            }
        },
        methods: {
            change() {
                const data = {
                    champion: '勇士',
                    loser: '湖人',
                }
                this.$emit('update:data', data);
            },
        }
    }
</script>

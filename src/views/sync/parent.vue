<template lang="pug">
    div
        p 冠军：{{data.champion}}
        p 亚军：{{data.loser}}
        child(:data.sync="data")
</template>
<script>
    import child from "./child.vue";
    export default {
        components: { child },
        data() {
            return {
                data: {
                    champion: '湖人',
                    loser: '骑士',
                }
            }
        }
    }
</script>

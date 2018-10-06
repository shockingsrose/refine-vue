<template lang="pug">
    div(style="height:1000px")
        Button(type="info", @click="show = !show") 切换
        transition(name="fade")
            div(v-show="show", appear)
                div(style="width:100%;height:500px;background: yellow;")

</template>

<script>
    export default {
        data() {
            return {
                show: true,
            }
        },
        methods: {
        }
    }
</script>


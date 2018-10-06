<template lang="pug">
    div(@click="clickEvent", style="height:500px; width: 500px; background: yellow;")
        Button(type="info", @click.self="childEvent") 内部按钮
</template>

<script>
    export default {
        methods: {
            clickEvent(e) {
                console.log(e);
            },
            childEvent() {
                console.log(`click 内部`);
            }
        }
    }
</script>


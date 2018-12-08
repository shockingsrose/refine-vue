<template>
    <div>
        <span>{{date}}</span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: Date.now(),
            };
        },
        // 1
        updated() {
            console.log(this.date);
        },
    }
</script>


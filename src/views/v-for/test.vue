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
        updated() {
            console.log(this.date);
        },
    }
</script>


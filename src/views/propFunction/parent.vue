<template lang="pug">
    div
        p {{name}}
        child(:func="changeName", value)

</template>

<script>
    import child from './child.vue';
    export default {
        components: { child },
        data() {
            return {
                name: 'parent',
            }
        },
        methods: {
            changeName(name) {
                this.name = name;
                console.log(this);
            }
        },
        provide: {
            parent: 'parents data',
        },
    }
</script>


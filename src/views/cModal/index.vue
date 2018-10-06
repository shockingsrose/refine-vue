<template lang="pug">
    div(style="height:1000px;")
        p {{name}}
        Button(type="info", @click="showModal()") 显示cModal
        cModal(v-model="modal.show", title="可拖拽的Modal", :width="500", draggable)
            template(slot="content")
                p content

</template>

<script>
    import cModal from './cModal.vue';
    export default {
        components: { cModal },
        data() {
            return {
                name: 'parent',
                modal: {
                    show: false,
                }
            }
        },
        methods: {
            showModal() {
                this.modal.show = true;
            }
        },
        provide: {
            parent: 'parents data',
        },
    }
</script>


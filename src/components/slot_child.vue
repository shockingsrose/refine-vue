<template lang="pug">
    div 
        p {{rows.name}}
        p {{rows.age}}
        slot(name = 'slot1',:message="message",:status="status")
</template>

<script>
import image from '../mixin/image.js';
export default {
    mixins: { image },
    props: ['rows'],
    data() {
        return {
            message: 'this is a slot_child',
            status: true
        }
    }
}
</script>

<template lang="pug">
    div 
</template>

<script>
    export default {
        created() {
            // this.onwheel();
            this.onmouseWheel();
            this.onScroll();
        },
        methods: {
            onwheel() {
                window.addEventListener('wheel', () => {
                    console.log('onwheel')
                })
            },
            onmouseWheel() {
                window.addEventListener('mousewheel', () => {
                    console.log('mousewheel');
                })
            },
            onScroll() {
                window.addEventListener('scroll', () => {
                    console.log('scroll');
                })
            }
        }
    }
</script>


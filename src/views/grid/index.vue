<template>
    <div class-name="grid-container">
        <div v-for="(item) in list" :key="item.id" class="product-box">
            <div>
                <product :data="item"></product>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        methods: {
            play() {
                console.log('click play button');
                const audioElement = document.getElementById('audio');
                audioElement.play();
            }
        }
    }
</script>
<style scoped>
    .grid-container {
      display: grid;
      border: 10px solid #fff;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .product-box {
      margin-top: 19px;
      margin-bottom: 20px;
    }
</style>

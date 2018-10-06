<template lang="pug">
    div
        Button(@click="play") 点击播放 
        audio(src="http://www.w3school.com.cn/i/horse.mp3", id="audio")
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
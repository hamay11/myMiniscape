<template>
    <img :src="img" class="background" border="0" alt="background">
</template>

<script>
import backgroundImg from '@/static/background.jpg';

export default {
    data () {
        return {
            img: backgroundImg,
        };
    },
};
</script>

<style>
.background {
  max-width: 100%;
  max-height: 100%;
}
</style>

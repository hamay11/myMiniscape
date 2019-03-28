<template>
    <img :src="img" class="background" border="0" alt="background">
</template>

<script>
import backgroundImg from '@/assets/background.png';

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

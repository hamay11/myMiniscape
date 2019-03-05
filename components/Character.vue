<template>
    <img :src="require('../assets/' + img)" :alt="alt" class="character" border="0">
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
      // default: 'kamanosuke.png',
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.character {
  position: absolute;
  width: 30vw;
  top: 70%; /* TODO: configから受け取るようにしたい */
  left: 10%; /* TODO: 同上 */
}
</style>

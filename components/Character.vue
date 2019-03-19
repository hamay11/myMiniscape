<template>
    <img :src="require('../assets/' + img)" :alt="alt" :style="position" class="character" border="0">
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    position: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.character {
  position: absolute;
  width: 30%;
}
</style>

<template>
    <img :src="img" :alt="alt" :style="position" :class="id" class="character" border="0">
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
    id: {
      type: String,
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

.kurosuke {
  width: 25%;
}
</style>

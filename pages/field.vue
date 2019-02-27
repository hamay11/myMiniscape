<template>
  <section class="container">
    <Field />
  </section>
</template>

<script>
import Field from '@/components/Field.vue';

export default {
  components: {
    Field,
  },
};
</script>

<style>
.container {
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>

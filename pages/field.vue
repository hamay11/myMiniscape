<template>
  <section class="container">
    <div class="container characterContainer">
    <Kamanosuke />
      </div>
    <div class="container backgroundContainer">
      <Field />
    </div>
  </section>
</template>

<script>
import Field from '@/components/Field.vue';
import Kamanosuke from '@/components/Kamanosuke.vue';

export default {
  components: {
    Field,
    Kamanosuke,
  },
};
</script>

<style>

</style>

<template>
  <section class="main">
    <div class="container layer_character">
      <Character :img="atTheGarden.img" :alt="atTheGarden.name" />
    </div>
    <div class="container layer_background">
      <Field />
    </div>
  </section>
</template>

<script>
import Field from '@/components/Field.vue';
import Character from '@/components/Character.vue';
import { characters, } from '@/static/config.js';

export default {
  components: {
    Field,
    Character,
  },
  data: function () {
    return {
      atTheGarden: characters.kamanosuke,
    };
  },
};
</script>

<style>
.main {
  height: 100vh; /* TODO: PCのときもスマホくらいのサイズが出るようにしたい */
  width: 100vw; /* TODO: PCのときもスマホくらいのサイズが出るようにしたい */
  position: relative;
}

.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  text-align: center;
}

.layer_character {
  z-index: 1;
}
.layer_background {
  z-index: 0;
}
</style>

<template>
  <section class="main">
    <div class="container layer_character">
      <Character v-if="atTheGarden" :img="atTheGarden.img" :alt="atTheGarden.name" />
    </div>
    <div class="container layer_background">
      <Field />
    </div>
  </section>
</template>

<script>
import Field from '@/components/Field.vue';
import Character from '@/components/Character.vue';
import { characters, positions, } from '@/static/config.js';

export default {
  components: {
    Field,
    Character,
  },
  data: function () {
    const getRandomInt = (rare) => Math.floor(Math.random() * Math.floor(rare + 1));
    // TODO: これだと配列前方の要素の方がより出現率が高いことになるので、出現率の傾斜の付け方は大いに検討の余地あり
    const getAtTheGardenChara = () => 
      Object.keys(characters).find(chara => 
        characters[chara].position.key === positions.atTheGarden.key
        && getRandomInt(characters[chara].rare) === 0);
    return {
      atTheGarden: characters[getAtTheGardenChara()],
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

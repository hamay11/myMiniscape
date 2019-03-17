<template>
<div>
  <button class="button reload" @click="setFieldCharacter">RELOAD</button>
  <div class="container layer_character" @click="addCharacter(characterId)">
      <Character v-if="atTheGarden" :img="atTheGarden.img" :alt="atTheGarden.name" />
  </div>
  <div class="container layer_background">
    <Field />
  </div>
</div>
</template>

<script>
import { mapMutations, } from 'vuex';
import Field from '@/components/Field.vue';
import Character from '@/components/Character.vue';
import { characters, positions, } from '@/static/config.js';

export default {
  components: {
    Field,
    Character,
  },
  // data: function () {},
  computed: {
    atTheGarden () {
      const charaId = this.$store.state.master.characters.field[positions.atTheGarden.key];
      console.log(charaId);
      return characters[charaId];
    },
    characterId () {
      // position.keyを受け取って返すようにしたい
      return this.$store.state.master.characters.field[positions.atTheGarden.key];
    },
  },
  mounted() {
    console.log('mounted');
    console.log(this.$store.state.master.characters.list);
    this.setFieldCharacter();
  },
  updated() {
    console.log(this.$store.state.master.characters.list);
  },
  methods: {
    ...mapMutations({
      setFieldCharacter: 'master/setFieldCharacter',
      addCharacter: 'master/addCharacter',
    }),
  },
};
</script>

<style>
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

.reload {
  top: 96px;
  left: 56px;
}
</style>

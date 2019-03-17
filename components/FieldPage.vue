<template>
<div class="main">
  <button class="button reload" @click="setFieldCharacter">RELOAD</button>
  <div class="container layer_character">
    <div
      v-for="position in positionKeys"
      :key="position"
      @click="addCharacter(characterId(position))">
        <Character
          v-if="getCharacter(position)"
          :img="getCharacter(position).img"
          :alt="getCharacter(position).name"
          :position="getCharacter(position).positionStyle"
        />
    </div>
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
    positionKeys: function() {
      return Object.keys(positions);
    },
  },
  mounted() {
    this.setFieldCharacter();
  },
  updated() {
    // console.log(this.$store.state.master.characters.list);
  },
  methods: {
    ...mapMutations({
      setFieldCharacter: 'master/setFieldCharacter',
      addCharacter: 'master/addCharacter',
    }),
    getCharacter: function(position) {
      const charaId = this.$store.state.master.characters.field[positions[position]];
      return characters[charaId];
    },
    characterId: function(position) {
      // positionを受け取って返すようにしたい
      return this.$store.state.master.characters.field[positions[position]];
    },
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

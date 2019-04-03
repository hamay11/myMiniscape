<template>
<div>
  <button class="button reload" @click="setFieldCharacter"><ReloadIcon /></button>
  <div class="container layer_character">
    <div
      v-for="position in positionKeys"
      :key="position"
      @click="onClickCharacter(characterId(position))">
        <Character
          v-if="getFieldCharacter(position)"
          :img="getFieldCharacterImg(position)"
          :alt="getFieldCharacter(position).name"
          :position="getFieldCharacter(position).positionStyle"
        />
    </div>
    <transition name="fade">
      <Modal v-if="isModalOpen()" :character="getCharacter(modalCharacter)"/>
    </transition>
  </div>
  <div class="container layer_background">
    <Field />
  </div>
</div>
</template>

<script>
import { mapMutations, mapGetters, } from 'vuex';
import Field from '@/components/Field.vue';
import Character from '@/components/Character.vue';
import { characters, positions, } from '@/static/config.js';
import ReloadIcon from '@/components/Icons/ReloadIcon.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Field,
    Character,
    ReloadIcon,
    Modal,
  },
  // data: function () {},
  computed: {
    positionKeys: function() {
      return Object.keys(positions);
    },
    modalCharacter: function() {
      console.log(this.$store.state.master.ui.modal.chara);
      return this.$store.state.master.ui.modal.chara;
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
      openModal: 'master/openModal',
    }),
    ...mapGetters({
      isModalOpen: 'master/isModalOpen',
    }),
    getCharacter: function(id) {
      return characters[id];
    },
    getFieldCharacter: function(position) {
      const charaId = this.$store.state.master.characters.field[positions[position]];
      return characters[charaId];
    },
    characterId: function(position) {
      // positionを受け取って返すようにしたい
      return this.$store.state.master.characters.field[positions[position]];
    },
    onClickCharacter: function(characterId) {
      const isNew = !this.$store.state.master.characters.list.includes(characterId);
      this.openModal({
        chara: characterId,
        isNew,
      });
      this.addCharacter(characterId);
    },
    getFieldCharacterImg: function(position) {
      const chara = this.getFieldCharacter(position);
      return chara.subImg ? chara.subImg : chara.img;
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
  bottom: 72px;
  right: 16px;
}

/* animation */
.fade-enter .modal, .fade-leave-to .modal {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-to .modal, .fade-leave .modal {
  opacity: 1;
  transform: scale(1);
}
</style>

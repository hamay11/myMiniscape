<template>
    <ul class="characterList">
      <li v-for="name in Object.keys(characterNames)" :key="name" class="characterList__item">
        <div v-if="captured.includes(name)" class="characterList__item__box" @click="openModal(name)">
          <div class="characterList__item__img">
          <img
            :src="characterObject(name).img"
            :style="{ height: 100 + '%' }"
            border="0"
          />
          </div>
          <div class="characterList__item__name">
            {{ characterObject(name).name }}
          </div>
        </div>
      </li>
      <Modal v-if="isModalOpen" :character="getCharacter(modalCharacter)" />
    </ul>
</template>

<script>
import { mapMutations, } from 'vuex';
import { characterNames,characters, } from '@/static/config.js';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
    computed: {
        captured () {
          return this.$store.state.master.characters.list;
        },
        characterNames () { 
          return characterNames;
        },
        isModalOpen: function() {
          return this.$store.state.master.ui.modal !== ''; 
        },
        modalCharacter: function() {
          return this.$store.state.master.ui.modal;
        },
    },
    mounted() {
        console.log(this.$store.state.master.characters.list);
    },
    methods: {
    ...mapMutations({
      openModal: 'master/openModal',
    }),
        getCharacter: function(id) {
      return characters[id];
    },
        characterObject: (name) => characters[name],
    },
};
</script>

<style>
.characterList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px;
  background: #fff;
  overflow: auto;
}

.characterList__item {
  position: relative;
  display: block;
  width: 48%;
  height: 32%;
  background: #ffd583;
  border-radius: 6%;
  text-align: center;
  margin-bottom: 8px;
}

.characterList__item__box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 16px 8px;
  cursor: pointer;
}

.characterList__item__img {
  height: 80%;
  line-height: 16vh;
  vertical-align: middle;
}

.characterList__item__name {
  color: #fff;
  width: 100%;
  border-bottom: 1px solid #fff;
}
</style>
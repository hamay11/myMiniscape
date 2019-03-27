<template>
  <div>
  <div class="overlay" @click="closeModal" />
  <div class="modal">
      <img
        :src="require('../assets/' + character.img)"
        :style="{ height: 70 + '%' }"
        border="0"
      />
      <div>{{ character.name }}</div>
      <div>{{ character.description }}</div>
      <button class="close" @click="closeModal">x</button>
  </div>
  </div>
</template>

<script>
import { mapMutations, } from 'vuex';
// import { characterNames, characters, }from '@/static/config.js';

export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
    methods: {
      ...mapMutations({
        closeModal: 'master/closeModal',
      }),
    },
};
</script>

<style>
.overlay {
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modal {
    box-sizing: border-box;
    padding: 8px;
    position: absolute;
    z-index: 25;
    width: 70%;
    height: 60%;
    top: 20%;
    left: 15%;
    border: 2px solid #fff;
    border-radius: 4px;
    background: #ffd583;
    text-align: center;
    box-shadow: 2px 2px 2px 2px rgba(75, 75, 75, .2);
}
</style>

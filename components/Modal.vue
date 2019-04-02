<template>
<div>
  <div class="overlay" @click="closeModal" />
  <div class="modal">
      <img
        :src="character.img"
        :style="{ height: 70 + '%' }"
        border="0"
      />
      <div>{{ character.name }}</div>
      <div>「{{ character.description }}」</div>
      <button class="close" @click="closeModal">
          <CloseIcon />
          <span>とじる</span>
      </button>
    </div>
</div>
</template>

<script>
import { mapMutations, } from 'vuex';
import CloseIcon from '@/components/Icons/CloseIcon.vue';
// import { characterNames, characters, }from '@/static/config.js';

export default {
  components: {
    CloseIcon,
  },
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
    align-self: center;
    transition: all .3s ease;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 24px;
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
    align-items: center;
    box-shadow: 2px 2px 2px 2px rgba(75, 75, 75, .2);

}

.close {
    display: flex;
    padding: 0;
    cursor: pointer;
    background: none;
    border: none;
    height: 12px;
    line-height: 12px;
    vertical-align: middle;
}
.close > span {
    margin-left: 4px;
    height: 12px;
    line-height: 12px;
}
</style>

<template>
  <div class="modal__wrapper" @click="closeModal">
    <div class="modal__overlay" />
    <div class="modal__content">
      <div v-if="isNew()" class="patch__new">new!</div>
      <div class="charaInfo__rare">{{ showRareWithStars(character.rare) }}</div>
      <img
        :src="character.img"
        :style="{ height: 70 + '%' }"
        border="0"
      />
      <div>{{ character.name }}</div>
      <div>「{{ character.description }}」</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters,} from 'vuex';
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
    ...mapGetters({
      isNew: 'master/isNew',
    }),
    showRareWithStars: function(rare) {
      if (rare === 0) {
        return '★★★★★';
      }
      const stars = [...Array(rare),].map(() => '★');
      return stars.join('');
    },
  },
};
</script>

<style>
.modal__wrapper {
    position: absolute;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 28px;
}

.modal__overlay {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(75, 75, 75, .2);
}

.modal__content {
    align-self: center;
    transition: all .3s ease;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 12% 4%;
    position: absolute;
    z-index: 25;
    width: 80%;
    height: 60%;
    top: 20%;
    left: 10%;
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

.patch__new {
    position: absolute;
    background: red;
    color: #fff;
    font-weight: bold;
    width: 28%;
    border-radius: 25% / 50%;
    height: 8%;
    line-height: 1.5;
    top: -12px;
    box-shadow: 1px 1px 1px 1px rgba(75, 75, 75, .2);
}

.charaInfo__rare {
    font-size: 30px;
}

/* 縦長 スマホサイズ*/
@media (orientation: portrait) and (max-width: 767px){
    .modal__wrapper {
      font-size: 100%;
    }
    .charaInfo__rare {
      font-size: 12px;
    }
}
</style>

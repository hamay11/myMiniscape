<template>
  <div class="ending">
    <div class="container layer_character">
      <button class="button reload button__ending" @click="onClickReload">
        <ReloadIcon class="reload__icon"/>
      </button>
      <img :src="colud1" class="ending__image cloud__1__sub" />
      <img :src="colud1" class="ending__image cloud__1" />
      <img :src="colud2" class="ending__image cloud__2" />
      <img :src="colud3" class="ending__image cloud__3" />
      <img :src="cloud4" class="ending__image cloud__4" />
      <div @click="onClickCharacter()">
        <Character
          :img="yukimura.img"
          :alt="yukimura.name"
          :position="yukimura.positionStyle"
          :id="yukimura.chara"
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
import anime from 'animejs';
import Field from '@/components/Field.vue';
import Character from '@/components/Character.vue';
import { characters, characterNames, } from '@/static/config.js';
import cloud1Img from '@/static/cloud1.png';
import cloud2Img from '@/static/cloud2.png';
import cloud3Img from '@/static/cloud3.png';
import cloud4Img from '@/static/cloud4.png';

export default {
  components: {
    Field,
    Character,
  },
  data() {
    return {
      yukimura: characters.yukimura,
      colud1: cloud1Img,
      colud2: cloud2Img,
      colud3: cloud3Img,
      cloud4: cloud4Img,
    };
  },
  computed: {},
  mounted() {
    this.$nextTick(function () {
      this.setAnimation();
    });
  },
  methods: {
    ...mapMutations({
      movePage: 'master/movePage',
      addCharacter: 'master/addCharacter',
      openModal: 'master/openModal',
    }),
    onClickCharacter: function() {
      console.log('onclick!');
      const isNew = !this.$store.state.master.characters.list.includes(characterNames.yukimura);
      this.openModal({
        chara: characterNames.yukimura,
        isNew,
      });
      this.addCharacter(characterNames.yukimura);
    },
    setAnimation: function(){
      anime({
        targets: '.cloud__1',
        easing: 'easeOutQuad',
        translateX: [
          { value: '0%', },
          { value: '60%', },
        ],
        duration: 6000,
        delay: 1000,
      });
      anime({
        targets: '.cloud__2',
        easing: 'easeOutQuad',
        translateX: [
          { value: '0%', },
          { value: '-50%', },
        ],
        duration: 4000,
      });
      anime({
        targets: '.cloud__3',
        easing: 'easeOutQuad',
        translateX: [
          { value: '0%', },
          { value: '30%', },
        ],
        duration: 4000,
      });
      anime({
        targets: '.cloud__4',
        easing: 'easeOutQuad',
        translateX: [
          { value: '0%', },
          { value: '-32%', },
        ],
        duration: 4000,
        delay: 500,
      });
      anime({
        targets: '.button__ending',
        delay: 7000,
      });
      // TODO: 最後にコンプリート！的なやつ出したい
      // TODO: fieldとlistに戻れるようにする
    },
  },
};
</script>

<style>
.ending {
  width: 100%;
  overflow: hidden;
}

.ending__image {
  position: absolute;
  z-index: 100;
  border: none;
}

.cloud__1 {
  top: 62%;
  left: 20%;
  width: 90%;
}

.cloud__1__sub {
  top: 16%;
  left: 16%;
  width: 90%;
}

.cloud__4 {
  top: 72%;
  left: -8%;
  width: 90%;
}

.cloud__2 {
  top: 48%;
  left: 8%;
  width: 80%;
}

.cloud__3 {
  top: 78%;
  left: 16%;
  width: 100%;
}

.button__ending {
  display: none;
}

/* 縦長 スマホサイズ*/
@media (orientation: portrait) and (max-width: 767px) {
}
</style>
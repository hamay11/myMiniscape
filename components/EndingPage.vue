<template>
  <div class="ending">
    <div class="finish">
      <p class="finish__text">クリア！</p>
    </div>
    <button class="button reload button__ending" @click="movePage">
      <ReloadIcon class="reload__icon"/>
    </button>
    <div class="container layer_character">
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
import { mapMutations, mapState, mapGetters, } from 'vuex';
import anime from 'animejs';
import Field from '@/components/Field.vue';
import Character from '@/components/Character.vue';
import ReloadIcon from '@/components/Icons/ReloadIcon.vue';
import { characters, characterNames, } from '@/static/config.js';
import cloud1Img from '@/static/cloud1.png';
import cloud2Img from '@/static/cloud2.png';
import cloud3Img from '@/static/cloud3.png';
import cloud4Img from '@/static/cloud4.png';

export default {
  components: {
    Field,
    Character,
    ReloadIcon,
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
  computed: {
    ...mapState({
      page: state => state.master.ui.page,
      characterList: state => state.master.characters.list,
      modal: state => state.master.ui.modal.chara,
    }),
  },
  watch: {
    page: function() {
      if ( this.page === 'ending') {
        this.setAnimation();
      }
    },
    modal: function() {
      if (!this.isModalOpen() && this.isClear()) {
        this.end();
      }
    },
  },
  methods: {
    ...mapMutations({
      movePage: 'master/movePage',
      addCharacter: 'master/addCharacter',
      openModal: 'master/openModal',
    }),
    ...mapGetters({
      isClear: 'master/isClear',
      isModalOpen: 'master/isModalOpen',
    }),
    onClickCharacter: function() {
      const isNew = !this.characterList.includes(characterNames.yukimura);
      this.openModal({
        chara: characterNames.yukimura,
        isNew,
      });
      this.addCharacter(characterNames.yukimura);
    },
    end: function() {
      // "CLEAR!"
      anime({
        targets: '.finish',
        width: '100%',
        easing: 'easeInOutQuad',
        duration: 1500,
      });
      anime({
        targets: '.finish__text',
        opacity: 1,
        delay: 700,
      });
      // fieldに戻るボタンをアニメーション終わってから表示する
      anime({
        targets: '.button__ending',
        delay: 500,
        opacity: 1,
      });
    },
    setAnimation: function(){
      anime({
        targets: '.cloud__1',
        easing: 'easeOutQuad',
        translateX: [
          { value: '0%', },
          { value: '64%', },
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
          { value: '-36%', },
        ],
        duration: 4000,
        delay: 500,
      });
    },
  },
};
</script>

<style>
.ending {
  width: 100%;
  overflow: hidden;
}

.finish {
  position: absolute;
  z-index: 101;
  border: none;
  background: #fff;
  opacity: 0.8;
  width: 0%;
  height: 10%;
  top: 24%;
  text-align: center;
}

.finish__text {
  font-family: 'kazuraki-sp2n';
  line-height: 10vh;
  font-size: 6vh;
  opacity: 0;
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
  top: 4%;
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
  opacity: 0;
}

/* 縦長 スマホサイズ*/
@media (orientation: portrait) and (max-width: 767px) {
}
</style>
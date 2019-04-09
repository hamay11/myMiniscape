<template>
  <div class="ending">
    <div class="container layer_character">
      <img :src="colud1" class="ending__image cloud__1__sub" />
      <img :src="colud1" class="ending__image cloud__1" />
      <img :src="colud2" class="ending__image cloud__2" />
      <img :src="colud3" class="ending__image cloud__3" />
      <img :src="cloud4" class="ending__image cloud__4" />
      <Character
        :img="yukimura.img"
        :alt="yukimura.name"
        :position="yukimura.positionStyle"
        :id="yukimura.chara"
      />
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
import { characters, } from '@/static/config.js';
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
    // console.log(this.$store.state.master.characters.list);
  },
  methods: {
    ...mapMutations({
      movePage: 'master/movePage',
    }),
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
  left: 72%;
  width: 90%;
}

.cloud__1__sub {
  top: 16%;
  left: 16%;
  width: 90%;
}

.cloud__4 {
  top: 72%;
  left: -24%;
  width: 90%;
}

.cloud__2 {
  top: 48%;
  left: -24%;
  width: 80%;
}

.cloud__3 {
  top: 80%;
  left: 32%;
  width: 100%;
}

/* 縦長 スマホサイズ*/
@media (orientation: portrait) and (max-width: 767px) {
}
</style>
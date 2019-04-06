<template>
  <div class="index">
    <div>
      <img :src="title" class="index__title" border="0" @click="movePage">
      <button class="index__button" @click="movePage">はじめる</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, } from 'vuex';
import titleImg from '@/static/title.png';

export default {
  data() {
    return {
      title: titleImg,
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
.index {
  width: 100%;
  height: 100%;
  /* background: #fff; */
  margin: auto;
  vertical-align: middle;
  align-content: center;
}

.index__title {
  margin-top: 30%;
  width: 100%;
  cursor: pointer;
}

.index__button {
  font-size: 28px;
  cursor: pointer;
  margin: 8% 30%;
  height: 8vh;
  width: 40%;
  border: 2px solid #fff;
  background: #ffd583;
  border-radius: 20% / 50%;
  box-shadow: 2px 2px 2px 2px rgba(75, 75, 75, 0.2);
}

/* 縦長 スマホサイズ*/
@media (orientation: portrait) and (max-width: 767px) {
  .index {
    font-size: 100%;
  }
}
</style>
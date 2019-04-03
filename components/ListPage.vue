<template>
    <ul class="characterList">
      <li v-for="name in Object.keys(characterNames)" :key="name" class="characterList__item">
        <div v-if="captured.includes(name)" class="characterList__item__box" @click="openModal({ chara: name })">
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
        <div v-else class="characterList__item__box">
          <div class="characterList__item__dummyImg">
          <img
            :src="dummy"
            :style="{ height: 100 + '%' }"
            border="0"
          />
          </div>
          <div class="characterList__item__name">
            ？？？
          </div>
        </div>
      </li>
    </ul>
</template>

<script>
import { mapMutations, } from 'vuex';
import { characterNames,characters, } from '@/static/config.js';
import dummyImg from '@/static/dummy.png';

export default {
    data () {
        return {
            dummy: dummyImg,
        };
    },
    computed: {
        captured () {
          return this.$store.state.master.characters.list;
        },
        characterNames () { 
          return characterNames;
        },
    },
    mounted() {
        // console.log(this.$store.state.master.characters.list);
    },
    methods: {
      ...mapMutations({
        openModal: 'master/openModal',
      }),
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
  text-align: center;
}

.characterList__item__img {
  height: 80%;
  line-height: 16vh;
  vertical-align: middle;
}

.characterList__item__dummyImg {
  height: 70%;
  line-height: 16vh;
  vertical-align: middle;
  margin-top: 4%;
}

.characterList__item__name {
  background: #fff;
  color: #000;
  width: 80%;
  border-bottom: 1px solid #fff;
  border-radius: 8px;
  margin: 0 auto;
}
</style>
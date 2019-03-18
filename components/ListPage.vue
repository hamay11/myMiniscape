<template>
  <div class="main">
    <ul class="characterList">
      <li v-for="name in Object.keys(characterNames)" :key="name" class="characterList__item">
        <div v-if="captured.includes(name)">
          <div class="characterList__item__img">
          <img
            :src="require('../assets/' + characterObject(name).img)"
            :style="{ width: 100 + '%' }"
            border="0"
          />
          </div>
          <span class="characterList__item__name">
            {{ characterObject(name).name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { characterNames,characters, }from '@/static/config.js';
export default {
    computed: {
        captured () {
            return this.$store.state.master.characters.list;
        },
        characterNames () { 
            return characterNames;
        },
        
    },
    mounted() {
        console.log(this.$store.state.master.characters.list);
    },
    methods: {
        characterObject: (name) => characters[name],
    },
};
</script>

<style>
.characterList {
  width: 100%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4%;
}

.characterList__item {
  display: block;
  width: 25vw;
  height: 20vh;
  background: #ffcfe7;
  border-radius: 10%;
  margin: 8px;
  text-align: center;
}

.characterList__item__img {
  width: 100%;
  height: 16vh;
  line-height: 16vh;
  vertical-align: middle;
}

.characterList__item__name {
}
</style>
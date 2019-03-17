<template>
  <div>
    <ul>
      <li><a href="./field">様子を見に行く</a></li>
      <li v-for="name in Object.keys(characterNames)" :key="name">
        <span v-if="captured.includes(name)">{{ characterNames[name] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { characterNames, }from '@/static/config.js';
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
};
</script>

<style>
</style>
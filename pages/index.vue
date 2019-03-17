<template>
  <section class="main">
    <button class="button" @click="movePage()">ほげ！</button>
    <FieldPage v-if="page === 'field'" />
    <ListPage v-if="page === 'list'" />
  </section>
</template>

<script>
import { mapMutations, } from 'vuex';
import FieldPage from '@/components/FieldPage.vue';
import ListPage from '@/components/ListPage.vue';

export default {
  components: {
    FieldPage,
    ListPage,
  },
  computed: {
    page() {
      return this.$store.state.master.ui.page;
    },
  },
  methods: {
    ...mapMutations({
      movePage: 'master/movePage',
    }),
  },
};
</script>

<style>
.main {
  height: 100vh; /* TODO: PCのときもスマホくらいのサイズが出るようにしたい */
  width: 100vw; /* TODO: PCのときもスマホくらいのサイズが出るようにしたい */
  position: relative;
}

.button {
  position: fixed;
  top: 56px;
  left: 56px;
  height: 32px;
  width: 400px;
  z-index: 10;
  background: #fff;
}
</style>

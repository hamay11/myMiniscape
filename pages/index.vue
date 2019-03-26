<template>
  <div class="root">
      <div class="main">
        <button class="button move" @click="movePage()">
          <ListIcon v-if="page === 'field'" />
          <HomeIcon v-if="page === 'list'" />
        </button>
        <FieldPage v-if="page === 'field'" />
        <ListPage v-if="page === 'list'" />
      </div>
  </div>
</template>

<script>
import { mapMutations, } from 'vuex';
import FieldPage from '@/components/FieldPage.vue';
import ListPage from '@/components/ListPage.vue';
import ListIcon from '@/components/Icons/ListIcon.vue';
import HomeIcon from '@/components/Icons/HomeIcon.vue';

export default {
  components: {
    FieldPage,
    ListPage,
    ListIcon,
    HomeIcon,
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
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.root {
  display: flex;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
  background:repeating-linear-gradient(45deg, #ffd583 0, #ffd583 20px, #fff 20px, #fff 40px);
}

.main {
  position: relative;
  margin: auto;
  display: block;
  /* max-height: 1920px; /* TODO: PCのときもスマホくらいのサイズが出るようにしたい */
  /* max-width: 1080px; /* TODO: PCのときもスマホくらいのサイズが出るようにしたい */
  width: 360px;
  height: 640px;
}

.button {
  position: absolute;
  height: 48px;
  width: 48px;
  z-index: 10;
  background: #fff;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  padding: 8px;
  box-shadow: 2px 2px 2px 2px rgba(75, 75, 75, .2);
}

.button:active {
  background: #ffebc5;
}

.move {
  bottom: 16px;
  right: 16px;
}
</style>

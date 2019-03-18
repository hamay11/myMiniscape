<template>
  <section class="main">
    <button class="button move" @click="movePage()">ほげ！</button>
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


.main {
  max-height: 100vh; /* TODO: PCのときもスマホくらいのサイズが出るようにしたい */
  max-width: 100vw; /* TODO: PCのときもスマホくらいのサイズが出るようにしたい */
}

.button {
  position: fixed;
  height: 32px;
  width: 50vw;
  z-index: 10;
  background: #fff;
}

.move {
  bottom: 0;
  left: 0;
}
</style>

<template>
  <div class="root">
      <div class="main">
      <transition name="popup">
        <Modal v-if="isModalOpen()" :character="getCharacter(modalCharacter)" />
      </transition>
        <button v-show="page === 'field' || page === 'list'" class="button move" @click="movePage()">
          <ListIcon v-if="page === 'field'" />
          <HomeIcon v-if="page === 'list'" />
        </button>
        <transition name="fade">
          <FieldPage v-if="page === 'field'" />
          <ListPage v-else-if="page === 'list'" />
          <IndexPage v-else-if="page === 'index'" />
        </transition>
        <transition name="fade">
          <EndingPage v-show="page === 'ending'" class="endingPage"/>
        </transition>
      </div>
      <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">
      <script>
    (function(d) {
      var config = {
        kitId: 'yqn4qjn',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
    </script>
  </div>
</template>

<script>
import { mapMutations, mapGetters, } from 'vuex';
import { characters, } from '@/static/config.js';
import FieldPage from '@/components/FieldPage.vue';
import ListPage from '@/components/ListPage.vue';
import IndexPage from '@/components/IndexPage.vue';
import EndingPage from '@/components/EndingPage.vue';
import ListIcon from '@/components/Icons/ListIcon.vue';
import HomeIcon from '@/components/Icons/HomeIcon.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    FieldPage,
    ListPage,
    IndexPage,
    EndingPage,
    ListIcon,
    HomeIcon,
    Modal,
  },
  computed: {
    page() {
      return this.$store.state.master.ui.page;
    },
    modalCharacter() {
      return this.$store.state.master.ui.modal.chara;
    },
  },
  methods: {
    ...mapMutations({
      movePage: 'master/movePage',
    }),
    ...mapGetters({
      isModalOpen: 'master/isModalOpen',
    }),
    getCharacter: function(id) {
      return characters[id];
    },
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
	font-size: 5vh;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
  /* google web font */
  font-family: 'M PLUS Rounded 1c', sans-serif;
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
  width: 57vh;
  height: 100vh;
}


/* 縦長 スマホサイズ*/
@media (orientation: portrait) and (max-width: 767px){
.main {
  position: relative;
  margin: auto;
  display: block;
  width: 100vw;
  height: 178vw;
}
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

.endingPage {
  transition: opacity 2s;
} 

/* animation */
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}

.fade-enter-active:not(.endingPage), .fade-leave-active:not(.endingPage) {
  transition: opacity .5s;
} 

</style>

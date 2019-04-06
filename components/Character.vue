<template>
    <img :src="img" :alt="alt" :style="position" :class="id" class="character" border="0">
</template>

<script>
import anime from 'animejs';
import { characterNames, } from '@/static/config.js';

export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    position: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.setAnimation();
  },
  updated: function () {
  this.$nextTick(function () {
    // console.log('updated nextTick');
    this.setAnimation();
  });
},
  methods: {
    setAnimation: function(){
      if (!this.id) {
        return;
      }

      switch(this.id) {
        case characterNames.kogane:
          anime({
            targets: '.kogane',
            direction: 'alternate',
            easing: 'easeOutElastic(1..6)',
            loop: true,
            translateY: 10,
            duration: 600,
          });
          break;
        case characterNames.saizo:
          anime({
            targets: '.saizo',
            direction: 'normal',
            easing: 'linear',
            loop: true,
            keyframes:[
              { rotate: -3, },
              { rotate: 1, },
              { rotate: 5, },
              { rotate: 0, },
            ],
            duration: 1000,
          });
          break;
        case characterNames.juzo:
          anime({
            targets: '.juzo',
            direction: 'normal',
            easing: 'linear',
            loop: true,
            keyframes:[
              { rotate: -3, },
              { rotate: 1, },
              { rotate: 5, },
              { rotate: 0, },
            ],
            duration: 6000,
          });
          break;
        case characterNames.miyoshi:
          anime({
            targets: '.miyoshi',
            direction: 'normal',
            easing: 'easeInOutExpo',
            loop: true,
            rotate:[
              { value: 5, delay:700, duration: 50,},
              { value: -5, duration: 50,},
              { value: 5, duration: 50,},
              { value: -5, duration: 50,},
              { value: 5, duration: 50,},
              { value: -5, duration: 50,},
            ],
            duration: 1000,
          });
          break;
        case characterNames.kamanosuke:
          anime({
            targets: '.kamanosuke',
            direction: 'normal',
            easing: 'easeInOutQuart',
            loop: true,
            translateY:[
              { value: -10, delay: 300, easing: 'easeInSine',},
              { value: 0, easing: 'easeOutSine',},
              { value: -10, delay: 300, easing: 'easeInSine',},
              { value: 0, easing: 'easeOutSine',},
            ],
            translateX: [
              { value: 20, delay: 300, },
              { value: 0, delay: 300, },
            ],
            duration: 700,
          });
          break;
        case characterNames.kotaro:
          anime({
            targets: '.kotaro',
            direction: 'normal',
            easing: 'linear',
            loop: true,
            keyframes:[
              { rotate: -5, },
              { rotate: 0, },
              { rotate: 5, },
              { rotate: 0, },
            ],
            duration: 2000,
          });
          break;
        default:
          break;
      };
    },
  },
};
</script>

<style>
.character {
  position: absolute;
  width: 30%;
}

.kurosuke {
  width: 25%;
}

.kotaro {
  transform-origin: center 100% 0;
  width: 27%;
}

.saizo {
  transform-origin: center 100% 0;
}
</style>

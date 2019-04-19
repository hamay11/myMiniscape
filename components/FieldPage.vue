<template>
<div>
    <button class="button reload" @click="onClickReload">
      <ReloadIcon class="reload__icon"/>
      <svg :class="{ hidden: !reloading }" class="reload__overlay" height="48px">
        <circle r="20" cx="-24" cy="-24" class="reload__overlay__circle" />
      </svg>
  </button>
  <div class="container layer_character">
    <div
      v-for="charaName in charaNameKeys"
      :key="charaName"
      @click="onClickCharacter(charaName)">
        <Character
          v-show="isOnField(charaName)"
          :img="getFieldCharacterImg(charaName)"
          :alt="getCharacterObject(charaName).name"
          :position="getCharacterObject(charaName).positionStyle"
          :id="getCharacterObject(charaName).chara"
        />
    </div>
  </div>
  <div class="container layer_background">
    <Field />
  </div>
</div>
</template>

<script>
import { mapMutations, mapActions, mapState, } from 'vuex';
import Field from '@/components/Field.vue';
import Character from '@/components/Character.vue';
import { characters, characterNames, positions, } from '@/static/config.js';
import ReloadIcon from '@/components/Icons/ReloadIcon.vue';
import anime from 'animejs';

export default {
  components: {
    Field,
    Character,
    ReloadIcon,
  },
  // data: function () {},
  computed: {
    ...mapState({
      reloading: state => state.master.ui.reloading,
      onFieldCharacters: state => state.master.characters.field,
      characterList: state => state.master.characters.list,
    }),
    positionKeys: function() {
      return Object.keys(positions);
    },
    charaNameKeys: function() {
      return Object.keys(characterNames);
    },
  },
  mounted() {
    this.resetFieldCharacter();
    this.setFieldCharacter();
  },
  updated() {
    if(this.reloading) {
      anime({
        targets: '.reload__overlay__circle',
        direction: 'normal',
        easing: 'easeInOutSine',
        strokeDashoffset: [0, anime.setDashoffset,],
        duration: 3000,
      });
    }
  },
  methods: {
    ...mapMutations({
      setFieldCharacter: 'master/setFieldCharacter',
      resetFieldCharacter: 'master/resetFieldCharacter',
      addCharacter: 'master/addCharacter',
      openModal: 'master/openModal',
      setReloadInterval: 'master/setReloadInterval',
    }),
    ...mapActions({
      setReloadInterval: 'master/setReloadInterval',
    }),
    isOnField: function(charaName) {
      return Object.keys(this.onFieldCharacters).some(
        position => this.onFieldCharacters[position] === charaName
      );
    },
    getCharacterObject: function(charaName) {
      return characters[charaName];
    },
    onClickCharacter: function(characterId) {
      const isNew = !this.characterList.includes(characterId);
      this.openModal({
        chara: characterId,
        isNew,
      });
      this.addCharacter(characterId);
    },
    getFieldCharacterImg: function(charaName) {
      return characters[charaName].subImg
        ? characters[charaName].subImg
        : characters[charaName].img;
    },
    onClickReload: function(){
      if(this.reloading) {
        return;
      }
      this.setReloadInterval();
      this.setFieldCharacter();
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  text-align: center;
  overflow: hidden;
}

.layer_character {
  z-index: 1;
}
.layer_background {
  z-index: 0;
}

.reload {
  position: absolute;
  display: flex;
  width: 48px;
  height: 48px;
  bottom: 72px;
  right: 16px;
  overflow: hidden;
  border-radius: 4px;
}

.reload__overlay {
  position: absolute;
  top: 0;
  left: 0;
  fill: transparent;
  z-index: 50;
  cursor: default;
}

.reload__overlay__circle{
  transform: rotateX(180deg) rotate(90deg);
  fill: transparent;
  stroke: rgba(75,75,75,.4);;
  stroke-width: 40;
  stroke-dasharray: 125;
}

.hidden {
  display: none;
}

/* animation */
.popup-enter .modal__content, .popup-leave-to .modal__content {
  opacity: 0;
  transform: scale(0);
}

.popup-enter-to .modal__content, .popup-leave .modal__content {
  opacity: 1;
  transform: scale(1);
}
</style>

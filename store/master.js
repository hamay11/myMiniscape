import { characters, positions, } from '@/static/config';

export const state = () => ({
    ui: { // 画面の表示とか
        page: 'field', // file | list
        modal: '', // キャラクター名
    },
    characters: {
        list: [], // ゲット済のキャラクター一覧
        field: { // フィールド上のキャラクター
            [positions.atTheGarden]: '',
            [positions.onTheTerrace]: '',
        },
    },
});

export const mutations = {
    setFieldCharacter (state) {
        const getRandomInt = (rare) => Math.floor(Math.random() * Math.floor(rare + 1));
        // TODO: これだと配列前方の要素の方がより出現率が高いことになるので、出現率の傾斜の付け方は大いに検討の余地あり
        const setChara = (position) => 
          Object.keys(characters).find(chara => 
             characters[chara].position === position
            && getRandomInt(characters[chara].rare) === 0
          );
        state.characters.field = {
            [positions.atTheGarden]: setChara(positions.atTheGarden),
            [positions.onTheTerrace]: setChara(positions.onTheTerrace),
        };
    },
    addCharacter (state, characterId) {
        console.log(characterId);
        if (!state.characters.list.includes(characterId)) {
          state.characters.list = [...state.characters.list, characterId,];
        }
    },
    movePage (state) {
        if (state.ui.page === 'field') {
            state.ui.page = 'list';
        } else {
            state.ui.page = 'field';
        }
    },
    openModal (state, charaId) {
        state.ui.modal = charaId;
    },
    closeModal (state) {
        state.ui.modal = '';
    },
};

export const getters = () => {};

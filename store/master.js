import { characters, positions, } from '@/static/config';

export const state = () => ({
    ui: { // 画面の表示とか
        page: 'field', // file | list
    },
    characters: {
        list: [], // ゲット済のキャラクター一覧
        field: { // フィールド上のキャラクター
            [positions.atTheGarden.key]: '',
            [positions.onTheTerrace.key]: '',
        },
    },
});

export const mutations = {
    setFieldCharacter (state) {
        const getRandomInt = (rare) => Math.floor(Math.random() * Math.floor(rare + 1));
        // TODO: これだと配列前方の要素の方がより出現率が高いことになるので、出現率の傾斜の付け方は大いに検討の余地あり
        const getAtTheGardenChara = () =>
          Object.keys(characters).find(chara =>
            characters[chara].position.key === positions.atTheGarden.key
            && getRandomInt(characters[chara].rare) === 0);
        state.characters.field[positions.atTheGarden.key] = getAtTheGardenChara();
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
};

export const getters = () => {};

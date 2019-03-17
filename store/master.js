import { positions, } from '@/static/config';

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
    setFieldCharacter (state, { characterId, position, }) {
        console.log(characterId, position);
        state.characters.field[position] = characterId;
    },
    addCharacter (state, characterId) {
        console.log(characterId);
        if (!state.characters.list.includes(characterId)) {
          state.characters.list = [...state.characters.list, characterId,];
        }
    },
};

export const getters = () => {};

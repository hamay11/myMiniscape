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
    addCharacter (state, characterId) {
        state.character.list = state.character.list.concat(characterId);
    },
};

export const getters = () => {};

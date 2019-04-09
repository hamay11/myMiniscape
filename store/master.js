import { characters, positions, } from '@/static/config';

export const state = () => ({
    ui: { // 画面の表示とか
        page: 'ending', // file | list | index | ending
        modal: {
            chara: '', // キャラクター名
            isNew: false, // 初回表示フラグ
        },
        reloading: false, // 更新インターバルフラグ
    },
    characters: {
        list: [], // ゲット済のキャラクター一覧
        field: { // フィールド上のキャラクター
            [positions.atTheGarden]: '',
            [positions.onTheTerrace]: '',
            [positions.onTheLoof]: '',
            [positions.onTheTree]: '',
        },
    },
});

export const mutations = {
    setFieldCharacter (state) {
        const getRandomInt = (rare) => rare === 0 ? 1 : Math.floor(Math.random() * Math.floor(rare + 1));
        // TODO: これだと配列前方の要素の方がより出現率が高いことになるので、出現率の傾斜の付け方は大いに検討の余地あり
        const setChara = (position) => 
          Object.keys(characters).find(chara => 
             characters[chara].position === position
            && getRandomInt(characters[chara].rare) === 0
          );
        state.characters.field = {
            [positions.atTheGarden]: setChara(positions.atTheGarden),
            [positions.onTheTerrace]: setChara(positions.onTheTerrace),
            [positions.onTheLoof]: setChara(positions.onTheLoof),
            [positions.onTheTree]: setChara(positions.onTheTree),
        };
    },
    resetFieldCharacter (state) {
        state.characters.field = {
            [positions.atTheGarden]: '',
            [positions.onTheTerrace]: '',
            [positions.onTheLoof]: '',
            [positions.onTheTree]: '',
        };
    },
    addCharacter (state, characterId) {
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
    openModal (state, modal) {
        state.ui.modal.chara = modal.chara;
        state.ui.modal.isNew = modal.isNew || false;
    },
    closeModal (state) {
        state.ui.modal.chara = '';
    },
    startInterval (state) {
        state.ui.reloading = true;
    },
    finishInterval (state) {
        state.ui.reloading = false;
    },
};

export const actions = {
    setReloadInterval ({ commit, }) {
        commit('startInterval');
        setTimeout(() => commit('finishInterval'), 3000);
    },
};

export const getters = {
    isModalOpen: (state) => {
        return state.ui.modal.chara !== ''; 
    },
    isNew: (state) => {
        return state.ui.modal.isNew;
    },
};

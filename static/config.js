/**
 * フィールド上でキャラクターが表示される位置
 * @property {string} key
 * @property {number} x
 * @property {number} y
 */
export const positions = {
    onTheTerrace: {
        key: 'ON_THE_TERRACE',
        x: 0,
        y: 0,
    },
    atTheGarden: {
        key: 'AT_THE_GARDEN',
        x: 100,
        y: 1500,
    },
};

const characterNames = {
    kamanosuke: 'kamanosuke',
    juzo: 'juzo',
};

/**
 * キャラクター設定
 */
export const characters = {
    kamanosuke: {
        name: '鎌ノ介',
        chara: characterNames.kamanosuke,
        img: 'kamanosuke.PNG',
        description: '',
        position: positions.atTheGarden,
    },
    juzo : {
        name: '十蔵',
        chara: characterNames.juzo,
        img: 'juzo.png',
        description: '',
        position: positions.onTheTerrace,
    },
};

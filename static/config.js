/**
 * フィールド上でキャラクターが表示される位置
 * @property {string} key
 * @property {number} x
 * @property {number} y
 */
export const positions = {
    onTheTerrace: 'ON_THE_TERRACE',
    atTheGarden: 'AT_THE_GARDEN',
};

export const characterNames = {
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
        img: 'kamanosuke.png',
        description: '',
        position: positions.atTheGarden,
        rare: 1, // レア度の付け方は要検討
        positionStyle: {
            bottom: '8%',
            left: '10%',
        },
    },
    juzo : {
        name: '十蔵',
        chara: characterNames.juzo,
        img: 'juzo.png',
        description: '',
        position: positions.onTheTerrace,
        rare: 1, // debug
        positionStyle: {
            bottom: '22%',
            right: '20%',
        },
    },
};

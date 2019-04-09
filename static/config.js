import kamanosukeImg from '@/static/kamanosuke.png';
import juzoImg from '@/static/juzo.png';
import saizoImg from '@/static/saizo.png';
import miyoshiImg from '@/static/miyoshi.png';
import miyoshiDummyImg from '@/static/miyoshi_dummy.png';
import koganeImg from '@/static/kogane.png';
import kurosukeImg from '@/static/kurosuke.png';
import kotaroImg from '@/static/kotaro.png';
import yukimuraImg from '@/static/yukimura.png';

/**
 * フィールド上でキャラクターが表示される位置
 * @property {string} key
 * @property {number} x
 * @property {number} y
 */
export const positions = {
    onTheTerrace: 'ON_THE_TERRACE',
    atTheGarden: 'AT_THE_GARDEN',
    onTheLoof: 'ON_THE_LOOF',
    onTheTree: 'ON_THE_TREE',
};

export const characterNames = {
    kamanosuke: 'kamanosuke',
    juzo: 'juzo',
    saizo: 'saizo',
    miyoshi: 'miyoshi',
    kotaro: 'kotaro',
    kogane: 'kogane',
    kurosuke: 'kurosuke',
    yukimura: 'yukimura',
};

/**
 * キャラクター設定
 */
export const characters = {
    kamanosuke: {
        name: '鎌ノ介',
        chara: characterNames.kamanosuke,
        img: kamanosukeImg,
        description: 'てあわせ ねがいたい！',
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
        img: juzoImg,
        description: 'はる ですね〜',
        position: positions.onTheTerrace,
        rare: 1, // debug
        positionStyle: {
            bottom: '22%',
            right: '20%',
        },
    },
    saizo : {
        name: '才蔵',
        chara: characterNames.saizo,
        img: saizoImg,
        description: 'はる　だな！',
        position: positions.onTheTerrace,
        rare: 2, // debug
        positionStyle: {
            bottom: '22%',
            right: '20%',
        },
    },
    miyoshi : {
        name: '三好',
        chara: characterNames.miyoshi,
        img: miyoshiImg,
        subImg: miyoshiDummyImg,
        description: '…',
        position: positions.onTheLoof,
        rare: 2, // debug
        positionStyle: {
            top: '38%',
            right: '16%',
        },
    },
    kogane : {
        name: 'こがね',
        chara: characterNames.kogane,
        img: koganeImg,
        description: 'しんきょく いくよ〜！',
        position: positions.atTheGarden,
        rare: 3, // debug
        positionStyle: {
            bottom: '8%',
            left: '10%',
        },
    },
    kurosuke : {
        name: '黒助',
        chara: characterNames.kurosuke,
        img: kurosukeImg,
        description: 'へいわな もんだな',
        position: positions.onTheTree,
        rare: 3, // debug
        positionStyle: {
            top: '20%',
            left: '30%',
        },
    },
    kotaro : {
        name: '小太郎',
        chara: characterNames.kotaro,
        img: kotaroImg,
        description: 'さくら きれいで ござる！',
        position: positions.onTheTree,
        rare: 3, // debug
        positionStyle: {
            top: '22%',
            left: '36%',
        },
    },
    yukimura : {
        name: '幸村',
        chara: characterNames.yukimura,
        img: yukimuraImg,
        description: 'たのしんで いただけたかな',
        position: positions.onTheTerrace, // debug
        rare: 0, // debug
        positionStyle: {
            bottom: '22%',
            right: '20%',
        },
    },
};

export type suitType = 'spades' | 'clubs' | 'hearts' | 'diamonds';

export type rankType = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';

export const suitTranslationMap = {
    'spades': 'П',
    'clubs': 'К',
    'hearts': 'Ч',
    'diamonds': 'Б'
}

export const rankTranslationMap = {
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    'jack': 'В',
    'queen': 'Д',
    'king': 'К',
    'ace': 'Т'
}

export const rankValueMap = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'jack': 11,
    'queen': 12,
    'king': 13,
    'ace': 14
};

export const suitValueMap = {
    'spades': 1,
    'clubs': 2,
    'diamonds': 3,
    'hearts': 4,
};
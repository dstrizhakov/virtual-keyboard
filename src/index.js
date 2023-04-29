import constants from './modules/keyboards.js';

/* DOM generator */

const { lowerEnglishArr } = constants;

const content = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const info = document.createElement('p');

content.classList.add('content');
title.classList.add('content__title');
textarea.classList.add('content__textarea', 'textarea');
keyboard.classList.add('content__keyboard', 'keyboard');
info.classList.add('content__info');

// create keyboard rows
const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');
const row5 = document.createElement('div');

// set common attributes to keyboard rows
row1.classList.add('keyboard__row', 'row1');
row2.classList.add('keyboard__row', 'row2');
row3.classList.add('keyboard__row', 'row3');
row4.classList.add('keyboard__row', 'row4');
row5.classList.add('keyboard__row', 'row5');

// append
document.body.append(content);
content.append(title, textarea, keyboard, info);
title.textContent = 'Virtual Keyboard';
keyboard.append(row1, row2, row3, row4, row5);
info.innerText = 'To change the language press shift + ctrl';

function addKeys(keysInRow, row, keyArr) {
  for (let i = 0; i < keysInRow; i += 1) {
    const key = document.createElement('div');
    key.classList.add('keyboard__key', 'key');

    const keyEng = document.createElement('span');
    keyEng.classList.add('eng');

    const caseDown = document.createElement('span');
    caseDown.classList.add('caseDown');
    caseDown.textContent = lowerEnglishArr[keyArr][i];

    keyEng.append(caseDown);
    key.append(keyEng);
    row.append(key);
  }
}

addKeys(14, row1, 0);
addKeys(15, row2, 1);
addKeys(13, row3, 2);
addKeys(13, row4, 3);
addKeys(9, row5, 4);

document.querySelector('.keyboard > .row1 > div:nth-child(14)').classList.add('backspace');
document.querySelector('.keyboard > .row2 > div:nth-child(1)').classList.add('tab');
document.querySelector('.keyboard > .row2 > div:nth-child(15)').classList.add('delete');
document.querySelector('.keyboard > .row3 > div:nth-child(1)').classList.add('capsLock');
document.querySelector('.keyboard > .row3 > div:nth-child(13)').classList.add('enter');
document.querySelector('.keyboard > .row4 > div:nth-child(1)').classList.add('shiftLeft');
document.querySelector('.keyboard > .row4 > div:nth-child(13)').classList.add('shiftRight');
document.querySelector('.keyboard > .row5 > div:nth-child(1)').classList.add('controlLeft');
document.querySelector('.keyboard > .row5 > div:nth-child(4)').classList.add('space');
document.querySelector('.keyboard > .row5 > div:nth-child(9)').classList.add('controlRight');
document.querySelector('.keyboard > .row5 > div:nth-child(2)').classList.add('metaLeft');
document.querySelector('.keyboard > .row5 > div:nth-child(3)').classList.add('altLeft');
document.querySelector('.keyboard > .row5 > div:nth-child(5)').classList.add('altRight');
document.querySelector('.keyboard > .row5 > div:nth-child(6)').classList.add('arrowLeft');
document.querySelector('.keyboard > .row5 > div:nth-child(8)').classList.add('arrowRight');
document.querySelector('.keyboard > .row4 > div:nth-child(12)').classList.add('arrowUp');
document.querySelector('.keyboard > .row5 > div:nth-child(7)').classList.add('arrowDown');

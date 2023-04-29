const content = document.createElement('div');
const title = document.createElement('p');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const info = document.createElement('p');

content.classList.add('content');
title.classList.add('content__title');
textarea.classList.add('content__textarea', 'textarea');
textarea.rows = 10;
textarea.cols = 100;
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

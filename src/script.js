const t = [
  [
    {
      className: 'Backquote',
      eng: { caps: '`', caseDown: '`', caseUp: '~', shiftCaps: '~' },
      rus: { caps: 'Ё', caseDown: 'ё', caseUp: 'Ё', shiftCaps: 'ё' },
    },
    {
      className: 'Digit1',
      eng: { caps: '1', caseDown: '1', caseUp: '!', shiftCaps: '!' },
      rus: { caps: '1', caseDown: '1', caseUp: '!', shiftCaps: '!' },
    },
    {
      className: 'Digit2',
      eng: { caps: '2', caseDown: '2', caseUp: '@', shiftCaps: '@' },
      rus: { caps: '2', caseDown: '2', caseUp: '"', shiftCaps: '"' },
    },
    {
      className: 'Digit3',
      eng: { caps: '3', caseDown: '3', caseUp: '#', shiftCaps: '#' },
      rus: { caps: '3', caseDown: '3', caseUp: '№', shiftCaps: '№' },
    },
    {
      className: 'Digit4',
      eng: { caps: '4', caseDown: '4', caseUp: '$', shiftCaps: '$' },
      rus: { caps: '4', caseDown: '4', caseUp: ';', shiftCaps: ';' },
    },
    {
      className: 'Digit5',
      eng: { caps: '5', caseDown: '5', caseUp: '%', shiftCaps: '%' },
      rus: { caps: '5', caseDown: '5', caseUp: '%', shiftCaps: '%' },
    },
    {
      className: 'Digit6',
      eng: { caps: '6', caseDown: '6', caseUp: '^', shiftCaps: '^' },
      rus: { caps: '6', caseDown: '6', caseUp: ':', shiftCaps: ':' },
    },
    {
      className: 'Digit7',
      eng: { caps: '7', caseDown: '7', caseUp: '&', shiftCaps: '&' },
      rus: { caps: '7', caseDown: '7', caseUp: '?', shiftCaps: '?' },
    },
    {
      className: 'Digit8',
      eng: { caps: '8', caseDown: '8', caseUp: '*', shiftCaps: '*' },
      rus: { caps: '8', caseDown: '8', caseUp: '*', shiftCaps: '*' },
    },
    {
      className: 'Digit9',
      eng: { caps: '9', caseDown: '9', caseUp: '(', shiftCaps: '(' },
      rus: { caps: '9', caseDown: '9', caseUp: '(', shiftCaps: '(' },
    },
    {
      className: 'Digit0',
      eng: { caps: '0', caseDown: '0', caseUp: ')', shiftCaps: ')' },
      rus: { caps: '0', caseDown: '0', caseUp: ')', shiftCaps: ')' },
    },
    {
      className: 'Minus',
      eng: { caps: '-', caseDown: '-', caseUp: '_', shiftCaps: '_' },
      rus: { caps: '-', caseDown: '-', caseUp: '_', shiftCaps: '_' },
    },
    {
      className: 'Equal',
      eng: { caps: '=', caseDown: '=', caseUp: '+', shiftCaps: '+' },
      rus: { caps: '=', caseDown: '=', caseUp: '+', shiftCaps: '+' },
    },
    { className: 'Backspace', eng: { caseDown: 'Backspace', caseUp: 'Backspace' }, rus: { caseDown: 'Backspace', caseUp: 'Backspace' } },
  ],
  [
    { className: 'Tab', eng: { caseDown: 'Tab', caseUp: 'Tab' }, rus: { caseDown: 'Tab', caseUp: 'Tab' } },
    { className: 'KeyQ', eng: { caseDown: 'q', caseUp: 'Q' }, rus: { caseDown: 'й', caseUp: 'Й' } },
    { className: 'KeyW', eng: { caseDown: 'w', caseUp: 'W' }, rus: { caseDown: 'ц', caseUp: 'Ц' } },
    { className: 'KeyE', eng: { caseDown: 'e', caseUp: 'E' }, rus: { caseDown: 'у', caseUp: 'У' } },
    { className: 'KeyR', eng: { caseDown: 'r', caseUp: 'R' }, rus: { caseDown: 'к', caseUp: 'К' } },
    { className: 'KeyT', eng: { caseDown: 't', caseUp: 'T' }, rus: { caseDown: 'е', caseUp: 'Е' } },
    { className: 'KeyY', eng: { caseDown: 'y', caseUp: 'Y' }, rus: { caseDown: 'н', caseUp: 'Н' } },
    { className: 'KeyU', eng: { caseDown: 'u', caseUp: 'U' }, rus: { caseDown: 'г', caseUp: 'Г' } },
    { className: 'KeyI', eng: { caseDown: 'i', caseUp: 'I' }, rus: { caseDown: 'ш', caseUp: 'Ш' } },
    { className: 'KeyO', eng: { caseDown: 'o', caseUp: 'O' }, rus: { caseDown: 'щ', caseUp: 'Щ' } },
    { className: 'KeyP', eng: { caseDown: 'p', caseUp: 'P' }, rus: { caseDown: 'з', caseUp: 'З' } },
    {
      className: 'BracketLeft',
      eng: { caps: '[', caseDown: '[', caseUp: '{', shiftCaps: '{' },
      rus: { caps: 'Х', caseDown: 'х', caseUp: 'Х', shiftCaps: 'х' },
    },
    {
      className: 'BracketRight',
      eng: { caps: ']', caseDown: ']', caseUp: '}', shiftCaps: '}' },
      rus: { caps: 'Ъ', caseDown: 'ъ', caseUp: 'Ъ', shiftCaps: 'ъ' },
    },
    {
      className: 'Backslash',
      eng: { caps: '\\', caseDown: '\\', caseUp: '|', shiftCaps: '|' },
      rus: { caps: '\\', caseDown: '\\', caseUp: '/', shiftCaps: '/' },
    },
    { className: 'Delete', eng: { caseDown: 'Del', caseUp: 'Del' }, rus: { caseDown: 'Del', caseUp: 'Del' } },
  ],
  [
    { className: 'CapsLock', eng: { caseDown: 'CapsLock', caseUp: 'CapsLock' }, rus: { caseDown: 'CapsLock', caseUp: 'CapsLock' } },
    { className: 'KeyA', eng: { caseDown: 'a', caseUp: 'A' }, rus: { caseDown: 'ф', caseUp: 'Ф' } },
    { className: 'KeyS', eng: { caseDown: 's', caseUp: 'S' }, rus: { caseDown: 'ы', caseUp: 'Ы' } },
    { className: 'KeyD', eng: { caseDown: 'd', caseUp: 'D' }, rus: { caseDown: 'в', caseUp: 'В' } },
    { className: 'KeyF', eng: { caseDown: 'f', caseUp: 'F' }, rus: { caseDown: 'а', caseUp: 'А' } },
    { className: 'KeyG', eng: { caseDown: 'g', caseUp: 'G' }, rus: { caseDown: 'п', caseUp: 'П' } },
    { className: 'KeyH', eng: { caseDown: 'h', caseUp: 'H' }, rus: { caseDown: 'р', caseUp: 'Р' } },
    { className: 'KeyJ', eng: { caseDown: 'j', caseUp: 'J' }, rus: { caseDown: 'о', caseUp: 'О' } },
    { className: 'KeyK', eng: { caseDown: 'k', caseUp: 'K' }, rus: { caseDown: 'л', caseUp: 'Л' } },
    { className: 'KeyL', eng: { caseDown: 'l', caseUp: 'L' }, rus: { caseDown: 'д', caseUp: 'Д' } },
    {
      className: 'Semicolon',
      eng: { caps: ';', caseDown: ';', caseUp: ':', shiftCaps: ':' },
      rus: { caps: 'Ж', caseDown: 'ж', caseUp: 'Ж', shiftCaps: 'ж' },
    },
    {
      className: 'Quote',
      eng: { caps: "'", caseDown: "'", caseUp: '"', shiftCaps: '"' },
      rus: { caps: 'Э', caseDown: 'э', caseUp: 'Э', shiftCaps: 'э' },
    },
    { className: 'Enter', eng: { caseDown: 'Enter', caseUp: 'Enter' }, rus: { caseDown: 'Enter', caseUp: 'Enter' } },
  ],
  [
    { className: 'ShiftLeft', eng: { caseDown: 'Shift', caseUp: 'Shift' }, rus: { caseDown: 'Shift', caseUp: 'Shift' } },
    { className: 'KeyZ', eng: { caseDown: 'z', caseUp: 'Z' }, rus: { caseDown: 'я', caseUp: 'Я' } },
    { className: 'KeyX', eng: { caseDown: 'x', caseUp: 'X' }, rus: { caseDown: 'ч', caseUp: 'Ч' } },
    { className: 'KeyC', eng: { caseDown: 'c', caseUp: 'C' }, rus: { caseDown: 'с', caseUp: 'С' } },
    { className: 'KeyV', eng: { caseDown: 'v', caseUp: 'V' }, rus: { caseDown: 'м', caseUp: 'М' } },
    { className: 'KeyB', eng: { caseDown: 'b', caseUp: 'B' }, rus: { caseDown: 'и', caseUp: 'И' } },
    { className: 'KeyN', eng: { caseDown: 'n', caseUp: 'N' }, rus: { caseDown: 'т', caseUp: 'Т' } },
    { className: 'KeyM', eng: { caseDown: 'm', caseUp: 'M' }, rus: { caseDown: 'ь', caseUp: 'Ь' } },
    {
      className: 'Comma',
      eng: { caps: ',', caseDown: ',', caseUp: '<', shiftCaps: '<' },
      rus: { caps: 'Б', caseDown: 'б', caseUp: 'Б', shiftCaps: 'б' },
    },
    {
      className: 'Period',
      eng: { caps: '.', caseDown: '.', caseUp: '>', shiftCaps: '>' },
      rus: { caps: 'Ю', caseDown: 'ю', caseUp: 'Ю', shiftCaps: 'ю' },
    },
    {
      className: 'Slash',
      eng: { caps: '/', caseDown: '/', caseUp: '?', shiftCaps: '?' },
      rus: { caps: '.', caseDown: '.', caseUp: ',', shiftCaps: ',' },
    },
    { className: 'ArrowUp', eng: { caseDown: '▲', caseUp: '▲' }, rus: { caseDown: '▲', caseUp: '▲' } },
    { className: 'ShiftRight', eng: { caseDown: 'Shift', caseUp: 'Shift' }, rus: { caseDown: 'Shift', caseUp: 'Shift' } },
  ],
  [
    { className: 'ControlLeft', eng: { caseDown: 'Ctrl', caseUp: 'Ctrl' }, rus: { caseDown: 'Ctrl', caseUp: 'Ctrl' } },
    { className: 'MetaLeft', eng: { caseDown: 'Win', caseUp: 'Win' }, rus: { caseDown: 'Win', caseUp: 'Win' } },
    { className: 'AltLeft', eng: { caseDown: 'Alt', caseUp: 'Alt' }, rus: { caseDown: 'Alt', caseUp: 'Alt' } },
    { className: 'Space', eng: { caseDown: ' ', caseUp: ' ' }, rus: { caseDown: ' ', caseUp: ' ' } },
    { className: 'AltRight', eng: { caseDown: 'Alt', caseUp: 'Alt' }, rus: { caseDown: 'Alt', caseUp: 'Alt' } },
    { className: 'ArrowLeft', eng: { caseDown: '◄', caseUp: '◄' }, rus: { caseDown: '◄', caseUp: '◄' } },
    { className: 'ArrowDown', eng: { caseDown: '▼', caseUp: '▼' }, rus: { caseDown: '▼', caseUp: '▼' } },
    { className: 'ArrowRight', eng: { caseDown: '►', caseUp: '►' }, rus: { caseDown: '►', caseUp: '►' } },
    { className: 'ControlRight', eng: { caseDown: 'Ctrl', caseUp: 'Ctrl' }, rus: { caseDown: 'Ctrl', caseUp: 'Ctrl' } },
  ],
];
const c = {
  SPECIALS: [
    'Backspace',
    'Tab',
    'Enter',
    'CapsLock',
    'ShiftLeft',
    'ShiftRight',
    'AltLeft',
    'AltRight',
    'ControlLeft',
    'ControlRight',
    'MetaLeft',
    'Delete',
  ],
  ROWS: t,
};

class Keyboard {
  constructor() {
    this.element = null;
    this.textarea = null;
    this.state = {
      isShiftLeftPressed: !1,
      isShiftRightPressed: !1,
      isCapsLockPressed: !1,
      case: 'caseDown',
      lang: 'eng',
    };
    this.current = {
      element: null,
      code: null,
      event: null,
      char: null,
    };
    this.previous = {
      element: null,
      code: null,
      event: null,
      char: null,
    };
  }

  initDomStructure(e) {
    document.body.classList.add('body');
    const centralizer = document.createElement('div');
    centralizer.classList.add('centralizer');
    const title = document.createElement('p');
    title.innerText = 'RSS Виртуальная клавиатура';
    title.classList.add('title');
    centralizer.appendChild(title);
    const textarea = document.createElement('textarea');
    textarea.classList.add('body--textarea', 'textarea');
    textarea.setAttribute('id', 'textarea');
    this.textarea = textarea;
    centralizer.appendChild(this.textarea);
    this.element = document.createElement('div');
    this.element.classList.add('body--keyboard', 'keyboard');
    this.element.setAttribute('id', 'keyboard');
    const keyboardContainer = document.createDocumentFragment();

    for (let sefdsss = 0; sefdsss < e.length; sefdsss += 1) {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard--row', 'row');
      for (let teal = 0; teal < e[sefdsss].length; teal += 1) {
        const key = document.createElement('div');
        key.classList.add('keyboard--key', 'key', e[sefdsss][teal].className);
        const nqwer = document.createElement('span');
        nqwer.classList.add('rus', 'hidden');
        nqwer.insertAdjacentHTML('afterBegin', `<span class="caseDown hidden">${e[sefdsss][teal].rus.caseDown}</span>`);
        nqwer.insertAdjacentHTML('beforeEnd', `<span class="caseUp hidden">${e[sefdsss][teal].rus.caseUp}</span>`);
        nqwer.insertAdjacentHTML('beforeEnd', `<span class="caps hidden">${e[sefdsss][teal].rus.caps || e[sefdsss][teal].rus.caseUp}</span>`);
        nqwer.insertAdjacentHTML(
          'beforeEnd',
          `<span class="shiftCaps hidden">${e[sefdsss][teal].rus.shiftCaps || e[sefdsss][teal].rus.caseDown}</span>`
        );
        key.appendChild(nqwer);
        const irfwer = document.createElement('span');
        irfwer.classList.add('eng');
        irfwer.insertAdjacentHTML('afterBegin', `<span class="caseDown">${e[sefdsss][teal].eng.caseDown}</span>`);
        irfwer.insertAdjacentHTML('beforeEnd', `<span class="caseUp hidden">${e[sefdsss][teal].eng.caseUp}</span>`);
        irfwer.insertAdjacentHTML('beforeEnd', `<span class="caps hidden">${e[sefdsss][teal].eng.caps || e[sefdsss][teal].eng.caseUp}</span>`);
        irfwer.insertAdjacentHTML(
          'beforeEnd',
          `<span class="shiftCaps hidden">${e[sefdsss][teal].eng.shiftCaps || e[sefdsss][teal].eng.caseDown}</span>`
        );
        key.appendChild(irfwer);
        keyboardRow.appendChild(key);
      }
      keyboardContainer.appendChild(keyboardRow);
    }
    this.element.appendChild(keyboardContainer);
    centralizer.appendChild(this.element);
    const description = document.createElement('p');
    description.innerText = 'Клавиатура создана в операционной системе Windows';
    description.classList.add('description');
    centralizer.appendChild(description);
    const language = document.createElement('p');
    language.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
    language.classList.add('language');
    centralizer.appendChild(language);
    document.body.appendChild(centralizer);
  }

  addActiveState() {
    this.current.element.classList.add('active');
  }

  removeActiveState() {
    if (this.current.element) {
      if (this.previous.element && this.previous.element.classList.contains('active')) {
        if (!['CapsLock', 'ShiftLeft', 'ShiftRight'].includes(this.previous.code)) {
          this.previous.element.classList.remove('active');
        }
      }
      this.current.element.classList.remove('active');
    }
  }

  toggleCase() {
    const elenement = this.element.querySelectorAll(`div>.${this.state.lang}`);
    for (let s = 0; s < elenement.length; s += 1) {
      if (!elenement[s].querySelectorAll('span')[0].classList.contains('hidden')) {
        elenement[s].querySelectorAll('span')[0].classList.add('hidden');
      }
      if (!elenement[s].querySelectorAll('span')[1].classList.contains('hidden')) {
        elenement[s].querySelectorAll('span')[1].classList.add('hidden');
      }
      if (!elenement[s].querySelectorAll('span')[2].classList.contains('hidden')) {
        elenement[s].querySelectorAll('span')[2].classList.add('hidden');
      }
      if (!elenement[s].querySelectorAll('span')[3].classList.contains('hidden')) {
        elenement[s].querySelectorAll('span')[3].classList.add('hidden');
      }

      if (this.state.isShiftLeftPressed || this.state.isShiftRightPressed) {
        if (this.state.isCapsLockPressed) {
          elenement[s].querySelectorAll('span')[3].classList.remove('hidden');
          this.state.case = 'shiftCaps';
        } else {
          elenement[s].querySelectorAll('span')[1].classList.remove('hidden');
          this.state.case = 'caseUp';
        }
      } else if (this.state.isCapsLockPressed) {
        elenement[s].querySelectorAll('span')[2].classList.remove('hidden');
        this.state.case = 'caps';
      } else {
        elenement[s].querySelectorAll('span')[0].classList.remove('hidden');
        this.state.case = 'caseDown';
      }
    }
  }

  toggleLang() {
    const toggleLangClass = () => {
      const e = this.element.querySelectorAll(`div>.${this.state.lang}`);
      for (let s = 0; s < e.length; s += 1) {
        e[s].classList.toggle('hidden');
        e[s].querySelectorAll(`span.${this.state.case}`)[0].classList.toggle('hidden');
      }
    };

    toggleLangClass();

    if (this.state.lang === 'eng') {
      this.state.lang = 'rus';
    } else {
      this.state.lang = 'eng';
    }
    localStorage.setItem('lang', this.state.lang);
    toggleLangClass();
  }

  implementKeyFunction() {
    let e = this.textarea.value;
    const s = this.textarea.selectionStart;
    const writeText = () => {
      if (s >= 0 && s <= e.length) {
        this.textarea.value = e.slice(0, s) + this.current.char + e.slice(s, e.length);
        this.textarea.selectionStart = s + this.current.char.length;
        this.textarea.selectionEnd = s + this.current.char.length;
      } else {
        this.textarea.value += this.current.char;
      }
    };

    if (c.SPECIALS.includes(this.current.code)) {
      switch (this.current.code) {
        case 'Backspace':
          if (s > 0 && s <= e.length) {
            e = e.slice(0, s - 1) + e.slice(s, e.length);
            this.textarea.value = e;
            this.textarea.selectionStart = s - 1;
            this.textarea.selectionEnd = s - 1;
          }
          break;
        case 'Delete':
          if (s >= 0 && s <= e.length - 1) {
            e = e.slice(0, s) + e.slice(s + 1, e.length);
            this.textarea.value = e;
            this.textarea.selectionStart = s;
            this.textarea.selectionEnd = s;
          }
          break;
        case 'Tab':
          this.current.char = '    ';
          writeText();
          break;
        case 'Enter':
          this.current.char = '\n';
          writeText();
          break;
        case 'CapsLock':
          if (this.state.isCapsLockPressed && !this.current.event.repeat) {
            this.removeActiveState();
            this.state.isCapsLockPressed = false;
          } else {
            this.addActiveState();
            this.state.isCapsLockPressed = true;
          }
          this.toggleCase();
          break;
        case 'ShiftLeft':
          if (!this.state.isShiftLeftPressed || !this.state.isShiftRightPressed) {
            this.addActiveState();
            this.state.isShiftLeftPressed = true;
            this.toggleCase();
          }
          break;
        case 'ShiftRight':
          if (!this.state.isShiftRightPressed || !this.state.isShiftLeftPressed) {
            this.addActiveState();
            this.state.isShiftRightPressed = true;
            this.toggleCase();
          }
          break;
        default:
          if (this.current.event.ctrlKey && this.current.event.altKey) {
            this.toggleLang();
          }
      }
    } else {
      writeText();
    }
  }

  keyDownHandler(e) {
    e.preventDefault();
    this.current.event = e;
    this.current.code = e.code;
    [this.current.element] = this.element.getElementsByClassName(e.code);
    if (this.current.element) {
      this.current.char = this.current.element.querySelectorAll(':not(.hidden)')[1].textContent;
      this.implementKeyFunction();
      if (this.current.code === 'MetaLeft') {
        this.addActiveState();
        setTimeout(() => {
          this.removeActiveState();
        }, 300);
      } else if (!['CapsLock', 'ShiftLeft', 'ShiftRight'].includes(this.current.code)) {
        this.addActiveState();
      }
    }
  }

  keyUpHandler(e) {
    const key = this.element.getElementsByClassName(e.code)[0];
    if (key) {
      this.current.element = key.closest('div');
      if (e.code !== 'CapsLock') {
        this.removeActiveState();
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.state.isShiftLeftPressed = e.code === 'ShiftLeft' ? false : this.state.isShiftLeftPressed;
        this.state.isShiftRightPressed = e.code === 'ShiftRight' ? false : this.state.isShiftRightPressed;
        this.removeActiveState();
        this.toggleCase();
      }
    }
  }

  mouseDownHandler(e) {
    if (e.target.tagName === 'SPAN') {
      this.current.event = e;
      this.current.element = e.target.closest('div');
      [, , this.current.code] = this.current.element.classList;

      this.current.char = e.target.textContent;
      this.implementKeyFunction();
      if (this.current.code !== 'CapsLock') {
        this.addActiveState();
      }
      this.previous = { ...this.current };
      e.preventDefault();
    }
  }

  mouseUpHandler(e) {
    this.current.event = e;
    this.current.element = e.target.closest('div');
    if (this.current.element && this.current.element.classList.contains('key')) {
      [, , this.current.code] = this.current.element.classList;
    } else {
      this.current = { ...this.previous };
    }
    if (this.current.code !== 'CapsLock') {
      this.removeActiveState();
      if (this.state.isShiftLeftPressed && this.current.code === 'ShiftLeft') {
        this.state.isShiftLeftPressed = false;
        this.toggleCase();
      }
      if (this.state.isShiftRightPressed && this.current.code === 'ShiftRight') {
        this.state.isShiftRightPressed = false;
        this.toggleCase();
      }
    }
  }

  initLanguage() {
    if (localStorage.lang === 'rus') {
      this.toggleLang();
    }
  }

  initKeyboard(e) {
    this.initDomStructure(e);
    this.initLanguage();
    document.addEventListener('keyup', this.keyUpHandler.bind(this));
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('mouseup', this.mouseUpHandler.bind(this));
    this.element.addEventListener('mousedown', this.mouseDownHandler.bind(this));
  }
}

const keyboard = new Keyboard();
keyboard.initKeyboard(c.ROWS);

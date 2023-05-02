import constants from './modules/dom.js';

const { KEYS, SPECIALS } = constants;

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

  initDomStructure(data) {
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

    for (let row = 0; row < data.length; row += 1) {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard--row', 'row');
      for (let el = 0; el < data[row].length; el += 1) {
        const key = document.createElement('div');
        key.classList.add('keyboard--key', 'key', data[row][el].className);
        const spanRus = document.createElement('span');
        spanRus.classList.add('rus', 'hidden');
        spanRus.insertAdjacentHTML('afterBegin', `<span class="caseDown hidden">${data[row][el].rus.caseDown}</span>`);
        spanRus.insertAdjacentHTML('beforeEnd', `<span class="caseUp hidden">${data[row][el].rus.caseUp}</span>`);
        spanRus.insertAdjacentHTML('beforeEnd', `<span class="caps hidden">${data[row][el].rus.caps || data[row][el].rus.caseUp}</span>`);
        spanRus.insertAdjacentHTML('beforeEnd', `<span class="shiftCaps hidden">${data[row][el].rus.shiftCaps || data[row][el].rus.caseDown}</span>`);
        key.appendChild(spanRus);
        const spanEn = document.createElement('span');
        spanEn.classList.add('eng');
        spanEn.insertAdjacentHTML('afterBegin', `<span class="caseDown">${data[row][el].eng.caseDown}</span>`);
        spanEn.insertAdjacentHTML('beforeEnd', `<span class="caseUp hidden">${data[row][el].eng.caseUp}</span>`);
        spanEn.insertAdjacentHTML('beforeEnd', `<span class="caps hidden">${data[row][el].eng.caps || data[row][el].eng.caseUp}</span>`);
        spanEn.insertAdjacentHTML('beforeEnd', `<span class="shiftCaps hidden">${data[row][el].eng.shiftCaps || data[row][el].eng.caseDown}</span>`);
        key.appendChild(spanEn);
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
    if (this.current.element) {
      this.current.element.classList.add('active');
    }
  }

  removeActiveState() {
    if (this.current.element) {
      this.current.element.classList.remove('active');
    }
  }

  toggleCase() {
    const spans = this.element.querySelectorAll(`div>.${this.state.lang}`);
    for (let i = 0; i < spans.length; i += 1) {
      spans[i].querySelectorAll('span')[0].classList.add('hidden');
      spans[i].querySelectorAll('span')[1].classList.add('hidden');
      spans[i].querySelectorAll('span')[2].classList.add('hidden');
      spans[i].querySelectorAll('span')[3].classList.add('hidden');

      if (this.state.isShiftLeftPressed || this.state.isShiftRightPressed) {
        if (this.state.isCapsLockPressed) {
          spans[i].querySelectorAll('span')[3].classList.remove('hidden');
          this.state.case = 'shiftCaps';
        } else {
          spans[i].querySelectorAll('span')[1].classList.remove('hidden');
          this.state.case = 'caseUp';
        }
      } else if (this.state.isCapsLockPressed) {
        spans[i].querySelectorAll('span')[2].classList.remove('hidden');
        this.state.case = 'caps';
      } else {
        spans[i].querySelectorAll('span')[0].classList.remove('hidden');
        this.state.case = 'caseDown';
      }
    }
  }

  toggleLang() {
    const toggleLangClass = () => {
      const spans = this.element.querySelectorAll(`div>.${this.state.lang}`);
      for (let i = 0; i < spans.length; i += 1) {
        spans[i].classList.toggle('hidden');
        spans[i].querySelectorAll(`span.${this.state.case}`)[0].classList.toggle('hidden');
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
    let text = this.textarea.value;
    const s = this.textarea.selectionStart;

    const writeText = () => {
      this.textarea.focus();
      if (s >= 0 && s <= text.length) {
        this.textarea.value = text.slice(0, s) + this.current.char + text.slice(s, text.length);
        this.textarea.selectionStart = s + this.current.char.length;
        this.textarea.selectionEnd = s + this.current.char.length;
      } else {
        this.textarea.value += this.current.char;
      }
    };

    if (SPECIALS.includes(this.current.code)) {
      switch (this.current.code) {
        case 'Backspace':
          this.textarea.focus();
          if (s > 0 && s <= text.length) {
            text = text.slice(0, s - 1) + text.slice(s, text.length);
            this.textarea.value = text;
            this.textarea.selectionStart = s - 1;
            this.textarea.selectionEnd = s - 1;
          }
          break;
        case 'Delete':
          this.textarea.focus();
          if (s >= 0 && s <= text.length - 1) {
            text = text.slice(0, s) + text.slice(s + 1, text.length);
            this.textarea.value = text;
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
          this.addActiveState();
          this.state.isShiftLeftPressed = true;
          this.toggleCase();
          break;
        case 'ShiftRight':
          this.addActiveState();
          this.state.isShiftRightPressed = true;
          this.toggleCase();
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

  initKeyboard(data) {
    this.initDomStructure(data);
    this.initLanguage();
    document.addEventListener('keyup', this.keyUpHandler.bind(this));
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('mouseup', this.mouseUpHandler.bind(this));
    this.element.addEventListener('mousedown', this.mouseDownHandler.bind(this));
  }
}

const keyboard = new Keyboard();
keyboard.initKeyboard(KEYS);

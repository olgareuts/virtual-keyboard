const keys = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&larr;',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '&crarr;',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift',
  'Ctrl', 'Alt', ' ', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;', 'Del'];
const keysRU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&larr;',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", '&crarr;',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&uarr;', 'Shift',
  'Ctrl', 'Alt', ' ', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;', 'Del'];
const keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Delete'];

const container = document.createElement('div');
const keyboard = document.createElement('div');
const input = document.createElement('textarea');
const subtitle = document.createElement('span');
const rows = document.getElementsByClassName('row');
const keyboardKeys = document.getElementsByClassName('key');
let isUpperCase = false;
let isShift = false;

subtitle.innerHTML = 'Клавиатура создана в операционной системе macOS. Для переключения языка комбинация: левые ctrl + alt ';
input.autofocus = true;
document.body.append(container);
container.className = 'wrapper';
keyboard.className = 'keyboard';
input.className = 'input';
container.append(input);
container.append(keyboard);
container.append(subtitle);

const addKey = (j, i) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.innerHTML = keys[j];
  rows[i].append(key);
};

for (let i = 0; i < 5; i += 1) {
  const row = document.createElement('div');
  row.className = ('row');
  keyboard.append(row);
}
for (let i = 0; i < 14; i += 1) {
  rows[0] = addKey(i, 0);
}
for (let i = 14; i < 28; i += 1) {
  rows[1] = addKey(i, 1);
}
for (let i = 28; i < 41; i += 1) {
  rows[2] = addKey(i, 2);
}
for (let i = 41; i < 54; i += 1) {
  rows[3] = addKey(i, 3);
}
for (let i = 54; i < 63; i += 1) {
  rows[4] = addKey(i, 4);
}

keyboardKeys[13].classList.add('key_medium', 'backspace');
keyboardKeys[14].classList.add('key_medium');
keyboardKeys[28].classList.add('key_medium');
keyboardKeys[40].classList.add('key_medium', 'enter');
keyboardKeys[41].classList.add('key_medium');
keyboardKeys[53].classList.add('key_medium');
keyboardKeys[56].classList.add('key_long');
keyboardKeys[54].classList.add('key_small');
keyboardKeys[55].classList.add('key_small');
keyboardKeys[57].classList.add('key_small');
keyboardKeys[58].classList.add('key_small');

document.addEventListener('keydown', (event) => {
  if (keysCode.includes(event.code)) {
    input.focus();
    const pos = keysCode.indexOf(event.code);
    keyboardKeys[pos].classList.add('key_active');
    console.log(pos)
    if (pos === 41 || pos == 53) {
     isShift = true;
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (keysCode.includes(event.code)) {
    const pos = keysCode.indexOf(event.code);
    keyboardKeys[pos].classList.remove('key_active');
    if (pos === 41 || pos == 53) {
      isShift = false;
    }
  }
});

document.querySelector('.keyboard').addEventListener('click', (event) => {
  if (event.target.classList.contains('key')) {
    const code = keys.indexOf(event.target.innerHTML);
    let pos = input.selectionStart;
    if (event.target.classList.contains('backspace')) {
      input.value = input.value.slice(0, pos - 1) + input.value.slice(pos);
      input.selectionStart = pos - 1;
    } else if (keysCode[code] === 'Backquote') {
      input.value += '`';
    } else if (keysCode[code] === 'Tab') {
      input.value += '    '; 
    } else if (keysCode[code] === 'CapsLock') {
      if (isUpperCase) {
        isUpperCase = false;
      } else {
        isUpperCase = true;
      }
      event.target.classList.toggle('key_colored');
    } else if (keysCode[code] === 'Delete') {
      input.value = input.value.slice(0, pos) + input.value.slice(pos + 1);
      input.selectionStart = pos + 1;
    } else if (keysCode[code] === 'ShiftLeft' || keysCode[code] === 'ShiftRight' || keysCode[code] === 'ControlLeft'
      || keysCode[code] === 'ControlRight' || keysCode[code] === 'AltLeft' || keysCode[code] === 'AltRight') {
      input.focus();
    } else if (event.target.classList.contains('enter')) {
      input.value = input.value.slice(0, pos) + '\r\n' + input.value.slice(pos);
    } else {
      if (isUpperCase || isShift) {
        input.value = input.value.slice(0, pos) + event.target.innerHTML + input.value.slice(pos);
        pos += 2;
      } else {
        input.value = input.value.slice(0, pos) + event.target.innerHTML.toLowerCase() + input.value.slice(pos);
        pos += 2;
      }
      input.selectionStart = pos - 1;
    }
    input.focus();
  }
});
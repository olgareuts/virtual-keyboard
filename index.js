
const keys = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&larr;', 
              'Tab','Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',  
              'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '&crarr;',
              '&uarr;', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650;','&uarr;',
              'option', 'CMD', '' , 'CMD', 'option','&#9668;', '&#9660;', '&#9658;','Ctrl'];
const keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
                  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
                  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
                  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
                  'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlLeft']

const container = document.createElement('div');
const keyboard = document.createElement('div');
const input = document.createElement('textarea');
const subtitle = document.createElement('span');
let isUpperCase = false;

subtitle.innerHTML = 'Клавиатура создана в операционной системе macOS';
input.autofocus = true;
document.body.append(container);
container.className = 'wrapper';
keyboard.className = 'keyboard';
input.className = 'input';
container.append(input);
container.append(keyboard);
container.append(subtitle);


const addKey = (j, i) => {
  let key = document.createElement('div');
  key.className = 'key';
  key.innerHTML = keys[j];
  rows[i].append(key);
}

for (let i = 0; i < 5; i++) {
  let row = document.createElement('div');
  row.className = ('row');
  keyboard.append(row);
}
let rows = document.getElementsByClassName('row');
  for (i = 0; i < 14; i++) {
    rows[0] = addKey(i, 0);
  }
  for ( i = 14; i < 28; i++) {
    rows[1] = addKey(i, 1);
  }
  for (i = 28; i < 41; i++) {
    rows[2] = addKey(i, 2);
  }
  for (i = 41; i < 54; i++) {
    rows[3] = addKey(i, 3);
  }
  for (i = 54; i < 63; i++) {
    rows[4] = addKey(i, 4);
  }

let keyboardKeys = document.getElementsByClassName('key');
keyboardKeys[13].classList.add('key_medium', 'backspace');
keyboardKeys[14].classList.add('key_medium');
keyboardKeys[28].classList.add('key_medium');
keyboardKeys[40].classList.add('key_medium');
keyboardKeys[41].classList.add('key_medium');
keyboardKeys[53].classList.add('key_medium');
keyboardKeys[56].classList.add('key_long');
keyboardKeys[54].classList.add('key_small');
keyboardKeys[55].classList.add('key_small');
keyboardKeys[57].classList.add('key_small');
keyboardKeys[58].classList.add('key_small');

document.addEventListener('keydown', function(event) {
  if (keysCode.includes(event.code)) {
    input.focus();
    let pos = keysCode.indexOf(event.code);
    keyboardKeys[pos].classList.add('key_active');
  }
});

document.addEventListener('keyup', function(event) {
  if (keysCode.includes(event.code)) {
    let pos = keysCode.indexOf(event.code);
    keyboardKeys[pos].classList.remove('key_active');
  }
});

document.querySelector('.keyboard').addEventListener('click', function(event) {
  if (event.target.classList.contains('key')) {
    let code = keys.indexOf(event.target.innerHTML);
    let pos = input.selectionStart;
    if (event.target.classList.contains('backspace')) {
      input.value = input.value.slice(0,input.selectionStart-1) + input.value.slice(input.selectionStart);
      input.selectionStart = pos - 1;
    } else if (keysCode[code] === 'Backquote') {
      input.value += '`';
    } else if (keysCode[code] === 'Tab') {
      input.value += '    '; 
    } else if (keysCode[code] === 'CapsLock') {
      isUpperCase ? isUpperCase = false : isUpperCase = true; 
      event.target.classList.toggle('key_colored');
    } else {
      if (isUpperCase) {
        input.value = input.value.slice(0,input.selectionStart)+ event.target.innerHTML + input.value.slice(input.selectionStart);
        pos+=2;
      } else {
        input.value = input.value.slice(0,input.selectionStart) + event.target.innerHTML.toLowerCase() + input.value.slice(input.selectionStart);
        pos+=2;
      } 
      input.selectionStart = pos - 1;
    }
    input.focus();
     console.log(input.selectionStart)
  };
})








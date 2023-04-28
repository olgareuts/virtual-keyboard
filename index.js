const container = document.createElement('div');
const keyboard = document.createElement('div');
const input = document.createElement('textarea');
const keys = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&larr;', 
              'Tab','Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL', 
              'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '&crarr;',
              '&uarr;', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650;','&uarr;',
               'Alt', 'Ctrl', '' , 'Ctrl', 'Alt', '&#9668;', '&#9660;', '&#9658;','fn'];
const data = {};
document.body.append(container);
container.className = 'wrapper';
keyboard.className = 'keyboard';
input.className = 'input';
container.append(input);
container.append(keyboard);

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
  for ( i = 14; i < 29; i++) {
    rows[1] = addKey(i, 1);
  }
  for (i = 29; i < 42; i++) {
    rows[2] = addKey(i, 2);
  }
  for (i = 42; i < 55; i++) {
    rows[3] = addKey(i, 3);
  }
  for (i = 55; i < 64; i++) {
    rows[4] = addKey(i, 4);
  }

let keyboardKeys = document.getElementsByClassName('key');
keyboardKeys[13].classList.add('key_medium');
keyboardKeys[14].classList.add('key_medium');
keyboardKeys[29].classList.add('key_medium');
keyboardKeys[41].classList.add('key_medium');
keyboardKeys[42].classList.add('key_medium');
keyboardKeys[54].classList.add('key_medium');
keyboardKeys[57].classList.add('key_long');





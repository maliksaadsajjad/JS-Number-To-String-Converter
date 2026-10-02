const inputField = document.getElementById('inputField');
const resetBtn = document.getElementById('resetBtn');
const convertBtn = document.getElementById('convertBtn');

let convertedString = ``;

function convertToString() {
  let newString = inputField.value;
  let iterationCompleted = false;
  convertedString = ``;

  while (newString.length > 0) {
    if (newString.length == 9) {
      convertedString += ` ${newString[0]} hundred`;
    } else if (newString.length >= 7 && !iterationCompleted) {
      if (newString.length == 7) {
        convertedString += ` ${newString[0]} million`;
        iterationCompleted = true;
      } else {
        convertedString += ` ${newString[0]}${newString[1]} million`;
        iterationCompleted = true;
      }
    } else if (newString.length == 6) {
      convertedString += ` ${newString[0]} hundred`;
      iterationCompleted = false;
    } else if (newString.length >= 4 && !iterationCompleted) {
      if (newString.length == 4) {
        convertedString += ` ${newString[0]} thousand`;
        iterationCompleted = true;
      } else {
        convertedString += ` ${newString[0]}${newString[1]} thousand`;
        iterationCompleted = true;
      }
    } else if (newString.length == 3) {
      convertedString += ` ${newString[0]} hundred`;
    } else if (newString.length == 2) {
      if (convertedString.length > 2) {
        convertedString += ` and ${newString[0]}${newString[1]}`;
      } else {
        convertedString += ` ${newString[0]}${newString[1]}`;
      }
    } else if (newString.length == 1 && convertedString === '') {
      convertedString += ` ${newString[0]}`;
    }
    newString = newString.slice(1);
  }
}

resetBtn.addEventListener('click', () => {
  inputField.value = '';
  inputField.focus();
});

convertBtn.addEventListener('click', () => {
  if (inputField.value === '') {
    alert('Please enter a number first!');
    inputField.focus();
    return;
  }
  if (inputField.value.length > 9) {
    alert('Please Enter a value smaller than One Billion!');
    inputField.value = '';
    inputField.focus();
    return;
  }
  convertToString();
  console.log('Converted Value: ', convertedString);
});

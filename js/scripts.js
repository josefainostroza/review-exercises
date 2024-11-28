const buttonElement = document.getElementById('buttons');
const counterElement = document.getElementById('counter-text');
const buttonReset = document.getElementById('reset');
const randomElement = document.getElementById('random-word-title');
const ChangeButton = document.getElementById('change-word-button');
const textPasswordElement = document.getElementById('input-password');
const listElement = document.getElementById('list');

const numbers = '1234567890';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

const words = [
  'apple',
  'banana',
  'cherry',
  'dog',
  'elephant',
  'flower',
  'grape',
  'house',
  'island',
  'jungle',
  'kite',
  'lion',
  'mountain',
  'night',
  'ocean',
  'piano',
  'queen',
  'river',
  'sun',
  'tree',
  'umbrella',
  'village',
  'water',
  'xylophone',
  'yellow',
  'zebra',
  'garden',
  'window',
  'cloud',
  'rocket',
];

words[0];

let counter = 0;
buttonReset.disabled = true;

const getButtonsFuction = (event) => {
  const dataButton = event.target.dataset.type;
  console.log(event.target.dataset.type);

  if (dataButton === 'decrement') {
    counter--;
  } else if (dataButton === 'reset') {
    counter = 0;
  } else if (dataButton === 'increment') {
    counter++;
  }

  if (counter === 0) {
    buttonReset.disabled = true;
  } else {
    buttonReset.disabled = false;
  }
  counterElement.textContent = counter;
};

buttonElement.addEventListener('click', getButtonsFuction);

const randomWords = (event) => {
  const randomnumber = Math.floor(Math.random() * words.length);
  const randomWords = words[randomnumber];

  randomElement.textContent = randomWords;
};
ChangeButton.addEventListener('click', randomWords);

const Password = (event) => {
  const eventElement = event.target.value;

  if (listElement.childElementCount === 0) {
    const newItem1 = document.createElement('li');
    newItem1.textContent = `El texto tiene 0 caracteres`;
    newItem1.setAttribute('id', 'caracters');
    newItem1.setAttribute('class', 'red');
    listElement.append(newItem1);
    const newItem2 = document.createElement('li');
    newItem2.textContent = `El texto tiene 0 mayúsculas`;
    newItem2.setAttribute('id', 'mayus');
    newItem2.setAttribute('class', 'red');
    listElement.append(newItem2);
    const newItem3 = document.createElement('li');
    newItem3.textContent = `El texto tiene 0 números`;
    newItem3.setAttribute('id', 'number');
    newItem3.setAttribute('class', 'red');
    listElement.append(newItem3);
    const newItem4 = document.createElement('li');
    newItem4.textContent = `El texto tiene 0 caracteres especiales`;
    newItem4.setAttribute('id', 'especials');
    newItem4.setAttribute('class', 'red');
    listElement.append(newItem4);
  }

  if (eventElement.length > 5) {
    document.getElementById('caracters').classList.add('green');
  } else {
    document.getElementById('caracters').classList.remove('green');
  }

  document.getElementById(
    'caracters'
  ).textContent = `El texto tiene ${eventElement.length} caracteres`;

  let countUpperCase = 0;
  for (let i = 0; i < eventElement.length; i++) {
    if (uppercase.includes(eventElement.charAt(i))) {
      countUpperCase++;
    }
  }
  if (countUpperCase > 0) {
    document.getElementById('mayus').classList.add('green');
  } else {
    document.getElementById('mayus').classList.remove('green');
  }
  document.getElementById(
    'mayus'
  ).textContent = `El texto tiene ${countUpperCase} mayúsculas`;

  let countNumbers = 0;
  for (let i = 0; i < eventElement.length; i++) {
    if (numbers.includes(eventElement.charAt(i))) {
      countNumbers++;
    }
  }
  if (countNumbers > 0) {
    document.getElementById('number').classList.add('green');
  } else {
    document.getElementById('number').classList.remove('green');
  }
  document.getElementById(
    'number'
  ).textContent = `El texto tiene ${countNumbers} números`;

  let countEspecials = 0;
  for (let i = 0; i < eventElement.length; i++) {
    if (specialCharacters.includes(eventElement.charAt(i))) {
      countEspecials++;
    }
  }
  if (countEspecials > 0) {
    document.getElementById('especials').classList.add('green');
  } else {
    document.getElementById('especials').classList.remove('green');
  }
  document.getElementById(
    'especials'
  ).textContent = `El texto tiene ${countEspecials} caracteres especiales`;
};
textPasswordElement.addEventListener('input', Password);

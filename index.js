const form = document.querySelector('.form');
const userInputEl = document.getElementById('user-input');
const radioInputEls = document.querySelectorAll(['input[name=arr-methods]']);
const output = document.getElementById('output');

const filterEven = (arr) => arr.filter((el) => el % 2 === 0);
const calculateTotal = (arr) => arr.reduce((a, b) => a + b);

const cleanInput = () => {
  userInputEl.value = '';
};
function calculateHandler(ev) {
  ev.preventDefault();

  if (userInputEl.value.trim().length === 0) {
    output.innerHTML =
      'The input field is empty, please enter comma separated numbers';
    userInputEl.className = 'error';
    return;
  }

  const inputValue = userInputEl.value.split(',');
  const numbers = inputValue.map((el) => (!isNaN(el) ? +el : 'not a number'));
  if (numbers.includes('not a number')) {
    output.innerHTML = 'Please enter comma separated "numbers"';
    userInputEl.className = 'error';
    return;
  }

  let radioValue;
  for (const el of radioInputEls) {
    if (el.checked) {
      radioValue = el.value;
      break;
    }
  }
  if (radioValue === 'filter') {
    output.innerHTML = filterEven(numbers);
    cleanInput();
    return;
  } else if (radioValue === 'total') {
    output.innerHTML = calculateTotal(numbers);
    cleanInput();
    return;
  }
}
form.addEventListener('submit', calculateHandler);
userInputEl.addEventListener('focus', () => {
  userInputEl.className = '';
});

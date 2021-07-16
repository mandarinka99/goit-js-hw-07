const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const innerText = outputRef.textContent;

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== '') {
    outputRef.textContent = event.currentTarget.value
  } else {
    outputRef.textContent = innerText;
  }
  
};


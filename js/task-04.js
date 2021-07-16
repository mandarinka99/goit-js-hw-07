const refs = {
  removeListenerBtn: document.querySelector('[data-action="decrement"]'),
  addListenerBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector('#value'),
};

console.log(refs);

let counterValue = 0;
refs.addListenerBtn.addEventListener('click', increment);
refs.removeListenerBtn.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}


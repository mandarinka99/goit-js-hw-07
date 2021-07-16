const inputRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRef.addEventListener('input', event => {
 text.style.fontSize = event.currentTarget.value + 'px';
});
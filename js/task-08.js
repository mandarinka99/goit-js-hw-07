const renderBut = document.querySelector('button[data-action="render"]');
const destroyBut = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

function randomRgba() {
  let o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function destroy() {
  boxes.innerHTML = "";
};

destroyBut.addEventListener('click', () => {
  destroy();
});

function createBoxes(amount) {
  destroy();
  for (let i = 0; i < amount; i++ ) {
    let div = document.createElement('div');
    div.textContent = 30 + 10 * i
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = randomRgba();
    boxes.append(div);
  }
};

renderBut.addEventListener('click', ()=> {
  const amount = input.value;
  createBoxes(amount);
}) 



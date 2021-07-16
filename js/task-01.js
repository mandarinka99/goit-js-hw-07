
const menuItemsEl = document.querySelectorAll('.item');
console.log(`В списке ${menuItemsEl.length} категории.`);

const arr = [];

const itemText = menuItemsEl.forEach(item => {
  arr.push({ name: item.firstElementChild.textContent, count: 0 })
});

const sumLi = menuItemsEl.forEach((item, index) => {
  arr[index].count = item.querySelectorAll('li').length
});

const print = arr.forEach(item => 
  console.log(`Категория: ${item.name}
Количество элементов: ${item.count}`));



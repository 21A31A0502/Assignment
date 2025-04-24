const items = document.querySelectorAll('.draggable');
const canvas = document.getElementById('canvas');
const cart = [];

items.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', item.src);
    e.dataTransfer.setData('text/item', item.dataset.item);
  });
});

canvas.addEventListener('dragover', e => {
  e.preventDefault();
});

canvas.addEventListener('drop', e => {
  e.preventDefault();
  const src = e.dataTransfer.getData('text/plain');
  const itemName = e.dataTransfer.getData('text/item');
  const img = document.createElement('img');
  img.src = src;
  img.style.left = `${e.offsetX - 40}px`;
  img.style.top = `${e.offsetY - 40}px`;
  canvas.appendChild(img);
  canvas.querySelector('.placeholder')?.remove();
  cart.push(itemName);
});

document.getElementById('addToCart').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("No items added to outfit!");
  } else {
    alert(`Added to cart: ${[...new Set(cart)].join(', ')}`);
  }
});

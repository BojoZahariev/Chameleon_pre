//hex
var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);

var randomColor = (Math.random().toString(16) + '000000').slice(2, 8);

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

//rgb
color =
  'rgb(' +
  Math.floor(Math.random() * 255) +
  ',' +
  Math.floor(Math.random() * 255) +
  ',' +
  Math.floor(Math.random() * 255) +
  ')';

var display = document.getElementById('display');
randomColor = randomColor.toUpperCase();
display.textContent = randomColor;
display.style.backgroundColor = '#' + randomColor;

for (let i = 0; i < 3; i++) {
  let item = document.createElement('p');
  item.classList.add('item');
  display.appendChild(item);
}
let child = display.getElementsByClassName('item');
child[0].textContent = randomColor.slice(0, 2);
child[1].textContent = randomColor.slice(2, 4);
child[2].textContent = randomColor.slice(4, 6);

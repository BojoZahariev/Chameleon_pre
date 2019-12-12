//var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);

/*
function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
*/

//hex
var randomColor = (Math.random().toString(16) + '000000').slice(2, 8);

//rgb
colorRGB = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

//display hex
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

//display rgb
var display2 = document.getElementById('display2');
display2.textContent = colorRGB();
display2.style.backgroundColor = colorRGB();
console.log('TCL: colorRGB', colorRGB());

for (let i = 0; i < 3; i++) {
  let item = document.createElement('p');
  item.classList.add('item');
  display2.appendChild(item);
}

/*
let child2 = display2.getElementsByClassName('item');
child2[0].textContent = colorRGB.slice(0, 2);
child2[1].textContent = colorRGB.slice(2, 4);
child2[2].textContent = colorRGB.slice(4, 6);
*/

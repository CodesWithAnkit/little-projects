const text = document.querySelector('.fancy');

const strText = text.textContent; //for getting text of the .fancy

const splitText = strText.split(''); //Spliting the text for making an array

text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += '<span>' + splitText[i] + '</span>';
}

let char = 0;
let timmer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timmer);
  timmer = null;
}

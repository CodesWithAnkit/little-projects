const circles = document.querySelectorAll('.circle');

const colors = [
  'red',
  'grey',
  'yellow',
  'blue',
  'green',
  'vilote',
  'red',
  'grey',
  'yellow',
  'blue',
  'green',
  'vilote'
];

const style = document.createElement('style');
let styleInner;

circles.forEach((circle, idx) => {
  circle.style.borderWidth = (idx + 1) * 10 + 'px';
  circle.style.zIndex = -idx;
  circle.style.animationName = `rotate-${idx}`;
  //   circle.style.borderColor = colors[idx];

  const deg = (idx + 1) * 360;

  styleInner += `
    @keyframes rotate-${idx} {
        to {
            transform: translate(-50%, -50%) rotate(${deg}deg);
        }
    }
  `;
});

style.innerHTML = styleInner;

document.body.appendChild(style);

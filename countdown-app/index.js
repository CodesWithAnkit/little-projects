var countDate = new Date('Jan 1, 2020 00:00:00').getTime();

const newYear = () => {
  let now = new Date().getTime();
  gap = countDate - now;

  let second = 1000;
  let min = second * 60;
  let hour = min * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / min);
  let s = Math.floor((gap % min) / second);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
};

setInterval(() => {
  newYear();
}, 1000);

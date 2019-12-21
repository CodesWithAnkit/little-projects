const clock = () => {
  const hour = document.getElementById('hour');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  let hr = new Date().getHours();
  let mi = new Date().getMinutes();
  let se = new Date().getSeconds();

  hour.innerHTML = hr;
  minutes.innerHTML = mi;
  seconds.innerHTML = se;
};
let interval = setInterval(clock, 1000);

const progress = document.querySelectorAll('.progress-bar');

progress.forEach(pro => {
  const done = +pro.getAttribute('data-done');

  const duration = getComputedStyle(pro).transitionDuration;
  const timeoutDuration = +duration.slice(0, 1) * 1000;

  pro.style.width = done + '%';
  pro.style.opacity = 1;

  for (let i = 0; i <= done; i++) {
    setTimeout(() => {
      pro.innerText = i + '%';
    }, (timeoutDuration / done) * i);
  }
});

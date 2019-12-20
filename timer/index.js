const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const circle = document.querySelector('circle');

// svg animation
const parameter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', parameter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (parameter * timeRemaining) / duration - parameter
    );
  },
  onComplete() {
    console.log('Timmer is just completed');
  }
});

'use strict';
{
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const result = document.getElementById('result');
  let startTime;
  let isStarted = false;

  start.addEventListener('click',() => {
    if(isStarted === true) {
      return;
    }
    isStarted = true;
    startTime = Date.now();
    start.classList.add('pushed');
    stop.classList.remove('pushed');
    result.textContent = '0.000';
    result.className = 'standby';
  });

  stop.addEventListener('click',() => {
    if(isStarted === false) {
      return;
    }
    isStarted = false;
    const elapsedTime = (Date.now() - startTime) / 1000;
    result.textContent = elapsedTime.toFixed(3);
    stop.classList.add('pushed');
    start.classList.remove('pushed');
    result.classList.remove('standby');
    const diff = elapsedTime - 5.0;
    if (Math.abs(diff) < 1.0) {
      result.classList.add('perfect');
    }
  });











}

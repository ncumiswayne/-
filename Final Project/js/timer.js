let timer = null;
let seconds = 0;

function startTimer(displayElement) {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    displayElement.textContent = `${mins} 分 ${secs} 秒`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer(displayElement) {
  stopTimer();
  seconds = 0;
  displayElement.textContent = "0 分 0 秒";
}

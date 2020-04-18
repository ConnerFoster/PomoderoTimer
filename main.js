const timerText = document.getElementById('timerText');
const pomoButton = document.getElementById('pomodero');
const shortBreakButton = document.getElementById('short-break');

let countdown;

function timer(seconds) {
    const currentTime = Date.now();
    const userTime = currentTime + seconds*1000;
    displayTime(seconds);

    countdown = setInterval(() => {
        const secondsRemaining = Math.round((userTime - Date.now()) / 1000);

        if(secondsRemaining < 0) {
            clearInterval(countdown)
            return;
        }
        displayTime(secondsRemaining);
    }, 1000);
}

function displayTime(seconds) {
   const minutes = Math.floor(seconds / 60);
   const remainderSeconds = seconds % 60;
   let display = minutes + ':' + remainderSeconds;
   timerText.textContent = display;
   while(remainderSeconds < 10) {
       display = minutes + ':0' + remainderSeconds;
   }
}


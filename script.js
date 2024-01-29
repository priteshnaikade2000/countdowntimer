let timer;
let secondsRemaining;
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function restartTimer() {
    stopTimer();
    resetTimer();
    startTimer();
}


function resetTimer() {
    stopTimer();
    secondsRemaining = 300; // Change this value to set the countdown time in seconds (5 minutes in this example)
    updateTimer();
}

function updateTimer() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    document.getElementById('timer').innerText = `${formatTime(minutes)}:${formatTime(seconds)}`;

    if (secondsRemaining === 0) {
        stopTimer();
    } else {
        secondsRemaining--;
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial setup
resetTimer();

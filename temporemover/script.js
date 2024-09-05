let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// Chronometer variables
let chronoTimer;
let chronoTime = 0;
const chronoDisplay = document.getElementById('chrono');
const startChronoBtn = document.getElementById('startChronoBtn');
const resetChronoBtn = document.getElementById('resetChronoBtn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateChronoDisplay() {
    const hours = Math.floor(chronoTime / 3600);
    const minutes = Math.floor((chronoTime % 3600) / 60);
    const seconds = chronoTime % 60;
    chronoDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft === 0) {
                clearInterval(timer);
                timer = null;
                alert('Pomodoro session completed!');
            }
        }, 1000);
        startBtn.textContent = 'Pause';
    } else {
        clearInterval(timer);
        timer = null;
        startBtn.textContent = 'Resume';
    }
}

function startChrono() {
    if (!chronoTimer) {
        chronoTimer = setInterval(() => {
            chronoTime++;
            updateChronoDisplay();
        }, 1000);
        startChronoBtn.textContent = 'Pause';
    } else {
        clearInterval(chronoTimer);
        chronoTimer = null;
        startChronoBtn.textContent = 'Resume';
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateDisplay();
    startBtn.textContent = 'Start';
}

function resetChrono() {
    clearInterval(chronoTimer);
    chronoTimer = null;
    chronoTime = 0;
    updateChronoDisplay();
    startChronoBtn.textContent = 'Start';
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
startChronoBtn.addEventListener('click', startChrono);
resetChronoBtn.addEventListener('click', resetChrono);

updateDisplay();
updateChronoDisplay();
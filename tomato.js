let timer;
let isRunning = false;
let timeLeft;
let isWorkTime = true;

let workTime = 25 * 60;
let breakTime = 5 * 60;

function startTimer() {
    const workInput = document.getElementById("workTime").value;
    const breakInput = document.getElementById("breakTime").value;

    if (workInput) workTime = parseInt(workInput) * 60;
    if (breakInput) breakTime = parseInt(breakInput) * 60;

    if (isRunning) return;

    isRunning = true;
    timeLeft = isWorkTime ? workTime : breakTime;

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            isWorkTime = !isWorkTime;
            timeLeft = isWorkTime ? workTime : breakTime;
            alert(isWorkTime ? "休息時間到，開始工作！" : "工作時間到，開始休息！");
            startTimer();
            return;
        }
        timeLeft--;
        updateDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isWorkTime = true;
    timeLeft = workTime;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("time").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

resetTimer();

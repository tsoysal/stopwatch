const display = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    function playAlarm() {
        console.log("bip bip, bip bip!")
    }

    function displayDuration() {
        display.textContent = duration + " sn";
    }

    this.start = function() {
        if(running) {
            display.textContent = 'Stopwatch has already started.';
            return
        }

        running = true;
        startTime = new Date();
        playAlarm();
        display.textContent = "Started...";
    }
    this.stop = function() {
        if(!running){
            display.textContent = 'Stopwatch is not started';
            return
        }
        // Stop the time
        running = false;
        endTime = new Date();
        const seconds = ((endTime.getTime()) - (startTime.getTime())) / 1000;
        duration += seconds;
        playAlarm();
        displayDuration();
    }
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
        displayDuration();
    }
}

const sw = new Stopwatch();

startBtn.addEventListener('click', sw.start);
stopBtn.addEventListener('click', sw.stop);
resetBtn.addEventListener('click', sw.reset);

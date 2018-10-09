const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var interval;
var timerRunning;
var numberOfWords;
var numberOfWordsPerMinute;
var numberOfWordsPerSecond;
var numberOfErrors;
var timer;

initializeValues();

function initializeValues () {
    interval = null;
    timerRunning = false;
    timer = [0,0,0,0];
    numberOfWords = 0;
    numberOfWordsPerMinute = 0;
    numberOfWordsPerSecond = 0;
    numberOfErrors = 0;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Match the text entered with the provided text on the page:

function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/1000)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

// Start the timer when the text entered starts i.e. length is 0

function start() {
    let textEnteredLenght = testArea.value.length;

    if (textEnteredLenght === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer , 10);
    }
}

function calculateAndDisplayStatistics() {

    var timeInSeconds = timer[3]/100;
    console.log(timeInSeconds);

    numberOfWords = testArea.value.split(' ').length;

    numberOfWordsPerSecond = numberOfWords/timeInSeconds;
    numberOfWordsPerMinute = numberOfWordsPerSecond * 60;

}

function stopTimer() {
    calculateAndDisplayStatistics();
    clearInterval(interval);
}

function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substr(0, textEntered.length);

    numberOfWords = testArea.value.split(' ').length;

    numberOfWordsPerSecond= numberOfWords/timeInSeconds;
    numberOfWordsPerMinute = numberOfWordsPerSecond * 60;

    if (textEntered == originText) {
        testWrapper.style.borderColor = "#429890";
        stopTimer();
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        }
        else {
            testWrapper.style.borderColor = "#E95D0F";
            numberOfErrors++;
        }
    }
}

function resetTimer() {
    clearInterval(interval);
    initializeValues();
}

// Reset everything:

// Event listeners for keyboard input and the reset button:

// Event Listener For KeyPress
testArea.addEventListener("keypress", start, false);

// Event Listener For KeyUp
testArea.addEventListener("keyup", spellCheck, false);

// Event Listener For Reset Button Click
resetButton.addEventListener("click", resetTimer, false);

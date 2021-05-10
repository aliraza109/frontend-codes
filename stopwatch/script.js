// Convert time to a format of hours, minutes, seconds, and milliseconds
let can = document.getElementById("canvas"),
  c = can.getContext("2d");
function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);
  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);
  canvasProgress(ss);
  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("procent").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 1000);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00");
  elapsedTime = 0;
  showButton("PLAY");
  ClearCanvas();
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
function ClearCanvas() {
  c.clearRect(0, 0, can.width, can.height);
}

function canvasProgress(ss) {
  let posX = can.width / 2,
    posY = can.height / 2,
    procent = 0,
    oneProcent = 360 / 60;
  arcMove(ss);

  function arcMove(ss) {
    let deegres = 6 * ss;
    let acrInterval = function () {
      deegres += 1;
      ClearCanvas();
      //Create gradient
      var gradient = c.createLinearGradient(50, 50, 10, 238, 50, 300);
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(1, "#3dcc20");
      procent = deegres / oneProcent;
      c.beginPath();
      c.strokeStyle = gradient;

      // c.strokeStyle = "#3dcc20";
      c.lineWidth = "14";
      c.arc(
        posX,
        posY,
        80,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + deegres)
      );
      c.stroke();
    };
    acrInterval();
  }
}

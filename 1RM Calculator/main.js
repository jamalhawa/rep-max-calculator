//variables for elements
var benchButton = document.getElementById("benchButton");
var squatButton = document.getElementById("squatButton");
var deadliftButton = document.getElementById("deadliftButton");
var metricButton = document.getElementById("metricButton");
var imperialButton = document.getElementById("imperialButton");
var calculateButton = document.getElementById("calculateButton");
var resetButton = document.getElementById("resetButton");

var ratioSpan = document.getElementById("ratioSpan");
var ratingSpan = document.getElementById("ratingSpan");
var exerciseSpan = document.getElementById("exerciseSpan");

var bodyweightInput = document.getElementById("bodyweightInput");
var weightliftInput = document.getElementById("weightliftInput");

var exercise = "bench press";

//event listeners

calculateButton.addEventListener("click", Calculate);
benchButton.addEventListener("click", Bench);
squatButton.addEventListener("click", Squat);
deadliftButton.addEventListener("click", Deadlift);
metricButton.addEventListener("click", Metric);
imperialButton.addEventListener("click", Imperial);
resetButton.addEventListener("click", Reset);

//functions

function Calculate() {
  var Ratio = weightliftInput.value / bodyweightInput.value;
  ratioSpan.innerHTML = Ratio.toFixed(2) + "X";

  //MUST USE THREE EQUAL SIGNS I GUESS?
  //if statement for bench press
  if (exercise === "bench press") {
    if (Ratio < 0.8) {
      ratingSpan.innerHTML = "Below Average";
      ratingSpan.style.color = "red";
    } else if (Ratio < 1) {
      ratingSpan.innerHTML = "Average";
      ratingSpan.style.color = "black";
    } else if (Ratio > 1) {
      ratingSpan.innerHTML = "Above Average";
      ratingSpan.style.color = "green";
    } //if statement for squat
  } else if (exercise === "squat") {
    if (Ratio < 1) {
      ratingSpan.innerHTML = "Below Average";
      ratingSpan.style.color = "red";
    } else if (Ratio < 1.5) {
      ratingSpan.innerHTML = "Average";
      ratingSpan.style.color = "black";
    } else if (Ratio > 1.5) {
      ratingSpan.innerHTML = "Above Average";
      ratingSpan.style.color = "green";
    } //if statement for deadlift
  } else if (exercise === "deadlift") {
    if (Ratio < 1.5) {
      ratingSpan.innerHTML = "Below Average";
      ratingSpan.style.color = "red";
    } else if (Ratio < 2) {
      ratingSpan.innerHTML = "Average";
      ratingSpan.style.color = "black";
    } else if (Ratio > 2) {
      ratingSpan.innerHTML = "Above Average";
      ratingSpan.style.color = "green";
    }
  }
}

//bench
function Bench() {
  benchButton.classList.add("Active");
  squatButton.classList.remove("Active");
  deadliftButton.classList.remove("Active");
  exercise = "bench press";
  exerciseSpan.innerHTML = exercise;
  //reset values
  bodyweightInput.value = "";
  weightliftInput.value = "";
  ratioSpan.innerHTML = "---";
  ratingSpan.innerHTML = "---";
  ratingSpan.style.color = "black";
}

//squat
function Squat() {
  benchButton.classList.remove("Active");
  squatButton.classList.add("Active");
  deadliftButton.classList.remove("Active");
  exercise = "squat";
  exerciseSpan.innerHTML = exercise;
  //reset values
  bodyweightInput.value = "";
  weightliftInput.value = "";
  ratioSpan.innerHTML = "---";
  ratingSpan.innerHTML = "---";
  ratingSpan.style.color = "black";
}

//deadlift
function Deadlift() {
  benchButton.classList.remove("Active");
  squatButton.classList.remove("Active");
  deadliftButton.classList.add("Active");
  exercise = "deadlift";
  exerciseSpan.innerHTML = exercise;
  //reset values
  bodyweightInput.value = "";
  weightliftInput.value = "";
  ratioSpan.innerHTML = "---";
  ratingSpan.innerHTML = "---";
  ratingSpan.style.color = "black";
}

//metric
function Metric() {
  bodyweightUnitSpan.innerHTML = "kilograms";
  weightliftUnitSpan.innerHTML = "kilograms";
  metricButton.classList.add("Active");
  imperialButton.classList.remove("Active");
}

//imperial
function Imperial() {
  bodyweightUnitSpan.innerHTML = "pounds";
  weightliftUnitSpan.innerHTML = "pounds";
  imperialButton.classList.add("Active");
  metricButton.classList.remove("Active");
}

//reset
function Reset() {
  bodyweightInput.value = "";
  weightliftInput.value = "";
  ratioSpan.innerHTML = "---";
  ratingSpan.innerHTML = "---";
  ratingSpan.style.color = "black";
}

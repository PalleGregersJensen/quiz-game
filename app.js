"use strict";

window.addEventListener("load", start);

let points = 0;

// Start app
function start() {
  console.log("JS kører");
  document.querySelector("#start-button-quiz").addEventListener("click", questionOne);
}

// Spørgsmål 1
function questionOne() {
  console.log("button clicked");
  document.querySelector("#question-one-dialog").showModal();
  document
    .querySelector("#question-one-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionOne);
}

function answerButtonClickedInQuestionOne() {
  answerQuestionOne();
}

function answerQuestionOne() {
  const ulanBator = document.querySelector("#ulan-bator");
  const kathmandu = document.querySelector("#kathmandu");
  const phomPenh = document.querySelector("#phom-penh");

  if (ulanBator.checked) {
    document.querySelector("#question-one-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  } else if (phomPenh.checked) {
    document.querySelector("#question-one-dialog-result").textContent = "Desværre forkert";
  } else if (kathmandu.checked) {
    document.querySelector("#question-one-dialog-result").textContent = "Desværre forkert";
  }
  console.log("Læses dette?");
  document.querySelector("#question-one-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionOne, 2000);
}
// Spørgsmål 1 dialogvindue lukkes
function closeDialogQuestionOne() {
  document.querySelector("#question-one-dialog").close();
  questionTwo();
  console.log("close dialog");
}

// Spørgsmål 2
function questionTwo() {
  console.log("question two");
  document.querySelector("#question-two-dialog").showModal();
  document
    .querySelector("#question-two-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionTwo);
  console.log("Spørgsmål 2");
}

function answerButtonClickedInQuestionTwo() {
  answerQuestionTwo();
}

function answerQuestionTwo() {
  const seanBean = document.querySelector("#sean-bean");
  const gabrielByrne = document.querySelector("#gabriel-byrne");
  const alanRickman = document.querySelector("#alan-rickman");

  if (seanBean.checked) {
    document.querySelector("#question-two-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  } else if (gabrielByrne.checked) {
    document.querySelector("#question-two-dialog-result").textContent = "Desværre forkert";
  } else if (alanRickman.checked) {
    document.querySelector("#question-two-dialog-result").textContent = "Desværre forkert";
  }
  console.log("Læses dette i spørgsmål to?");
  document.querySelector("#question-two-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionTwo, 2000);
}

// Spørgsmål 2 dialog lukkes
function closeDialogQuestionTwo() {
  document.querySelector("#question-two-dialog").close();
  questionThree();
}

// Spørgsmål 3
function questionThree() {
  console.log("question three");
  document.querySelector("#question-three-dialog").showModal();
  document
    .querySelector("#question-three-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionThree);
  console.log("Spørgsmål 3");
}

function answerButtonClickedInQuestionThree() {
  answerQuestionThree();
}

function answerQuestionThree() {
  const everyThirdYear = document.querySelector("#EP3");
  const everyFourthYear = document.querySelector("#EP4");
  const everyFifthYear = document.querySelector("#EP5");

  if (everyThirdYear.checked) {
    document.querySelector("#question-three-dialog-result").textContent = "Desværre forkert";
  } else if (everyFourthYear.checked) {
    document.querySelector("#question-three-dialog-result").textContent = "Desværre forkert";
  } else if (everyFifthYear.checked) {
    document.querySelector("#question-three-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  }
  console.log("Læses dette i spørgsmål tre?");
  document.querySelector("#question-three-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionThree, 2000);
  console.log("Hvad sker der her?");
}

// Spørgsmål 3 dialog lukkes
function closeDialogQuestionThree() {
  document.querySelector("#question-three-dialog").close();
  questionFour();
  console.log("Spørgsmål 4");
}

// Spørgsmål 4
function questionFour() {
  console.log("question four");
  document.querySelector("#question-four-dialog").showModal();
  document
    .querySelector("#question-four-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionFour);
  console.log("Spørgsmål 4");
}

function answerButtonClickedInQuestionFour() {
  answerQuestionFour();
}

function answerQuestionFour() {
  const mikeLeigh = document.querySelector("#mike-leigh");
  const johnFrankenheimer = document.querySelector("#john-frankenheimer");
  const melBrooks = document.querySelector("#mel-brooks");

  if (mikeLeigh.checked) {
    document.querySelector("#question-four-dialog-result").textContent = "Desværre forkert";
  } else if (johnFrankenheimer.checked) {
    document.querySelector("#question-four-dialog-result").textContent = "Desværre forkert";
  } else if (melBrooks.checked) {
    document.querySelector("#question-four-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  }
  console.log("Læses dette i spørgsmål tre?");
  document.querySelector("#question-four-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionFour, 2000);
}

// Spørgsmål 4 dialog lukkes
function closeDialogQuestionFour() {
  document.querySelector("#question-four-dialog").close();
  questionFive();
}

// Spørgsmål 5
function questionFive() {
  console.log("question five");
  document.querySelector("#question-five-dialog").showModal();
  document
    .querySelector("#question-five-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionFive);
  console.log("Spørgsmål 5");
}

function answerButtonClickedInQuestionFive() {
  answerQuestionFive();
}

function answerQuestionFive() {
  const answerOne = document.querySelector("#answer-one");
  const answerTwo = document.querySelector("#answer-two");
  const answerThree = document.querySelector("#answer-three");

  if (answerOne.checked) {
    document.querySelector("#question-five-dialog-result").textContent = "Desværre forkert";
  } else if (answerTwo.checked) {
    document.querySelector("#question-five-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  } else if (answerThree.checked) {
    document.querySelector("#question-five-dialog-result").textContent = "Desværre forkert";
  }
  console.log("Læses dette i spørgsmål tre?");
  document.querySelector("#question-five-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionFive, 2000);
}

// Spørgsmål 5 dialog lukkes
function closeDialogQuestionFive() {
  document.querySelector("#question-five-dialog").close();
  questionSix();
}

// Spørgsmål 6
function questionSix() {
  console.log("question six");
  document.querySelector("#question-six-dialog").showModal();
  document
    .querySelector("#question-six-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionSix);
  console.log("Spørgsmål 6");
}

function answerButtonClickedInQuestionSix() {
  answerQuestionSix();
}

function answerQuestionSix() {
  const poland = document.querySelector("#poland");
  const germany = document.querySelector("#germany");
  const hungary = document.querySelector("#hungary");

  if (poland.checked) {
    document.querySelector("#question-six-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  } else if (germany.checked) {
    document.querySelector("#question-six-dialog-result").textContent = "Desværre forkert";
  } else if (hungary.checked) {
    document.querySelector("#question-six-dialog-result").textContent = "Desværre forkert";
  }
  console.log("Læses dette i spørgsmål seks?");
  document.querySelector("#question-six-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionSix, 2000);
}

// Spørgsmål 6 dialog lukkes
function closeDialogQuestionSix() {
  document.querySelector("#question-six-dialog").close();
}

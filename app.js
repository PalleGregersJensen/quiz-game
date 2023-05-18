"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document.querySelector("#start-button-quiz").addEventListener("click", questionOne);
}

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
  } else if (phomPenh.checked) {
    document.querySelector("#question-one-dialog-result").textContent = "Desværre forkert";
  } else if (kathmandu.checked) {
    document.querySelector("#question-one-dialog-result").textContent = "Desværre forkert";
    }
    console.log("Læses dette?")
}

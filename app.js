"use strict";

window.addEventListener("load", start);

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
    } else if (phomPenh.checked) {
        document.querySelector("#question-one-dialog-result").textContent = "Desværre forkert";
    } else if (kathmandu.checked) {
        document.querySelector("#question-one-dialog-result").textContent = "Desværre forkert";
    }
    console.log("Læses dette?");

    const setTimeoutAtQuestions = setTimeout(closeDialogQuestionsOne, 2000);
}
// Spørgsmål 1 dialogvindue lukkes
function closeDialogQuestionsOne() {
document.querySelector("#question-one-dialog").close();
    questionTwo();
    console.log("close dialog")
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
  } else if (gabrielByrne.checked) {
    document.querySelector("#question-two-dialog-result").textContent = "Desværre forkert";
  } else if (alanRickman.checked) {
    document.querySelector("#question-two-dialog-result").textContent = "Desværre forkert";
  }
  console.log("Læses dette i spørgsmål to?");
  const timeOutToNextQuestion = setTimeout(closeDialogQuestionsTwo, 2000);
}

// Spørgsmål 2 dialog lukkes
function closeDialogQuestionsTwo() {
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
  answerQuestionThree()
};

function answerQuestionThree() {
 const everyThirdYear = document.querySelector("#EP3");
 const everyFourthYear = document.querySelector("#EP4");
 const everyFifthYear = document.querySelector("#EP5");

 if (everyThirdYear.checked) {
   document.querySelector("#question-three-dialog-result").textContent = "Desværre forkert" ;
  } else if (everyFourthYear.checked) {
   document.querySelector("#question-three-dialog-result").textContent = "Desværre forkert";
 } else if (everyFifthYear.checked) {
   document.querySelector("#question-three-dialog-result").textContent = "Korrekt";
 }
 console.log("Læses dette i spørgsmål tre?");
 const timeOutToNextQuestion = setTimeout(closeDialogQuestionsThree, 2000); 
}

// Spørgsmål 3 dialog lukkes
function closeDialogQuestionsThree() {
  document.querySelector("#question-three-dialog").close();
}
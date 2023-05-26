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
  document.querySelector("#timer-div-question-one").classList.add("timer");
  document.querySelector("#timer-div-question-one").addEventListener("animationend", questionTwo);
  // document.querySelector(".timer-div-container").classList.remove("hidden");
}

function answerButtonClickedInQuestionOne() {
  document.querySelector("#timer-div-question-one").classList.remove("timer");
  document.querySelector("#timer-div-container-question-one").classList.add("hidden");
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
  document.querySelector("#timer-div-question-two").classList.add("timer");
  document.querySelector("#timer-div-container-question-two").classList.remove("hidden");
  document
    .querySelector("#question-two-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionTwo);
  console.log("Spørgsmål 2");
  document.querySelector("#timer-div-question-two").addEventListener("animationend", questionThree);
}

function answerButtonClickedInQuestionTwo() {
  document.querySelector("#timer-div-question-one").classList.remove("timer");
  document.querySelector("#timer-div-container-question-two").classList.add("hidden");
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
  document.querySelector("#timer-div-question-three").classList.add("timer");
  document.querySelector("#timer-div-question-three").addEventListener("animationend", questionFour);
  document.querySelector("#timer-div-container-question-three").classList.remove("hidden");
}

function answerButtonClickedInQuestionThree() {
  document.querySelector("#timer-div-question-three").classList.remove("timer");
  document.querySelector("#timer-div-container-question-three").classList.add("hidden");
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
  document.querySelector("#timer-div-question-four").classList.add("timer");
  document.querySelector("#timer-div-question-four").addEventListener("animationend", questionFive);
  document.querySelector("#timer-div-container-question-four").classList.remove("hidden");
}

function answerButtonClickedInQuestionFour() {
  document.querySelector("#timer-div-question-four").classList.remove("timer");
  document.querySelector("#timer-div-container-question-four").classList.add("hidden");
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
  document.querySelector("#timer-div-question-five").classList.add("timer");
  document.querySelector("#timer-div-question-five").addEventListener("animationend", questionSix);
  document.querySelector("#timer-div-container-question-five").classList.remove("hidden");
}

function answerButtonClickedInQuestionFive() {
  document.querySelector("#timer-div-question-five").classList.remove("timer");
  document.querySelector("#timer-div-container-question-five").classList.add("hidden");
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
  document.querySelector("#timer-div-question-six").classList.add("timer");
  document.querySelector("#timer-div-question-six").addEventListener("animationend", questionSeven);
  document.querySelector("#timer-div-container-question-six").classList.remove("hidden");
}

function answerButtonClickedInQuestionSix() {
  document.querySelector("#timer-div-question-six").classList.remove("timer");
  document.querySelector("#timer-div-container-question-six").classList.add("hidden");
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
  questionSeven();
}

// Spørgsmål 7
function questionSeven() {
  console.log("question seven");
  document.querySelector("#question-seven-dialog").showModal();
  document
    .querySelector("#question-seven-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionSeven);
  console.log("Spørgsmål 7");
  document.querySelector("#timer-div-question-seven").classList.add("timer");
  document.querySelector("#timer-div-question-seven").addEventListener("animationend", questionEight);
  document.querySelector("#timer-div-container-question-seven").classList.remove("hidden");
}

function answerButtonClickedInQuestionSeven() {
  document.querySelector("#timer-div-question-seven").classList.remove("timer");
  document.querySelector("#timer-div-container-question-seven").classList.add("hidden");
  answerQuestionSeven();
}

function answerQuestionSeven() {
  const year2007 = document.querySelector("#year2007");
  const year2011 = document.querySelector("#year2011");
  const year2015 = document.querySelector("#year2015");

  if (year2007.checked) {
    document.querySelector("#question-seven-dialog-result").textContent = "Desværre forkert";    
  } else if (year2011.checked) {
    document.querySelector("#question-seven-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  } else if (year2015.checked) {
    document.querySelector("#question-seven-dialog-result").textContent = "Desværre forkert";
  }
  console.log("Læses dette i spørgsmål syv?");
  document.querySelector("#question-seven-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionSeven, 2000);
}

// Spørgsmål 7 dialog lukkes
function closeDialogQuestionSeven() {
  document.querySelector("#question-seven-dialog").close();
  questionEight();
}

// Spørgsmål 8
function questionEight() {
  console.log("question eight");
  document.querySelector("#question-eight-dialog").showModal();
  document
    .querySelector("#question-eight-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionEight);
  console.log("Spørgsmål 8");
  document.querySelector("#timer-div-question-eight").classList.add("timer");
  document.querySelector("#timer-div-question-eight").addEventListener("animationend", questionNine);
  document.querySelector("#timer-div-container-question-eight").classList.remove("hidden");
}

function answerButtonClickedInQuestionEight() {
  document.querySelector("#timer-div-question-eight").classList.remove("timer");
  document.querySelector("#timer-div-container-question-eight").classList.add("hidden");
  answerQuestionEight();
}

function answerQuestionEight() {
  const year1947 = document.querySelector("#year1947");
  const year1953 = document.querySelector("#year1953");
  const year1959 = document.querySelector("#year1959");

  if (year1947.checked) {
    document.querySelector("#question-eight-dialog-result").textContent = "Desværre forkert";    
  } else if (year1953.checked) {
    document.querySelector("#question-eight-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  } else if (year1959.checked) {
    document.querySelector("#question-eight-dialog-result").textContent = "Desværre forkert";
  }
  console.log("Læses dette i spørgsmål otte?");
  document.querySelector("#question-eight-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionEight, 2000);
}

// Spørgsmål 8 dialog lukkes
function closeDialogQuestionEight() {
  document.querySelector("#question-eight-dialog").close();
  questionNine();
}

// Spørgsmål 9
function questionNine() {
  console.log("question nine");
  document.querySelector("#question-nine-dialog").showModal();
  document
    .querySelector("#question-nine-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionNine);
  console.log("Spørgsmål 9");
  document.querySelector("#timer-div-question-nine").classList.add("timer");
  document.querySelector("#timer-div-question-nine").addEventListener("animationend", questionTen);
  document.querySelector("#timer-div-container-question-nine").classList.remove("hidden");
}

function answerButtonClickedInQuestionNine() {
  document.querySelector("#timer-div-question-nine").classList.remove("timer");
  document.querySelector("#timer-div-container-question-nine").classList.add("hidden");
  answerQuestionNine();
}

function answerQuestionNine() {
  const johnFaxeJensen = document.querySelector("#john-faxe-jensen");
  const kimVilfort = document.querySelector("#kim-vilfort");
  const brianLaudrup = document.querySelector("#brian-laudrup");

  if (johnFaxeJensen.checked) {
    document.querySelector("#question-nine-dialog-result").textContent = "Desværre forkert";    
  } else if (kimVilfort.checked) {
    document.querySelector("#question-nine-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  } else if (brianLaudrup.checked) {
    document.querySelector("#question-nine-dialog-result").textContent = "Desværre forkert";
  }
  console.log("Læses dette i spørgsmål ni?");
  document.querySelector("#question-nine-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionNine, 2000);
}

// Spørgsmål 9 dialog lukkes
function closeDialogQuestionNine() {
  document.querySelector("#question-nine-dialog").close();
  questionTen();
}

// Spørgsmål 10
function questionTen() {
  console.log("question ten");
  document.querySelector("#question-ten-dialog").showModal();
  document
    .querySelector("#question-ten-dialog-answer-button")
    .addEventListener("click", answerButtonClickedInQuestionTen);
  console.log("Spørgsmål 10");
  document.querySelector("#timer-div-question-ten").classList.add("timer");
  document.querySelector("#timer-div-question-ten").addEventListener("animationend", showFinalScore);
  document.querySelector("#timer-div-container-question-ten").classList.remove("hidden");
}

function answerButtonClickedInQuestionTen() {
  document.querySelector("#timer-div-question-ten").classList.remove("timer");
  document.querySelector("#timer-div-container-question-ten").classList.add("hidden");
  answerQuestionTen();
}

function answerQuestionTen() {
  const robertLouisStevenson = document.querySelector("#robert-louis-stevenson");
  const thomasMoore = document.querySelector("#thomas-moore");
  const fjodorDostojevskij = document.querySelector("#fjordor-dostojevskij");

  if (robertLouisStevenson.checked) {
    document.querySelector("#question-ten-dialog-result").textContent = "Desværre forkert";    
  } else if (thomasMoore.checked) {
    document.querySelector("#question-ten-dialog-result").textContent = "Desværre forkert";
  } else if (fjodorDostojevskij.checked) {
    document.querySelector("#question-ten-dialog-result").textContent = "Korrekt";
    points += 1;
    document.querySelector("#points").textContent = points;
  }
  console.log("Læses dette i spørgsmål ti?");
  document.querySelector("#question-ten-dialog-answer-button").classList.add("hidden");
  setTimeout(closeDialogQuestionTen, 2000);
}

// Spørgsmål 10 dialog lukkes
function closeDialogQuestionTen() {
  document.querySelector("#question-ten-dialog").close();
  showFinalScore();
}

function showFinalScore() {
  document.querySelector("#grid-container").textContent = `Tillykke du fik ${points} rigtige. Godt gået!` 
  showTryAgainButton();
}

function showTryAgainButton() {
  document.querySelector("#start-button-quiz").classList.add("hidden");
  document.querySelector("#try-again-button").classList.remove("hidden");
  document.querySelector("#try-again-button").addEventListener("click", goToStart);
}

function goToStart() {
  location.reload();
}

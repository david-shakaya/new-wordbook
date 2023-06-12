// Тренажер слов

// DOM- elements
const btnNextWord = document.querySelector(".btn-next-word-js");
const btnShowAnswer = document.querySelector(".btn-show-answer-js");
const screen = document.querySelector(".screen-js");
const screen2 = document.querySelector(".screen2-js");
const randomRef = document.querySelector("#random");
const inOrderRef = document.querySelector("#in-order");
const containerAllWords = document.querySelector(".list-all-words-js");
const btnShowAllWords = document.querySelector(".show-all-words-js");
const wordCountRef = document.querySelector(".word-count-js");

// возвращает номер страници находя его в юрл
const url = window.location.pathname;
let returnNumberPages = parseInt(url.match(/\d+/));
let numberCards = `cards_${[returnNumberPages]}`;

// переменные
let isChecked = false;
let curentId;
let curentArrowCards = cards[0][numberCards];
let index = -1;

// Слушатели
btnNextWord.addEventListener("click", nextWord);
btnShowAnswer.addEventListener("click", showAnswer);
btnShowAllWords.addEventListener("click", showAllWords);

// function

randomRef.addEventListener("click", (e) => {
  if (e.target.checked) {
    isChecked = true;
  }
});

inOrderRef.addEventListener("click", (e) => {
  if (e.target.checked) {
    isChecked = false;
  }
});

function returnedRandomIndex() {
  const lengthArrow = curentArrowCards.length;
  const randomIndex = Math.floor(Math.random() * lengthArrow);
  return randomIndex;
}

const lengthCurentArrow = curentArrowCards.length;

function nextWord() {
  if (isChecked) {
    index = returnedRandomIndex();
  } else {
    if (index >= lengthCurentArrow - 1) {
      index = -1;
    }
    index = index + 1;
  }

  const id = curentArrowCards[index].id;
  wordCountRef.textContent = `${id}/${curentArrowCards.length}`;

  const curentElem = curentArrowCards.find((el) => {
    return el.id === id;
  });

  curentId = curentElem;
  screen2.innerHTML = "";
  screen.innerHTML = `<p class="screen-next-word">${curentArrowCards[index].uk}</p>`;
  btnShowAnswer.disabled = false;
}

nextWord();

function showAnswer() {
  screen2.innerHTML = `<p class="screen-answer">${curentId.en}</p>`;
  btnShowAnswer.setAttribute("disabled", "disabled");
}

function showAllWords() {
  let htmlList = "";
  curentArrowCards.forEach((item) => {
    console.log(item.uk);
    htmlList += `<li class="components-training__item">${item.uk}</li> 
    <li class="components-training__item">${item.en}</li>`;
  });

  containerAllWords.innerHTML = htmlList;
}

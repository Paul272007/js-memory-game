let seconds = 0;
let timerInterval = null;

let moves = 0;
let matchedCount = 0;
let lockBoard = false;
let firstCard = null;
let secondCard = null;
let cards = [];

const formatTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const remainingSeconds = sec % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

const startTimer = () => {
  clearInterval(timerInterval);
  seconds = 0;

  const timerDisplay =
    document.getElementById("timerDisplay") || document.getElementById("timer");
  if (timerDisplay) {
    timerDisplay.textContent = formatTime(seconds);
  }

  timerInterval = setInterval(() => {
    seconds++;
    const currentTimerDisplay =
      document.getElementById("timerDisplay") ||
      document.getElementById("timer");
    if (currentTimerDisplay) {
      currentTimerDisplay.textContent = formatTime(seconds);
    }
  }, 1000);
};

const checkVictory = () => {
  if (matchedCount === cards.length) {
    clearInterval(timerInterval);
    const result = document.getElementById("result");
    if (result) {
      result.textContent = `Score : ${moves} coups en ${formatTime(seconds)}`;
    }

    const restart = document.getElementById("restart");
    if (restart) {
      restart.style.display = "block";
    }
  }
};

const resetTurn = () => {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
};

const checkMatch = () => {
  const isMatch = firstCard.dataset.value === secondCard.dataset.value;

  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedCount += 2;
    resetTurn();
    checkVictory();
  } else {
    setTimeout(() => {
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 800);
  }
};

const handleCardClick = (card) => {
  if (
    lockBoard ||
    card === firstCard ||
    card.classList.contains("matched") ||
    card.classList.contains("flipped")
  ) {
    return;
  }

  card.classList.add("flipped");

  const img = document.createElement("img");
  img.src = card.dataset.value;
  img.alt = "Memory card";
  card.append(img);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;
  moves++;
  checkMatch();
};

const resetGameState = (newCards = []) => {
  seconds = 0;
  clearInterval(timerInterval);
  timerInterval = null;
  moves = 0;
  matchedCount = 0;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
  cards = newCards;
};

const gameLoop = () => {};

export {
  seconds,
  timerInterval,
  moves,
  matchedCount,
  lockBoard,
  firstCard,
  secondCard,
  cards,
  formatTime,
  startTimer,
  checkVictory,
  checkMatch,
  handleCardClick,
  resetGameState,
  gameLoop,
};

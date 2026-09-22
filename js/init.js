import { handleCardClick, resetGameState, startTimer } from "./game.js";

const dimension = 150;
const imgStart = Math.floor(Math.random() * 100) + 1;

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const initImages = (cardCols, cardRows) => {
  const images = [];
  const nbImages = (cardCols * cardRows) / 2;

  for (let i = 0; i < nbImages; i++) {
    const id = imgStart + i;
    images.push(`https://picsum.photos/id/${id}/${dimension}`);
  }
  return [...images, ...images];
};

const initBoard = (cards) => {
  const cardsContainer =
    document.getElementById("game-board") || document.getElementById("board");
  if (!cardsContainer) return;

  cards.forEach((imgUrl) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.value = imgUrl;
    card.role = "button";
    card.tabIndex = "0";
    card.addEventListener("click", () => handleCardClick(card));

    cardsContainer.append(card);
  });
};

const initGame = () => {
  const cardsContainer =
    document.getElementById("game-board") || document.getElementById("board");
  if (cardsContainer) {
    cardsContainer.innerHTML = "";
  }

  const cardCols = 8;
  const cardRows = 5;

  let cards = initImages(cardCols, cardRows);
  cards = shuffle(cards);

  resetGameState(cards);
  startTimer();
  initBoard(cards);

  const result = document.getElementById("result");
  if (result) result.textContent = "";

  const restartBtn = document.getElementById("restart-btn");
  if (restartBtn) {
    restartBtn.style.display = "none";
    restartBtn.onclick = initGame;
  }
};

export default initGame;

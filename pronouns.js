const pronouns = [
    { word: "He", translation: "Él" },
    { word: "She", translation: "Ella" },
    { word: "It", translation: "Eso/Ella/Él" },
    { word: "They", translation: "Ellos/Ellas" },
    { word: "We", translation: "Nosotros/Nosotras" },
    { word: "You", translation: "Tú/Ustedes" }
  ];
  
  let cards = [];
  let matchedPairs = 0;
  
  function shuffleCards() {
    matchedPairs = 0;
    const shuffled = [...pronouns, ...pronouns.map(p => ({ word: p.translation, translation: p.word }))]
      .sort(() => Math.random() - 0.5);
    cards = shuffled;
    renderGame();
  }
  
  function renderGame() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
  
    cards.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.dataset.index = index;
      cardElement.addEventListener("click", () => flipCard(cardElement, index));
      gameBoard.appendChild(cardElement);
    });
  }
  
  let flippedCards = [];
  
  function flipCard(cardElement, index) {
    if (flippedCards.length < 2 && !cardElement.classList.contains("matched")) {
      cardElement.textContent = cards[index].word;
      flippedCards.push({ cardElement, index });
    }
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
  
  function checkMatch() {
    const [first, second] = flippedCards;
    if (
      (cards[first.index].word === cards[second.index].translation) ||
      (cards[first.index].translation === cards[second.index].word)
    ) {
      first.cardElement.classList.add("matched");
      second.cardElement.classList.add("matched");
      matchedPairs++;
  
      if (matchedPairs === pronouns.length) {
        setTimeout(shuffleCards, 1500);
      }
    } else {
      first.cardElement.textContent = "";
      second.cardElement.textContent = "";
    }
    flippedCards = [];
  }
  
  document.addEventListener("DOMContentLoaded", shuffleCards);  
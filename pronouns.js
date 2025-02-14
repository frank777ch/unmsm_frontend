const pronouns = [
    { word: "I", translation: "Yo" },
    { word: "He", translation: "Él" },
    { word: "She", translation: "Ella" },
    { word: "It", translation: "Eso" },
    { word: "They", translation: "Ellos/Ellas" },
    { word: "We", translation: "Nosotros/Nosotras" },
    { word: "You", translation: "Tú/Ustedes" }
  ];
  
  let cards = [];
  let matchedPairs = 0;
  let flippedCards = [];
  
  function shuffleCards() {
    matchedPairs = 0;
    flippedCards = [];
    const pairs = pronouns.flatMap(p => [
      { word: p.word, pair: p.translation, matched: false },
      { word: p.translation, pair: p.word, matched: false }
    ]);
    
    cards = pairs.sort(() => Math.random() - 0.5);
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
  
  function flipCard(cardElement, index) {
    if (flippedCards.length < 2 && !cards[index].matched) {
      cardElement.textContent = cards[index].word;
      flippedCards.push({ cardElement, index });
    }
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
  
  function checkMatch() {
    const [first, second] = flippedCards;
    
    if (cards[first.index].pair === cards[second.index].word) {
      first.cardElement.classList.add("matched");
      second.cardElement.classList.add("matched");
      cards[first.index].matched = true;
      cards[second.index].matched = true;
      matchedPairs++;
    } else {
      setTimeout(() => {
        first.cardElement.textContent = "";
        second.cardElement.textContent = "";
      }, 500);
    }
    flippedCards = [];
    
    if (matchedPairs === pronouns.length) {
      setTimeout(shuffleCards, 1500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", shuffleCards);  
// querySelector retorna o primeiro elemento dentro do documento que corresponde ao grupo especificado de seletores.
// no caso é o lista-produtos
const listContainer = document.querySelector(".lista-produtos");

const cardCount = 5;
const productCardWidth = 220;

// Math.floor arredonda (inteiro) pra baixo
// getBoundingClientRect retorna o tamanho de um elemento e sua posição relativa ao viewport.
function addHiddenCards() {
  const cardsPerRow = Math.floor(
    listContainer.getBoundingClientRect().width / productCardWidth
  );
  const cardsToAdd = cardsPerRow - (cardCount % cardsPerRow);

  // !Usar tratamento de array no lugar de for
  for (let i = 0; i < cardsToAdd; i++) {
    const cardToAdd = document.createElement("div");
    cardToAdd.classList.add("produto");
    cardToAdd.classList.add("hidden");
    listContainer.appendChild(cardToAdd);
  }
}

// querySelectorAll retorna uma lista de elementos presentes no documento que coincidam com o grupo de seletores especificado. 
function removeHiddenCards() {
  const hiddenCards = document.querySelectorAll(".hidden");
  for (let i = 0; i < hiddenCards.length; i++) {
    const hiddenCard = hiddenCards[i];
    hiddenCard.remove();
  }
}

addHiddenCards();

let timer;

function resizeHandlerWithDebounce(debounceTime = 1000) {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    console.log("trigger");
    removeHiddenCards();
    addHiddenCards();
    timer = null;
  }, debounceTime);
}

window.onresize = () => resizeHandlerWithDebounce(5000);
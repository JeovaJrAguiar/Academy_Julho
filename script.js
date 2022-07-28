const plus = document.querySelector(".adicionar");
const minus = document.querySelector(".remover");
const valor = document.querySelector(".inputText");

let value = 0; //valor

function add() {
  value++;
  valor.innerHTML = value;
}

function rem() {
  if (value > 0) {
    value--;
    valor.innerHTML = value;
  }
}

plus.addEventListener("click", add);
minus.addEventListener("click", rem);

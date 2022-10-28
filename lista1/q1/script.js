function gerarNumero() {
  return Math.round(Math.random() * 100);
}
let gerador = document.querySelector("#botaoGerador");
gerador.addEventListener("click", function () {
  let numLista = document.querySelector(".listaNum");
  let novoNum = gerador.firstChild;
  novoNum = document.createElement("li");
  novoNum.textContent = gerarNumero();
  numLista.prepend(novoNum);
});

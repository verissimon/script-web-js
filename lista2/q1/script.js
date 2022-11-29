let resultado = document.querySelector("#resultado");
let inputNum = document.querySelector("#num");
let inputSep = document.querySelector("#separador");
let botao = document.querySelector("button");

botao.addEventListener("click", () => {
  let separador = inputSep.value;
  let numeros = Array.of(inputNum.value).toString().split(separador);
  let maior = Math.max(...numeros);
  let menor = Math.min(...numeros);
  resultado.textContent = `${maior} eh o maior, ${menor} eh o menor`;
});

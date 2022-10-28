let resultado = (base, expoente) => Math.pow(base, expoente);
let inputBase = document.querySelector("#inputBase");
let inputExpo = document.querySelector("#inputExpo");
let divResultado = document.querySelector(".divResultado");
let btnCalc = document.querySelector("#btnCalc");
btnCalc.addEventListener("click", function () {
  let resultDiv = document.createElement("div");
  resultDiv.classList.add("resultado");
  resultDiv.textContent = `${inputBase.value}^${inputExpo.value} = ${resultado(
    inputBase.value,
    inputExpo.value
  )}`;
  divResultado.prepend(resultDiv);
});

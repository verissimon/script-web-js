let input = document.querySelector("input");
// input.addEventListener("keydown", () => {
//     console.log(input.value);
// });
let textoLista = document.querySelector("#elementoLista");
// let textoNovoItem = document.createElement("span");
// textoNovoItem.textContent = input.value;
// textoLista.appendChild(textoNovoItem);

let botao = document.querySelector(".btn");
botao.addEventListener("click", function() {
    console.log("click")
    let textoNovoItem = document.createElement("span");
    textoNovoItem.classList.add("item-lista");
    textoNovoItem.textContent = input.value;
    textoLista.appendChild(textoNovoItem);
});

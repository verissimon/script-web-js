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
    let textoNovoItem = document.createElement("div");
    textoNovoItem.classList.add("item-lista");
    textoNovoItem.textContent = input.value;
    textoLista.appendChild(textoNovoItem);
    let rmv = document.createElement("button");
    rmv.classList.add("rmv");
    rmv.textContent = "Remover";
    textoNovoItem.appendChild(rmv);
    remover();
});
    function remover() {
    let rmvBotao = document.getElementsByClassName("rmv");
    rmvBotao.onclick = function() {
        alert("clicou remover");
        // element = document.querySelector(".item-lista");
        // element.remove();
        textoNovoItem.remove();
    };
    }
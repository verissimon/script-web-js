let input = document.querySelector("input");

let textoLista = document.querySelector("#elementoLista");
function delete_parent(e) {
    e.parentElement.remove();
}

let botao = document.querySelector(".btn");
botao.addEventListener("click", function() {
    let textoNovoItem = document.createElement("div");
    textoNovoItem.classList.add("item-lista");
    textoNovoItem.textContent = input.value;
    textoLista.appendChild(textoNovoItem);
    let rmv = document.createElement("button");
    rmv.textContent = "Remover";
    textoNovoItem.appendChild(rmv);
    rmv.addEventListener('click', () => textoNovoItem.remove());
});


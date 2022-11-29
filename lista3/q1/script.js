let nomeEvento = document.querySelector("#campo-evento");
let data = document.querySelector("#campo-data");
let adiciona = document.querySelector("button");
let arrEventos = [];
let lista = document.querySelector(".lista-eventos");

function atualizaLista(listaAExibir) {
  let itens = [];
  listaAExibir.forEach((element) => {
    let itemEvento = document.createElement("li");
    itemEvento.textContent = `nome do evento: ${element.nome}, data do evento: ${element.data}`;
    itens.push(itemEvento);
  });
  lista.replaceChildren(...itens);
}

adiciona.addEventListener("click", () => {
  let evento = {};
  evento.nome = nomeEvento.value;
  evento.data = data.value;
  arrEventos.push(evento);
  arrEventos.sort((a, b) => {
    return new Date(b.data) - new Date(a.data);
  });
  atualizaLista(arrEventos);
});

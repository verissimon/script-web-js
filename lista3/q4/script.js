class Transacao {
  constructor(desc, valor) {
    this.Descricao = desc;
    this.Valor = valor;
  }
}

let inDesc = document.querySelector("#desc");
let inValor = document.querySelector("#valor");
let tabela = document.querySelector("table");
let btnAdd = document.querySelector(".add");

let header = document.createElement("tr");
let headerDesc = document.createElement("th");
headerDesc.textContent = "Descrição";
let headerValor = document.createElement("th");
headerValor.textContent = "Valor";
header.appendChild(headerDesc);
header.appendChild(headerValor);
let arrTransacoes = []; //array de objs Transacao
function atualizaTotal() {
  const sum = arrTransacoes.reduce((accumulator, object) => {
    return Number(accumulator) + Number(object.Valor);
  }, 0);
  return sum;
}

let total = document.createElement("tr");
let totalDesc = document.createElement("td");
totalDesc.textContent = "Total";
let totalValor = document.createElement("td");

total.appendChild(totalDesc);
total.appendChild(totalValor);

const defineCor = (valor, cell) => {
  if (valor < 0) cell.style.color = "red";
  else cell.style.color = "green";
};

let atualizaTabela = (arr) => {
  let arrLinhas = [header, total]; //array de linhas <tr>
  arr.forEach((element) => {
    let linha = document.createElement("tr");
    let celulaDesc = document.createElement("td");
    celulaDesc.textContent = element.Descricao;
    let celulaValor = document.createElement("td");
    celulaValor.textContent = element.Valor;
    defineCor(element.Valor, celulaValor);
    // if (element.Valor < 0) celulaValor.style.color = "red";
    // else celulaValor.style.color = "green";
    linha.appendChild(celulaDesc);
    linha.appendChild(celulaValor);
    totalValor.textContent = atualizaTotal();
    arrLinhas[arrLinhas.length - 1] = linha;
    defineCor(atualizaTotal(), totalValor);
    arrLinhas.push(total);
  });
  tabela.replaceChildren(...arrLinhas);
};

btnAdd.addEventListener("click", () => {
  let transac = new Transacao(inDesc.value, inValor.value);
  arrTransacoes.push(transac);
  atualizaTabela(arrTransacoes);
});

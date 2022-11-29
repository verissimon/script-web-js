class ClienteBanco {
  constructor(nome, docu, saldo) {
    this.nome = nome;
    this.documento = docu;
    this.saldo = saldo;
  }
}
let inNome = document.querySelector("#nome");
let inDoc = document.querySelector("#doc");
let inSaldo = document.querySelector("#saldo");
let btnAdd = document.querySelector("#add");
let listaCliente = document.querySelector(".lista-cliente");
let arrClientes = [];
let add = (a, b) => {
  return Number(a) + Number(b);
};
function atualizaClientes(arr) {
  let itens = [];
  arr.forEach((element) => {
    let liCliente = document.createElement("li");
    let deposita100 = document.createElement("button");
    deposita100.textContent = "depositar 100,00";
    deposita100.addEventListener("click", () => {
      element.saldo = add(element.saldo, 100);
      atualizaClientes(arrClientes);
    });
    let saca100 = document.createElement("button");
    saca100.textContent = "sacar 100,00";
    saca100.addEventListener("click", () => {
      element.saldo = element.saldo - 100;
      atualizaClientes(arrClientes);
    });
    liCliente.textContent = `nome: ${element.nome} \n documento: ${element.documento} \n saldo: ${element.saldo}`;
    liCliente.appendChild(deposita100);
    liCliente.appendChild(saca100);

    itens.push(liCliente);
  });
  listaCliente.replaceChildren(...itens);
}

btnAdd.addEventListener("click", () => {
  let cliente = new ClienteBanco(inNome.value, inDoc.value, inSaldo.value);
  arrClientes.push(cliente);
  atualizaClientes(arrClientes);
});

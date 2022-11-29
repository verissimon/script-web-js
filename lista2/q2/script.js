let nome = document.querySelector("#nome");
let salario = document.querySelector("#salario");
let adicionar = document.querySelector("button");
let listaPessoas = document.querySelector("#listaPessoas");
let totalSalario = document.querySelector("#totalPago");
let ricoElem = document.querySelector("#maiorSalario");

let arrPessoas = [];

adicionar.addEventListener("click", () => {
  let pessoa = {};
  pessoa.nome = nome.value;
  pessoa.salario = Number(salario.value);
  arrPessoas.push(pessoa);
  let temp = arrPessoas;
  let novaPessoa = document.createElement("li");
  novaPessoa.textContent = `nome: ${pessoa.nome} \n Salario: ${pessoa.salario}\n`;
  //nao sei como quebrar essa linha 17 e estou em desespero
  listaPessoas.appendChild(novaPessoa);
  let maiorSalario = Math.max(...arrPessoas.map((o) => o.salario));
  let rico = temp.find((obj) => {
    return obj.salario === maiorSalario;
  });
  ricoElem.textContent = `${rico.nome} tem o maior salario`;
  let salarioTotal = temp.reduce((a, b) => ({
    salario: a.salario + b.salario
  }));
  totalSalario.textContent = `salario total pago: ${salarioTotal.salario}`;
});

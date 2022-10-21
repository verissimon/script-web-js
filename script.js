function geradorInteiroUnico(){
    let num = 1;
    function incrementar(){
        return num++;
    }
    return incrementar;
}

let inteiroUnico = geradorInteiroUnico();

const soma = (x, y) => {
    return x + y;
}
const numeroAleatorio = () => parseInt(Math.random()*100);
let C = 32;
CtoK = (celsius) => celsius + 273.15;
CtoF = (celsius) => (celsius*9/5) + 32;
// console.log(`celsius para kelvin: ${CtoK(C)}`);
// console.log(`celsius para fahrenheit: ${CtoF(C)}`);
//----------------------
//QUERY SELECTOR
//----------------------

let objeto = new Object();
objeto.nome = "fulano";
objeto.sobrenome = "de tal";
objeto.nomecompleto = function() {
	return `${this.nome} ${this.sobrenome}`;
}
//console.log(objeto.nomecompleto());
let btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
	console.log("clicou");
});
let botao = document.querySelector("#botaoAlerta");
botao.onclick = function (event) {
alert("Botão foi clicado");
};
const itensLista = document.querySelectorAll("li");

for(let index = 0; index < itensLista.length; index++){
	itensLista[index].textContent =  `${index + 1}. ${itensLista[index].textContent}`;
}
//----------------------
// APPEND CHILD
//----------------------
let elementoBody = document.querySelector("#lista");
elementoBody.textContent = `asopdjioasij jfjiasji jifja`
let novoP = document.createElement("p");
elementoBody.appendChild(novoP);
novoP.textContent = "apsodj"

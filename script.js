function geradorInteiroUnico(){
    let num = 1;
    function incrementar(){
        return num++;
    }
    return incrementar;
}

let inteiroUnico = geradorInteiroUnico();
// console.log(inteiroUnico());
// console.log(inteiroUnico());
// console.log(inteiroUnico());
// console.log(inteiroUnico());
const soma = (x, y) => {
    return x + y;
}
const numeroAleatorio = () => parseInt(Math.random()*100);
let a = numeroAleatorio();
//let a = soma(inteiroUnico(), inteiroUnico());
console.log(a);
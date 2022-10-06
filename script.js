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
const CtoK = (celsius) => celsius + 273.15;
const CtoF = (celsius) => (celsius*9/5) + 32;
console.log(CtoK(C));
console.log(CtoF(C));
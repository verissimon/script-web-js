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
console.log(`celsius para kelvin: ${CtoK(C)}`);
console.log(`celsius para fahrenheit: ${CtoF(C)}`);

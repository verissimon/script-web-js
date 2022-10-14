class Contador {
    constructor(inicial){
        this.num = inicial; 
    }
    incrementar() {
        return this.num += 1;
    }
    decrementar(){
        return this.num -= 1;
    }
}
let numero = new Contador(5);
console.log(numero)
console.log(numero.incrementar());

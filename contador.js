class Contador {
    constructor(inicial){
        this.inicio = inicial; 
    }
    incrementar() {
        return this.inicio += 1;
    }
    decrementar(){
        return this.inicio -= 1;
    }
}
let num = new Contador(5);
console.log(num)
console.log(num.incrementar());

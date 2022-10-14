let objeto = {
    n: undefined,
    get nome(){
        return this.n;
    },
    set nome(novoNome){
        this.n = novoNome;
    }
}
objeto.nome = 'fulano';
console.log(objeto.nome);
//classes
class Retangulo {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
    calculaArea(){
        return this.altura*this.largura;
    }
}

const quadrado = new Retangulo(20,20); // construtor é chamado por meio do operador new
console.log(quadrado.calculaArea());

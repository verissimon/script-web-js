let pessoa = [
    {
        nome: "fi",
        salario: 1000,
    },
    {
        nome:"po",
        salario: 123123,
    },
    {
        nome:"pa",
        salario: 12112,
    },
]

let pessoaComAumento = pessoa.map( pessoa => {
    const pessoaComAumento = {
        nome: pessoa.nome,
        salario: pessoa.salario,
    };
    pessoaComAumento.salario += 1000;
    return pessoaComAumento;
});

let pessoaRica = pessoaComAumento.filter(pessoa => {
    return pessoa.salario > 3000;
});
console.log(pessoaComAumento)
console.log(pessoaRica)
const usuarios = [
    {
        nome: "João",
        idade: 25,


    },
    {
        nome: "Ana",
        idade: 18,

    },
    {
        nome: "Beatriz",
        idade: 15,

    },
    {
        nome: "Carlos",
        idade: 16,

    },
    {
        nome: "Antonio",
        idade: 32,

    },
]

for (let classificacaoEtaria of usuarios) {
    if (classificacaoEtaria.idade > 17) {
        classificacaoEtaria.maior_idade = true;
    } else {
        classificacaoEtaria.maior_idade = false;
    }
}

console.log(usuarios);



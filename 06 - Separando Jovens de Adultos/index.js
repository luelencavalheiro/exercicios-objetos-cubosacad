const usuario = [
    {
        nome: "João",
        idade: 25
    },
    {
        nome: "Ana",
        idade: 18
    },
    {
        nome: "Beatriz",
        idade: 15
    },
    {
        nome: "Carlos",
        idade: 16
    },
    {
        nome: "Antonio",
        idade: 32
    },
]
const adultos = [];
const jovens = [];
for (let classificacaoEtaria of usuario) {
    if (classificacaoEtaria.idade > 18) {
        adultos.push(classificacaoEtaria);
    } else {
        jovens.push(classificacaoEtaria);
    }
}
console.log(adultos);
console.log(jovens);
const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Carlos" },
    { nome: "Sara" },
    { nome: "Luelen" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" }
]

let indice = 0;
for (let achandoCarlos of participantes) {
    indice++;
    if (achandoCarlos.nome === "Luelen") {
        console.log(`Gente! Cade você? Eu tô aqui na posição ${indice}, corre pra cá!`);
    }
}
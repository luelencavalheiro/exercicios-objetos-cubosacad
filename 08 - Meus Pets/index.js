const usuarios = [
    {
        nome: "João",
        pets: []
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"]
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"]
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"]
    },
    {
        nome: "Antonio",
        pets: ["Naninha"]
    }
]

for (let temPets of usuarios) {
    if (temPets.pets.length === 0) {
        console.log(`Sou ${temPets.nome} e não tenho pets`);
    } else if (temPets.pets.length === 1) {
        console.log(`Sou ${temPets.nome} e tenho 01 pet`);
    } else {
        console.log(`Sou ${temPets.nome} e tenho ${temPets.pets.length} pets`);

    }

}

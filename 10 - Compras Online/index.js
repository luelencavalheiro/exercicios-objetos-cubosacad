// clientes
const patricia = {
    nome: "Patricia",
    carrinho: []
}
const carlos = {
    nome: "Carlos",
    carrinho: []
}
const renato = {
    nome: "Renato",
    carrinho: []
}
const jose = {
    nome: "José",
    carrinho: []
}
const roberto = {
    nome: "Roberto",
    carrinho: []
}

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

// a. Adicione uma tv, dois cabos usb e uma webcam para o José
jose.carrinho = [
    {
        item: tv,
        quantidade: 1
    },
    {
        item: caboUsb,
        quantidade: 2
    },
    {
        item: webcam,
        quantidade: 1
    }
];


for (let produto of jose.carrinho) {
    totalAPagar = 0;
    totalAPagar += produto.item.valorEmCentavos * produto.quantidade / 100;
}
console.log(`Olá, José, seu total é R$${totalAPagar.toFixed(2)}`);

// b. Adicione dois notebooks para o Carlos
carlos.carrinho = [{
    item: notebook,
    quantidade: 2
}
];

for (let produto of carlos.carrinho) {
    totalAPagar = 0;
    totalAPagar += produto.item.valorEmCentavos * produto.quantidade / 100;
}
console.log(`Olá, Carlos, seu total é R$${totalAPagar.toFixed(2)}`);

// c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
patricia.carrinho = [{
    item: teclado,
    quantidade: 1,
    item: caboUsb,
    quantidade: 2,
    item: carregador,
    quantidade: 1,
    item: carregador,
    quantidade: 1,
    item: mouse,
    quantidade: 1,
    item: monitor,
    quantidade: 1
}
];
for (let produto of patricia.carrinho) {
    totalAPagar = 0;
    totalAPagar += produto.item.valorEmCentavos * produto.quantidade / 100;
}
console.log(`Olá, Patricia, seu total é R$${totalAPagar.toFixed(2)}`);

// d. Adicione cinco webcams para o Renato
renato.carrinho = [{
    item: webcam,
    quantidade: 5
}
];
for (let produto of renato.carrinho) {
    totalAPagar = 0;
    totalAPagar += produto.item.valorEmCentavos * produto.quantidade / 100;
}
console.log(`Olá, Renato, seu total é R$${totalAPagar.toFixed(2)}`);
// e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
roberto.carrinho = [{
    item: webcam,
    quantidade: 1,
    item: webcam,
    quantidade: 2,
    item: monitor,
    quantidade: 1
}
];
for (let produto of roberto.carrinho) {
    totalAPagar = 0;
    totalAPagar += produto.item.valorEmCentavos * produto.quantidade / 100;
}
console.log(`Olá, Roberto, seu total é R$${totalAPagar.toFixed(2)}`);
![](./../capa_readme_luelencavalheiro.gif)

# Exerc.08 - CubosAcademy - Julho/23

## Meus pets

1. Abaixo, temos uma lista de pessoas. Cada pessoa possui uma lista com **um**, **vários** ou **nenhum** pet. Percorra cada pessoa da lista e imprima uma mensagem de acordo com as condições a seguir:

a. Se a pessoa não tiver pets, a mensagem deve ser: `Sou João e não tenho pets`.

b. Se a pessoa tiver mais de um pet, a mensagem deve ser: `Sou Ana e tenho 2 pets`.

c. Se a pessoa tiver um pet, a mensagem deve ser: `Sou Beatriz e tenho 1 pet`.

```javascript
const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
```

## ✅ O Que Eu Aprendi Aqui 👇

Para resolver esse exercício, usei o loop FOR para percorrer o array de objetos. Depois, usei condicionais para descobrir se o array estava vazio ou tinha apenas um valor ou tinha mais. Com essas informações, usei o string template para exibir as mensagens de acordo com cada usuário.

## ✅ Skills Dominadas 👩‍💻

- comandos GIT para criar e clonar repositórios
- interpretação e solução de problemas usando Javascript
- manipulação de arrays de objetos
- uso do loop for
- uso de condicionais
- uso do string template
- uso de operadores de comparação
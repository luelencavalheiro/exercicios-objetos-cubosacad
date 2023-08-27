![](./../capa_readme_luelencavalheiro.gif)

# Exerc.07 - CubosAcademy - Julho/23

## Numerando capítulos de um livro

1. Abaixo, temos a lista de capítulos do livro `O poder do hábito`. Sua tarefa é numerar, **em ordem crescente**, cada capítulo do livro adicionando uma propriedade `numero` em cada objeto da lista de capítulos.

Obs.: a ordem deverá seguir a mesma existente.

```javascript
const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}
```

## ✅ O Que Eu Aprendi Aqui 👇

Para resolver esse exercício, eu primeiro precisei entender que CAPÍTULOS é nesse exercício, uma propriedade do objeto LIVRO. E a propriedade CAPÍTULOS é um array de objetos. Com isso em mente, criei uma variável para ir somando o número dos capítulos. E, usei o loop FOR para percorrer esse array e criar a propriedade NUMERO usando o valor da variavel indice criada.

## ✅ Skills Dominadas 👩‍💻

- comandos GIT para criar e clonar repositórios
- interpretação e solução de problemas usando Javascript
- manipulação de arrays de objetos
- criação de propriedades dentro de objetos
- uso do loop for

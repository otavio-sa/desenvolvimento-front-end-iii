/*

Exercício 3
Crie um objeto que será nosso personagem, que possui um nome (uma string qualquer
que representa o nome do personagem), a energia (um valor positivo numérico igual a
100) e um método dano, que recebe como parâmetro de entrada um valor numérico
positivo e reduz a energia do personagem. Finalmente, temos o método status, que
retorna 1 caso o personagem ainda possua energia e -1 caso a energia tenha chegado
a zero.

Baseado no item anterior, crie para esse personagem um atributo força, que possui um
valor positivo de 10 que representa o máximo ataque que o personagem pode executar
e o método ataque, que gera um valor aleatório entre 0 e força.
Crie um segundo personagem e customize seu nome, força (para 20) e energia (80). 

*/

const personagem = {
    nome: "Otávio",
    energia: 100,
    forca: 10,

    dano(qtdDano) {
        this.energia = this.energia - qtdDano;   // o this serve para o método conseguir acessar os dados do próprio objeto em que ele está
    },

    status() {
        if (this.energia > 0) {
            return 1;
        } else {
            return -1;
        }
    },

    ataque() {
        const valorAtaque = Math.random() * this.forca;
        return Number(valorAtaque.toFixed(2));
    }


};

console.log(personagem.energia);
personagem.dano(20);
console.log(personagem.energia);
console.log(personagem.status());
personagem.dano(80);
console.log(personagem.energia);
console.log(personagem.status());
console.log(personagem.ataque());


// const personagem2 = personagem; // cria outro nome pra variável que aponta para o mesmo objeto na memória, mas não cria uma cópia do objeto.
// personagem2.nome = "Inimigo"; // estamos alterando o campo nome dessa única caixa. como personagem aponta para a mesma caixa, ele também enxerga "Inimigo".

const personagem2 = {
    // O spread copia as propriedades de um objeto para dentro de outro.
    ...personagem,
    nome: "Leonardo",
    energia: 80,
    forca: 20
};

console.log(personagem2 === personagem);

console.log(personagem2.nome);
console.log(personagem2.energia);
console.log(personagem2.forca);

console.log(personagem2.ataque());

personagem2.dano(30);

console.log(personagem2.energia);
console.log(personagem.energia);
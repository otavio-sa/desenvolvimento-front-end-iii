/*
Exercício 2

Similarmente ao exercício anterior, crie uma função que verifica
se dois objetos são idênticos.
*/

function compararObjetos(objA, objB) {
    // Object.keys transforma os nomes das propriedades em um vetor.
    // Exemplo: { nome: "Otávio", idade: 22 } vira ["nome", "idade"].
    const chavesA = Object.keys(objA);
    const chavesB = Object.keys(objB);

    // Verifica se os objetos possuem quantidades diferentes de propriedades.
    // Não compara o tamanho dos valores, apenas a quantidade de propriedades.
    if (chavesA.length !== chavesB.length) {
        return false;
    }

    // Percorre todas as chaves (nomes das propriedades) do objeto A.
    for (let i = 0; i < chavesA.length; i++) {
        // Guarda o nome da propriedade atual.
        // Exemplo: primeiro "nome" e depois "idade".
        const chave = chavesA[i];

        // Verifica se o nome da propriedade do objeto A existe no objeto B.
        // Exemplo: verifica se a propriedade "idade" também existe no objeto B.
        if (!(chave in objB)) {
            return false;
        }

        // Utiliza a mesma chave para acessar e comparar os valores dos objetos.
        // Exemplo: compara objA["idade"] com objB["idade"].
        if (objA[chave] !== objB[chave]) {
            return false;
        }
    }

    // Este ponto somente é alcançado se nenhuma diferença for encontrada.
    return true;
}

const objetoA = {
    nome: "Otávio",
    idade: 22
};

const objetoB = {
    nome: "Otávio",
    idade: 22
};

console.log(compararObjetos(objetoA, objetoB));
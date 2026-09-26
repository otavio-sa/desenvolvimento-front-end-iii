/*

Exercício 1
Verificamos em aulas anteriores que uma igualdade com dois objetos idênticos (com
mesmos valores de atributos) resulta false, pois o JavaScript interpreta não se tratar do
mesmo objeto. Crie uma função que compara dois vetores e, caso eles possuam
mesmo conteúdo, retorne true. 

*/

function compararVetores(vetorA, vetorB) {
    if (vetorA.length !== vetorB.length) {
        return false;
    }
    for (let i = 0; i < vetorA.length; i++) {
        if (vetorA[i] !== vetorB[i]) {
            return false;
        }
    }
    return true;
}


/*

O primeiro if garante que nenhum vetor tenha elementos sobrando. 
O for verifica se os elementos correspondentes são iguais. */ 

// testes
console.log(compararVetores([1, 2, 3], [1, 2, 3]));
console.log(compararVetores([1, 2], [1, 2, 3]));
console.log(compararVetores([1, 2, 3], [1, 9, 3]));
console.log(compararVetores([1, 2], [2, 1]));
console.log(compararVetores([], []));
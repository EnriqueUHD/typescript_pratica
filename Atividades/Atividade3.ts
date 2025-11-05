import readlinesync = require('readline-sync');

let numeros: Set<number> = new Set<number>([]);
let contador = 0; 
let listaNumeros: Array<number> = new Array<number>();
console.log(`Informe 10 valores inteiros não repetidos, por gentileza!\n\n`)

do {
const entrada = readlinesync.questionInt(`\nDigite o ${contador + 1}° número inteiro: `);

if(numeros.has(entrada)){
    console.log("Número já digitado! Digite outro valor. \n")
    contador++;   
} else {
    numeros.add(entrada);
    contador++;
    listaNumeros.push(entrada)
}
} while (contador < 10);

console.log("Listar dados do Set:\n");
//console.log(numeros);
console.log(listaNumeros.sort((a, b) => a - b));

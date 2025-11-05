import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let numeroProcurado:number;
do{
numeroProcurado = readlinesync.questionInt('Digite o número ques você deseja encontrar: ');
if(numeros.includes(numeroProcurado)){
   console.log(`O numero ${numeroProcurado} está localizado na posição: ${numeros.indexOf(numeroProcurado)}`)
   break;
} else {
   console.log(`O número ${numeroProcurado} não foi encontrado!`);
}

}while(true)

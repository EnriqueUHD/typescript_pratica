import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

do {
    let entrada = readlinesync.questionInt('Digite o número que você deseja encontrar: ');
    if (numeros.has(entrada)) {
        console.log(`O número ${entrada} foi encontrado!`)
        break;
    } else {
        console.log(`O número ${entrada} não foi encontrado!`)
        break;
    }
} while (true);

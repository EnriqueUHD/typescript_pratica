import readlinesync = require('readline-sync');

let cores: Array<string> = new Array<string>();

do {

cores.push(readlinesync.question('\nDigite uma cor:',
    {limitMessage: 'Apenas cores!'}));

} while (!cores[4]);

console.log('Listar todas as cores:\n')
cores.forEach(cor => {
    console.log(`${cor}`);
});

console.log("Ordenar as cores:\n")
console.log(`\n${cores.sort().join('\n')}`);


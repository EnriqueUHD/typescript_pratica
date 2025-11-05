import { Queue } from "./Queue";
import readlinesync from 'readline-sync';

const fila = new Queue<string>();
let entrada: number;
do {
    console.log("**********************************************************");
    console.log("*                                                        *");
    console.log("*           1 - Adicionar Cliente na Fila                *");
    console.log("*           2 - Listar todos os Clientes                 *");
    console.log("*           3 - Retirar Cliente da Fila                  *");
    console.log("*           0 - Sair                                     *");
    console.log("*                                                        *");
    console.log("**********************************************************");
    console.log("Entre com a opção desejada: ");

    entrada = readlinesync.questionInt();
    switch (entrada) {
        case 0:
            console.log("Saindo do menu.");
            break;
        case 1:
            let nome: string = readlinesync.question("Digite o nome: ")
            fila.enqueue(nome)
            console.log(`Cliente ${nome} Adicionado!`);
            break;
        case 2:
            console.log(`Fila: \n`);
            fila.printQueue();
            break;
        case 3:
            console.log(`O cliente foi chamado!`);
            fila.dequeue();
            break;
        default:
            console.log("Opção inválida.");
            //entrada = 0;
    }
} while (entrada !== 0);

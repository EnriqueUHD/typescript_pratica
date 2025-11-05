import { Stack } from "./Stack";
import readlinesync from 'readline-sync'

const pilha = new Stack<string>();
let entrada: number;
do {
    console.log("**********************************************************");
    console.log("*                                                        *");
    console.log("*           1 - Adicionar Livro na pilha                 *");
    console.log("*           2 - Listar todos os Livros                   *");
    console.log("*           3 - Retirar Livro da pilha                   *");
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
            let nome: string = readlinesync.question("Digite o nome do livro: ")
            pilha.push(nome);
            console.log(`Livro: ${nome}, Adicionado!`);
            break;
        case 2:
            console.log("Pilha: \n");
            pilha.printStack();
            break;
        case 3:
            console.log("Um livro foi retirado da pilha!");
            pilha.pop();
            break;
        default:
            console.log("Opção inválida.");
            //entrada = 0;
    }
} while (entrada !== 0);

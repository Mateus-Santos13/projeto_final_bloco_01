//Menu cru, sem nenhuma função implementada, utilizar como default para trabalho
//E-commerce de eletrônicos
import leia from "readline-sync";//import readline sync para leitura de dados do teclado
import { colors } from './src/util/Colors';//importando o arquivo colors.ts
import { formatarMoeda } from "./src/util/Currency";
import { Input } from "./src/util/Input";

//Criar um objeto global da classe ProdutoController


//Criar um array contendo os tipos de Produto;
const tipoProdutos = ['Smartphone', 'Notebook'];

export function main() {

    let opcao: number;

    

    while (true) {
        //Aqui entra os console log do menu com as configurações de cor
        console.log(colors.bg.black, colors.fg.magenta);// Cor de fundo preta e cor da fonte magenta
        console.log("============================================================");
        console.log(`                         Free BIT                           `);
        console.log("============================================================");

        console.log(colors.fg.cyan);
        console.log("┌────────────────────── MENU ────────────────────────┐");
        console.log("│                                                    │");
        console.log("│  1 ─ Cadastrar Produto                             │");
        console.log("│  2 ─ Listar todos os Produtos                      │");
        console.log("│  3 ─ Buscar Produto pelo nome                      │");
        console.log("│  4 ─ Atualizar dados do Produto                    │");
        console.log("│  5 ─ Remover Produto do carrinho                   │");
        console.log("│  0 ─ Sair                                          │");
        console.log("│                                                    │");
        console.log("└────────────────────────────────────────────────────┘");

        console.log(colors.reset);// Reseta as cores
        console.log(colors.fg.yellow);// Cor da fonte amarela
        console.log("\n➜ Escolha uma opção desejada: ");// Escolha uma opção
        opcao = Input.questionInt("");// Leitura da opção do teclado

        if (opcao == 0) {
            console.log("\nFree BIT — inovação em cada bit!");
            sobre();
            process.exit(0);
        }
        switch (opcao) { //Opções do menu
            case 1:
                console.log("\nCadastrar Produto");
                
                keyPress();
                break;
            case 2:
                console.log("\nListar todos os Produtos");
                keyPress();
                break;
            case 3:
                console.log("\nBuscar Produto pelo nome");
                keyPress();
                break;
            case 4:
                console.log("\nAtualizar dados do Produto");
                keyPress();
                break;
            case 5:
                console.log("\nRemover Produto do carrinho");
                keyPress();
                break;
            default:
                console.log("Opção inválida!");
                keyPress();
                break;
        }
    }
}

//Função sobre, apenas mostra os dados da pessoa que desenvolveu (Eu);
export function sobre(): void {
    console.log("\n************************************");
    console.log("Free BIT — inovação em cada bit!");
    console.log("Projeto desenvolvido por: ");
    console.log("Mateus Santos");
    console.log("mateus.santos.eng.elt@gmail.com");
    console.log("https://github.com/Mateus-Santos13");
    console.log("************************************");
}

//Função de pausa entre as opções do menu;
function keyPress(): void {
    console.log("\nPressione ENTER para continuar...");
    Input.prompt();
}


//Essa função de testes DEVE estar no código final!!!
// function criarProdutosTeste(): void {

//     // Instâncias da Classe ProdutoCorrente
//     Produtos.cadastrar(new ProdutoCorrente(Produtos.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
//     Produtos.cadastrar(new ProdutoCorrente(Produtos.gerarNumero(), 4578, 'João da Silva', 1, 1000.00, 100.00));

//     // Instâncias da Classe ProdutoPoupança
//     Produtos.cadastrar(new ProdutoPoupanca(Produtos.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
//     Produtos.cadastrar(new ProdutoPoupanca(Produtos.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));
// }

main();
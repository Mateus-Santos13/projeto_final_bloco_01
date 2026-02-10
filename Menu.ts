//E-commerce de eletrônicos
//import leia from "readline-sync";//import readline sync para leitura de dados do teclado|Não está mais sendo usado aqui
import { ProdutoController } from "./src/controller/ProdutoController";
import { Smartphone } from "./src/model/Smartphone";
import { Notebook } from "./src/model/Notebook";
import { colors } from './src/util/Colors';//importando o arquivo colors.ts
import { formatarMoeda } from "./src/util/Currency";
import { Input } from "./src/util/Input";

//Criar um objeto global da classe ProdutoController
const produtoController = new ProdutoController();

//Criar um array contendo os tipos de Produto;
const tipoProduto = ['Smartphone', 'Notebook'];
const listaOrdenacao = ['Ordenar por Nome', 'Ordenar por Preco'];

export function main() {

    let opcao: number;
    criarProdutosTeste();


    while (true) {
        //Aqui entra os console log do menu com as configurações de cor
        console.log(colors.bg.black, colors.fg.magenta);// Cor de fundo preta e cor da fonte magenta
        console.log("============================================================");
        console.log(`                         Free BIT                           `);
        console.log("============================================================");

        console.log(colors.fg.cyan);
        console.log("┌────────────────────── MENU ────────────────────────┐");
        console.log("│                                                    │");
        console.log("│  1 ─ Listar todos os Produtos                      │");
        console.log("│  2 ─ Buscar Produto pelo ID                        │");
        console.log("│  3 ─ Cadastrar Produto                             │");
        console.log("│  4 ─ Atualizar Produto                             │");
        console.log("│  5 ─ Remover Produto                               │");
        console.log("│  6 ─ Listar produtos por tipo                      │");
        console.log("│  7 ─ Listar produtos ordenados por nome ou preço   │");
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
                console.log("\nListar todos os Produtos");
                listarTodos()
                keyPress();
                break;
            case 2://Pronto
                console.log("\nBuscar Produto pelo ID");
                buscarProdutoPorID();
                keyPress();
                break;
            case 3://Pronto
                console.log("\nCadastrar Produto");
                criarProduto();
                keyPress();
                break;
            case 4:
                console.log("\nAtualizar dados do Produto");
                atualizarProduto();
                keyPress();
                break;
            case 5:
                console.log("\nRemover Produto");
                deletarProdutoPorNumero();
                keyPress();
                break;
            case 6:
                console.log("\nListar produtos por tipo");
                listarPorTipo();
                keyPress();
                break;
            case 7:
                console.log("\nListar produtos por tipo");
                listarOrdenado();
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
    console.log(colors.fg.cyan, colors.bg.black, "\n************************************");
    console.log("Free BIT — inovação em cada bit!");
    console.log("Projeto desenvolvido por: ");
    console.log("Mateus Santos");
    console.log("mateus.santos.eng.elt@gmail.com");
    console.log("https://github.com/Mateus-Santos13");
    console.log("************************************", colors.reset);
}

//Função de pausa entre as opções do menu;
function keyPress(): void {
    console.log("\nPressione ENTER para continuar...");
    Input.prompt();
}

//Opção 1 -- Testado e funcionando
function listarTodos(): void {
    produtoController.listarTodas();
}

//Opção 2 -- Testado e funcionando
function buscarProdutoPorID(): void {
    console.log("Digite o ID do Produto: ");
    const id = Input.questionInt("");

    produtoController.procurarPorID(id);
}

//Opção 3 -- Testado e funcionando
function criarProduto() {
    //id: number, nome: string, tipo: number, preco: number
    console.log("Digite o nome do produto: ");

    const nome = Input.question("");
    //Extra - Verificar se o nome passado para a função está vazio.
    if (nome.trim() === "") {
        console.log(colors.fg.red, "Nome do produto não pode ser vazio!", colors.reset);
        return;
    }
    console.log("Selecione o tipo da Produto: ");

    console.log("1 - Smartphone");
    console.log("2 - Notebook");

    const tipo = Input.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

    console.log("Digite o preço do Produto: ");

    const preco = Input.questionFloat("");
    //Extra - Verificar se o preço é 0 ou negativo.
    if (preco <= 0) {
        console.log(colors.fg.red, "Preço inválido! O valor deve ser maior que zero.", colors.reset);
        return;
    }

    switch (tipo) {
        case 1:
            //Smartphone
            console.log("Digite a marca do smartphone: ");
            const marca = Input.question("");
            console.log("Digite a memória do smartphone: ");
            const memoria = Input.questionFloat("");
            if (memoria <= 0) {
                console.log(colors.fg.red, "Memória inválida! A memória deve ser maior que zero. Verifique os dados e tente novamente.", colors.reset);
                return;
            }
            //id: number, nome: string, tipo: number, preco: number, marca: string, memoria: number
            produtoController.cadastrar(new Smartphone(produtoController.gerarID(), nome, tipo, preco, marca, memoria));
            break;
        case 2:
            //Notebook
            console.log("Digite o processador do notebook: ");
            const processador = Input.question("");
            console.log("Digite o tamanho da tela do notebook: ");
            const tamanhoTela = Input.questionFloat("");
            if (tamanhoTela <= 0) {
                console.log(colors.fg.red, "Tamanho de tela inválido! O tamanho da tela deve ser maior que 0. Verifique os dados e tente novamente.", colors.reset);
                return;
            }
            //id: number, nome: string, tipo: number, preco: number, processador: string, tamanhoTela: number
            produtoController.cadastrar(new Notebook(produtoController.gerarID(), nome, tipo, preco, processador, tamanhoTela));
            break;
        default:
            console.log("Tipo de Produto inválido!");
            break;
    }
}
//Opção 4 -- Testado e funcionando
function atualizarProduto(): void {

    console.log("Digite o ID do Produto: ");
    const id = Input.questionInt("");

    const Produto = produtoController.buscarNoArray(id);

    if (Produto !== null) {
        let id: number = Produto.id;
        let nome: string = Produto.nome;
        const tipo: number = Produto.tipo;
        let preco: number = Produto.preco;

        // Atualização do Nome
        console.log(`\nNome do produto atual: ${nome}`);
        console.log("Digite o novo nome do produto: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        nome = Input.question("", { defaultInput: nome });

        // Atualização do preço
        console.log(`\nPreço atual: ${formatarMoeda(preco)}`);
        console.log("Digite o novo preço do produto: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        preco = Input.questionFloat("", { defaultInput: preco });

        // Atualização de cada atributo específico do tipo
        switch (tipo) {
            case 1: // Smartphone
                let marca: string = (Produto as Smartphone).marca;

                // Atualização da marca
                console.log(`\nMarca atual: ${marca}`);
                console.log("Digite a nova marca: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                marca = Input.question("", { defaultInput: marca });

                // Atualização da memória
                let memoria: number = (Produto as Smartphone).memoria;
                console.log(`\nMemória atual: ${memoria}`);
                console.log("Digite o valor da nova memória: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                memoria = Input.questionInt("", { defaultInput: memoria });

                //id: number, nome: string, tipo: number, preco: number, marca: string, memoria: number
                produtoController.atualizar(new Smartphone(id, nome, tipo, preco, marca, memoria));
                break;

            case 2: // Notebook

                let processador: string = (Produto as Notebook).processador;

                // Atualização do processador do notebook
                console.log(`\nProcessador atual: ${processador}`);
                console.log("Digite o novo processador do notebook: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                processador = Input.question("", { defaultInput: processador });

                // Atualização do tamanho da tela do notebook
                let tamanhoTela: number = (Produto as Notebook).tamanhoTela;
                console.log(`\nTamanho de tela atual: ${tamanhoTela}`);
                console.log("Digite o novo tamanho de tela do notebook: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                tamanhoTela = Input.questionFloat("", { defaultInput: tamanhoTela });

                //id: number, nome: string, tipo: number, preco: number, processador: string, tamanhoTela: number
                produtoController.atualizar(new Notebook(id, nome, tipo, preco, processador, tamanhoTela));
                break;
        }
    } else {
        console.log(colors.fg.red, `O Produto ID ${id} não foi encontrado!`, colors.reset);
    }
}

//Opção 5 -- Testado e funcionando
function deletarProdutoPorNumero(): void {
    console.log("Digite o número do ID do produto: ");
    const id = Input.questionInt("");
    const Produto = produtoController.procurarPorID(id);

    if (Produto !== null) {
        console.log("Tem certeza que deseja deletar esse Produto?");
        const confirmar = Input.keyInSelect(["Sim", "Nao"], "", { cancel: false }) + 1; //Confirmação de exclusão para segurança dos dados;

        if (confirmar === 2) {
            console.log("Operação cancelada!");
            return;
        }
        produtoController.deletar(id);
    }
}
//Opção 6 -- Extra - Nova função, listar produtos de um mesmo tipo
function listarPorTipo(){

    console.log("Selecione o tipo da Produto: ");

    console.log("1 - Smartphone");
    console.log("2 - Notebook");

    const tipo = Input.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

    const produtos = produtoController.listarProdutos();

    let encontrados = false;

    produtos.forEach(produto => {
        if(tipo === 1 && produto instanceof Smartphone){
            produto.visualizar();
            encontrados = true;
        }
        if(tipo === 2 && produto instanceof Notebook){
            produto.visualizar();
            encontrados = true;
        }
        if(!encontrados){
            console.log("Nenhum produto do tipo selecionado foi encontrado!");
        }
    })
    
}
//Opção 7 -- Extra - Nova função, listar produtos ordenados por nome ou preço
function listarOrdenado(){

    console.log("Escolha o critério de ordenação:");
    console.log("1 - Ordenar por Nome");
    console.log("2 - Ordenar por Preço");

    const opcao = Input.keyInSelect(listaOrdenacao, "", { cancel: false }) + 1;

    const produtos = produtoController.listarProdutos();

    if (produtos.length === 0) {
        console.log(colors.fg.yellow, "Nenhum produto cadastrado.", colors.reset);
        return;
    }

    switch (opcao) {
        case 1:
            produtos.sort((a, b) => a.nome.localeCompare(b.nome));
            console.log(colors.fg.green, "\nProdutos ordenados por nome:\n", colors.reset);
            break;

        case 2:
            produtos.sort((a, b) => a.preco - b.preco);
            console.log(colors.fg.green, "\nProdutos ordenados por preço:\n", colors.reset);
            break;

        default:
            console.log(colors.fg.red, "Opção inválida!", colors.reset);
            return;
    }

    produtos.forEach(produto => produto.visualizar());
    
}
function criarProdutosTeste(): void {

    // Instâncias da Classe Smartphone
    //id: number, nome: string, tipo: number, preco: number, marca: string, memoria: number
    produtoController.cadastrar(new Smartphone(produtoController.gerarID(), "Iphone 17", 1, 7000.00, 'Apple', 128));
    produtoController.cadastrar(new Smartphone(produtoController.gerarID(), "Galaxy S26", 1, 8500.00, 'Samsung', 512));

    // Instâncias da Classe Notebook
    //id: number, nome: string, tipo: number, preco: number, processador: string, tamanhoTela: string
    produtoController.cadastrar(new Notebook(produtoController.gerarID(), "Vivobook", 2, 12000.00, 'I7', 14.5));
    produtoController.cadastrar(new Notebook(produtoController.gerarID(), "Nitro V15", 2, 4000.00, 'Ryzen 5 5600u', 16.5));
}

main();